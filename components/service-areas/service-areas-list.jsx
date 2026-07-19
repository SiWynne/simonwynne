import React from "react";

function TownList({ towns }) {
  return (
    <ul className="columns-1 gap-x-8 sm:columns-2 lg:columns-3">
      {towns.map((town) => (
        <li
          key={town}
          className="mb-2 break-inside-avoid border-b border-scheme-border/20 pb-2"
        >
          {town}
        </li>
      ))}
    </ul>
  );
}

function Cluster({ cluster }) {
  return (
    <div className="mb-8 last:mb-0 md:mb-10">
      {cluster.name && (
        <h3 className="mb-4 text-h3 font-bold md:mb-5">{cluster.name}</h3>
      )}
      <TownList towns={cluster.towns} />
    </div>
  );
}

function Group({ group }) {
  return (
    <div className="mb-10 last:mb-0 md:mb-14">
      {group.name && (
        <h2 className="mb-6 text-h2 font-bold md:mb-8">{group.name}</h2>
      )}
      {group.clusters.map((cluster, i) => (
        <Cluster key={cluster.name ?? i} cluster={cluster} />
      ))}
    </div>
  );
}

export function ServiceAreasList({ regions = [] }) {
  return (
    <>
      {regions.map((region, ri) => (
        <section
          key={region.name ?? ri}
          className={`px-[5%] py-16 md:py-24 lg:py-28 ${region.scheme ?? "scheme-2"} badge-alt`}
        >
          <div className="container">
            {region.name && (
              <h2 className="mb-8 text-h2 font-bold md:mb-12 lg:mb-14">
                {region.name}
              </h2>
            )}
            {region.groups.map((group, i) => (
              <Group key={group.name ?? i} group={group} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
