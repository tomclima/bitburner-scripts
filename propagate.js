export async function main(ns) 
{
    let minimum = 1;
    let self = ns.getHostname(); 
    if(ns.args.length == 0) 
    {
        minimum = 0;
    }
    let neighbors = await ns.scan();

    
    for(let i = minimum; i < neighbors.length; i++)
    {
        let server = neighbors[i];
        let required_ports = ns.getServerNumPortsRequired(server);

        ns.tprint(server + ': ' + required_ports);
        ns.scp(["Scripts/hack.js", "Scripts/propagate.js", "Scripts/atk.js", "Scripts/get_root.js", "Scripts/hack_neighbors.js"], server);
        if(required_ports < 2)
        {
            await ns.exec("Scripts/get_root.js", self, 1, server);         
            ns.exec("Scripts/propagate.js", server, 1, ...[1]);
        }
        
    } 
}
