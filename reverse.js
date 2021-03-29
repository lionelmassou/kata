// const reverseSeq = n => {

    function reverseSeq(start) {
        var array = [];
        
        for (var i = 0; i < start; i++) {
            array.push(start - i);
        }
        return array;
    }
    
    console.log(reverseSeq(5));
    