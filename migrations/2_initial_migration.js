const ERC20= artifacts.require("Migrations");

module.exports = async function (deployer,network,accounts) {
  await deployer.deploy(PIAICToken);
};
