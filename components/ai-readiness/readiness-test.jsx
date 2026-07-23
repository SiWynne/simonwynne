"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Highest points = most pain, so readiness is the inverse: a business that
// answers "it's all documented" scores 0 pain and 100% readiness.
function scoreAnswers({ questions, opportunities, answers }) {
  const totals = Object.fromEntries(opportunities.map((o) => [o.id, 0]));
  let pain = 0;
  let maxPain = 0;

  for (const question of questions) {
    const optionScores = Object.values(question.options).map((option) =>
      Object.values(option.scores || {}).reduce((sum, n) => sum + n, 0),
    );
    maxPain += Math.max(...optionScores, 0);

    const chosen = question.options[answers[question.id]];
    if (!chosen) continue;
    for (const [id, value] of Object.entries(chosen.scores || {})) {
      if (id in totals) totals[id] += value;
    }
    pain += Object.values(chosen.scores || {}).reduce((sum, n) => sum + n, 0);
  }

  const readiness = maxPain === 0 ? 100 : Math.round(100 - (pain / maxPain) * 100);

  // Rank by return ÷ effort, so a cheap fix for a real pain beats an expensive
  // fix for a slightly bigger one.
  const ranked = opportunities
    .map((opportunity) => ({
      ...opportunity,
      returnScore: totals[opportunity.id] || 0,
      ratio: (totals[opportunity.id] || 0) / Math.max(opportunity.effort || 1, 1),
    }))
    .filter((opportunity) => opportunity.returnScore > 0)
    .sort((a, b) => b.ratio - a.ratio)
    .slice(0, 3);

  return { readiness, ranked };
}

function bandFor(bands, readiness) {
  return (
    [...bands].sort((a, b) => b.min - a.min).find((b) => readiness >= b.min) ||
    bands[bands.length - 1]
  );
}

function EffortDots({ effort }) {
  return (
    <span aria-label={`Effort: ${effort} out of 5`} className="inline-flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          aria-hidden="true"
          className={`size-2 rounded-full ${n <= effort ? "bg-scheme-text" : "bg-scheme-text/25"}`}
        />
      ))}
    </span>
  );
}

export function ReadinessTest({
  questions = [],
  opportunities = [],
  readinessHeading,
  readinessBands = [],
  resultsHeading,
  resultsIntro,
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const headingRef = useRef(null);

  const total = questions.length;
  const result = useMemo(
    () => scoreAnswers({ questions, opportunities, answers }),
    [questions, opportunities, answers],
  );

  const focusHeading = () => {
    // Move focus to the new heading so keyboard and screen-reader users land
    // in the right place after the step changes.
    window.requestAnimationFrame(() => headingRef.current?.focus());
  };

  const choose = (questionId, index) => {
    setAnswers((prev) => ({ ...prev, [questionId]: index }));
    if (step < total - 1) {
      setStep((s) => s + 1);
    } else {
      setSubmitted(true);
    }
    focusHeading();
  };

  const back = () => {
    if (submitted) {
      setSubmitted(false);
      setStep(total - 1);
    } else {
      setStep((s) => Math.max(0, s - 1));
    }
    focusHeading();
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setSubmitted(false);
    focusHeading();
  };

  if (submitted) {
    const band = bandFor(readinessBands, result.readiness);

    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4 btn-light badge-alt">
        <div className="container">
          <div className="mx-auto w-full max-w-lg">
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="mb-5 text-h3 font-bold focus-visible:outline-none md:mb-6"
            >
              {readinessHeading}
            </h2>

            <div className="mb-12 border-2 border-scheme-border p-6 md:mb-16 md:p-8">
              <p className="text-h2 font-bold">{result.readiness}%</p>
              <p className="mb-3 text-h5 font-bold md:mb-4">{band?.label}</p>
              <p>{band?.summary}</p>
              {/* Visual bar is decorative; the number above carries the meaning. */}
              <div
                aria-hidden="true"
                className="mt-6 h-2 w-full bg-scheme-text/15"
              >
                <div
                  className="h-full bg-scheme-text"
                  style={{ width: `${result.readiness}%` }}
                />
              </div>
            </div>

            <h3 className="mb-3 text-h4 font-bold md:mb-4">{resultsHeading}</h3>
            {resultsIntro && <p className="mb-8 md:mb-10">{resultsIntro}</p>}

            <ol className="mb-12 grid grid-cols-1 gap-6 md:mb-16">
              {result.ranked.map((opportunity, index) => (
                <li
                  key={opportunity.id}
                  className="border-b border-scheme-border pb-6 last:border-b-0"
                >
                  <div className="mb-2 flex flex-wrap items-baseline gap-3">
                    <span className="text-h5 font-bold">{index + 1}</span>
                    <h4 className="text-h5 font-bold">{opportunity.name}</h4>
                  </div>
                  <p className="mb-3">{opportunity.summary}</p>
                  <p className="mb-4 text-small">{opportunity.detail}</p>
                  <p className="flex items-center gap-3 text-small">
                    Effort <EffortDots effort={opportunity.effort} />
                  </p>
                </li>
              ))}
              {result.ranked.length === 0 && (
                <li>
                  Nothing stood out as a pressing problem — which is its own
                  useful answer. Worth a conversation about where to push next.
                </li>
              )}
            </ol>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild>
                <Link href="/contact">Talk this through</Link>
              </Button>
              <Button variant="secondary" onClick={restart} type="button">
                Start again
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const question = questions[step];
  if (!question) return null;

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4 btn-light badge-alt">
      <div className="container">
        <div className="mx-auto w-full max-w-lg">
          <div className="mb-8 md:mb-10">
            <p className="mb-3 text-small">
              Question {step + 1} of {total}
            </p>
            <div
              className="h-1 w-full bg-scheme-text/15"
              role="progressbar"
              aria-valuenow={step + 1}
              aria-valuemin={1}
              aria-valuemax={total}
              aria-label="Progress through the test"
            >
              <div
                className="h-full bg-scheme-text transition-all duration-300"
                style={{ width: `${((step + 1) / total) * 100}%` }}
              />
            </div>
          </div>

          <h2
            ref={headingRef}
            tabIndex={-1}
            className="mb-5 text-h4 font-bold focus-visible:outline-none md:mb-6"
          >
            {question.question}
          </h2>
          {question.help && <p className="mb-6 text-small">{question.help}</p>}

          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option, index) => {
              const selected = answers[question.id] === index;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => choose(question.id, index)}
                  aria-pressed={selected}
                  className={`rounded-form border-2 border-neutral-darkest px-4 py-3 text-left transition-all duration-200 hover:bg-neutral-darkest-5 focus-visible:ring-2 focus-visible:ring-neutral-darkest focus-visible:ring-offset-2 focus-visible:outline-none ${
                    selected ? "bg-neutral-darkest-10" : "bg-transparent"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          {step > 0 && (
            <button
              type="button"
              onClick={back}
              className="mt-6 font-semibold underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-neutral-darkest focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              ← Previous question
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
