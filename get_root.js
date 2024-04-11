export async function main(ns) {
    let server = ns.args[0];

    ns.brutessh(server);
    // ns.ftpcrack(server);
    // ns.relaysmtp(server);    
    // ns.httpworm(server);
    // ns.sqlinject(server);
    
    ns.nuke(server);
}   