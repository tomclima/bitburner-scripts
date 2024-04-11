export async function main(ns) {
    let target = '';

    if(ns.args.lengh == 0)
    {
      target = await ns.getHostname();
    }
    else
    {
      target = ns.args[0];
    }
    const moneyThresh = await ns.getServerMaxMoney(target);
    const securityThresh = await ns.getServerMinSecurityLevel(target);
    while(true) {
        if (ns.getServerSecurityLevel(target) > securityThresh) {
            await ns.weaken(target);
        } 
        else if (ns.getServerMoneyAvailable(target) < moneyThresh) 
        {
            await ns.grow(target);
        } 
        else 
        {
            await ns.hack(target);
        }
    }
}