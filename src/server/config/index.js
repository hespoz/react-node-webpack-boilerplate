var config = {
    local: {
        mode: 'local',
        port: 3000,
        connection_string:'postgres://sysadmin:Reservaciones2015@dev.crkfd4ye8ckj.us-west-2.rds.amazonaws.com:5432/RESERVACIONES_DEV',
        host:'dev.crkfd4ye8ckj.us-west-2.rds.amazonaws.com',
        user:'sysadmin',
        pwd:'Reservaciones2015',
        portdb:5432,
        db:'RESERVACIONES_DEV',
        secret_key:'c0114248-057a-42f5-9681-d82388031ad1'
    },    
    staging: {
        mode: 'staging',
        port: 4000
    },
    production: {
        mode: 'production',
        port: 80
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}