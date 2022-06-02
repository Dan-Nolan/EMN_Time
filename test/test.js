const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Exploit", function () {
  it("should do stuff", async function () {
    const Exploit = await ethers.getContractFactory("Exploit");
    const exploit = await Exploit.deploy();
    await exploit.deployed();

    await exploit.run();
  });
});
