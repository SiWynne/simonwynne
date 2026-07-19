"use client";

import React from "react";

const regions = [
  {
    name: "Wales",
    scheme: "scheme-2",
    groups: [
      {
        name: "South Wales",
        clusters: [
          {
            name: "Cardiff",
            towns: [
              "Cardiff",
              "Penarth",
              "Dinas Powys",
              "Barry",
              "Sully",
              "Cowbridge",
              "Llantrisant",
              "Pontyclun / Talbot Green",
              "Pontypridd",
              "Church Village / Tonteg",
              "Taffs Well",
              "Radyr / Pentyrch",
              "Caerphilly",
              "Ystrad Mynach",
              "Llantwit Major",
              "Bridgend",
            ],
          },
          {
            name: "Newport",
            towns: [
              "Newport",
              "Caerleon",
              "Rogerstone / Bassaleg",
              "Risca",
              "Cwmbran",
              "Marshfield",
              "Magor",
              "Caldicot",
              "Chepstow",
              "Pontypool",
              "Usk",
            ],
          },
          {
            name: "Swansea",
            towns: [
              "Swansea",
              "Mumbles",
              "Killay / Bishopston",
              "Gowerton",
              "Gorseinon",
              "Loughor",
              "Pontarddulais",
              "Llanelli",
              "Neath",
              "Briton Ferry / Skewen",
              "Port Talbot / Baglan",
              "Clydach",
              "Pontardawe",
              "Burry Port",
              "Ammanford",
            ],
          },
        ],
      },
      {
        name: "Mid Wales",
        clusters: [
          {
            name: "Powys",
            towns: [
              "Llandrindod Wells",
              "Builth Wells / Llanelwedd",
              "Rhayader",
              "Newbridge-on-Wye",
              "Crossgates / Penybont",
              "Llanwrtyd Wells",
              "Llanidloes",
              "Newtown",
              "Montgomery",
              "Welshpool",
              "Machynlleth",
              "Hereford",
              "Knighton",
              "Presteigne",
              "Kington",
            ],
          },
          {
            name: "Brecon Beacons",
            towns: [
              "Hay-on-Wye",
              "Talgarth",
              "Brecon",
              "Crickhowell",
              "Abergavenny",
              "Merthyr Tydfil",
              "Llandovery",
              "Llandeilo",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Kent",
    scheme: "scheme-1",
    groups: [
      {
        clusters: [
          {
            towns: [
              "Meopham",
              "Gravesend / Northfleet",
              "Sole Street & Cobham",
              "Longfield, Hartley & New Ash Green",
              "West Kingsdown / Vigo",
              "Higham, Cliffe & the Hoo peninsula",
              "Strood",
              "Rochester",
              "Chatham",
              "Gillingham",
              "Rainham",
              "Cuxton & Halling",
              "Snodland",
              "Aylesford / Ditton",
              "Larkfield",
              "West Malling & Kings Hill",
              "Wrotham & Borough Green",
              "Kemsing & Otford",
              "Sevenoaks",
              "Swanley",
              "Dartford",
              "Greenhithe / Swanscombe / Ebbsfleet",
              "Bean",
              "Maidstone",
              "Sittingbourne",
              "Bexleyheath",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "London",
    scheme: "scheme-2",
    groups: [
      {
        name: "Central London",
        clusters: [
          {
            towns: [
              "City of London",
              "Westminster & the West End",
              "Mayfair, Soho & Covent Garden",
              "Marylebone",
              "Holborn & Clerkenwell",
              "Southwark & the South Bank",
              "Camden & Islington",
              "Shoreditch (City fringe)",
              "Kensington & Chelsea",
            ],
          },
        ],
      },
      {
        name: "South East London",
        clusters: [
          {
            towns: [
              "Greenwich",
              "Woolwich",
              "Blackheath",
              "Lewisham",
              "Deptford & New Cross",
              "Dulwich",
              "Peckham",
              "Catford",
              "Eltham",
              "Bexley / Bexleyheath",
              "Sidcup",
              "Bromley",
              "Beckenham",
              "Orpington",
            ],
          },
        ],
      },
    ],
  },
];

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
        <h4 className="mb-4 text-h4 font-bold md:mb-5">{cluster.name}</h4>
      )}
      <TownList towns={cluster.towns} />
    </div>
  );
}

function Group({ group }) {
  return (
    <div className="mb-10 last:mb-0 md:mb-14">
      {group.name && (
        <h3 className="mb-6 text-h3 font-bold md:mb-8">{group.name}</h3>
      )}
      {group.clusters.map((cluster, i) => (
        <Cluster key={cluster.name ?? i} cluster={cluster} />
      ))}
    </div>
  );
}

export function ServiceAreasList() {
  return (
    <>
      {regions.map((region) => (
        <section
          key={region.name}
          className={`px-[5%] py-16 md:py-24 lg:py-28 ${region.scheme} badge-alt`}
        >
          <div className="container">
            <h2 className="mb-8 text-h2 font-bold md:mb-12 lg:mb-14">
              {region.name}
            </h2>
            {region.groups.map((group, i) => (
              <Group key={group.name ?? i} group={group} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
