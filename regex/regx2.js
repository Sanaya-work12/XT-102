class metaCharacters{
    static reTest(re,str){
        if(re.test(str)){
            console.log(`${str} matched ${re.source}`);
        }else{
            console.log(`${str} does not match ${re.source}`);
        }
    }
}

//let re=/^s/i; //starts with s
//let re=/nitro$/i; //ends with
//let re=/n.tro$/i; //finde only one element
//let re = /n*tro$/i; // any character
//let re = /sapi?en?t /i; // optional characters
//let re = /sa[pi]en?t/i; //set... matches either of the charcters
//let re = /[^sa]pien?t/i; // match anything except s or a
//let re = /[A-Z a-z]{2,8}pien?t/; //Quantifiers on range
//let re = /^[A-Z a-z]{3,6}t/i; //exactly 3 to 6 characters from starting
//let re = /Hel{2,4}o/i; // l can be 2 to 4 in number
//metaCharacters.reTest(re, 'Hellllo');
//let re = /^([0-9]x){3}$/; // number of reoccurances
//metaCharacters.reTest(re, '3x3x3x');
//Assertions
// let re = /x(?=y)/; //match x if only followed by y ..... /x(?!y)/ match x if not followed by y
// metaCharacters.reTest(re, 'xyz');
//shorthand characters
//let re = /\w/; // word character.... + means one or more and * means more ... alphanumeric and underscore only
//let re = /\W/; //non-word character .... ^,#,&,space, etc.
//let re = /\d/; // at least one digit is must
//let re = /\D/; // at least one non-digit is present
//let re = /\s/; // at least one white space
//let re = /\S/; // no white spaces
//let re = /^\w\Sap\b\s*ient$/i; // word boundry 
//metaCharacters.reTest(re, '_sap ient');
// metaCharacters.reTest(re, '88');
// metaCharacters.reTest(re, 'Sapient 123');
// metaCharacters.reTest(re, '__t');
// metaCharacters.reTest(re, '234234');
// metaCharacters.reTest(re, '          ');

let email = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z_\-]+).([a-zA-z]{2,5})$/;
metaCharacters.reTest(email,'abx@gmail');

let phone = /^(\W?\d{2,3}[-. ])?(\d{3,4}[-. ])?\d{7,8}$/;
metaCharacters.reTest(phone,'+91-0172-2731828');

let url = /^(http)s?(:)[(www)?(\/\/)?].([a-zA-Z0-9\-\.]){1,}.([a-zA-z]{2,5})$/;
metaCharacters.reTest(url,'https://google.co.in');