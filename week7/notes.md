# week 7 Oct 19 2016

## agenda

- objects, constructor function
- more p5 drawing
- mid-term, there is no mid-term
- Math.random()

## creating objects with a constructor function

    function Song ( title, band, album ) {
        this.title = title
        this.band = band
        this.album = album
    }


    var dilatone = new Song ('dilatone', 'Plaid', 'The Digging Remedy')
