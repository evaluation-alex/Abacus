var isNode = 'undefined' !== typeof global && '[object global]' === {}.toString.call(global);
var Abacus = isNode ? require('../src/js/Abacus.js') : window.Abacus, echo = console.log;

function print_all( o, prev, f )
{
    if ( -1 === prev )
        while ( o.hasNext(-1) ) echo( f ? f(o.next(-1)) : o.next(-1) );
    else
        //while ( o.hasNext() ) echo( o.next() );
        // iterator/iterable are supported
        for(let item of o) echo( f ? f(item) : item );
}

// Note: Due to the large number of combinatorial samples,
// Abacus combinatorics use an Iterator pattern to succesively and consistently
// generate all combinatorial objects without storing all of them in memory at once
var o;

echo('Abacus.Permutations (VERSION = '+Abacus.VERSION+')');
echo('---');

// Multiset Permutations
echo('o = Abacus.Permutation(6,{type:"multiset",multiplicity:[1,2,2,1]})');
o = Abacus.Permutation(6,{type:"multiset",multiplicity:[1,2,2,1]});

echo('o.total()'); 
echo(o.total());

echo('o.next()'); 
echo(o.next());

echo('o.hasNext()');
echo(o.hasNext());
echo('o.next()');
echo(o.next());

echo('default order is "lex", lexicographic-order');
echo('o.rewind()');
print_all( o.rewind()/*, 1, function(item){
    var index = o.index()-(o.hasNext() ?1:0),
        rank = Abacus.Permutation.rank(item, o.n, o.$);
    return [
    item.slice(),
    index,
    rank,
    Abacus.Permutation.unrank(rank, o.n, o.$)
    ];
}*/ );

echo('backwards');
echo('o.rewind(-1)');
print_all( o.rewind(-1), -1 );

echo('o.order("lex,reflected")');
print_all( o.order("lex,reflected") );

echo('o.order("lex,reversed")');
print_all( o.order("lex,reversed") );

echo('o.order("colex")');
print_all( o.order("colex") );

echo('o.order("colex,reflected")');
print_all( o.order("colex,reflected") );

echo('o.order("colex,reversed")');
print_all( o.order("colex,reversed") );

echo('o.order("random")');
print_all( o.order("random") );

echo('o.random()');
echo(o.random());

// dispose
echo('o.dispose()');
o.dispose();


