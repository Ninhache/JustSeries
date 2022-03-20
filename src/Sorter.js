export class Sorter {
    static sorting = { // use to know how to sort the page
        direction : "ASC",
        by :  "name"
    }

    static sort_array(data) {

        data = data.sort( (a, b) => {
            a = a[this.sorting.by];
            b = b[this.sorting.by];

            if(this.sorting.by === "rating") {
                a = a.average;
                b = b.average;
            }

            if(a < b) return  1;
            else if (a > b) return  -1;
            else return  0;
        });

        return this.sorting.direction==="ASC"?data:data.reverse();
    }

}