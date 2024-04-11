export async function main(ns) 
{
    let minimum = 1;
    if(ns.getHostname() == "home"){minimum = 0};
    ns.tprint(ns.getHostname());
    let neighbors = await ns.scan();

    for(let i = minimum; i < neighbors.length; i++)
    {
        let server = neighbors[i];
        
        let usable_hack_ram = ns.getServerMaxRam(server);
        let max_hack_threads = Math.floor(usable_hack_ram/ns.getScriptRam("Scripts/hack.js"));
        if(max_hack_threads > 0)
        {
            ns.exec("Scripts/hack.js", server, max_hack_threads);
        }
    }
}