var app = new Vue({
    el:'#main',
    data:{
        monsterHealth:100,
        playerHealth:100
    },
    methods:{
        attackMonster() {
            const monsterDamage = getAttackDamage(5,19);
            this.monsterHealth -= monsterDamage;
            this.attackPlayer();
        },
        attackPlayer() {
            const playerDamage = getAttackDamage(5,18);
            this.playerHealth -= playerDamage;
        }
    },
    computed:{
        monsterHealthStyle() {
            return {width: this.monsterHealth + '%'};
        },
        playerHealthStyle() {
            return {width: this.playerHealth + '%'};
        }
    }
})

function getAttackDamage(min, max) {
    return  Math.floor(Math.random() * (18-5)) + 5;
}

