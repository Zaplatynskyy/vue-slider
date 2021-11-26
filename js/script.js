const app = new Vue({
    el : '#root',
    data : {
        countries : [
            {
                name : 'Svezia',
                info : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image : 'img/01.jpg'
            },
            {
                name : 'Svizzera',
                info : 'Lorem ipsum',
                image : 'img/02.jpg'
            },
            {
                name : 'Gran Bretagna',
                info : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                image : 'img/03.jpg'
            },
            {
                name : 'Germania',
                info : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                image : 'img/04.jpg'
            },
            {
                name : 'Paradise',
                info : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                image : 'img/05.jpg'
            },
        ],

        counter : 0
    },
    methods : {
        arrowUp : function() {
            if(this.counter == 0) {
                this.counter = this.countries.length - 1;
            } else {
                this.counter--;
            }
            
        },
        arrowDown : function() {
            if(this.counter == this.countries.length - 1) {
                this.counter = 0;
            } else {
                this.counter++;
            }
        }
    }
})



// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente

// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente

// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce