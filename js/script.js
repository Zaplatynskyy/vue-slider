const app = new Vue({
    el : '#root',
    data : {
        // array di nazioni da stampare
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
        // contatore che indica la posizione in array della nazione in evidenza
        counter : 0,
        autoPlay : ''
    },
    methods : {
        // funzione che permette di far scorrere le immagini verso l'alto
        arrowUp : function() {
            if(this.counter == 0) {
                this.counter = this.countries.length - 1;
            } else {
                this.counter--;
            }
            
        },
        // funzione che permette di far scorrere le immagini verso il basso
        arrowDown : function() {
            if(this.counter == this.countries.length - 1) {
                this.counter = 0;
            } else {
                this.counter++;
            }

        },
        // funzione per autoscorrimento immagini ogni 3 secondi
        autoDown : function() {
            const app = this;
            this.autoPlay = setInterval(app.arrowDown, 3000);
        },
        // funzione blocco autoscorrimento immagini
        blockAutoplay : function() {
            clearInterval(this.autoPlay);
        },
        // funzione che cambia immagine al click sull'immagine piccola di riferimento
        selectThis : function(i) {
            this.counter = i;
        }
    },

    created: function() {
        this.autoDown();
    }
})



// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente

// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente

// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce