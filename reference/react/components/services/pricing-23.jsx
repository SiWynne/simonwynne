"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Check } from "relume-icons";

export function Pricing23() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Investment</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">Simple pricing</h1>
          <p className="text-medium">Pick the level that fits your needs</p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-scheme-border bg-scheme-foreground p-1 group-data-[slot=card-flat]:border-transparent">
            <TabsTrigger
              value="monthly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
            >
              Yearly
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="mb-6 text-center md:mb-8">
                  <h2 className="mb-2 text-h6 font-bold">Foundation work</h2>
                  <h3 className="mb-2 text-h1 font-bold">$500</h3>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Initial strategy session</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Written recommendations</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>One month support</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Start here" className="w-full">
                  Start here
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="mb-6 text-center md:mb-8">
                  <h2 className="mb-2 text-h6 font-bold">Core engagement</h2>
                  <h3 className="mb-2 text-h1 font-bold">$1200</h3>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Comprehensive planning</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Quarterly check-ins</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Implementation guidance</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Direct access to feedback</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Begin now" className="w-full">
                  Begin now
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="mb-6 text-center md:mb-8">
                  <h2 className="mb-2 text-h6 font-bold">Full partnership</h2>
                  <h3 className="mb-2 text-h1 font-bold">$2500</h3>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Ongoing strategic work</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Monthly collaboration</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Team development included</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Priority communication</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Dedicated support</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Let's work" className="w-full">
                  Let's work
                </Button>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="mb-6 text-center md:mb-8">
                  <h2 className="mb-2 text-h6 font-bold">Foundation work</h2>
                  <h3 className="mb-2 text-h1 font-bold">$5000</h3>
                  <p className="mt-2 font-medium">Save 17%</p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Initial strategy session</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Written recommendations</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Year-long support</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Start here" className="w-full">
                  Start here
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="mb-6 text-center md:mb-8">
                  <h2 className="mb-2 text-h6 font-bold">Core engagement</h2>
                  <h3 className="mb-2 text-h1 font-bold">$11500</h3>
                  <p className="mt-2 font-medium">Save 20%</p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Comprehensive planning</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Quarterly check-ins</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Implementation guidance</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Direct access to feedback</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Begin now" className="w-full">
                  Begin now
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="mb-6 text-center md:mb-8">
                  <h2 className="mb-2 text-h6 font-bold">Full partnership</h2>
                  <h3 className="mb-2 text-h1 font-bold">$24000</h3>
                  <p className="mt-2 font-medium">Save 20%</p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Ongoing strategic work</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Monthly collaboration</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Team development included</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Priority communication</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Dedicated support</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Let's work" className="w-full">
                  Let's work
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
