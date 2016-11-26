.pragma library
Qt.include("./lodash.js")
var templateSettings = _.templateSettings;
var after = _.after;
var ary = _.ary;
var assign = _.assign;
var assignIn = _.assignIn;
var assignInWith = _.assignInWith;
var assignWith = _.assignWith;
var at = _.at;
var before = _.before;
var bindAll = _.bindAll;
var bindKey = _.bindKey;
var castArray = _.castArray;
var chain = _.chain;
var chunk = _.chunk;
var compact = _.compact;
var concat = _.concat;
var cond = _.cond;
var conforms = _.conforms;
var constant = _.constant;
var countBy = _.countBy;
var create = _.create;
var curry = _.curry;
var curryRight = _.curryRight;
var debounce = _.debounce;
var defaults = _.defaults;
var defaultsDeep = _.defaultsDeep;
var defer = _.defer;
var delay = _.delay;
var difference = _.difference;
var differenceBy = _.differenceBy;
var differenceWith = _.differenceWith;
var drop = _.drop;
var dropRight = _.dropRight;
var dropRightWhile = _.dropRightWhile;
var dropWhile = _.dropWhile;
var fill = _.fill;
var filter = _.filter;
var flatMap = _.flatMap;
var flatMapDeep = _.flatMapDeep;
var flatMapDepth = _.flatMapDepth;
var flatten = _.flatten;
var flattenDeep = _.flattenDeep;
var flattenDepth = _.flattenDepth;
var flip = _.flip;
var flow = _.flow;
var flowRight = _.flowRight;
var fromPairs = _.fromPairs;
var functions = _.functions;
var functionsIn = _.functionsIn;
var groupBy = _.groupBy;
var initial = _.initial;
var intersection = _.intersection;
var intersectionBy = _.intersectionBy;
var intersectionWith = _.intersectionWith;
var invert = _.invert;
var invertBy = _.invertBy;
var invokeMap = _.invokeMap;
var iteratee = _.iteratee;
var keyBy = _.keyBy;
var keys = _.keys;
var keysIn = _.keysIn;
var map = _.map;
var mapKeys = _.mapKeys;
var mapValues = _.mapValues;
var matches = _.matches;
var matchesProperty = _.matchesProperty;
var memoize = _.memoize;
var merge = _.merge;
var mergeWith = _.mergeWith;
var method = _.method;
var methodOf = _.methodOf;
var mixin = _.mixin;
var negate = _.negate;
var nthArg = _.nthArg;
var omit = _.omit;
var omitBy = _.omitBy;
var once = _.once;
var orderBy = _.orderBy;
var over = _.over;
var overArgs = _.overArgs;
var overEvery = _.overEvery;
var overSome = _.overSome;
var partial = _.partial;
var partialRight = _.partialRight;
var partition = _.partition;
var pick = _.pick;
var pickBy = _.pickBy;
var property = _.property;
var propertyOf = _.propertyOf;
var pull = _.pull;
var pullAll = _.pullAll;
var pullAllBy = _.pullAllBy;
var pullAllWith = _.pullAllWith;
var pullAt = _.pullAt;
var range = _.range;
var rangeRight = _.rangeRight;
var rearg = _.rearg;
var reject = _.reject;
var remove = _.remove;
var rest = _.rest;
var reverse = _.reverse;
var sampleSize = _.sampleSize;
var set = _.set;
var setWith = _.setWith;
var shuffle = _.shuffle;
var slice = _.slice;
var sortBy = _.sortBy;
var sortedUniq = _.sortedUniq;
var sortedUniqBy = _.sortedUniqBy;
var split = _.split;
var spread = _.spread;
var tail = _.tail;
var take = _.take;
var takeRight = _.takeRight;
var takeRightWhile = _.takeRightWhile;
var takeWhile = _.takeWhile;
var tap = _.tap;
var throttle = _.throttle;
var thru = _.thru;
var toArray = _.toArray;
var toPairs = _.toPairs;
var toPairsIn = _.toPairsIn;
var toPath = _.toPath;
var toPlainObject = _.toPlainObject;
var transform = _.transform;
var unary = _.unary;
var union = _.union;
var unionBy = _.unionBy;
var unionWith = _.unionWith;
var uniq = _.uniq;
var uniqBy = _.uniqBy;
var uniqWith = _.uniqWith;
var unset = _.unset;
var unzip = _.unzip;
var unzipWith = _.unzipWith;
var update = _.update;
var updateWith = _.updateWith;
var values = _.values;
var valuesIn = _.valuesIn;
var without = _.without;
var words = _.words;
var wrap = _.wrap;
var xor = _.xor;
var xorBy = _.xorBy;
var xorWith = _.xorWith;
var zip = _.zip;
var zipObject = _.zipObject;
var zipObjectDeep = _.zipObjectDeep;
var zipWith = _.zipWith;
var entries = _.entries;
var entriesIn = _.entriesIn;
var extend = _.extend;
var extendWith = _.extendWith;
var add = _.add;
var attempt = _.attempt;
var camelCase = _.camelCase;
var capitalize = _.capitalize;
var ceil = _.ceil;
var clamp = _.clamp;
var clone = _.clone;
var cloneDeep = _.cloneDeep;
var cloneDeepWith = _.cloneDeepWith;
var cloneWith = _.cloneWith;
var conformsTo = _.conformsTo;
var deburr = _.deburr;
var defaultTo = _.defaultTo;
var divide = _.divide;
var endsWith = _.endsWith;
var eq = _.eq;
var escape = _.escape;
var escapeRegExp = _.escapeRegExp;
var every = _.every;
var find = _.find;
var findIndex = _.findIndex;
var findKey = _.findKey;
var findLast = _.findLast;
var findLastIndex = _.findLastIndex;
var findLastKey = _.findLastKey;
var floor = _.floor;
var forEach = _.forEach;
var forEachRight = _.forEachRight;
var forIn = _.forIn;
var forInRight = _.forInRight;
var forOwn = _.forOwn;
var forOwnRight = _.forOwnRight;
var get = _.get;
var gt = _.gt;
var gte = _.gte;
var has = _.has;
var hasIn = _.hasIn;
var head = _.head;
var identity = _.identity;
var includes = _.includes;
var indexOf = _.indexOf;
var inRange = _.inRange;
var invoke = _.invoke;
var isArguments = _.isArguments;
var isArray = _.isArray;
var isArrayBuffer = _.isArrayBuffer;
var isArrayLike = _.isArrayLike;
var isArrayLikeObject = _.isArrayLikeObject;
var isBoolean = _.isBoolean;
var isBuffer = _.isBuffer;
var isDate = _.isDate;
var isElement = _.isElement;
var isEmpty = _.isEmpty;
var isEqual = _.isEqual;
var isEqualWith = _.isEqualWith;
var isError = _.isError;
var isFinite = _.isFinite;
var isFunction = _.isFunction;
var isInteger = _.isInteger;
var isLength = _.isLength;
var isMap = _.isMap;
var isMatch = _.isMatch;
var isMatchWith = _.isMatchWith;
var isNaN = _.isNaN;
var isNative = _.isNative;
var isNil = _.isNil;
var isNull = _.isNull;
var isNumber = _.isNumber;
var isObject = _.isObject;
var isObjectLike = _.isObjectLike;
var isPlainObject = _.isPlainObject;
var isRegExp = _.isRegExp;
var isSafeInteger = _.isSafeInteger;
var isSet = _.isSet;
var isString = _.isString;
var isSymbol = _.isSymbol;
var isTypedArray = _.isTypedArray;
var isUndefined = _.isUndefined;
var isWeakMap = _.isWeakMap;
var isWeakSet = _.isWeakSet;
var join = _.join;
var kebabCase = _.kebabCase;
var last = _.last;
var lastIndexOf = _.lastIndexOf;
var lowerCase = _.lowerCase;
var lowerFirst = _.lowerFirst;
var lt = _.lt;
var lte = _.lte;
var max = _.max;
var maxBy = _.maxBy;
var mean = _.mean;
var meanBy = _.meanBy;
var min = _.min;
var minBy = _.minBy;
var stubArray = _.stubArray;
var stubFalse = _.stubFalse;
var stubObject = _.stubObject;
var stubString = _.stubString;
var stubTrue = _.stubTrue;
var multiply = _.multiply;
var nth = _.nth;
var noConflict = _.noConflict;
var noop = _.noop;
var now = _.now;
var pad = _.pad;
var padEnd = _.padEnd;
var padStart = _.padStart;
var parseInt = _.parseInt;
var random = _.random;
var reduce = _.reduce;
var reduceRight = _.reduceRight;
var repeat = _.repeat;
var replace = _.replace;
var result = _.result;
var round = _.round;
var runInContext = _.runInContext;
var sample = _.sample;
var size = _.size;
var snakeCase = _.snakeCase;
var some = _.some;
var sortedIndex = _.sortedIndex;
var sortedIndexBy = _.sortedIndexBy;
var sortedIndexOf = _.sortedIndexOf;
var sortedLastIndex = _.sortedLastIndex;
var sortedLastIndexBy = _.sortedLastIndexBy;
var sortedLastIndexOf = _.sortedLastIndexOf;
var startCase = _.startCase;
var startsWith = _.startsWith;
var subtract = _.subtract;
var sum = _.sum;
var sumBy = _.sumBy;
var template = _.template;
var times = _.times;
var toFinite = _.toFinite;
var toInteger = _.toInteger;
var toLength = _.toLength;
var toLower = _.toLower;
var toNumber = _.toNumber;
var toSafeInteger = _.toSafeInteger;
var toUpper = _.toUpper;
var trim = _.trim;
var trimEnd = _.trimEnd;
var trimStart = _.trimStart;
var truncate = _.truncate;
var unescape = _.unescape;
var uniqueId = _.uniqueId;
var upperCase = _.upperCase;
var upperFirst = _.upperFirst;
var each = _.each;
var eachRight = _.eachRight;
var first = _.first;
var VERSION = _.VERSION;

