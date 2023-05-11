dataSetVersion = "2023-05-10"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Class Type",
    key: "class",
    tooltip: "Check this to restrict to certain classes.",
    checked: false,
    sub: [
      { name: "Bomber", key: "Bomber" },
      { name: "Attacker", key: "Attacker" },
      { name: "Shooter", key: "Shooter" },
      { name: "Blocker", key: "Blocker" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Shiro",
    img: "BIirmw4.png",
    opts: {
      class: ["Bomber"],
    }
  },
  {
    name: "Oren",
    img: "AzKjrtZ.png",
    opts: {
      class: ["Attacker"],
    }
  },
  {
    name: "Emera",
    img: "tlvTnOw.png",
    opts: {
      class: ["Shooter"],
    }
  },
  {
    name: "Momoko",
    img: "RgN86Xu.png",
    opts: {
      class: ["Blocker"],
    }
  },
  {
    name: "Kuro",
    img: "XBmyWil.png",
    opts: {
      class: ["Bomber"],
    }
  },
  {
    name: "Urushi",
    img: "ED45ANr.png",
    opts: {
      class: ["Attacker"],
    }
  },
  {
    name: "Paparu",
    img: "X6tRKqH.png",
    opts: {
      class: ["Shooter"],
    }
  },
  {
    name: "Aqua",
    img: "M70olHJ.png",
    opts: {
      class: ["Blocker"],
    }
  },
  {
    name: "Shiori",
    img: "HE43JOC.png",
    opts: {
      class: ["Bomber"],
    }
  },
  {
    name: "Sepia",
    img: "khAJfks.png",
    opts: {
      class: ["Attacker"],
    }
  },
  {
    name: "Tsugaru",
    img: "gBItjju.png",
    opts: {
      class: ["Shooter"],
    }
  },
  {
    name: "Grim Aloe",
    img: "HDq7MFe.png",
    opts: {
      class: ["Blocker"],
    }
  },
  {
    name: "Gray",
    img: "ReEpt9N.png",
    opts: {
      class: ["Bomber"],
    }
  },
  {
    name: "Asagi",
    img: "tXQkdkX.png",
    opts: {
      class: ["Attacker"],
    }
  },
  {
    name: "Pastel",
    img: "ignfhd6.png",
    opts: {
      class: ["Shooter"],
    }
  },
  {
    name: "Pine",
    img: "Ykzk9As.png",
    opts: {
      class: ["Blocker"],
    }
  },
  {
    name: "Shiron",
    img: "tncJdBb.png",
    opts: {
      class: ["Bomber"],
    }
  },
  {
    name: "Tekka",
    img: "KIeGC3i.png",
    opts: {
      class: ["Attacker"],
    }
  },
  {
    name: "Olive",
    img: "PlMkQpW.png",
    opts: {
      class: ["Shooter"],
    }
  },
  {
    name: "Prune",
    img: "23mbRYD.png",
    opts: {
      class: ["Blocker"],
    }
  },
];
