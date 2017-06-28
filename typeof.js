alert( typeof 1 );         // 'number'
alert( typeof true );      // 'boolean'
alert( typeof "Текст" );   // 'string'
alert( typeof undefined ); // 'undefined'
alert( typeof null );      // 'object' (ошибка в языке)
alert( typeof alert );     // 'function'
…Но все объекты, включая массивы и даты для typeof – на одно лицо, они имеют один тип 'object':

 alert( typeof {} ); // 'object'
alert( typeof [] ); // 'object'
alert( typeof new Date ); // 'object'