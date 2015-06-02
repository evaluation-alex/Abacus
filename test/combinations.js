var isNode = 'undefined' !== typeof global && '[object global]' === {}.toString.call(global);
var Abacus = isNode ? require('../src/js/Abacus.js') : window.Abacus, echo = console.log;

// Note: Due to the large number of combinatorial samples,
// Abacus combinatorics use an Iterator pattern to succesively and consistently
// generate all combinatorial objects without storing all of them in memory at once
var p, c, comb;
var arr = ["a","b","c"];

echo('Note: Due to the large number of combinatorial samples,');
echo('Abacus combinatorics use an Iterator pattern to succesively and consistently');
echo('generate all combinatorial objects without storing all of them in memory at once');
echo("\n\n");

echo("\n\n");
echo('Abacus.Combinations');
echo('---');

// Combinations
echo('comb = Abacus.Combination(6, 3)');
comb = Abacus.Combination(6, 3);

echo('comb.total()');
echo(comb.total());
//
//output 3 = num of (distinct) combinations 3!/2!x1!:
//3


echo('comb.next()');
echo(comb.next());
//
//output:
//[0,1]


echo('comb.hasNext()');
echo(comb.hasNext());
echo('comb.next()');
echo(comb.next());
//
//output:
//true
//[0,2]

/*echo('comb.all()');
echo(comb.all());*/
//
//output (in index-lexicographic order):
//[
//[0,1]
//[0,2]
//[1,2]
//]
comb.rewind();
while (comb.hasNext()) 
    echo([
    c=comb.next(), 
    p=Abacus.Combination.index(c,6,3),
    p=Abacus.Combination.item(p,6,3)
    ]);

echo('comb.random()');
echo(comb.random());
//
//sample output:
//[0,2]


// dispose
echo('comb.dispose()');
comb.dispose();

// choose from array, using a combination
echo('choose from array, using a combination');
echo('arr = ["a","b","c"]');
echo('Abacus.Combination.choose(arr, [1,2])');
echo(Abacus.Combination.choose(arr, [1,2]));
echo('Abacus.Combination.complement([0,1,3], 6, 3)');
echo(Abacus.Combination.complement([0,1,3], 6, 3));
//
//sample  output:
//["b","c"]
//[1,2]
//[0]
