import { useState, useEffect } from "react";
function dataHandler(dataArr) {
  const testServer = {
    id: 100105299,
    status: getRandomStatus(),
    name: "test server 1",
    hostname: "test server 1",
    type: "http",
    lastresponsetime: 100 + Math.floor(Math.random() * 1000),
    resolution: 1,
    created: 1633683779,
    lasterrortime: 1649827074,
    lastdownstart: 1649827042,
    lastdownend: 1649827342,
    ipv6: false,
  };

  const downTestServer = {
    id: 10010529123,
    status: "down",
    name: "test server 2",
    hostname: "test server 2",
    type: "http",
    lastresponsetime: 100 + Math.floor(Math.random() * 1000),
    resolution: 1,
    created: 1633683779,
    lasterrortime: 1649827074,
    lastdownstart: 1649827042,
    lastdownend: 1649327342,
    ipv6: false,
  };

  const testServer3 = {
    id: 10010529124,
    status: getRandomStatus(),
    name: "test server 3",
    hostname: "test server 3",
    type: "http",
    lastresponsetime: 100 + Math.floor(Math.random() * 1000),
    resolution: 1,
    created: 1633683779,
    lasterrortime: 1649827074,
    lastdownstart: 1649827042,
    lastdownend: 1649327342,
    ipv6: false,
  };

  const testServer4 = {
    id: 10010529125,
    status: "up",
    name: "test server 4",
    hostname: "test server 4",
    type: "http",
    lastresponsetime: 100 + Math.floor(Math.random() * 1000),
    resolution: 1,
    created: 1633683779,
    lasterrortime: 1649827074,
    lastdownstart: 1649827042,
    lastdownend: 1649327342,
    ipv6: false,
  };

  const testServer5 = {
    id: 10010529126,
    status: "paused",
    name: "test server 5",
    hostname: "test server 5",
    type: "http",
    lastresponsetime: 100 + Math.floor(Math.random() * 1000),
    resolution: 1,
    created: 1633683779,
    lasterrortime: 1649827074,
    lastdownstart: 1649827042,
    lastdownend: 1649327342,
    ipv6: false,
  };

  const testServer6 = {
    id: 10010529128,
    status: "up",
    name: "test server 6",
    hostname: "test server 6",
    type: "http",
    lastresponsetime: 100 + Math.floor(Math.random() * 1000),
    resolution: 1,
    created: 1633683779,
    lasterrortime: 1649827074,
    lastdownstart: 1649827042,
    lastdownend: 1649327342,
    ipv6: false,
  };

  const testServer7 = {
    id: 10010529138,
    status: "up",
    name: "test server 7",
    hostname: "test server 7",
    type: "http",
    lastresponsetime: 100 + Math.floor(Math.random() * 1000),
    resolution: 1,
    created: 1633683779,
    lasterrortime: 1649827074,
    lastdownstart: 1649827042,
    lastdownend: 1649327342,
    ipv6: false,
  };

  const testServer8 = {
    id: 10010529138,
    status: "up",
    name: "test server 8",
    hostname: "test server 8",
    type: "http",
    lastresponsetime: 100 + Math.floor(Math.random() * 1000),
    resolution: 1,
    created: 1633683779,
    lasterrortime: 1649827074,
    lastdownstart: 1649827042,
    lastdownend: 1649327342,
    ipv6: false,
  };

  const testServer9 = {
    id: 10010529129,
    status: "paused",
    name: "test server 9",
    hostname: "test server 9",
    type: "http",
    lastresponsetime: 100 + Math.floor(Math.random() * 1000),
    resolution: 1,
    created: 1633683779,
    lasterrortime: 1649827074,
    lastdownstart: 1649827042,
    lastdownend: 1649327342,
    ipv6: false,
  };
  let serverData = [...dataArr];
  serverData.push(
    downTestServer,
    testServer,
    testServer3,
    testServer4,
    testServer5,
    testServer6,
    testServer7,
    testServer8,
    testServer9
  );

  function getRandomStatus() {
    let i = Math.floor(Math.random() * 2);

    if (i === 0) {
      return "down";
    }
    if (i === 1) {
      return "up";
    }
    if (i === 2) {
      return "paused";
    } else {
      return "unknown";
    }
  }

  function sortServers(serverArr) {
    let serverList = [...serverArr];
    let sortedServers = serverList.sort(
      (a, b) => b["lastresponsetime"] - a["lastresponsetime"]
    );

    let pausedServers = sortedServers.filter((server) =>
      server.status.includes("paused")
    );

    let upServers = sortedServers.filter((server) =>
      server.status.includes("up")
    );
    let downServers = sortedServers.filter((server) =>
      server.status.includes("down")
    );
    sortedServers = downServers.concat(pausedServers).concat(upServers);

    return sortedServers;
  }

  let sorted = sortServers(serverData);

  return sorted;
}

export default dataHandler;
