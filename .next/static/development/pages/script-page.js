(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\script-page.js"],{

/***/ "./node_modules/@apollo/react-common/lib/react-common.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/react-common/lib/react-common.esm.js ***!
  \*******************************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, DocumentType, getApolloContext, operationName, parser, resetApolloContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return ApolloConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return ApolloProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return DocumentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return getApolloContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationName", function() { return operationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return resetApolloContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");



var apolloContext;
function getApolloContext() {
    if (!apolloContext) {
        apolloContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
    }
    return apolloContext;
}
function resetApolloContext() {
    apolloContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
}

var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = getApolloContext();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.');
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApolloContext.Provider, { value: context }, children));
    });
};

var ApolloConsumer = function (props) {
    var ApolloContext = getApolloContext();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApolloContext.Consumer, null, function (context) {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' +
            'Wrap the root component in an <ApolloProvider>.');
        return props.children(context.client);
    });
};

var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case DocumentType.Query:
            name = 'Query';
            break;
        case DocumentType.Mutation:
            name = 'Mutation';
            break;
        case DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document");
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'query';
    });
    var mutations = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'mutation';
    });
    var subscriptions = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'subscription';
    });
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well");
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
        ("subscriptions and " + mutations.length + " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component");
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(definitions.length === 1, "react-apollo only supports one definition per HOC. " + document + " had " +
        (definitions.length + " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component");
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}


//# sourceMappingURL=react-common.esm.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js ***!
  \*****************************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, getApolloContext, resetApolloContext, RenderPromises, useApolloClient, useLazyQuery, useMutation, useQuery, useSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return RenderPromises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return useApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return useLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return useMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return useSubscription; });
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-common */ "./node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["resetApolloContext"]; });

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");








var OperationData = (function () {
    function OperationData(options, context) {
        this.isMounted = false;
        this.previousOptions = {};
        this.context = {};
        this.options = {};
        this.options = options || {};
        this.context = context || {};
    }
    OperationData.prototype.getOptions = function () {
        return this.options;
    };
    OperationData.prototype.setOptions = function (newOptions, storePrevious) {
        if (storePrevious === void 0) { storePrevious = false; }
        if (storePrevious && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.options, newOptions)) {
            this.previousOptions = this.options;
        }
        this.options = newOptions;
    };
    OperationData.prototype.unmount = function () {
        this.isMounted = false;
    };
    OperationData.prototype.refreshClient = function () {
        var client = (this.options && this.options.client) ||
            (this.context && this.context.client);
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(!!client, 'Could not find "client" in the context or passed in as an option. ' +
            'Wrap the root component in an <ApolloProvider>, or pass an ' +
            'ApolloClient instance in via options.');
        var isNew = false;
        if (client !== this.client) {
            isNew = true;
            this.client = client;
            this.cleanup();
        }
        return {
            client: this.client,
            isNew: isNew
        };
    };
    OperationData.prototype.verifyDocumentType = function (document, type) {
        var operation = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document);
        var requiredOperationName = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["operationName"])(type);
        var usedOperationName = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["operationName"])(operation.type);
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(operation.type === type, "Running a " + requiredOperationName + " requires a graphql " +
            (requiredOperationName + ", but a " + usedOperationName + " was used instead."));
    };
    return OperationData;
}());

var QueryData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(QueryData, _super);
    function QueryData(_a) {
        var options = _a.options, context = _a.context, onNewData = _a.onNewData;
        var _this = _super.call(this, options, context) || this;
        _this.previousData = {};
        _this.currentObservable = {};
        _this.runLazy = false;
        _this.runLazyQuery = function (options) {
            _this.cleanup();
            _this.runLazy = true;
            _this.lazyOptions = options;
            _this.onNewData();
        };
        _this.getExecuteResult = function () {
            var result = _this.getQueryResult();
            _this.startQuerySubscription();
            return result;
        };
        _this.obsRefetch = function (variables) {
            return _this.currentObservable.query.refetch(variables);
        };
        _this.obsFetchMore = function (fetchMoreOptions) { return _this.currentObservable.query.fetchMore(fetchMoreOptions); };
        _this.obsUpdateQuery = function (mapFn) { return _this.currentObservable.query.updateQuery(mapFn); };
        _this.obsStartPolling = function (pollInterval) {
            _this.currentObservable &&
                _this.currentObservable.query &&
                _this.currentObservable.query.startPolling(pollInterval);
        };
        _this.obsStopPolling = function () {
            _this.currentObservable &&
                _this.currentObservable.query &&
                _this.currentObservable.query.stopPolling();
        };
        _this.obsSubscribeToMore = function (options) { return _this.currentObservable.query.subscribeToMore(options); };
        _this.onNewData = onNewData;
        return _this;
    }
    QueryData.prototype.execute = function () {
        this.refreshClient();
        var _a = this.getOptions(), skip = _a.skip, query = _a.query;
        if (skip || query !== this.previousData.query) {
            this.removeQuerySubscription();
            this.previousData.query = query;
        }
        this.updateObservableQuery();
        if (this.isMounted)
            this.startQuerySubscription();
        return this.getExecuteSsrResult() || this.getExecuteResult();
    };
    QueryData.prototype.executeLazy = function () {
        return !this.runLazy
            ? [
                this.runLazyQuery,
                {
                    loading: false,
                    networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready,
                    called: false,
                    data: undefined,
                },
            ]
            : [this.runLazyQuery, this.execute()];
    };
    QueryData.prototype.fetchData = function () {
        var options = this.getOptions();
        if (options.skip || options.ssr === false)
            return false;
        var obs = this.currentObservable.query;
        var currentResult = obs.getCurrentResult();
        return currentResult.loading ? obs.result() : false;
    };
    QueryData.prototype.afterExecute = function (_a) {
        var _b = (_a === void 0 ? {} : _a).lazy, lazy = _b === void 0 ? false : _b;
        this.isMounted = true;
        if (!lazy || this.runLazy) {
            this.handleErrorOrCompleted();
        }
        this.previousOptions = this.getOptions();
        return this.unmount.bind(this);
    };
    QueryData.prototype.cleanup = function () {
        this.removeQuerySubscription();
        delete this.currentObservable.query;
        delete this.previousData.result;
    };
    QueryData.prototype.getOptions = function () {
        var options = _super.prototype.getOptions.call(this);
        if (this.lazyOptions) {
            options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options.variables), this.lazyOptions.variables);
            options.context = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options.context), this.lazyOptions.context);
        }
        if (this.runLazy) {
            delete options.skip;
        }
        return options;
    };
    QueryData.prototype.ssrInitiated = function () {
        return this.context && this.context.renderPromises;
    };
    QueryData.prototype.getExecuteSsrResult = function () {
        var ssrDisabled = this.getOptions().ssr === false;
        var fetchDisabled = this.refreshClient().client.disableNetworkFetches;
        var ssrLoading = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ loading: true, networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading, called: true, data: undefined, stale: false, client: this.client }, this.observableQueryFields());
        if (ssrDisabled && (this.ssrInitiated() || fetchDisabled)) {
            this.previousData.result = ssrLoading;
            return ssrLoading;
        }
        var result;
        if (this.ssrInitiated()) {
            result =
                this.context.renderPromises.addQueryPromise(this, this.getExecuteResult) || ssrLoading;
        }
        return result;
    };
    QueryData.prototype.prepareObservableQueryOptions = function () {
        var options = this.getOptions();
        this.verifyDocumentType(options.query, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Query);
        var displayName = options.displayName || 'Query';
        if (this.ssrInitiated() &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options.fetchPolicy = 'cache-first';
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { displayName: displayName, context: options.context, metadata: { reactComponent: { displayName: displayName } } });
    };
    QueryData.prototype.initializeObservableQuery = function () {
        var _a, _b;
        if (this.ssrInitiated()) {
            this.currentObservable.query = this.context.renderPromises.getSSRObservable(this.getOptions());
        }
        if (!this.currentObservable.query) {
            var observableQueryOptions = this.prepareObservableQueryOptions();
            this.previousData.observableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, observableQueryOptions), { children: null });
            this.currentObservable.query = this.refreshClient().client.watchQuery(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, observableQueryOptions));
            if (this.ssrInitiated()) {
                (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.renderPromises) === null || _b === void 0 ? void 0 : _b.registerSSRObservable(this.currentObservable.query, observableQueryOptions);
            }
        }
    };
    QueryData.prototype.updateObservableQuery = function () {
        if (!this.currentObservable.query) {
            this.initializeObservableQuery();
            return;
        }
        var newObservableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.prepareObservableQueryOptions()), { children: null });
        if (!Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(newObservableQueryOptions, this.previousData.observableQueryOptions)) {
            this.previousData.observableQueryOptions = newObservableQueryOptions;
            this.currentObservable
                .query.setOptions(newObservableQueryOptions)
                .catch(function () { });
        }
    };
    QueryData.prototype.startQuerySubscription = function () {
        var _this = this;
        if (this.currentObservable.subscription || this.getOptions().skip)
            return;
        var obsQuery = this.currentObservable.query;
        this.currentObservable.subscription = obsQuery.subscribe({
            next: function (_a) {
                var loading = _a.loading, networkStatus = _a.networkStatus, data = _a.data;
                var previousResult = _this.previousData.result;
                if (previousResult &&
                    previousResult.loading === loading &&
                    previousResult.networkStatus === networkStatus &&
                    Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(previousResult.data, data)) {
                    return;
                }
                _this.onNewData();
            },
            error: function (error) {
                _this.resubscribeToQuery();
                if (!error.hasOwnProperty('graphQLErrors'))
                    throw error;
                var previousResult = _this.previousData.result;
                if ((previousResult && previousResult.loading) ||
                    !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(error, _this.previousData.error)) {
                    _this.previousData.error = error;
                    _this.onNewData();
                }
            },
        });
    };
    QueryData.prototype.resubscribeToQuery = function () {
        this.removeQuerySubscription();
        var lastError = this.currentObservable.query.getLastError();
        var lastResult = this.currentObservable.query.getLastResult();
        this.currentObservable.query.resetLastResults();
        this.startQuerySubscription();
        Object.assign(this.currentObservable.query, {
            lastError: lastError,
            lastResult: lastResult,
        });
    };
    QueryData.prototype.getQueryResult = function () {
        var result = this.observableQueryFields();
        var options = this.getOptions();
        if (options.skip) {
            result = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, result), { data: undefined, error: undefined, loading: false, called: true });
        }
        else {
            var currentResult = this.currentObservable.query.getCurrentResult();
            var loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
            var error = currentResult.error, data = currentResult.data;
            if (errors && errors.length > 0) {
                error = new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloError"]({ graphQLErrors: errors });
            }
            result = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, result), { loading: loading,
                networkStatus: networkStatus,
                error: error, called: true });
            if (loading) {
                var previousData = this.previousData.result && this.previousData.result.data;
                result.data =
                    previousData && data
                        ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, previousData), data) : previousData || data;
            }
            else if (error) {
                Object.assign(result, {
                    data: (this.currentObservable.query.getLastResult() || {})
                        .data,
                });
            }
            else {
                var fetchPolicy = this.currentObservable.query.options.fetchPolicy;
                var partialRefetch = options.partialRefetch;
                if (partialRefetch &&
                    !data &&
                    partial &&
                    fetchPolicy !== 'cache-only') {
                    Object.assign(result, {
                        loading: true,
                        networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading,
                    });
                    result.refetch();
                    return result;
                }
                result.data = data;
            }
        }
        result.client = this.client;
        this.previousData.loading =
            (this.previousData.result && this.previousData.result.loading) || false;
        this.previousData.result = result;
        this.currentObservable.query &&
            this.currentObservable.query.resetQueryStoreErrors();
        return result;
    };
    QueryData.prototype.handleErrorOrCompleted = function () {
        var obsQuery = this.currentObservable.query;
        if (!obsQuery || !this.previousData.result)
            return;
        var _a = this.previousData.result, data = _a.data, loading = _a.loading, error = _a.error;
        if (!loading) {
            var _b = this.getOptions(), query = _b.query, variables = _b.variables, onCompleted = _b.onCompleted, onError = _b.onError;
            if (this.previousOptions &&
                !this.previousData.loading &&
                Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.query, query) &&
                Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.variables, variables)) {
                return;
            }
            if (onCompleted && !error) {
                onCompleted(data);
            }
            else if (onError && error) {
                onError(error);
            }
        }
    };
    QueryData.prototype.removeQuerySubscription = function () {
        if (this.currentObservable.subscription) {
            this.currentObservable.subscription.unsubscribe();
            delete this.currentObservable.subscription;
        }
    };
    QueryData.prototype.observableQueryFields = function () {
        var observable = this.currentObservable.query;
        return {
            variables: observable.variables,
            refetch: this.obsRefetch,
            fetchMore: this.obsFetchMore,
            updateQuery: this.obsUpdateQuery,
            startPolling: this.obsStartPolling,
            stopPolling: this.obsStopPolling,
            subscribeToMore: this.obsSubscribeToMore,
        };
    };
    return QueryData;
}(OperationData));

function useDeepMemo(memoFn, key) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    if (!ref.current || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(key, ref.current.key)) {
        ref.current = { key: key, value: memoFn() };
    }
    return ref.current.value;
}

function useBaseQuery(query, options, lazy) {
    if (lazy === void 0) { lazy = false; }
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (x) { return x + 1; }, 0), tick = _a[0], forceUpdate = _a[1];
    var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { query: query }) : { query: query };
    var queryDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    var queryData = queryDataRef.current ||
        new QueryData({
            options: updatedOptions,
            context: context,
            onNewData: function () {
                if (!queryData.ssrInitiated()) {
                    Promise.resolve().then(forceUpdate);
                }
                else {
                    forceUpdate();
                }
            },
        });
    queryData.setOptions(updatedOptions);
    queryData.context = context;
    if (queryData.ssrInitiated() && !queryDataRef.current) {
        queryDataRef.current = queryData;
    }
    var memo = {
        options: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, updatedOptions), { onError: undefined, onCompleted: undefined }),
        context: context,
        tick: tick,
    };
    var result = useDeepMemo(function () { return (lazy ? queryData.executeLazy() : queryData.execute()); }, memo);
    var queryResult = lazy
        ? result[1]
        : result;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        if (!queryDataRef.current) {
            queryDataRef.current = queryData;
        }
        return function () { return queryData.cleanup(); };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return queryData.afterExecute({ lazy: lazy }); }, [
        queryResult.loading,
        queryResult.networkStatus,
        queryResult.error,
        queryResult.data,
    ]);
    return result;
}

function useQuery(query, options) {
    return useBaseQuery(query, options, false);
}

function useLazyQuery(query, options) {
    return useBaseQuery(query, options, true);
}

var MutationData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MutationData, _super);
    function MutationData(_a) {
        var options = _a.options, context = _a.context, result = _a.result, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.runMutation = function (mutationFunctionOptions) {
            if (mutationFunctionOptions === void 0) { mutationFunctionOptions = {}; }
            _this.onMutationStart();
            var mutationId = _this.generateNewMutationId();
            return _this.mutate(mutationFunctionOptions)
                .then(function (response) {
                _this.onMutationCompleted(response, mutationId);
                return response;
            })
                .catch(function (error) {
                _this.onMutationError(error, mutationId);
                if (!_this.getOptions().onError)
                    throw error;
            });
        };
        _this.verifyDocumentType(options.mutation, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Mutation);
        _this.result = result;
        _this.setResult = setResult;
        _this.mostRecentMutationId = 0;
        return _this;
    }
    MutationData.prototype.execute = function (result) {
        this.isMounted = true;
        this.verifyDocumentType(this.getOptions().mutation, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Mutation);
        result.client = this.refreshClient().client;
        return [this.runMutation, result];
    };
    MutationData.prototype.afterExecute = function () {
        this.isMounted = true;
        return this.unmount.bind(this);
    };
    MutationData.prototype.cleanup = function () {
    };
    MutationData.prototype.mutate = function (mutationFunctionOptions) {
        var _a = this.getOptions(), mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, update = _a.update, _b = _a.context, mutationContext = _b === void 0 ? {} : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, fetchPolicy = _a.fetchPolicy;
        var mutateOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, mutationFunctionOptions);
        var mutateVariables = Object.assign({}, variables, mutateOptions.variables);
        delete mutateOptions.variables;
        return this.refreshClient().client.mutate(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ mutation: mutation,
            optimisticResponse: optimisticResponse, refetchQueries: mutateOptions.refetchQueries || this.getOptions().refetchQueries, awaitRefetchQueries: awaitRefetchQueries,
            update: update, context: mutationContext, fetchPolicy: fetchPolicy, variables: mutateVariables }, mutateOptions));
    };
    MutationData.prototype.onMutationStart = function () {
        if (!this.result.loading && !this.getOptions().ignoreResults) {
            this.updateResult({
                loading: true,
                error: undefined,
                data: undefined,
                called: true
            });
        }
    };
    MutationData.prototype.onMutationCompleted = function (response, mutationId) {
        var _a = this.getOptions(), onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
        var data = response.data, errors = response.errors;
        var error = errors && errors.length > 0
            ? new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloError"]({ graphQLErrors: errors })
            : undefined;
        var callOncomplete = function () {
            return onCompleted ? onCompleted(data) : null;
        };
        if (this.isMostRecentMutation(mutationId) && !ignoreResults) {
            this.updateResult({
                called: true,
                loading: false,
                data: data,
                error: error
            });
        }
        callOncomplete();
    };
    MutationData.prototype.onMutationError = function (error, mutationId) {
        var onError = this.getOptions().onError;
        if (this.isMostRecentMutation(mutationId)) {
            this.updateResult({
                loading: false,
                error: error,
                data: undefined,
                called: true
            });
        }
        if (onError) {
            onError(error);
        }
    };
    MutationData.prototype.generateNewMutationId = function () {
        return ++this.mostRecentMutationId;
    };
    MutationData.prototype.isMostRecentMutation = function (mutationId) {
        return this.mostRecentMutationId === mutationId;
    };
    MutationData.prototype.updateResult = function (result) {
        if (this.isMounted &&
            (!this.previousResult || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousResult, result))) {
            this.setResult(result);
            this.previousResult = result;
        }
    };
    return MutationData;
}(OperationData));

function useMutation(mutation, options) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({ called: false, loading: false }), result = _a[0], setResult = _a[1];
    var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { mutation: mutation }) : { mutation: mutation };
    var mutationDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    function getMutationDataRef() {
        if (!mutationDataRef.current) {
            mutationDataRef.current = new MutationData({
                options: updatedOptions,
                context: context,
                result: result,
                setResult: setResult
            });
        }
        return mutationDataRef.current;
    }
    var mutationData = getMutationDataRef();
    mutationData.setOptions(updatedOptions);
    mutationData.context = context;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return mutationData.afterExecute(); });
    return mutationData.execute(result);
}

var SubscriptionData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(SubscriptionData, _super);
    function SubscriptionData(_a) {
        var options = _a.options, context = _a.context, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.currentObservable = {};
        _this.setResult = setResult;
        _this.initialize(options);
        return _this;
    }
    SubscriptionData.prototype.execute = function (result) {
        if (this.getOptions().skip === true) {
            this.cleanup();
            return {
                loading: false,
                error: undefined,
                data: undefined,
                variables: this.getOptions().variables
            };
        }
        var currentResult = result;
        if (this.refreshClient().isNew) {
            currentResult = this.getLoadingResult();
        }
        var shouldResubscribe = this.getOptions().shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(this.getOptions());
        }
        if (shouldResubscribe !== false &&
            this.previousOptions &&
            Object.keys(this.previousOptions).length > 0 &&
            (this.previousOptions.subscription !== this.getOptions().subscription ||
                !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.variables, this.getOptions().variables) ||
                this.previousOptions.skip !== this.getOptions().skip)) {
            this.cleanup();
            currentResult = this.getLoadingResult();
        }
        this.initialize(this.getOptions());
        this.startSubscription();
        this.previousOptions = this.getOptions();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, currentResult), { variables: this.getOptions().variables });
    };
    SubscriptionData.prototype.afterExecute = function () {
        this.isMounted = true;
    };
    SubscriptionData.prototype.cleanup = function () {
        this.endSubscription();
        delete this.currentObservable.query;
    };
    SubscriptionData.prototype.initialize = function (options) {
        if (this.currentObservable.query || this.getOptions().skip === true)
            return;
        this.currentObservable.query = this.refreshClient().client.subscribe({
            query: options.subscription,
            variables: options.variables,
            fetchPolicy: options.fetchPolicy
        });
    };
    SubscriptionData.prototype.startSubscription = function () {
        if (this.currentObservable.subscription)
            return;
        this.currentObservable.subscription = this.currentObservable.query.subscribe({
            next: this.updateCurrentData.bind(this),
            error: this.updateError.bind(this),
            complete: this.completeSubscription.bind(this)
        });
    };
    SubscriptionData.prototype.getLoadingResult = function () {
        return {
            loading: true,
            error: undefined,
            data: undefined
        };
    };
    SubscriptionData.prototype.updateResult = function (result) {
        if (this.isMounted) {
            this.setResult(result);
        }
    };
    SubscriptionData.prototype.updateCurrentData = function (result) {
        var onSubscriptionData = this.getOptions().onSubscriptionData;
        this.updateResult({
            data: result.data,
            loading: false,
            error: undefined
        });
        if (onSubscriptionData) {
            onSubscriptionData({
                client: this.refreshClient().client,
                subscriptionData: result
            });
        }
    };
    SubscriptionData.prototype.updateError = function (error) {
        this.updateResult({
            error: error,
            loading: false
        });
    };
    SubscriptionData.prototype.completeSubscription = function () {
        var onSubscriptionComplete = this.getOptions().onSubscriptionComplete;
        if (onSubscriptionComplete)
            onSubscriptionComplete();
        this.endSubscription();
    };
    SubscriptionData.prototype.endSubscription = function () {
        if (this.currentObservable.subscription) {
            this.currentObservable.subscription.unsubscribe();
            delete this.currentObservable.subscription;
        }
    };
    return SubscriptionData;
}(OperationData));

function useSubscription(subscription, options) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var updatedOptions = options
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { subscription: subscription }) : { subscription: subscription };
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
        loading: !updatedOptions.skip,
        error: undefined,
        data: undefined
    }), result = _a[0], setResult = _a[1];
    var subscriptionDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    function getSubscriptionDataRef() {
        if (!subscriptionDataRef.current) {
            subscriptionDataRef.current = new SubscriptionData({
                options: updatedOptions,
                context: context,
                setResult: setResult
            });
        }
        return subscriptionDataRef.current;
    }
    var subscriptionData = getSubscriptionDataRef();
    subscriptionData.setOptions(updatedOptions, true);
    subscriptionData.context = context;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return subscriptionData.afterExecute(); });
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return subscriptionData.cleanup.bind(subscriptionData); }, []);
    return subscriptionData.execute(result);
}

function useApolloClient() {
    var client = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])()).client;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(client, 'No Apollo Client instance can be found. Please ensure that you ' +
        'have called `ApolloProvider` higher up in your tree.');
    return client;
}

function makeDefaultQueryInfo() {
    return {
        seen: false,
        observable: null
    };
}
var RenderPromises = (function () {
    function RenderPromises() {
        this.queryPromises = new Map();
        this.queryInfoTrie = new Map();
    }
    RenderPromises.prototype.registerSSRObservable = function (observable, props) {
        this.lookupQueryInfo(props).observable = observable;
    };
    RenderPromises.prototype.getSSRObservable = function (props) {
        return this.lookupQueryInfo(props).observable;
    };
    RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
        var info = this.lookupQueryInfo(queryInstance.getOptions());
        if (!info.seen) {
            this.queryPromises.set(queryInstance.getOptions(), new Promise(function (resolve) {
                resolve(queryInstance.fetchData());
            }));
            return null;
        }
        return finish();
    };
    RenderPromises.prototype.hasPromises = function () {
        return this.queryPromises.size > 0;
    };
    RenderPromises.prototype.consumeAndAwaitPromises = function () {
        var _this = this;
        var promises = [];
        this.queryPromises.forEach(function (promise, queryInstance) {
            _this.lookupQueryInfo(queryInstance).seen = true;
            promises.push(promise);
        });
        this.queryPromises.clear();
        return Promise.all(promises);
    };
    RenderPromises.prototype.lookupQueryInfo = function (props) {
        var queryInfoTrie = this.queryInfoTrie;
        var query = props.query, variables = props.variables;
        var varMap = queryInfoTrie.get(query) || new Map();
        if (!queryInfoTrie.has(query))
            queryInfoTrie.set(query, varMap);
        var variablesString = JSON.stringify(variables);
        var info = varMap.get(variablesString) || makeDefaultQueryInfo();
        if (!varMap.has(variablesString))
            varMap.set(variablesString, info);
        return info;
    };
    return RenderPromises;
}());


//# sourceMappingURL=react-hooks.esm.js.map


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@wry/equality/lib/equality.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@wry/equality/lib/equality.esm.js ***!
  \********************************************************/
/*! exports provided: default, equal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal", function() { return equal; });
var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */
function equal(a, b) {
    try {
        return check(a, b);
    }
    finally {
        previousComparisons.clear();
    }
}
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) {
        return true;
    }
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    var aTag = toString.call(a);
    var bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) {
        return false;
    }
    switch (aTag) {
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length)
                return false;
        // Fall through to object case...
        case '[object Object]': {
            if (previouslyCompared(a, b))
                return true;
            var aKeys = Object.keys(a);
            var bKeys = Object.keys(b);
            // If `a` and `b` have a different number of enumerable keys, they
            // must be different.
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length)
                return false;
            // Now make sure they have the same keys.
            for (var k = 0; k < keyCount; ++k) {
                if (!hasOwnProperty.call(b, aKeys[k])) {
                    return false;
                }
            }
            // Finally, check deep equality of all child properties.
            for (var k = 0; k < keyCount; ++k) {
                var key = aKeys[k];
                if (!check(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a)
                return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == "" + b;
        case '[object Map]':
        case '[object Set]': {
            if (a.size !== b.size)
                return false;
            if (previouslyCompared(a, b))
                return true;
            var aIterator = a.entries();
            var isMap = aTag === '[object Map]';
            while (true) {
                var info = aIterator.next();
                if (info.done)
                    break;
                // If a instanceof Set, aValue === aKey.
                var _a = info.value, aKey = _a[0], aValue = _a[1];
                // So this works the same way for both Set and Map.
                if (!b.has(aKey)) {
                    return false;
                }
                // However, we care about deep equality of values only when dealing
                // with Map structures.
                if (isMap && !check(aValue, b.get(aKey))) {
                    return false;
                }
            }
            return true;
        }
    }
    // Otherwise the values are not equal.
    return false;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    var bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b))
            return true;
    }
    else {
        previousComparisons.set(a, bSet = new Set);
    }
    bSet.add(b);
    return false;
}

/* harmony default export */ __webpack_exports__["default"] = (equal);

//# sourceMappingURL=equality.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-client/bundle.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/apollo-client/bundle.esm.js ***!
  \**************************************************/
/*! exports provided: default, ApolloClient, ApolloError, FetchType, NetworkStatus, ObservableQuery, isApolloError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return ApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return ApolloError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchType", function() { return FetchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return NetworkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return ObservableQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return isApolloError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql/language/visitor */ "./node_modules/graphql/language/visitor.mjs");







var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus < 7;
}

var Observable = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Observable, _super);
    function Observable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Observable.prototype[symbol_observable__WEBPACK_IMPORTED_MODULE_3__["default"]] = function () {
        return this;
    };
    Observable.prototype['@@observable'] = function () {
        return this;
    };
    return Observable;
}(apollo_link__WEBPACK_IMPORTED_MODULE_2__["Observable"]));

function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}

function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (isNonEmptyArray(err.graphQLErrors)) {
        err.graphQLErrors.forEach(function (graphQLError) {
            var errorMessage = graphQLError
                ? graphQLError.message
                : 'Error message not found.';
            message += "GraphQL error: " + errorMessage + "\n";
        });
    }
    if (err.networkError) {
        message += 'Network error: ' + err.networkError.message + '\n';
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.networkError = networkError || null;
        if (!errorMessage) {
            _this.message = generateErrorMessage(_this);
        }
        else {
            _this.message = errorMessage;
        }
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

var FetchType;
(function (FetchType) {
    FetchType[FetchType["normal"] = 1] = "normal";
    FetchType[FetchType["refetch"] = 2] = "refetch";
    FetchType[FetchType["poll"] = 3] = "poll";
})(FetchType || (FetchType = {}));

var hasError = function (storeValue, policy) {
    if (policy === void 0) { policy = 'none'; }
    return storeValue && (storeValue.networkError ||
        (policy === 'none' && isNonEmptyArray(storeValue.graphQLErrors)));
};
var ObservableQuery = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, options = _a.options, _b = _a.shouldSubscribe, shouldSubscribe = _b === void 0 ? true : _b;
        var _this = _super.call(this, function (observer) {
            return _this.onSubscribe(observer);
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.isTornDown = false;
        _this.options = options;
        _this.variables = options.variables || {};
        _this.queryId = queryManager.generateQueryId();
        _this.shouldSubscribe = shouldSubscribe;
        var opDef = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getOperationDefinition"])(options.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        _this.queryManager = queryManager;
        return _this;
    }
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.currentResult = function () {
        var result = this.getCurrentResult();
        if (result.data === undefined) {
            result.data = {};
        }
        return result;
    };
    ObservableQuery.prototype.getCurrentResult = function () {
        if (this.isTornDown) {
            var lastResult = this.lastResult;
            return {
                data: !this.lastError && lastResult && lastResult.data || void 0,
                error: this.lastError,
                loading: false,
                networkStatus: NetworkStatus.error,
            };
        }
        var _a = this.queryManager.getCurrentQueryResult(this), data = _a.data, partial = _a.partial;
        var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
        var result;
        var fetchPolicy = this.options.fetchPolicy;
        var isNetworkFetchPolicy = fetchPolicy === 'network-only' ||
            fetchPolicy === 'no-cache';
        if (queryStoreValue) {
            var networkStatus = queryStoreValue.networkStatus;
            if (hasError(queryStoreValue, this.options.errorPolicy)) {
                return {
                    data: void 0,
                    loading: false,
                    networkStatus: networkStatus,
                    error: new ApolloError({
                        graphQLErrors: queryStoreValue.graphQLErrors,
                        networkError: queryStoreValue.networkError,
                    }),
                };
            }
            if (queryStoreValue.variables) {
                this.options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.variables), queryStoreValue.variables);
                this.variables = this.options.variables;
            }
            result = {
                data: data,
                loading: isNetworkRequestInFlight(networkStatus),
                networkStatus: networkStatus,
            };
            if (queryStoreValue.graphQLErrors && this.options.errorPolicy === 'all') {
                result.errors = queryStoreValue.graphQLErrors;
            }
        }
        else {
            var loading = isNetworkFetchPolicy ||
                (partial && fetchPolicy !== 'cache-only');
            result = {
                data: data,
                loading: loading,
                networkStatus: loading ? NetworkStatus.loading : NetworkStatus.ready,
            };
        }
        if (!partial) {
            this.updateLastResult(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), { stale: false }));
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), { partial: partial });
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
        var snapshot = this.lastResultSnapshot;
        return !(snapshot &&
            newResult &&
            snapshot.networkStatus === newResult.networkStatus &&
            snapshot.stale === newResult.stale &&
            Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(snapshot.data, newResult.data));
    };
    ObservableQuery.prototype.getLastResult = function () {
        return this.lastResult;
    };
    ObservableQuery.prototype.getLastError = function () {
        return this.lastError;
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.lastResult;
        delete this.lastResultSnapshot;
        delete this.lastError;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        var queryStore = this.queryManager.queryStore.get(this.queryId);
        if (queryStore) {
            queryStore.networkError = null;
            queryStore.graphQLErrors = [];
        }
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'cache-only') {
            return Promise.reject( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]('cache-only fetchPolicy option should not be used together with query refetch.'));
        }
        if (fetchPolicy !== 'no-cache' &&
            fetchPolicy !== 'cache-and-network') {
            fetchPolicy = 'network-only';
        }
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(this.variables, variables)) {
            this.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.variables), variables);
        }
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(this.options.variables, this.variables)) {
            this.options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.variables), this.variables);
        }
        return this.queryManager.fetchQuery(this.queryId, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), { fetchPolicy: fetchPolicy }), FetchType.refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(fetchMoreOptions.updateQuery, 'updateQuery option is required. This function defines how to update the query data with the new results.');
        var combinedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (fetchMoreOptions.query ? fetchMoreOptions : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), fetchMoreOptions), { variables: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.variables), fetchMoreOptions.variables) }))), { fetchPolicy: 'network-only' });
        var qid = this.queryManager.generateQueryId();
        return this.queryManager
            .fetchQuery(qid, combinedOptions, FetchType.normal, this.queryId)
            .then(function (fetchMoreResult) {
            _this.updateQuery(function (previousResult) {
                return fetchMoreOptions.updateQuery(previousResult, {
                    fetchMoreResult: fetchMoreResult.data,
                    variables: combinedOptions.variables,
                });
            });
            _this.queryManager.stopQuery(qid);
            return fetchMoreResult;
        }, function (error) {
            _this.queryManager.stopQuery(qid);
            throw error;
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (opts) {
        var oldFetchPolicy = this.options.fetchPolicy;
        this.options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), opts);
        if (opts.pollInterval) {
            this.startPolling(opts.pollInterval);
        }
        else if (opts.pollInterval === 0) {
            this.stopPolling();
        }
        var fetchPolicy = opts.fetchPolicy;
        return this.setVariables(this.options.variables, oldFetchPolicy !== fetchPolicy && (oldFetchPolicy === 'cache-only' ||
            oldFetchPolicy === 'standby' ||
            fetchPolicy === 'network-only'), opts.fetchResults);
    };
    ObservableQuery.prototype.setVariables = function (variables, tryFetch, fetchResults) {
        if (tryFetch === void 0) { tryFetch = false; }
        if (fetchResults === void 0) { fetchResults = true; }
        this.isTornDown = false;
        variables = variables || this.variables;
        if (!tryFetch && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(variables, this.variables)) {
            return this.observers.size && fetchResults
                ? this.result()
                : Promise.resolve();
        }
        this.variables = this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        return this.queryManager.fetchQuery(this.queryId, this.options);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var queryManager = this.queryManager;
        var _a = queryManager.getQueryWithPreviousResult(this.queryId), previousResult = _a.previousResult, variables = _a.variables, document = _a.document;
        var newResult = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["tryFunctionOrLogError"])(function () {
            return mapFn(previousResult, { variables: variables });
        });
        if (newResult) {
            queryManager.dataStore.markUpdateQueryResult(document, variables, newResult);
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.stopPolling = function () {
        this.queryManager.stopPollingQuery(this.queryId);
        this.options.pollInterval = undefined;
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        assertNotCacheFirstOrOnly(this);
        this.options.pollInterval = pollInterval;
        this.queryManager.startPollingQuery(this.options, this.queryId);
    };
    ObservableQuery.prototype.updateLastResult = function (newResult) {
        var previousResult = this.lastResult;
        this.lastResult = newResult;
        this.lastResultSnapshot = this.queryManager.assumeImmutableResults
            ? newResult
            : Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(newResult);
        return previousResult;
    };
    ObservableQuery.prototype.onSubscribe = function (observer) {
        var _this = this;
        try {
            var subObserver = observer._subscription._observer;
            if (subObserver && !subObserver.error) {
                subObserver.error = defaultSubscriptionObserverErrorCallback;
            }
        }
        catch (_a) { }
        var first = !this.observers.size;
        this.observers.add(observer);
        if (observer.next && this.lastResult)
            observer.next(this.lastResult);
        if (observer.error && this.lastError)
            observer.error(this.lastError);
        if (first) {
            this.setUpQuery();
        }
        return function () {
            if (_this.observers.delete(observer) && !_this.observers.size) {
                _this.tearDownQuery();
            }
        };
    };
    ObservableQuery.prototype.setUpQuery = function () {
        var _this = this;
        var _a = this, queryManager = _a.queryManager, queryId = _a.queryId;
        if (this.shouldSubscribe) {
            queryManager.addObservableQuery(queryId, this);
        }
        if (this.options.pollInterval) {
            assertNotCacheFirstOrOnly(this);
            queryManager.startPollingQuery(this.options, queryId);
        }
        var onError = function (error) {
            _this.updateLastResult(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.lastResult), { errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false }));
            iterateObserversSafely(_this.observers, 'error', _this.lastError = error);
        };
        queryManager.observeQuery(queryId, this.options, {
            next: function (result) {
                if (_this.lastError || _this.isDifferentFromLastResult(result)) {
                    var previousResult_1 = _this.updateLastResult(result);
                    var _a = _this.options, query_1 = _a.query, variables = _a.variables, fetchPolicy_1 = _a.fetchPolicy;
                    if (queryManager.transform(query_1).hasClientExports) {
                        queryManager.getLocalState().addExportedVariables(query_1, variables).then(function (variables) {
                            var previousVariables = _this.variables;
                            _this.variables = _this.options.variables = variables;
                            if (!result.loading &&
                                previousResult_1 &&
                                fetchPolicy_1 !== 'cache-only' &&
                                queryManager.transform(query_1).serverQuery &&
                                !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(previousVariables, variables)) {
                                _this.refetch();
                            }
                            else {
                                iterateObserversSafely(_this.observers, 'next', result);
                            }
                        });
                    }
                    else {
                        iterateObserversSafely(_this.observers, 'next', result);
                    }
                }
            },
            error: onError,
        }).catch(onError);
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        var queryManager = this.queryManager;
        this.isTornDown = true;
        queryManager.stopPollingQuery(this.queryId);
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        queryManager.removeObservableQuery(this.queryId);
        queryManager.stopQuery(this.queryId);
        this.observers.clear();
    };
    return ObservableQuery;
}(Observable));
function defaultSubscriptionObserverErrorCallback(error) {
     false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error('Unhandled error', error.message, error.stack);
}
function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}
function assertNotCacheFirstOrOnly(obsQuery) {
    var fetchPolicy = obsQuery.options.fetchPolicy;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(fetchPolicy !== 'cache-first' && fetchPolicy !== 'cache-only', 'Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
}

var MutationStore = (function () {
    function MutationStore() {
        this.store = {};
    }
    MutationStore.prototype.getStore = function () {
        return this.store;
    };
    MutationStore.prototype.get = function (mutationId) {
        return this.store[mutationId];
    };
    MutationStore.prototype.initMutation = function (mutationId, mutation, variables) {
        this.store[mutationId] = {
            mutation: mutation,
            variables: variables || {},
            loading: true,
            error: null,
        };
    };
    MutationStore.prototype.markMutationError = function (mutationId, error) {
        var mutation = this.store[mutationId];
        if (mutation) {
            mutation.loading = false;
            mutation.error = error;
        }
    };
    MutationStore.prototype.markMutationResult = function (mutationId) {
        var mutation = this.store[mutationId];
        if (mutation) {
            mutation.loading = false;
            mutation.error = null;
        }
    };
    MutationStore.prototype.reset = function () {
        this.store = {};
    };
    return MutationStore;
}());

var QueryStore = (function () {
    function QueryStore() {
        this.store = {};
    }
    QueryStore.prototype.getStore = function () {
        return this.store;
    };
    QueryStore.prototype.get = function (queryId) {
        return this.store[queryId];
    };
    QueryStore.prototype.initQuery = function (query) {
        var previousQuery = this.store[query.queryId];
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!previousQuery ||
            previousQuery.document === query.document ||
            Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(previousQuery.document, query.document), 'Internal Error: may not update existing query string in store');
        var isSetVariables = false;
        var previousVariables = null;
        if (query.storePreviousVariables &&
            previousQuery &&
            previousQuery.networkStatus !== NetworkStatus.loading) {
            if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(previousQuery.variables, query.variables)) {
                isSetVariables = true;
                previousVariables = previousQuery.variables;
            }
        }
        var networkStatus;
        if (isSetVariables) {
            networkStatus = NetworkStatus.setVariables;
        }
        else if (query.isPoll) {
            networkStatus = NetworkStatus.poll;
        }
        else if (query.isRefetch) {
            networkStatus = NetworkStatus.refetch;
        }
        else {
            networkStatus = NetworkStatus.loading;
        }
        var graphQLErrors = [];
        if (previousQuery && previousQuery.graphQLErrors) {
            graphQLErrors = previousQuery.graphQLErrors;
        }
        this.store[query.queryId] = {
            document: query.document,
            variables: query.variables,
            previousVariables: previousVariables,
            networkError: null,
            graphQLErrors: graphQLErrors,
            networkStatus: networkStatus,
            metadata: query.metadata,
        };
        if (typeof query.fetchMoreForQueryId === 'string' &&
            this.store[query.fetchMoreForQueryId]) {
            this.store[query.fetchMoreForQueryId].networkStatus =
                NetworkStatus.fetchMore;
        }
    };
    QueryStore.prototype.markQueryResult = function (queryId, result, fetchMoreForQueryId) {
        if (!this.store || !this.store[queryId])
            return;
        this.store[queryId].networkError = null;
        this.store[queryId].graphQLErrors = isNonEmptyArray(result.errors) ? result.errors : [];
        this.store[queryId].previousVariables = null;
        this.store[queryId].networkStatus = NetworkStatus.ready;
        if (typeof fetchMoreForQueryId === 'string' &&
            this.store[fetchMoreForQueryId]) {
            this.store[fetchMoreForQueryId].networkStatus = NetworkStatus.ready;
        }
    };
    QueryStore.prototype.markQueryError = function (queryId, error, fetchMoreForQueryId) {
        if (!this.store || !this.store[queryId])
            return;
        this.store[queryId].networkError = error;
        this.store[queryId].networkStatus = NetworkStatus.error;
        if (typeof fetchMoreForQueryId === 'string') {
            this.markQueryResultClient(fetchMoreForQueryId, true);
        }
    };
    QueryStore.prototype.markQueryResultClient = function (queryId, complete) {
        var storeValue = this.store && this.store[queryId];
        if (storeValue) {
            storeValue.networkError = null;
            storeValue.previousVariables = null;
            if (complete) {
                storeValue.networkStatus = NetworkStatus.ready;
            }
        }
    };
    QueryStore.prototype.stopQuery = function (queryId) {
        delete this.store[queryId];
    };
    QueryStore.prototype.reset = function (observableQueryIds) {
        var _this = this;
        Object.keys(this.store).forEach(function (queryId) {
            if (observableQueryIds.indexOf(queryId) < 0) {
                _this.stopQuery(queryId);
            }
            else {
                _this.store[queryId].networkStatus = NetworkStatus.loading;
            }
        });
    };
    return QueryStore;
}());

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasDirectives"])(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
             false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn('Found @client directives in a query but no ApolloClient resolvers ' +
                'were specified. This means ApolloClient local resolver handling ' +
                'has been disabled, and @client directives will be passed through ' +
                'to your link chain.');
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return this.resolvers ? Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["removeClientSetsFromDocument"])(document) : document;
    };
    LocalState.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var cache = this.cache;
        var newContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { cache: cache, getCacheKey: function (obj) {
                if (cache.config) {
                    return cache.config.dataIdFromObject(obj);
                }
                else {
                     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(false, 'To use context.getCacheKey, you need to use a cache that has ' +
                        'a configurable dataIdFromObject, like apollo-cache-inmemory.');
                }
            } });
        return newContext;
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables), data.exportedVariables)); })];
                }
                return [2, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["visit"])(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["BREAK"];
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["buildQueryFromSelectionSet"])(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                mainDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getMainDefinition"])(document);
                fragments = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getFragmentDefinitions"])(document);
                fragmentMap = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["createFragmentMap"])(fragments);
                definitionOperation = mainDefinition
                    .operation;
                defaultOperationType = definitionOperation
                    ? capitalizeFirstLetter(definitionOperation)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { cache: cache,
                        client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["shouldInclude"])(selection, variables)) {
                            return [2];
                        }
                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isField"])(selection)) {
                            return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["resultKeyNameFromField"])(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isInlineFragment"])(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(fragment, "No fragment named " + selection.name.value);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeDeepArray"])(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, rootValue, execContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["resultKeyNameFromField"])(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(resolve(rootValue, Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["argumentsObjectFromField"])(field, variables), execContext.context, { field: field, fragmentMap: execContext.fragmentMap }));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, item, execContext);
            }
        }));
    };
    return LocalState;
}());

function multiplex(inner) {
    var observers = new Set();
    var sub = null;
    return new Observable(function (observer) {
        observers.add(observer);
        sub = sub || inner.subscribe({
            next: function (value) {
                observers.forEach(function (obs) { return obs.next && obs.next(value); });
            },
            error: function (error) {
                observers.forEach(function (obs) { return obs.error && obs.error(error); });
            },
            complete: function () {
                observers.forEach(function (obs) { return obs.complete && obs.complete(); });
            },
        });
        return function () {
            if (observers.delete(observer) && !observers.size && sub) {
                sub.unsubscribe();
                sub = null;
            }
        };
    });
}
function asyncMap(observable, mapFn) {
    return new Observable(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeNextCount = 0;
        var completed = false;
        var handler = {
            next: function (value) {
                ++activeNextCount;
                new Promise(function (resolve) {
                    resolve(mapFn(value));
                }).then(function (result) {
                    --activeNextCount;
                    next && next.call(observer, result);
                    completed && handler.complete();
                }, function (e) {
                    --activeNextCount;
                    error && error.call(observer, e);
                });
            },
            error: function (e) {
                error && error.call(observer, e);
            },
            complete: function () {
                completed = true;
                if (!activeNextCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, store = _a.store, _c = _a.onBroadcast, onBroadcast = _c === void 0 ? function () { return undefined; } : _c, _d = _a.ssrMode, ssrMode = _d === void 0 ? false : _d, _e = _a.clientAwareness, clientAwareness = _e === void 0 ? {} : _e, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.mutationStore = new MutationStore();
        this.queryStore = new QueryStore();
        this.clientAwareness = {};
        this.idCounter = 1;
        this.queries = new Map();
        this.fetchQueryRejectFns = new Map();
        this.transformCache = new (apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["canUseWeakMap"] ? WeakMap : Map)();
        this.inFlightLinkObservables = new Map();
        this.pollingInfoByQueryId = new Map();
        this.link = link;
        this.queryDeduplication = queryDeduplication;
        this.dataStore = store;
        this.onBroadcast = onBroadcast;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new LocalState({ cache: store.getCache() });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.fetchQueryRejectFns.forEach(function (reject) {
            reject( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]('QueryManager stopped while query was in flight'));
        });
    };
    QueryManager.prototype.mutate = function (_a) {
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueriesByName = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a.update, _d = _a.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, fetchPolicy = _a.fetchPolicy, _e = _a.context, context = _e === void 0 ? {} : _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mutationId, generateUpdateQueriesInfo, self;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
                switch (_f.label) {
                    case 0:
                         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.');
                         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!fetchPolicy || fetchPolicy === 'no-cache', "Mutations only support a 'no-cache' fetchPolicy. If you don't want to disable the cache, remove your fetchPolicy setting to proceed with the default mutation behavior.");
                        mutationId = this.generateQueryId();
                        mutation = this.transform(mutation).document;
                        this.setQuery(mutationId, function () { return ({ document: mutation }); });
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = _f.sent();
                        _f.label = 2;
                    case 2:
                        generateUpdateQueriesInfo = function () {
                            var ret = {};
                            if (updateQueriesByName) {
                                _this.queries.forEach(function (_a, queryId) {
                                    var observableQuery = _a.observableQuery;
                                    if (observableQuery) {
                                        var queryName = observableQuery.queryName;
                                        if (queryName &&
                                            hasOwnProperty.call(updateQueriesByName, queryName)) {
                                            ret[queryId] = {
                                                updater: updateQueriesByName[queryName],
                                                query: _this.queryStore.get(queryId),
                                            };
                                        }
                                    }
                                });
                            }
                            return ret;
                        };
                        this.mutationStore.initMutation(mutationId, mutation, variables);
                        this.dataStore.markMutationInit({
                            mutationId: mutationId,
                            document: mutation,
                            variables: variables,
                            updateQueries: generateUpdateQueriesInfo(),
                            update: updateWithProxyFn,
                            optimisticResponse: optimisticResponse,
                        });
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                var storeResult;
                                var error;
                                self.getObservableFromLink(mutation, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { optimisticResponse: optimisticResponse }), variables, false).subscribe({
                                    next: function (result) {
                                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result) && errorPolicy === 'none') {
                                            error = new ApolloError({
                                                graphQLErrors: result.errors,
                                            });
                                            return;
                                        }
                                        self.mutationStore.markMutationResult(mutationId);
                                        if (fetchPolicy !== 'no-cache') {
                                            self.dataStore.markMutationResult({
                                                mutationId: mutationId,
                                                result: result,
                                                document: mutation,
                                                variables: variables,
                                                updateQueries: generateUpdateQueriesInfo(),
                                                update: updateWithProxyFn,
                                            });
                                        }
                                        storeResult = result;
                                    },
                                    error: function (err) {
                                        self.mutationStore.markMutationError(mutationId, err);
                                        self.dataStore.markMutationComplete({
                                            mutationId: mutationId,
                                            optimisticResponse: optimisticResponse,
                                        });
                                        self.broadcastQueries();
                                        self.setQuery(mutationId, function () { return ({ document: null }); });
                                        reject(new ApolloError({
                                            networkError: err,
                                        }));
                                    },
                                    complete: function () {
                                        if (error) {
                                            self.mutationStore.markMutationError(mutationId, error);
                                        }
                                        self.dataStore.markMutationComplete({
                                            mutationId: mutationId,
                                            optimisticResponse: optimisticResponse,
                                        });
                                        self.broadcastQueries();
                                        if (error) {
                                            reject(error);
                                            return;
                                        }
                                        if (typeof refetchQueries === 'function') {
                                            refetchQueries = refetchQueries(storeResult);
                                        }
                                        var refetchQueryPromises = [];
                                        if (isNonEmptyArray(refetchQueries)) {
                                            refetchQueries.forEach(function (refetchQuery) {
                                                if (typeof refetchQuery === 'string') {
                                                    self.queries.forEach(function (_a) {
                                                        var observableQuery = _a.observableQuery;
                                                        if (observableQuery &&
                                                            observableQuery.queryName === refetchQuery) {
                                                            refetchQueryPromises.push(observableQuery.refetch());
                                                        }
                                                    });
                                                }
                                                else {
                                                    var queryOptions = {
                                                        query: refetchQuery.query,
                                                        variables: refetchQuery.variables,
                                                        fetchPolicy: 'network-only',
                                                    };
                                                    if (refetchQuery.context) {
                                                        queryOptions.context = refetchQuery.context;
                                                    }
                                                    refetchQueryPromises.push(self.query(queryOptions));
                                                }
                                            });
                                        }
                                        Promise.all(awaitRefetchQueries ? refetchQueryPromises : []).then(function () {
                                            self.setQuery(mutationId, function () { return ({ document: null }); });
                                            if (errorPolicy === 'ignore' &&
                                                storeResult &&
                                                Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(storeResult)) {
                                                delete storeResult.errors;
                                            }
                                            resolve(storeResult);
                                        });
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, fetchType, fetchMoreForQueryId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, metadata, _b, fetchPolicy, _c, context, query, variables, storeResult, isNetworkOnly, needToFetch, _d, complete, result, shouldFetch, requestId, cancel, networkResult;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = options.metadata, metadata = _a === void 0 ? null : _a, _b = options.fetchPolicy, fetchPolicy = _b === void 0 ? 'cache-first' : _b, _c = options.context, context = _c === void 0 ? {} : _c;
                        query = this.transform(options.query).document;
                        variables = this.getVariables(query, options.variables);
                        if (!this.transform(query).hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(query, variables, context)];
                    case 1:
                        variables = _e.sent();
                        _e.label = 2;
                    case 2:
                        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { variables: variables });
                        isNetworkOnly = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
                        needToFetch = isNetworkOnly;
                        if (!isNetworkOnly) {
                            _d = this.dataStore.getCache().diff({
                                query: query,
                                variables: variables,
                                returnPartialData: true,
                                optimistic: false,
                            }), complete = _d.complete, result = _d.result;
                            needToFetch = !complete || fetchPolicy === 'cache-and-network';
                            storeResult = result;
                        }
                        shouldFetch = needToFetch && fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby';
                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasDirectives"])(['live'], query))
                            shouldFetch = true;
                        requestId = this.idCounter++;
                        cancel = fetchPolicy !== 'no-cache'
                            ? this.updateQueryWatch(queryId, query, options)
                            : undefined;
                        this.setQuery(queryId, function () { return ({
                            document: query,
                            lastRequestId: requestId,
                            invalidated: true,
                            cancel: cancel,
                        }); });
                        this.invalidate(fetchMoreForQueryId);
                        this.queryStore.initQuery({
                            queryId: queryId,
                            document: query,
                            storePreviousVariables: shouldFetch,
                            variables: variables,
                            isPoll: fetchType === FetchType.poll,
                            isRefetch: fetchType === FetchType.refetch,
                            metadata: metadata,
                            fetchMoreForQueryId: fetchMoreForQueryId,
                        });
                        this.broadcastQueries();
                        if (shouldFetch) {
                            networkResult = this.fetchRequest({
                                requestId: requestId,
                                queryId: queryId,
                                document: query,
                                options: options,
                                fetchMoreForQueryId: fetchMoreForQueryId,
                            }).catch(function (error) {
                                if (isApolloError(error)) {
                                    throw error;
                                }
                                else {
                                    if (requestId >= _this.getQuery(queryId).lastRequestId) {
                                        _this.queryStore.markQueryError(queryId, error, fetchMoreForQueryId);
                                        _this.invalidate(queryId);
                                        _this.invalidate(fetchMoreForQueryId);
                                        _this.broadcastQueries();
                                    }
                                    throw new ApolloError({ networkError: error });
                                }
                            });
                            if (fetchPolicy !== 'cache-and-network') {
                                return [2, networkResult];
                            }
                            networkResult.catch(function () { });
                        }
                        this.queryStore.markQueryResultClient(queryId, !shouldFetch);
                        this.invalidate(queryId);
                        this.invalidate(fetchMoreForQueryId);
                        if (this.transform(query).hasForcedResolvers) {
                            return [2, this.localState.runResolvers({
                                    document: query,
                                    remoteResult: { data: storeResult },
                                    context: context,
                                    variables: variables,
                                    onlyRunForcedResolvers: true,
                                }).then(function (result) {
                                    _this.markQueryResult(queryId, result, options, fetchMoreForQueryId);
                                    _this.broadcastQueries();
                                    return result;
                                })];
                        }
                        this.broadcastQueries();
                        return [2, { data: storeResult }];
                }
            });
        });
    };
    QueryManager.prototype.markQueryResult = function (queryId, result, _a, fetchMoreForQueryId) {
        var fetchPolicy = _a.fetchPolicy, variables = _a.variables, errorPolicy = _a.errorPolicy;
        if (fetchPolicy === 'no-cache') {
            this.setQuery(queryId, function () { return ({
                newData: { result: result.data, complete: true },
            }); });
        }
        else {
            this.dataStore.markQueryResult(result, this.getQuery(queryId).document, variables, fetchMoreForQueryId, errorPolicy === 'ignore' || errorPolicy === 'all');
        }
    };
    QueryManager.prototype.queryListenerForObserver = function (queryId, options, observer) {
        var _this = this;
        function invoke(method, argument) {
            if (observer[method]) {
                try {
                    observer[method](argument);
                }
                catch (e) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error(e);
                }
            }
            else if (method === 'error') {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error(argument);
            }
        }
        return function (queryStoreValue, newData) {
            _this.invalidate(queryId, false);
            if (!queryStoreValue)
                return;
            var _a = _this.getQuery(queryId), observableQuery = _a.observableQuery, document = _a.document;
            var fetchPolicy = observableQuery
                ? observableQuery.options.fetchPolicy
                : options.fetchPolicy;
            if (fetchPolicy === 'standby')
                return;
            var loading = isNetworkRequestInFlight(queryStoreValue.networkStatus);
            var lastResult = observableQuery && observableQuery.getLastResult();
            var networkStatusChanged = !!(lastResult &&
                lastResult.networkStatus !== queryStoreValue.networkStatus);
            var shouldNotifyIfLoading = options.returnPartialData ||
                (!newData && queryStoreValue.previousVariables) ||
                (networkStatusChanged && options.notifyOnNetworkStatusChange) ||
                fetchPolicy === 'cache-only' ||
                fetchPolicy === 'cache-and-network';
            if (loading && !shouldNotifyIfLoading) {
                return;
            }
            var hasGraphQLErrors = isNonEmptyArray(queryStoreValue.graphQLErrors);
            var errorPolicy = observableQuery
                && observableQuery.options.errorPolicy
                || options.errorPolicy
                || 'none';
            if (errorPolicy === 'none' && hasGraphQLErrors || queryStoreValue.networkError) {
                return invoke('error', new ApolloError({
                    graphQLErrors: queryStoreValue.graphQLErrors,
                    networkError: queryStoreValue.networkError,
                }));
            }
            try {
                var data = void 0;
                var isMissing = void 0;
                if (newData) {
                    if (fetchPolicy !== 'no-cache' && fetchPolicy !== 'network-only') {
                        _this.setQuery(queryId, function () { return ({ newData: null }); });
                    }
                    data = newData.result;
                    isMissing = !newData.complete;
                }
                else {
                    var lastError = observableQuery && observableQuery.getLastError();
                    var errorStatusChanged = errorPolicy !== 'none' &&
                        (lastError && lastError.graphQLErrors) !==
                            queryStoreValue.graphQLErrors;
                    if (lastResult && lastResult.data && !errorStatusChanged) {
                        data = lastResult.data;
                        isMissing = false;
                    }
                    else {
                        var diffResult = _this.dataStore.getCache().diff({
                            query: document,
                            variables: queryStoreValue.previousVariables ||
                                queryStoreValue.variables,
                            returnPartialData: true,
                            optimistic: true,
                        });
                        data = diffResult.result;
                        isMissing = !diffResult.complete;
                    }
                }
                var stale = isMissing && !(options.returnPartialData ||
                    fetchPolicy === 'cache-only');
                var resultFromStore = {
                    data: stale ? lastResult && lastResult.data : data,
                    loading: loading,
                    networkStatus: queryStoreValue.networkStatus,
                    stale: stale,
                };
                if (errorPolicy === 'all' && hasGraphQLErrors) {
                    resultFromStore.errors = queryStoreValue.graphQLErrors;
                }
                invoke('next', resultFromStore);
            }
            catch (networkError) {
                invoke('error', new ApolloError({ networkError: networkError }));
            }
        };
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var cache = this.dataStore.getCache();
            var transformed = cache.transformDocument(document);
            var forLink = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["removeConnectionDirectiveFromDocument"])(cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasClientExports"])(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getDefaultValues"])(Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getOperationDefinition"])(transformed)),
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options, shouldSubscribe) {
        if (shouldSubscribe === void 0) { shouldSubscribe = true; }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.fetchPolicy !== 'standby', 'client.watchQuery cannot be called with fetchPolicy set to "standby"');
        options.variables = this.getVariables(options.query, options.variables);
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var transformedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options);
        return new ObservableQuery({
            queryManager: this,
            options: transformedOptions,
            shouldSubscribe: shouldSubscribe,
        });
    };
    QueryManager.prototype.query = function (options) {
        var _this = this;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!options.pollInterval, 'pollInterval option only supported on watchQuery.');
        return new Promise(function (resolve, reject) {
            var watchedQuery = _this.watchQuery(options, false);
            _this.fetchQueryRejectFns.set("query:" + watchedQuery.queryId, reject);
            watchedQuery
                .result()
                .then(resolve, reject)
                .then(function () {
                return _this.fetchQueryRejectFns.delete("query:" + watchedQuery.queryId);
            });
        });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.idCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        this.stopPollingQuery(queryId);
        this.queryStore.stopQuery(queryId);
        this.invalidate(queryId);
    };
    QueryManager.prototype.addQueryListener = function (queryId, listener) {
        this.setQuery(queryId, function (_a) {
            var listeners = _a.listeners;
            listeners.add(listener);
            return { invalidated: false };
        });
    };
    QueryManager.prototype.updateQueryWatch = function (queryId, document, options) {
        var _this = this;
        var cancel = this.getQuery(queryId).cancel;
        if (cancel)
            cancel();
        var previousResult = function () {
            var previousResult = null;
            var observableQuery = _this.getQuery(queryId).observableQuery;
            if (observableQuery) {
                var lastResult = observableQuery.getLastResult();
                if (lastResult) {
                    previousResult = lastResult.data;
                }
            }
            return previousResult;
        };
        return this.dataStore.getCache().watch({
            query: document,
            variables: options.variables,
            optimistic: true,
            previousResult: previousResult,
            callback: function (newData) {
                _this.setQuery(queryId, function () { return ({ invalidated: true, newData: newData }); });
            },
        });
    };
    QueryManager.prototype.addObservableQuery = function (queryId, observableQuery) {
        this.setQuery(queryId, function () { return ({ observableQuery: observableQuery }); });
    };
    QueryManager.prototype.removeObservableQuery = function (queryId) {
        var cancel = this.getQuery(queryId).cancel;
        this.setQuery(queryId, function () { return ({ observableQuery: null }); });
        if (cancel)
            cancel();
    };
    QueryManager.prototype.clearStore = function () {
        this.fetchQueryRejectFns.forEach(function (reject) {
            reject( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]('Store reset while query was in flight (not completed in link chain)'));
        });
        var resetIds = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (observableQuery)
                resetIds.push(queryId);
        });
        this.queryStore.reset(resetIds);
        this.mutationStore.reset();
        return this.dataStore.reset();
    };
    QueryManager.prototype.resetStore = function () {
        var _this = this;
        return this.clearStore().then(function () {
            return _this.reFetchObservableQueries();
        });
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (observableQuery) {
                var fetchPolicy = observableQuery.options.fetchPolicy;
                observableQuery.resetLastResults();
                if (fetchPolicy !== 'cache-only' &&
                    (includeStandby || fetchPolicy !== 'standby')) {
                    observableQueryPromises.push(observableQuery.refetch());
                }
                _this.setQuery(queryId, function () { return ({ newData: null }); });
                _this.invalidate(queryId);
            }
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.observeQuery = function (queryId, options, observer) {
        this.addQueryListener(queryId, this.queryListenerForObserver(queryId, options, observer));
        return this.fetchQuery(queryId, options);
    };
    QueryManager.prototype.startQuery = function (queryId, options, listener) {
         false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn("The QueryManager.startQuery method has been deprecated");
        this.addQueryListener(queryId, listener);
        this.fetchQuery(queryId, options)
            .catch(function () { return undefined; });
        return queryId;
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, variables = _a.variables;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, {}, variables, false).map(function (result) {
                if (!fetchPolicy || fetchPolicy !== 'no-cache') {
                    _this.dataStore.markSubscriptionResult(result, query, variables);
                    _this.broadcastQueries();
                }
                if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result)) {
                    throw new ApolloError({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables).then(makeObservable);
            return new Observable(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchQueryRejectFns.delete("query:" + queryId);
        this.fetchQueryRejectFns.delete("fetchRequest:" + queryId);
        this.getQuery(queryId).subscriptions.forEach(function (x) { return x.unsubscribe(); });
        this.queries.delete(queryId);
    };
    QueryManager.prototype.getCurrentQueryResult = function (observableQuery, optimistic) {
        if (optimistic === void 0) { optimistic = true; }
        var _a = observableQuery.options, variables = _a.variables, query = _a.query, fetchPolicy = _a.fetchPolicy, returnPartialData = _a.returnPartialData;
        var lastResult = observableQuery.getLastResult();
        var newData = this.getQuery(observableQuery.queryId).newData;
        if (newData && newData.complete) {
            return { data: newData.result, partial: false };
        }
        if (fetchPolicy === 'no-cache' || fetchPolicy === 'network-only') {
            return { data: undefined, partial: false };
        }
        var _b = this.dataStore.getCache().diff({
            query: query,
            variables: variables,
            previousResult: lastResult ? lastResult.data : undefined,
            returnPartialData: true,
            optimistic: optimistic,
        }), result = _b.result, complete = _b.complete;
        return {
            data: (complete || returnPartialData) ? result : void 0,
            partial: !complete,
        };
    };
    QueryManager.prototype.getQueryWithPreviousResult = function (queryIdOrObservable) {
        var observableQuery;
        if (typeof queryIdOrObservable === 'string') {
            var foundObserveableQuery = this.getQuery(queryIdOrObservable).observableQuery;
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(foundObserveableQuery, "ObservableQuery with this id doesn't exist: " + queryIdOrObservable);
            observableQuery = foundObserveableQuery;
        }
        else {
            observableQuery = queryIdOrObservable;
        }
        var _a = observableQuery.options, variables = _a.variables, query = _a.query;
        return {
            previousResult: this.getCurrentQueryResult(observableQuery, false).data,
            variables: variables,
            document: query,
        };
    };
    QueryManager.prototype.broadcastQueries = function () {
        var _this = this;
        this.onBroadcast();
        this.queries.forEach(function (info, id) {
            if (info.invalidated) {
                info.listeners.forEach(function (listener) {
                    if (listener) {
                        listener(_this.queryStore.get(id), info.newData);
                    }
                });
            }
        });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        if (deduplication === void 0) { deduplication = this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _a = this, inFlightLinkObservables_1 = _a.inFlightLinkObservables, link = _a.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getOperationName"])(serverQuery) || void 0,
                context: this.prepareContext(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = JSON.stringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    byVariables_1.set(varJson_1, observable = multiplex(Object(apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"])(link, operation)));
                    var cleanup = function () {
                        byVariables_1.delete(varJson_1);
                        if (!byVariables_1.size)
                            inFlightLinkObservables_1.delete(serverQuery);
                        cleanupSub_1.unsubscribe();
                    };
                    var cleanupSub_1 = observable.subscribe({
                        next: cleanup,
                        error: cleanup,
                        complete: cleanup,
                    });
                }
            }
            else {
                observable = multiplex(Object(apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"])(link, operation));
            }
        }
        else {
            observable = Observable.of({ data: {} });
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = asyncMap(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.fetchRequest = function (_a) {
        var _this = this;
        var requestId = _a.requestId, queryId = _a.queryId, document = _a.document, options = _a.options, fetchMoreForQueryId = _a.fetchMoreForQueryId;
        var variables = options.variables, _b = options.errorPolicy, errorPolicy = _b === void 0 ? 'none' : _b, fetchPolicy = options.fetchPolicy;
        var resultFromStore;
        var errorsFromStore;
        return new Promise(function (resolve, reject) {
            var observable = _this.getObservableFromLink(document, options.context, variables);
            var fqrfId = "fetchRequest:" + queryId;
            _this.fetchQueryRejectFns.set(fqrfId, reject);
            var cleanup = function () {
                _this.fetchQueryRejectFns.delete(fqrfId);
                _this.setQuery(queryId, function (_a) {
                    var subscriptions = _a.subscriptions;
                    subscriptions.delete(subscription);
                });
            };
            var subscription = observable.map(function (result) {
                if (requestId >= _this.getQuery(queryId).lastRequestId) {
                    _this.markQueryResult(queryId, result, options, fetchMoreForQueryId);
                    _this.queryStore.markQueryResult(queryId, result, fetchMoreForQueryId);
                    _this.invalidate(queryId);
                    _this.invalidate(fetchMoreForQueryId);
                    _this.broadcastQueries();
                }
                if (errorPolicy === 'none' && isNonEmptyArray(result.errors)) {
                    return reject(new ApolloError({
                        graphQLErrors: result.errors,
                    }));
                }
                if (errorPolicy === 'all') {
                    errorsFromStore = result.errors;
                }
                if (fetchMoreForQueryId || fetchPolicy === 'no-cache') {
                    resultFromStore = result.data;
                }
                else {
                    var _a = _this.dataStore.getCache().diff({
                        variables: variables,
                        query: document,
                        optimistic: false,
                        returnPartialData: true,
                    }), result_1 = _a.result, complete = _a.complete;
                    if (complete || options.returnPartialData) {
                        resultFromStore = result_1;
                    }
                }
            }).subscribe({
                error: function (error) {
                    cleanup();
                    reject(error);
                },
                complete: function () {
                    cleanup();
                    resolve({
                        data: resultFromStore,
                        errors: errorsFromStore,
                        loading: false,
                        networkStatus: NetworkStatus.ready,
                        stale: false,
                    });
                },
            });
            _this.setQuery(queryId, function (_a) {
                var subscriptions = _a.subscriptions;
                subscriptions.add(subscription);
            });
        });
    };
    QueryManager.prototype.getQuery = function (queryId) {
        return (this.queries.get(queryId) || {
            listeners: new Set(),
            invalidated: false,
            document: null,
            newData: null,
            lastRequestId: 1,
            observableQuery: null,
            subscriptions: new Set(),
        });
    };
    QueryManager.prototype.setQuery = function (queryId, updater) {
        var prev = this.getQuery(queryId);
        var newInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prev), updater(prev));
        this.queries.set(queryId, newInfo);
    };
    QueryManager.prototype.invalidate = function (queryId, invalidated) {
        if (invalidated === void 0) { invalidated = true; }
        if (queryId) {
            this.setQuery(queryId, function () { return ({ invalidated: invalidated }); });
        }
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, newContext), { clientAwareness: this.clientAwareness });
    };
    QueryManager.prototype.checkInFlight = function (queryId) {
        var query = this.queryStore.get(queryId);
        return (query &&
            query.networkStatus !== NetworkStatus.ready &&
            query.networkStatus !== NetworkStatus.error);
    };
    QueryManager.prototype.startPollingQuery = function (options, queryId, listener) {
        var _this = this;
        var pollInterval = options.pollInterval;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(pollInterval, 'Attempted to start a polling query without a polling interval.');
        if (!this.ssrMode) {
            var info = this.pollingInfoByQueryId.get(queryId);
            if (!info) {
                this.pollingInfoByQueryId.set(queryId, (info = {}));
            }
            info.interval = pollInterval;
            info.options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { fetchPolicy: 'network-only' });
            var maybeFetch_1 = function () {
                var info = _this.pollingInfoByQueryId.get(queryId);
                if (info) {
                    if (_this.checkInFlight(queryId)) {
                        poll_1();
                    }
                    else {
                        _this.fetchQuery(queryId, info.options, FetchType.poll).then(poll_1, poll_1);
                    }
                }
            };
            var poll_1 = function () {
                var info = _this.pollingInfoByQueryId.get(queryId);
                if (info) {
                    clearTimeout(info.timeout);
                    info.timeout = setTimeout(maybeFetch_1, info.interval);
                }
            };
            if (listener) {
                this.addQueryListener(queryId, listener);
            }
            poll_1();
        }
        return queryId;
    };
    QueryManager.prototype.stopPollingQuery = function (queryId) {
        this.pollingInfoByQueryId.delete(queryId);
    };
    return QueryManager;
}());

var DataStore = (function () {
    function DataStore(initialCache) {
        this.cache = initialCache;
    }
    DataStore.prototype.getCache = function () {
        return this.cache;
    };
    DataStore.prototype.markQueryResult = function (result, document, variables, fetchMoreForQueryId, ignoreErrors) {
        if (ignoreErrors === void 0) { ignoreErrors = false; }
        var writeWithErrors = !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result);
        if (ignoreErrors && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result) && result.data) {
            writeWithErrors = true;
        }
        if (!fetchMoreForQueryId && writeWithErrors) {
            this.cache.write({
                result: result.data,
                dataId: 'ROOT_QUERY',
                query: document,
                variables: variables,
            });
        }
    };
    DataStore.prototype.markSubscriptionResult = function (result, document, variables) {
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result)) {
            this.cache.write({
                result: result.data,
                dataId: 'ROOT_SUBSCRIPTION',
                query: document,
                variables: variables,
            });
        }
    };
    DataStore.prototype.markMutationInit = function (mutation) {
        var _this = this;
        if (mutation.optimisticResponse) {
            var optimistic_1;
            if (typeof mutation.optimisticResponse === 'function') {
                optimistic_1 = mutation.optimisticResponse(mutation.variables);
            }
            else {
                optimistic_1 = mutation.optimisticResponse;
            }
            this.cache.recordOptimisticTransaction(function (c) {
                var orig = _this.cache;
                _this.cache = c;
                try {
                    _this.markMutationResult({
                        mutationId: mutation.mutationId,
                        result: { data: optimistic_1 },
                        document: mutation.document,
                        variables: mutation.variables,
                        updateQueries: mutation.updateQueries,
                        update: mutation.update,
                    });
                }
                finally {
                    _this.cache = orig;
                }
            }, mutation.mutationId);
        }
    };
    DataStore.prototype.markMutationResult = function (mutation) {
        var _this = this;
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(mutation.result)) {
            var cacheWrites_1 = [{
                    result: mutation.result.data,
                    dataId: 'ROOT_MUTATION',
                    query: mutation.document,
                    variables: mutation.variables,
                }];
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                Object.keys(updateQueries_1).forEach(function (id) {
                    var _a = updateQueries_1[id], query = _a.query, updater = _a.updater;
                    var _b = _this.cache.diff({
                        query: query.document,
                        variables: query.variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _b.result, complete = _b.complete;
                    if (complete) {
                        var nextQueryResult = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["tryFunctionOrLogError"])(function () {
                            return updater(currentQueryResult, {
                                mutationResult: mutation.result,
                                queryName: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getOperationName"])(query.document) || undefined,
                                queryVariables: query.variables,
                            });
                        });
                        if (nextQueryResult) {
                            cacheWrites_1.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: query.document,
                                variables: query.variables,
                            });
                        }
                    }
                });
            }
            this.cache.performTransaction(function (c) {
                cacheWrites_1.forEach(function (write) { return c.write(write); });
                var update = mutation.update;
                if (update) {
                    Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["tryFunctionOrLogError"])(function () { return update(c, mutation.result); });
                }
            });
        }
    };
    DataStore.prototype.markMutationComplete = function (_a) {
        var mutationId = _a.mutationId, optimisticResponse = _a.optimisticResponse;
        if (optimisticResponse) {
            this.cache.removeOptimistic(mutationId);
        }
    };
    DataStore.prototype.markUpdateQueryResult = function (document, variables, newResult) {
        this.cache.write({
            result: newResult,
            dataId: 'ROOT_QUERY',
            variables: variables,
            query: document,
        });
    };
    DataStore.prototype.reset = function () {
        return this.cache.reset();
    };
    return DataStore;
}());

var version = "2.6.10";

var hasSuggestedDevtools = false;
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, connectToDevTools = options.connectToDevTools, _c = options.queryDeduplication, queryDeduplication = _c === void 0 ? true : _c, defaultOptions = options.defaultOptions, _d = options.assumeImmutableResults, assumeImmutableResults = _d === void 0 ? false : _d, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link && resolvers) {
            link = apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"].empty();
        }
        if (!link || !cache) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]("In order to initialize Apollo Client, you must specify 'link' and 'cache' properties in the options object.\n" +
                "These options are part of the upgrade requirements when migrating from Apollo Client 1.x to Apollo Client 2.x.\n" +
                "For more information, please visit: https://www.apollographql.com/docs/tutorial/client.html#apollo-client-setup");
        }
        this.link = link;
        this.cache = cache;
        this.store = new DataStore(cache);
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || {};
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        var defaultConnectToDevTools =  true &&
            typeof window !== 'undefined' &&
            !window.__APOLLO_CLIENT__;
        if (typeof connectToDevTools === 'undefined'
            ? defaultConnectToDevTools
            : connectToDevTools && typeof window !== 'undefined') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && "development" !== 'production') {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self) {
                if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
                    if (window.navigator &&
                        window.navigator.userAgent &&
                        window.navigator.userAgent.indexOf('Chrome') > -1) {
                        console.debug('Download the Apollo DevTools ' +
                            'for a better development experience: ' +
                            'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm');
                    }
                }
            }
        }
        this.version = version;
        this.localState = new LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new QueryManager({
            link: this.link,
            store: this.store,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.queryStore.getStore(),
                            mutations: _this.queryManager.mutationStore.getStore(),
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            },
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.watchQuery), options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.query), options);
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.');
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.mutate), options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        var result = this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient.prototype.writeFragment = function (options) {
        var result = this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient.prototype.writeData = function (options) {
        var result = this.cache.writeData(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return Object(apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"])(this.link, payload);
    };
    ApolloClient.prototype.initQueryManager = function () {
         false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn('Calling the initQueryManager method is no longer necessary, ' +
            'and it will be removed from ApolloClient in version 3.0.');
        return this.queryManager;
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    return ApolloClient;
}());

/* harmony default export */ __webpack_exports__["default"] = (ApolloClient);

//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link/lib/bundle.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/apollo-link/lib/bundle.esm.js ***!
  \****************************************************/
/*! exports provided: Observable, getOperationName, ApolloLink, concat, createOperation, empty, execute, from, fromError, fromPromise, makePromise, split, toPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return ApolloLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return createOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return fromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return makePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable-ts */ "./node_modules/zen-observable-ts/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getOperationName"]; });








function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("illegal argument: " + key);
        }
    }
    return operation;
}
var LinkError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
function isTerminating(link) {
    return link.request.length <= 1;
}
function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
var makePromise = toPromise;
function fromPromise(promise) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
function fromError(errorValue) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        observer.error(errorValue);
    });
}
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getOperationName"])(transformedOperation.query)
                : '';
    }
    return transformedOperation;
}
function createOperation(starting, operation) {
    var context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next(context));
        }
        else {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next);
        }
    };
    var getContext = function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    Object.defineProperty(operation, 'toKey', {
        enumerable: false,
        value: function () { return getKey(operation); },
    });
    return operation;
}
function getKey(operation) {
    var query = operation.query, variables = operation.variables, operationName = operation.operationName;
    return JSON.stringify([operationName, query, variables]);
}

function passthrough(op, forward) {
    return forward ? forward(op) : zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function empty() {
    return new ApolloLink(function () { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); });
}
function from(links) {
    if (links.length === 0)
        return empty();
    return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
}
function split(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
        return new ApolloLink(function (operation) {
            return test(operation)
                ? leftLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return test(operation)
                ? leftLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
}
var concat = function (first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
         false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
        return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
        return new ApolloLink(function (operation) {
            return firstLink.request(operation, function (op) { return nextLink.request(op) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return (firstLink.request(operation, function (op) {
                return nextLink.request(op, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
            }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
        });
    }
};
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('request is not implemented');
    };
    ApolloLink.empty = empty;
    ApolloLink.from = from;
    ApolloLink.split = split;
    ApolloLink.execute = execute;
    return ApolloLink;
}());
function execute(link, operation) {
    return (link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-utilities/lib/bundle.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/bundle.esm.js ***!
  \*********************************************************/
/*! exports provided: isEqual, addTypenameToDocument, argumentsObjectFromField, assign, buildQueryFromSelectionSet, canUseWeakMap, checkDocument, cloneDeep, createFragmentMap, getDefaultValues, getDirectiveInfoFromField, getDirectiveNames, getDirectivesFromDocument, getEnv, getFragmentDefinition, getFragmentDefinitions, getFragmentQueryDocument, getInclusionDirectives, getMainDefinition, getMutationDefinition, getOperationDefinition, getOperationDefinitionOrDie, getOperationName, getQueryDefinition, getStoreKeyName, graphQLResultHasError, hasClientExports, hasDirectives, isDevelopment, isEnv, isField, isIdValue, isInlineFragment, isJsonValue, isNumberValue, isProduction, isScalarValue, isTest, maybeDeepFreeze, mergeDeep, mergeDeepArray, removeArgumentsFromDocument, removeClientSetsFromDocument, removeConnectionDirectiveFromDocument, removeDirectivesFromDocument, removeFragmentSpreadFromDocument, resultKeyNameFromField, shouldInclude, storeKeyNameFromField, stripSymbols, toIdValue, tryFunctionOrLogError, valueFromNode, valueToObjectRepresentation, variablesInOperation, warnOnceInDevelopment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return addTypenameToDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return argumentsObjectFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryFromSelectionSet", function() { return buildQueryFromSelectionSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseWeakMap", function() { return canUseWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return checkDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return cloneDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return createFragmentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return getDefaultValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveInfoFromField", function() { return getDirectiveInfoFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return getDirectiveNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectivesFromDocument", function() { return getDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return getFragmentDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return getFragmentDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return getFragmentQueryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInclusionDirectives", function() { return getInclusionDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return getMainDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMutationDefinition", function() { return getMutationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return getOperationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinitionOrDie", function() { return getOperationDefinitionOrDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return getOperationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return getQueryDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return getStoreKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return graphQLResultHasError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClientExports", function() { return hasClientExports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return hasDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return isDevelopment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnv", function() { return isEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return isField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIdValue", function() { return isIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return isInlineFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsonValue", function() { return isJsonValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberValue", function() { return isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarValue", function() { return isScalarValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTest", function() { return isTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return maybeDeepFreeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepArray", function() { return mergeDeepArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArgumentsFromDocument", function() { return removeArgumentsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClientSetsFromDocument", function() { return removeClientSetsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return removeConnectionDirectiveFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return removeDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFragmentSpreadFromDocument", function() { return removeFragmentSpreadFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return resultKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return shouldInclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return storeKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripSymbols", function() { return stripSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIdValue", function() { return toIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFunctionOrLogError", function() { return tryFunctionOrLogError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromNode", function() { return valueFromNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return valueToObjectRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variablesInOperation", function() { return variablesInOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnceInDevelopment", function() { return warnOnceInDevelopment; });
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-json-stable-stringify */ "./node_modules/fast-json-stable-stringify/index.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"]; });







function isScalarValue(value) {
    return ['StringValue', 'BooleanValue', 'EnumValue'].indexOf(value.kind) > -1;
}
function isNumberValue(value) {
    return ['IntValue', 'FloatValue'].indexOf(value.kind) > -1;
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.');
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
function getStoreKeyName(fieldName, args, directives) {
    if (directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var queryArgs_1 = args;
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = queryArgs_1[key];
            });
            return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3___default()(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
            }
            else {
                completeFieldName += "@" + key;
            }
        });
    }
    return completeFieldName;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
function isIdValue(idObject) {
    return idObject &&
        idObject.type === 'id' &&
        typeof idObject.generated === 'boolean';
}
function toIdValue(idConfig, generated) {
    if (generated === void 0) { generated = false; }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ type: 'id', generated: generated }, (typeof idConfig === 'string'
        ? { id: idConfig, typename: undefined }
        : idConfig));
}
function isJsonValue(jsonObject) {
    return (jsonObject != null &&
        typeof jsonObject === 'object' &&
        jsonObject.type === 'json');
}
function defaultValueFromVariable(node) {
    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Variable nodes are not supported by valueFromNode");
}
function valueFromNode(node, onVariable) {
    if (onVariable === void 0) { onVariable = defaultValueFromVariable; }
    switch (node.kind) {
        case 'Variable':
            return onVariable(node);
        case 'NullValue':
            return null;
        case 'IntValue':
            return parseInt(node.value, 10);
        case 'FloatValue':
            return parseFloat(node.value);
        case 'ListValue':
            return node.values.map(function (v) { return valueFromNode(v, onVariable); });
        case 'ObjectValue': {
            var value = {};
            for (var _i = 0, _a = node.fields; _i < _a.length; _i++) {
                var field = _a[_i];
                value[field.name.value] = valueFromNode(field.value, onVariable);
            }
            return value;
        }
        default:
            return node.value;
    }
}

function getDirectiveInfoFromField(field, variables) {
    if (field.directives && field.directives.length) {
        var directiveObj_1 = {};
        field.directives.forEach(function (directive) {
            directiveObj_1[directive.name.value] = argumentsObjectFromField(directive, variables);
        });
        return directiveObj_1;
    }
    return null;
}
function shouldInclude(selection, variables) {
    if (variables === void 0) { variables = {}; }
    return getInclusionDirectives(selection.directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables[ifArgument.value.name.value];
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.");
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(doc) {
    var names = [];
    Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
function hasDirectives(names, doc) {
    return getDirectiveNames(doc).some(function (name) { return names.indexOf(name) > -1; });
}
function hasClientExports(document) {
    return (document &&
        hasDirectives(['client'], document) &&
        hasDirectives(['export'], document));
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    return directives ? directives.filter(isInclusionDirective).map(function (directive) {
        var directiveArguments = directive.arguments;
        var directiveName = directive.name.value;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.");
        var ifArgument = directiveArguments[0];
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.");
        var ifValue = ifArgument.value;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(ifValue &&
            (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
        return { directive: directive, ifArgument: ifArgument };
    }) : [];
}

function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
        actualFragmentName = fragments[0].name.value;
    }
    var query = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, document), { definitions: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions) });
    return query;
}

function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        if (typeof source === 'undefined' || source === null) {
            return;
        }
        Object.keys(source).forEach(function (key) {
            target[key] = source[key];
        });
    });
    return target;
}

function getMutationDefinition(doc) {
    checkDocument(doc);
    var mutationDef = doc.definitions.filter(function (definition) {
        return definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation';
    })[0];
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(mutationDef, 'Must contain a mutation definition.');
    return mutationDef;
}
function checkDocument(doc) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
        }
        return definition;
    });
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations");
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationDefinitionOrDie(document) {
    var def = getOperationDefinition(document);
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(def, "GraphQL document is missing an operation");
    return def;
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(queryDef && queryDef.operation === 'query', 'Must contain a query definition.');
    return queryDef;
}
function getFragmentDefinition(doc) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc.definitions.length <= 1, 'Fragment must have exactly one definition.');
    var fragmentDef = doc.definitions[0];
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.');
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getDefaultValues(definition) {
    if (definition &&
        definition.variableDefinitions &&
        definition.variableDefinitions.length) {
        var defaultValues = definition.variableDefinitions
            .filter(function (_a) {
            var defaultValue = _a.defaultValue;
            return defaultValue;
        })
            .map(function (_a) {
            var variable = _a.variable, defaultValue = _a.defaultValue;
            var defaultValueObj = {};
            valueToObjectRepresentation(defaultValueObj, variable.name, defaultValue);
            return defaultValueObj;
        });
        return assign.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([{}], defaultValues));
    }
    return {};
}
function variablesInOperation(operation) {
    var names = new Set();
    if (operation.variableDefinitions) {
        for (var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++) {
            var definition = _a[_i];
            names.add(definition.variable.name.value);
        }
    }
    return names;
}

function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}

var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function (selection) {
        return selection.kind === 'FragmentSpread' &&
            isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                    if (shouldRemoveField &&
                        node.directives &&
                        node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) {
                            node.arguments.forEach(function (arg) {
                                if (arg.value.kind === 'Variable') {
                                    variablesToRemove.push({
                                        name: arg.value.name.value,
                                    });
                                }
                            });
                        }
                        if (node.selectionSet) {
                            getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                                fragmentSpreadsToRemove.push({
                                    name: frag.name.value,
                                });
                            });
                        }
                        return null;
                    }
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        filterInPlace(variablesToRemove, function (v) { return !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        filterInPlace(fragmentSpreadsToRemove, function (fs) { return !fragmentSpreadsInUse[fs.name]; })
            .length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
function addTypenameToDocument(doc) {
    return Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(checkDocument(doc), {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return (isField(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if (isField(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), { selections: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(selections, [TYPENAME_FIELD]) });
            },
        },
    });
}
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    return (selectionSet &&
        selectionSet.selections &&
        selectionSet.selections.some(function (selection) {
            return hasDirectivesInSelection(directives, selection, nestedCheck);
        }));
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    if (!isField(selection)) {
        return true;
    }
    if (!selection.directives) {
        return false;
    }
    return (selection.directives.some(getDirectiveMatcher(directives)) ||
        (nestedCheck &&
            hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck)));
}
function getDirectivesFromDocument(directives, doc) {
    checkDocument(doc);
    var parentPath;
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        SelectionSet: {
            enter: function (node, _key, _parent, path) {
                var currentPath = path.join('-');
                if (!parentPath ||
                    currentPath === parentPath ||
                    !currentPath.startsWith(parentPath)) {
                    if (node.selections) {
                        var selectionsWithDirectives = node.selections.filter(function (selection) { return hasDirectivesInSelection(directives, selection); });
                        if (hasDirectivesInSelectionSet(directives, node, false)) {
                            parentPath = currentPath;
                        }
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), { selections: selectionsWithDirectives });
                    }
                    else {
                        return null;
                    }
                }
            },
        },
    }));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        OperationDefinition: {
            enter: function (node) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), { variableDefinitions: node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    node.arguments.forEach(function (arg) {
                        if (argMatcher(arg)) {
                            argMatchCount_1 += 1;
                        }
                    });
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if ((isField(selection) || isInlineFragment(selection)) &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = getMainDefinition(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(document, {
        OperationDefinition: {
            enter: function (node) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    checkDocument(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    if (modifiedDoc) {
        modifiedDoc = Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(modifiedDoc, {
            FragmentDefinition: {
                enter: function (node) {
                    if (node.selectionSet) {
                        var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
                            return isField(selection) && selection.name.value === '__typename';
                        });
                        if (isTypenameOnly) {
                            return null;
                        }
                    }
                },
            },
        });
    }
    return modifiedDoc;
}

var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' &&
    navigator.product === 'ReactNative');

var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value, new Map());
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}

function getEnv() {
    if (typeof process !== 'undefined' && "development") {
        return "development";
    }
    return 'development';
}
function isEnv(env) {
    return getEnv() === env;
}
function isProduction() {
    return isEnv('production') === true;
}
function isDevelopment() {
    return isEnv('development') === true;
}
function isTest() {
    return isEnv('test') === true;
}

function tryFunctionOrLogError(f) {
    try {
        return f();
    }
    catch (e) {
        if (console.error) {
            console.error(e);
        }
    }
}
function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
}

function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
}
function maybeDeepFreeze(obj) {
    if (isDevelopment() || isTest()) {
        var symbolIsPolyfilled = typeof Symbol === 'function' && typeof Symbol('') === 'string';
        if (!symbolIsPolyfilled) {
            return deepFreeze(obj);
        }
    }
    return obj;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var pastCopies = [];
        target = shallowCopyForMerge(target, pastCopies);
        for (var i = 1; i < count; ++i) {
            target = mergeHelper(target, sources[i], pastCopies);
        }
    }
    return target;
}
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}
function mergeHelper(target, source, pastCopies) {
    if (isObject(source) && isObject(target)) {
        if (Object.isExtensible && !Object.isExtensible(target)) {
            target = shallowCopyForMerge(target, pastCopies);
        }
        Object.keys(source).forEach(function (sourceKey) {
            var sourceValue = source[sourceKey];
            if (hasOwnProperty.call(target, sourceKey)) {
                var targetValue = target[sourceKey];
                if (sourceValue !== targetValue) {
                    target[sourceKey] = mergeHelper(shallowCopyForMerge(targetValue, pastCopies), sourceValue, pastCopies);
                }
            }
            else {
                target[sourceKey] = sourceValue;
            }
        });
        return target;
    }
    return source;
}
function shallowCopyForMerge(value, pastCopies) {
    if (value !== null &&
        typeof value === 'object' &&
        pastCopies.indexOf(value) < 0) {
        if (Array.isArray(value)) {
            value = value.slice(0);
        }
        else {
            value = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ __proto__: Object.getPrototypeOf(value) }, value);
        }
        pastCopies.push(value);
    }
    return value;
}

var haveWarned = Object.create({});
function warnOnceInDevelopment(msg, type) {
    if (type === void 0) { type = 'warn'; }
    if (!isProduction() && !haveWarned[msg]) {
        if (!isTest()) {
            haveWarned[msg] = true;
        }
        if (type === 'error') {
            console.error(msg);
        }
        else {
            console.warn(msg);
        }
    }
}

function stripSymbols(data) {
    return JSON.parse(JSON.stringify(data));
}


//# sourceMappingURL=bundle.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/fast-json-stable-stringify/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/fast-json-stable-stringify/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);

        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for (i = 0; i < node.length; i++) {
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }

        if (node === null) return 'null';

        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }

        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = stringify(node[key]);

            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    })(data);
};


/***/ }),

/***/ "./node_modules/graphql-tag/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphql-tag/src/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(/*! graphql/language/parser */ "./node_modules/graphql/language/parser.mjs");

var parse = parser.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

var experimentalFragmentVariables = false;
function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;
gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

module.exports = gql;


/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/*! exports provided: GraphQLError, printError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return GraphQLError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return printError; });
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _language_location_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/location.mjs */ "./node_modules/graphql/language/location.mjs");
/* harmony import */ var _language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/printLocation.mjs */ "./node_modules/graphql/language/printLocation.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// FIXME:
// flowlint uninitialized-instance-property:off




/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

var GraphQLError = /*#__PURE__*/function (_Error) {
  _inherits(GraphQLError, _Error);

  var _super = _createSuper(GraphQLError);

  /**
   * A message describing the Error for debugging purposes.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   *
   * Note: should be treated as readonly, despite invariant usage.
   */

  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */
  function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
    var _locations2, _source2, _positions2, _extensions2;

    var _this;

    _classCallCheck(this, GraphQLError);

    _this = _super.call(this, message); // Compute list of blame nodes.

    var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


    var _source = source;

    if (!_source && _nodes) {
      var _nodes$0$loc;

      _source = (_nodes$0$loc = _nodes[0].loc) === null || _nodes$0$loc === void 0 ? void 0 : _nodes$0$loc.source;
    }

    var _positions = positions;

    if (!_positions && _nodes) {
      _positions = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(node.loc.start);
        }

        return list;
      }, []);
    }

    if (_positions && _positions.length === 0) {
      _positions = undefined;
    }

    var _locations;

    if (positions && source) {
      _locations = positions.map(function (pos) {
        return Object(_language_location_mjs__WEBPACK_IMPORTED_MODULE_2__["getLocation"])(source, pos);
      });
    } else if (_nodes) {
      _locations = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(Object(_language_location_mjs__WEBPACK_IMPORTED_MODULE_2__["getLocation"])(node.loc.source, node.loc.start));
        }

        return list;
      }, []);
    }

    var _extensions = extensions;

    if (_extensions == null && originalError != null) {
      var originalExtensions = originalError.extensions;

      if (Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(originalExtensions)) {
        _extensions = originalExtensions;
      }
    }

    Object.defineProperties(_assertThisInitialized(_this), {
      name: {
        value: 'GraphQLError'
      },
      message: {
        value: message,
        // By being enumerable, JSON.stringify will include `message` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: true,
        writable: true
      },
      locations: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_locations2 = _locations) !== null && _locations2 !== void 0 ? _locations2 : undefined,
        // By being enumerable, JSON.stringify will include `locations` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _locations != null
      },
      path: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: path !== null && path !== void 0 ? path : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: path != null
      },
      nodes: {
        value: _nodes !== null && _nodes !== void 0 ? _nodes : undefined
      },
      source: {
        value: (_source2 = _source) !== null && _source2 !== void 0 ? _source2 : undefined
      },
      positions: {
        value: (_positions2 = _positions) !== null && _positions2 !== void 0 ? _positions2 : undefined
      },
      originalError: {
        value: originalError
      },
      extensions: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_extensions2 = _extensions) !== null && _extensions2 !== void 0 ? _extensions2 : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _extensions != null
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError === null || originalError === void 0 ? void 0 : originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
      return _possibleConstructorReturn(_this);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }

    return _this;
  }

  _createClass(GraphQLError, [{
    key: "toString",
    value: function toString() {
      return printError(this);
    } // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe Flow doesn't support computed properties yet

  }, {
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'Object';
    }
  }]);

  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + Object(_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__["printLocation"])(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + Object(_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__["printSourceLocation"])(error.source, location);
    }
  }

  return output;
}


/***/ }),

/***/ "./node_modules/graphql/error/syntaxError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/syntaxError.mjs ***!
  \****************************************************/
/*! exports provided: syntaxError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return syntaxError; });
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Syntax Error: ".concat(description), undefined, source, [position]);
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/defineInspect.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineInspect.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineInspect; });
/* harmony import */ var _invariant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");


/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || Object(_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    classObject.prototype[_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]] = fn;
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/devAssert.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return devAssert; });
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inspect; });
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    // $FlowFixMe(>=0.90.0)
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invariant; });
function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/isObjectLike.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObjectLike; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ __webpack_exports__["default"] = (nodejsCustomInspectSymbol);


/***/ }),

/***/ "./node_modules/graphql/language/ast.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/language/ast.mjs ***!
  \***********************************************/
/*! exports provided: Location, Token, isNode */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony import */ var _jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/defineInspect.mjs */ "./node_modules/graphql/jsutils/defineInspect.mjs");


/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

Object(_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

Object(_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */


/***/ }),

/***/ "./node_modules/graphql/language/blockString.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/language/blockString.mjs ***!
  \*******************************************************/
/*! exports provided: dedentBlockStringValue, getBlockStringIndentation, printBlockString */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dedentBlockStringValue", function() { return dedentBlockStringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockStringIndentation", function() { return getBlockStringIndentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printBlockString", function() { return printBlockString; });
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(lines);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }

  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  } // Return a string of the lines joined with U+000A.


  return lines.join('\n');
}
/**
 * @internal
 */

function getBlockStringIndentation(lines) {
  var commonIndent = null;

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);

    if (indent === line.length) {
      continue; // skip empty lines
    }

    if (commonIndent === null || indent < commonIndent) {
      commonIndent = indent;

      if (commonIndent === 0) {
        break;
      }
    }
  }

  return commonIndent === null ? 0 : commonIndent;
}

function leadingWhitespace(str) {
  var i = 0;

  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }

  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */


function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/language/directiveLocation.mjs ***!
  \*************************************************************/
/*! exports provided: DirectiveLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return DirectiveLocation; });
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/kinds.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/kinds.mjs ***!
  \*************************************************/
/*! exports provided: Kind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */


/***/ }),

/***/ "./node_modules/graphql/language/lexer.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/lexer.mjs ***!
  \*************************************************/
/*! exports provided: Lexer, isPunctuatorTokenKind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return Lexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPunctuatorTokenKind", function() { return isPunctuatorTokenKind; });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");




/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

var Lexer = /*#__PURE__*/function () {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    var startOfFileToken = new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SOF, 0, 0, 0, 0, null);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */


  var _proto = Lexer.prototype;

  _proto.advance = function advance() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  ;

  _proto.lookahead = function lookahead() {
    var token = this.token;

    if (token.kind !== _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF) {
      do {
        var _token$next;

        // Note: next is only mutable during parsing, so we cast to allow this.
        token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
      } while (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COMMENT);
    }

    return token;
  };

  return Lexer;
}();
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BANG || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].DOLLAR || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AMP || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SPREAD || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COLON || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EQUALS || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AT || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PIPE || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_R;
}

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = body.charCodeAt(pos); // SourceCharacter

  switch (code) {
    // !
    case 33:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BANG, pos, pos + 1, line, col, prev);
    // #

    case 35:
      return readComment(source, pos, line, col, prev);
    // $

    case 36:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].DOLLAR, pos, pos + 1, line, col, prev);
    // &

    case 38:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AMP, pos, pos + 1, line, col, prev);
    // (

    case 40:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_L, pos, pos + 1, line, col, prev);
    // )

    case 41:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_R, pos, pos + 1, line, col, prev);
    // .

    case 46:
      if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SPREAD, pos, pos + 3, line, col, prev);
      }

      break;
    // :

    case 58:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COLON, pos, pos + 1, line, col, prev);
    // =

    case 61:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EQUALS, pos, pos + 1, line, col, prev);
    // @

    case 64:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AT, pos, pos + 1, line, col, prev);
    // [

    case 91:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_L, pos, pos + 1, line, col, prev);
    // ]

    case 93:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_R, pos, pos + 1, line, col, prev);
    // {

    case 123:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_L, pos, pos + 1, line, col, prev);
    // |

    case 124:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PIPE, pos, pos + 1, line, col, prev);
    // }

    case 125:
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z

    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9

    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "

    case 34:
      if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev, lexer);
      }

      return readString(source, pos, line, col, prev);
  }

  throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, pos, unexpectedCharacterMessage(code));
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * character, then returns the position of that character for lexing.
 */


function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;

  while (position < bodyLength) {
    var code = body.charCodeAt(position); // tab | space | comma | BOM

    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }

  return position;
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart


  if (code === 46 || isNameStart(code)) {
    throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](isFloat ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].FLOAT : _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BLOCK_STRING, start, position + 3, line, col, prev, Object(_blockString_mjs__WEBPACK_IMPORTED_MODULE_3__["dedentBlockStringValue"])(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].NAME, start, position, line, col, prev, body.slice(start, position));
} // _ A-Z a-z


function isNameStart(code) {
  return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}


/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/*! exports provided: getLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}


/***/ }),

/***/ "./node_modules/graphql/language/parser.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/parser.mjs ***!
  \**************************************************/
/*! exports provided: parse, parseValue, parseType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return parseType; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _source_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _lexer_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");









/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].EOF);
  return type;
}

var Parser = /*#__PURE__*/function () {
  function Parser(source, options) {
    var sourceObj = typeof source === 'string' ? new _source_mjs__WEBPACK_IMPORTED_MODULE_5__["Source"](source) : source;
    sourceObj instanceof _source_mjs__WEBPACK_IMPORTED_MODULE_5__["Source"] || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(0, "Must provide Source. Received: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceObj), "."));
    this._lexer = new _lexer_mjs__WEBPACK_IMPORTED_MODULE_8__["Lexer"](sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].NAME);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].DOCUMENT,
      definitions: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].SOF, this.parseDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].NAME)) {
      name = this.parseName();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].PAREN_L, this.parseVariableDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].DOLLAR);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].SELECTION_SET,
      selections: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L, this.parseSelection, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].PAREN_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].NAME)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var _this$_options;

    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].INT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].FLOAT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].STRING:
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].BOOLEAN,
              value: true,
              loc: this.loc(token)
            };

          case 'false':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].BOOLEAN,
              value: false,
              loc: this.loc(token)
            };

          case 'null':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].NULL,
              loc: this.loc(token)
            };

          default:
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM,
              value: token.value,
              loc: this.loc(token)
            };
        }

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].STRING,
      value: token.value,
      block: token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].LIST,
      values: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACKET_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT,
      fields: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].AT);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACKET_R);
      type = {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BANG)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].STRING) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_R);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCHEMA_DEFINITION,
      description: description,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].COLON);
    var type = this.parseNamedType();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var types = [];

    if (this.expectOptionalKeyword('implements')) {
      // Optional leading ampersand
      this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].AMP);

      do {
        var _this$_options2;

        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].AMP) || // Legacy support for the SDL?
      ((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].NAME));
    }

    return types;
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    var _this$_options3;

    // Legacy support for the SDL?
    if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L) && this._lexer.lookahead().kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L, this.parseFieldDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].PAREN_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    var types = [];

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].EQUALS)) {
      // Optional leading pipe
      this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].PIPE);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].PIPE));
    }

    return types;
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L, this.parseEnumValueDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    // Optional leading pipe
    this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].PIPE);
    var locations = [];

    do {
      locations.push(this.parseDirectiveLocation());
    } while (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].PIPE));

    return locations;
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_7__["DirectiveLocation"][name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in
   * the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    var _this$_options4;

    if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_4__["Location"](startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__["syntaxError"])(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__["syntaxError"])(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing
   * the lexer. Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_6__["TokenKind"].NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token
   * is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__["syntaxError"])(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always
   * return non-empty list that begins with a lex token of openKind and ends
   * with a lex token of closeKind. Advances the parser to the next lex token
   * after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  };

  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging
 */


function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging
 */


function getTokenKindDesc(kind) {
  return Object(_lexer_mjs__WEBPACK_IMPORTED_MODULE_8__["isPunctuatorTokenKind"])(kind) ? "\"".concat(kind, "\"") : kind;
}


/***/ }),

/***/ "./node_modules/graphql/language/printLocation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/language/printLocation.mjs ***!
  \*********************************************************/
/*! exports provided: printLocation, printSourceLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLocation", function() { return printLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printSourceLocation", function() { return printSourceLocation; });
/* harmony import */ var _location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.mjs */ "./node_modules/graphql/language/location.mjs");

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, Object(_location_mjs__WEBPACK_IMPORTED_MODULE_0__["getLocation"])(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['', subLine];
    }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function leftPad(len, str) {
  return whitespace(len - str.length) + str;
}


/***/ }),

/***/ "./node_modules/graphql/language/source.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/source.mjs ***!
  \**************************************************/
/*! exports provided: Source */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe Flow doesn't support computed properties yet


  _createClass(Source, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();


/***/ }),

/***/ "./node_modules/graphql/language/tokenKind.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/language/tokenKind.mjs ***!
  \*****************************************************/
/*! exports provided: TokenKind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return TokenKind; });
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/visitor.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/visitor.mjs ***!
  \***************************************************/
/*! exports provided: QueryDocumentKeys, BREAK, visit, visitInParallel, getVisitFn */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDocumentKeys", function() { return QueryDocumentKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return BREAK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return visitInParallel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return getVisitFn; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");


/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!Object(_ast_mjs__WEBPACK_IMPORTED_MODULE_1__["isNode"])(node)) {
        throw new Error("Invalid AST Node: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(node), "."));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (Object(_ast_mjs__WEBPACK_IMPORTED_MODULE_1__["isNode"])(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;

      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */

function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/polyfills/symbols.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/polyfills/symbols.mjs ***!
  \****************************************************/
/*! exports provided: SYMBOL_ITERATOR, SYMBOL_ASYNC_ITERATOR, SYMBOL_TO_STRING_TAG */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL_ITERATOR", function() { return SYMBOL_ITERATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL_ASYNC_ITERATOR", function() { return SYMBOL_ASYNC_ITERATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL_TO_STRING_TAG", function() { return SYMBOL_TO_STRING_TAG; });
// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var SYMBOL_ITERATOR = typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'; // In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_ASYNC_ITERATOR = // $FlowFixMe Flow doesn't define `Symbol.asyncIterator` yet
typeof Symbol === 'function' ? Symbol.asyncIterator : '@@asyncIterator'; // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_TO_STRING_TAG = // $FlowFixMe Flow doesn't define `Symbol.toStringTag` yet
typeof Symbol === 'function' ? Symbol.toStringTag : '@@toStringTag';


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fscript-page&absolutePagePath=C%3A%5CUsers%5Cghori%5CDesktop%5CShopify%20App%5Cshopify-start-app%5Cpages%5Cscript-page.js!./":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fscript-page&absolutePagePath=C%3A%5CUsers%5Cghori%5CDesktop%5CShopify%20App%5Cshopify-start-app%5Cpages%5Cscript-page.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/script-page",
      function () {
        return __webpack_require__(/*! ./pages/script-page.js */ "./pages/script-page.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/ts-invariant/lib/invariant.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ts-invariant/lib/invariant.esm.js ***!
  \********************************************************/
/*! exports provided: default, InvariantError, invariant, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return processStub; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
function wrapConsoleMethod(method) {
    return function () {
        return console[method].apply(console, arguments);
    };
}
(function (invariant) {
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = { env: {} };
if (typeof process === "object") {
    processStub = process;
}
else
    try {
        // Using Function to evaluate this assignment in global scope also escapes
        // the strict mode of the current module, thereby allowing the assignment.
        // Inspired by https://github.com/facebook/regenerator/pull/369.
        Function("stub", "process = stub")(processStub);
    }
    catch (atLeastWeTried) {
        // The assignment can fail if a Content Security Policy heavy-handedly
        // forbids Function usage. In those environments, developers should take
        // extra care to replace process.env.NODE_ENV in their production builds,
        // or define an appropriate global.process polyfill.
    }
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);

//# sourceMappingURL=invariant.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/zen-observable-ts/lib/bundle.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/zen-observable-ts/lib/bundle.esm.js ***!
  \**********************************************************/
/*! exports provided: default, Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);


var Observable = zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a;

/* harmony default export */ __webpack_exports__["default"] = (Observable);

//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/zen-observable/index.js":
/*!**********************************************!*\
  !*** ./node_modules/zen-observable/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/Observable.js */ "./node_modules/zen-observable/lib/Observable.js").Observable;


/***/ }),

/***/ "./node_modules/zen-observable/lib/Observable.js":
/*!*******************************************************!*\
  !*** ./node_modules/zen-observable/lib/Observable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// === Symbol Support ===
var hasSymbols = function () {
  return typeof Symbol === 'function';
};

var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};

var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return undefined;
  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;

  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];

    if (ctor === null) {
      ctor = undefined;
    }
  }

  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;
  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');

      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;

  if (!queue) {
    return;
  }

  subscription._queue = undefined;
  subscription._state = 'ready';

  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';
  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);

    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;

      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;

      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({
      type: type,
      value: value
    });

    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{
      type: type,
      value: value
    }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(observer, subscriber) {
    _classCallCheck(this, Subscription);

    // ASSERT: observer is an object
    // ASSERT: subscriber is callable
    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';
    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  _createClass(Subscription, [{
    key: "unsubscribe",
    value: function unsubscribe() {
      if (this._state !== 'closed') {
        closeSubscription(this);
        cleanupSubscription(this);
      }
    }
  }, {
    key: "closed",
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver =
/*#__PURE__*/
function () {
  function SubscriptionObserver(subscription) {
    _classCallCheck(this, SubscriptionObserver);

    this._subscription = subscription;
  }

  _createClass(SubscriptionObserver, [{
    key: "next",
    value: function next(value) {
      onNotify(this._subscription, 'next', value);
    }
  }, {
    key: "error",
    value: function error(value) {
      onNotify(this._subscription, 'error', value);
    }
  }, {
    key: "complete",
    value: function complete() {
      onNotify(this._subscription, 'complete');
    }
  }, {
    key: "closed",
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable =
/*#__PURE__*/
function () {
  function Observable(subscriber) {
    _classCallCheck(this, Observable);

    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');
    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
    this._subscriber = subscriber;
  }

  _createClass(Observable, [{
    key: "subscribe",
    value: function subscribe(observer) {
      if (typeof observer !== 'object' || observer === null) {
        observer = {
          next: observer,
          error: arguments[1],
          complete: arguments[2]
        };
      }

      return new Subscription(observer, this._subscriber);
    }
  }, {
    key: "forEach",
    value: function forEach(fn) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (typeof fn !== 'function') {
          reject(new TypeError(fn + ' is not a function'));
          return;
        }

        function done() {
          subscription.unsubscribe();
          resolve();
        }

        var subscription = _this.subscribe({
          next: function (value) {
            try {
              fn(value, done);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    }
  }, {
    key: "map",
    value: function map(fn) {
      var _this2 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        return _this2.subscribe({
          next: function (value) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }

            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "filter",
    value: function filter(fn) {
      var _this3 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        return _this3.subscribe({
          next: function (value) {
            try {
              if (!fn(value)) return;
            } catch (e) {
              return observer.error(e);
            }

            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "reduce",
    value: function reduce(fn) {
      var _this4 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      var hasSeed = arguments.length > 1;
      var hasValue = false;
      var seed = arguments[1];
      var acc = seed;
      return new C(function (observer) {
        return _this4.subscribe({
          next: function (value) {
            var first = !hasValue;
            hasValue = true;

            if (!first || hasSeed) {
              try {
                acc = fn(acc, value);
              } catch (e) {
                return observer.error(e);
              }
            } else {
              acc = value;
            }
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
            observer.next(acc);
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "concat",
    value: function concat() {
      var _this5 = this;

      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      var C = getSpecies(this);
      return new C(function (observer) {
        var subscription;
        var index = 0;

        function startNext(next) {
          subscription = next.subscribe({
            next: function (v) {
              observer.next(v);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              if (index === sources.length) {
                subscription = undefined;
                observer.complete();
              } else {
                startNext(C.from(sources[index++]));
              }
            }
          });
        }

        startNext(_this5);
        return function () {
          if (subscription) {
            subscription.unsubscribe();
            subscription = undefined;
          }
        };
      });
    }
  }, {
    key: "flatMap",
    value: function flatMap(fn) {
      var _this6 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        var subscriptions = [];

        var outer = _this6.subscribe({
          next: function (value) {
            if (fn) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
            }

            var inner = C.from(value).subscribe({
              next: function (value) {
                observer.next(value);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                var i = subscriptions.indexOf(inner);
                if (i >= 0) subscriptions.splice(i, 1);
                completeIfDone();
              }
            });
            subscriptions.push(inner);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            completeIfDone();
          }
        });

        function completeIfDone() {
          if (outer.closed && subscriptions.length === 0) observer.complete();
        }

        return function () {
          subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
          outer.unsubscribe();
        };
      });
    }
  }, {
    key: SymbolObservable,
    value: function () {
      return this;
    }
  }], [{
    key: "from",
    value: function from(x) {
      var C = typeof this === 'function' ? this : Observable;
      if (x == null) throw new TypeError(x + ' is not an object');
      var method = getMethod(x, SymbolObservable);

      if (method) {
        var observable = method.call(x);
        if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
        if (isObservable(observable) && observable.constructor === C) return observable;
        return new C(function (observer) {
          return observable.subscribe(observer);
        });
      }

      if (hasSymbol('iterator')) {
        method = getMethod(x, SymbolIterator);

        if (method) {
          return new C(function (observer) {
            enqueue(function () {
              if (observer.closed) return;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _item = _step.value;
                  observer.next(_item);
                  if (observer.closed) return;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              observer.complete();
            });
          });
        }
      }

      if (Array.isArray(x)) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;

            for (var i = 0; i < x.length; ++i) {
              observer.next(x[i]);
              if (observer.closed) return;
            }

            observer.complete();
          });
        });
      }

      throw new TypeError(x + ' is not observable');
    }
  }, {
    key: "of",
    value: function of() {
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      var C = typeof this === 'function' ? this : Observable;
      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;

          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (observer.closed) return;
          }

          observer.complete();
        });
      });
    }
  }, {
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

exports.Observable = Observable;

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}

/***/ }),

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");


var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nquery{\n  scriptTags(first:5){\n    edges{\n      node {\n        id\n        src\n      }\n    }\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nmutation scriptTagCreate($input: ScriptTagInput!) {\n    scriptTagCreate(input: $input) {\n      scriptTag {\n        id\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CREATE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var Query_SCRIPTING = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());

var ScriptPage = function ScriptPage() {
  _s();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(Query_SCRIPTING),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("div", null, "loading....");
  if (error) return __jsx("div", null, error.message);
  console.log(data);
  return __jsx("div", null, "Hello from Script Page");
};

_s(ScriptPage, "t0z2SrXJDzhl3h6STsA86t9Oe1U=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = ScriptPage;
/* harmony default export */ __webpack_exports__["default"] = (ScriptPage);

var _c;

$RefreshReg$(_c, "ScriptPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/*!***********************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fscript-page&absolutePagePath=C%3A%5CUsers%5Cghori%5CDesktop%5CShopify%20App%5Cshopify-start-app%5Cpages%5Cscript-page.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fscript-page&absolutePagePath=C%3A%5CUsers%5Cghori%5CDesktop%5CShopify%20App%5Cshopify-start-app%5Cpages%5Cscript-page.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fscript-page&absolutePagePath=C%3A%5CUsers%5Cghori%5CDesktop%5CShopify%20App%5Cshopify-start-app%5Cpages%5Cscript-page.js!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9yZWFjdC1jb21tb24vbGliL3JlYWN0LWNvbW1vbi5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vcmVhY3QtaG9va3MvbGliL3JlYWN0LWhvb2tzLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad3J5L2VxdWFsaXR5L2xpYi9lcXVhbGl0eS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby1jbGllbnQvYnVuZGxlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXBvbGxvLWxpbmsvbGliL2J1bmRsZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby11dGlsaXRpZXMvbGliL2J1bmRsZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3QtanNvbi1zdGFibGUtc3RyaW5naWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ncmFwaHFsLXRhZy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvZXJyb3IvR3JhcGhRTEVycm9yLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9lcnJvci9zeW50YXhFcnJvci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9kZWZpbmVJbnNwZWN0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2RldkFzc2VydC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9pbnNwZWN0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2ludmFyaWFudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9pc09iamVjdExpa2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvYXN0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9ibG9ja1N0cmluZy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvZGlyZWN0aXZlTG9jYXRpb24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL2tpbmRzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9sZXhlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvbG9jYXRpb24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL3BhcnNlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvcHJpbnRMb2NhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2Uvc291cmNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS90b2tlbktpbmQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL3Zpc2l0b3IubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL3BvbHlmaWxscy9zeW1ib2xzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtaW52YXJpYW50L2xpYi9pbnZhcmlhbnQuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plbi1vYnNlcnZhYmxlLXRzL2xpYi9idW5kbGUuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZW4tb2JzZXJ2YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVuLW9ic2VydmFibGUvbGliL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2NyaXB0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIiXSwibmFtZXMiOlsiQ1JFQVRFX1NDUklQVF9UQUciLCJncWwiLCJRdWVyeV9TQ1JJUFRJTkciLCJTY3JpcHRQYWdlIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJk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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFZ0c7QUFDakc7Ozs7Ozs7Ozs7Ozs7QUN2dUJBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLDBFQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxhQUFhLDhDQUFLLENBQUMsd0RBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDBFQUFXO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHdEQUFTLDZDQUE2Qyx3REFBUzs7QUFFMUc7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLCtDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLCtDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksK0NBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksK0NBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVks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UDs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxzREFBa0Y7QUFDekc7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QyxHQUFSLENBQVlILElBQVo7QUFDRSxTQUNJLDRDQURKO0FBS0gsQ0FWRDs7R0FBTUosVTtVQUN5QkMsNEQ7OztLQUR6QkQsVTtBQVlTQSx5RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzY3JpcHQtcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbnZhcmlhbnQgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuXG52YXIgYXBvbGxvQ29udGV4dDtcbmZ1bmN0aW9uIGdldEFwb2xsb0NvbnRleHQoKSB7XG4gICAgaWYgKCFhcG9sbG9Db250ZXh0KSB7XG4gICAgICAgIGFwb2xsb0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFwb2xsb0NvbnRleHQ7XG59XG5mdW5jdGlvbiByZXNldEFwb2xsb0NvbnRleHQoKSB7XG4gICAgYXBvbGxvQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xufVxuXG52YXIgQXBvbGxvUHJvdmlkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xpZW50ID0gX2EuY2xpZW50LCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIGlmIChjbGllbnQgJiYgY29udGV4dC5jbGllbnQgIT09IGNsaWVudCkge1xuICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHsgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGNvbnRleHQuY2xpZW50LCA1KSA6IGludmFyaWFudChjb250ZXh0LmNsaWVudCwgJ0Fwb2xsb1Byb3ZpZGVyIHdhcyBub3QgcGFzc2VkIGEgY2xpZW50IGluc3RhbmNlLiBNYWtlICcgK1xuICAgICAgICAgICAgJ3N1cmUgeW91IHBhc3MgaW4geW91ciBjbGllbnQgdmlhIHRoZSBcImNsaWVudFwiIHByb3AuJyk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0IH0sIGNoaWxkcmVuKSk7XG4gICAgfSk7XG59O1xuXG52YXIgQXBvbGxvQ29uc3VtZXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgQXBvbGxvQ29udGV4dCA9IGdldEFwb2xsb0NvbnRleHQoKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoY29udGV4dCAmJiBjb250ZXh0LmNsaWVudCwgNikgOiBpbnZhcmlhbnQoY29udGV4dCAmJiBjb250ZXh0LmNsaWVudCwgJ0NvdWxkIG5vdCBmaW5kIFwiY2xpZW50XCIgaW4gdGhlIGNvbnRleHQgb2YgQXBvbGxvQ29uc3VtZXIuICcgK1xuICAgICAgICAgICAgJ1dyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGFuIDxBcG9sbG9Qcm92aWRlcj4uJyk7XG4gICAgICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbihjb250ZXh0LmNsaWVudCk7XG4gICAgfSk7XG59O1xuXG52YXIgRG9jdW1lbnRUeXBlO1xuKGZ1bmN0aW9uIChEb2N1bWVudFR5cGUpIHtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiUXVlcnlcIl0gPSAwXSA9IFwiUXVlcnlcIjtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiTXV0YXRpb25cIl0gPSAxXSA9IFwiTXV0YXRpb25cIjtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiU3Vic2NyaXB0aW9uXCJdID0gMl0gPSBcIlN1YnNjcmlwdGlvblwiO1xufSkoRG9jdW1lbnRUeXBlIHx8IChEb2N1bWVudFR5cGUgPSB7fSkpO1xudmFyIGNhY2hlID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gb3BlcmF0aW9uTmFtZSh0eXBlKSB7XG4gICAgdmFyIG5hbWU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgRG9jdW1lbnRUeXBlLlF1ZXJ5OlxuICAgICAgICAgICAgbmFtZSA9ICdRdWVyeSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBEb2N1bWVudFR5cGUuTXV0YXRpb246XG4gICAgICAgICAgICBuYW1lID0gJ011dGF0aW9uJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERvY3VtZW50VHlwZS5TdWJzY3JpcHRpb246XG4gICAgICAgICAgICBuYW1lID0gJ1N1YnNjcmlwdGlvbic7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBwYXJzZXIoZG9jdW1lbnQpIHtcbiAgICB2YXIgY2FjaGVkID0gY2FjaGUuZ2V0KGRvY3VtZW50KTtcbiAgICBpZiAoY2FjaGVkKVxuICAgICAgICByZXR1cm4gY2FjaGVkO1xuICAgIHZhciB2YXJpYWJsZXMsIHR5cGUsIG5hbWU7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KCEhZG9jdW1lbnQgJiYgISFkb2N1bWVudC5raW5kLCAxKSA6IGludmFyaWFudCghIWRvY3VtZW50ICYmICEhZG9jdW1lbnQua2luZCwgXCJBcmd1bWVudCBvZiBcIiArIGRvY3VtZW50ICsgXCIgcGFzc2VkIHRvIHBhcnNlciB3YXMgbm90IGEgdmFsaWQgR3JhcGhRTCBcIiArXG4gICAgICAgIFwiRG9jdW1lbnROb2RlLiBZb3UgbWF5IG5lZWQgdG8gdXNlICdncmFwaHFsLXRhZycgb3IgYW5vdGhlciBtZXRob2QgXCIgK1xuICAgICAgICBcInRvIGNvbnZlcnQgeW91ciBvcGVyYXRpb24gaW50byBhIGRvY3VtZW50XCIpO1xuICAgIHZhciBmcmFnbWVudHMgPSBkb2N1bWVudC5kZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbic7IH0pO1xuICAgIHZhciBxdWVyaWVzID0gZG9jdW1lbnQuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJiB4Lm9wZXJhdGlvbiA9PT0gJ3F1ZXJ5JztcbiAgICB9KTtcbiAgICB2YXIgbXV0YXRpb25zID0gZG9jdW1lbnQuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJiB4Lm9wZXJhdGlvbiA9PT0gJ211dGF0aW9uJztcbiAgICB9KTtcbiAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IGRvY3VtZW50LmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgeC5vcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nO1xuICAgIH0pO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudCghZnJhZ21lbnRzLmxlbmd0aCB8fFxuICAgICAgICAocXVlcmllcy5sZW5ndGggfHwgbXV0YXRpb25zLmxlbmd0aCB8fCBzdWJzY3JpcHRpb25zLmxlbmd0aCksIDIpIDogaW52YXJpYW50KCFmcmFnbWVudHMubGVuZ3RoIHx8XG4gICAgICAgIChxdWVyaWVzLmxlbmd0aCB8fCBtdXRhdGlvbnMubGVuZ3RoIHx8IHN1YnNjcmlwdGlvbnMubGVuZ3RoKSwgXCJQYXNzaW5nIG9ubHkgYSBmcmFnbWVudCB0byAnZ3JhcGhxbCcgaXMgbm90IHlldCBzdXBwb3J0ZWQuIFwiICtcbiAgICAgICAgXCJZb3UgbXVzdCBpbmNsdWRlIGEgcXVlcnksIHN1YnNjcmlwdGlvbiBvciBtdXRhdGlvbiBhcyB3ZWxsXCIpO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChxdWVyaWVzLmxlbmd0aCArIG11dGF0aW9ucy5sZW5ndGggKyBzdWJzY3JpcHRpb25zLmxlbmd0aCA8PSAxLCAzKSA6IGludmFyaWFudChxdWVyaWVzLmxlbmd0aCArIG11dGF0aW9ucy5sZW5ndGggKyBzdWJzY3JpcHRpb25zLmxlbmd0aCA8PSAxLCBcInJlYWN0LWFwb2xsbyBvbmx5IHN1cHBvcnRzIGEgcXVlcnksIHN1YnNjcmlwdGlvbiwgb3IgYSBtdXRhdGlvbiBwZXIgSE9DLiBcIiArXG4gICAgICAgIChkb2N1bWVudCArIFwiIGhhZCBcIiArIHF1ZXJpZXMubGVuZ3RoICsgXCIgcXVlcmllcywgXCIgKyBzdWJzY3JpcHRpb25zLmxlbmd0aCArIFwiIFwiKSArXG4gICAgICAgIChcInN1YnNjcmlwdGlvbnMgYW5kIFwiICsgbXV0YXRpb25zLmxlbmd0aCArIFwiIG11dGF0aW9ucy4gXCIpICtcbiAgICAgICAgXCJZb3UgY2FuIHVzZSAnY29tcG9zZScgdG8gam9pbiBtdWx0aXBsZSBvcGVyYXRpb24gdHlwZXMgdG8gYSBjb21wb25lbnRcIik7XG4gICAgdHlwZSA9IHF1ZXJpZXMubGVuZ3RoID8gRG9jdW1lbnRUeXBlLlF1ZXJ5IDogRG9jdW1lbnRUeXBlLk11dGF0aW9uO1xuICAgIGlmICghcXVlcmllcy5sZW5ndGggJiYgIW11dGF0aW9ucy5sZW5ndGgpXG4gICAgICAgIHR5cGUgPSBEb2N1bWVudFR5cGUuU3Vic2NyaXB0aW9uO1xuICAgIHZhciBkZWZpbml0aW9ucyA9IHF1ZXJpZXMubGVuZ3RoXG4gICAgICAgID8gcXVlcmllc1xuICAgICAgICA6IG11dGF0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgID8gbXV0YXRpb25zXG4gICAgICAgICAgICA6IHN1YnNjcmlwdGlvbnM7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGRlZmluaXRpb25zLmxlbmd0aCA9PT0gMSwgNCkgOiBpbnZhcmlhbnQoZGVmaW5pdGlvbnMubGVuZ3RoID09PSAxLCBcInJlYWN0LWFwb2xsbyBvbmx5IHN1cHBvcnRzIG9uZSBkZWZpbml0aW9uIHBlciBIT0MuIFwiICsgZG9jdW1lbnQgKyBcIiBoYWQgXCIgK1xuICAgICAgICAoZGVmaW5pdGlvbnMubGVuZ3RoICsgXCIgZGVmaW5pdGlvbnMuIFwiKSArXG4gICAgICAgIFwiWW91IGNhbiB1c2UgJ2NvbXBvc2UnIHRvIGpvaW4gbXVsdGlwbGUgb3BlcmF0aW9uIHR5cGVzIHRvIGEgY29tcG9uZW50XCIpO1xuICAgIHZhciBkZWZpbml0aW9uID0gZGVmaW5pdGlvbnNbMF07XG4gICAgdmFyaWFibGVzID0gZGVmaW5pdGlvbi52YXJpYWJsZURlZmluaXRpb25zIHx8IFtdO1xuICAgIGlmIChkZWZpbml0aW9uLm5hbWUgJiYgZGVmaW5pdGlvbi5uYW1lLmtpbmQgPT09ICdOYW1lJykge1xuICAgICAgICBuYW1lID0gZGVmaW5pdGlvbi5uYW1lLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbmFtZSA9ICdkYXRhJztcbiAgICB9XG4gICAgdmFyIHBheWxvYWQgPSB7IG5hbWU6IG5hbWUsIHR5cGU6IHR5cGUsIHZhcmlhYmxlczogdmFyaWFibGVzIH07XG4gICAgY2FjaGUuc2V0KGRvY3VtZW50LCBwYXlsb2FkKTtcbiAgICByZXR1cm4gcGF5bG9hZDtcbn1cblxuZXhwb3J0IHsgQXBvbGxvQ29uc3VtZXIsIEFwb2xsb1Byb3ZpZGVyLCBEb2N1bWVudFR5cGUsIGdldEFwb2xsb0NvbnRleHQsIG9wZXJhdGlvbk5hbWUsIHBhcnNlciwgcmVzZXRBcG9sbG9Db250ZXh0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1jb21tb24uZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgcGFyc2VyLCBvcGVyYXRpb25OYW1lLCBEb2N1bWVudFR5cGUsIGdldEFwb2xsb0NvbnRleHQgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWNvbW1vbic7XG5leHBvcnQgeyBBcG9sbG9Db25zdW1lciwgQXBvbGxvUHJvdmlkZXIsIGdldEFwb2xsb0NvbnRleHQsIHJlc2V0QXBvbGxvQ29udGV4dCB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtY29tbW9uJztcbmltcG9ydCB7IF9fZXh0ZW5kcywgX19hc3NpZ24gfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV0d29ya1N0YXR1cywgQXBvbGxvRXJyb3IgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IGVxdWFsIH0gZnJvbSAnQHdyeS9lcXVhbGl0eSc7XG5pbXBvcnQgeyBpbnZhcmlhbnQgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuXG52YXIgT3BlcmF0aW9uRGF0YSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT3BlcmF0aW9uRGF0YShvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJldmlvdXNPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHt9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCB7fTtcbiAgICB9XG4gICAgT3BlcmF0aW9uRGF0YS5wcm90b3R5cGUuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcbiAgICB9O1xuICAgIE9wZXJhdGlvbkRhdGEucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAobmV3T3B0aW9ucywgc3RvcmVQcmV2aW91cykge1xuICAgICAgICBpZiAoc3RvcmVQcmV2aW91cyA9PT0gdm9pZCAwKSB7IHN0b3JlUHJldmlvdXMgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoc3RvcmVQcmV2aW91cyAmJiAhZXF1YWwodGhpcy5vcHRpb25zLCBuZXdPcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c09wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zID0gbmV3T3B0aW9ucztcbiAgICB9O1xuICAgIE9wZXJhdGlvbkRhdGEucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgICBPcGVyYXRpb25EYXRhLnByb3RvdHlwZS5yZWZyZXNoQ2xpZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2xpZW50ID0gKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuY2xpZW50KSB8fFxuICAgICAgICAgICAgKHRoaXMuY29udGV4dCAmJiB0aGlzLmNvbnRleHQuY2xpZW50KTtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KCEhY2xpZW50LCAyKSA6IGludmFyaWFudCghIWNsaWVudCwgJ0NvdWxkIG5vdCBmaW5kIFwiY2xpZW50XCIgaW4gdGhlIGNvbnRleHQgb3IgcGFzc2VkIGluIGFzIGFuIG9wdGlvbi4gJyArXG4gICAgICAgICAgICAnV3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYW4gPEFwb2xsb1Byb3ZpZGVyPiwgb3IgcGFzcyBhbiAnICtcbiAgICAgICAgICAgICdBcG9sbG9DbGllbnQgaW5zdGFuY2UgaW4gdmlhIG9wdGlvbnMuJyk7XG4gICAgICAgIHZhciBpc05ldyA9IGZhbHNlO1xuICAgICAgICBpZiAoY2xpZW50ICE9PSB0aGlzLmNsaWVudCkge1xuICAgICAgICAgICAgaXNOZXcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgICAgIGlzTmV3OiBpc05ld1xuICAgICAgICB9O1xuICAgIH07XG4gICAgT3BlcmF0aW9uRGF0YS5wcm90b3R5cGUudmVyaWZ5RG9jdW1lbnRUeXBlID0gZnVuY3Rpb24gKGRvY3VtZW50LCB0eXBlKSB7XG4gICAgICAgIHZhciBvcGVyYXRpb24gPSBwYXJzZXIoZG9jdW1lbnQpO1xuICAgICAgICB2YXIgcmVxdWlyZWRPcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZSh0eXBlKTtcbiAgICAgICAgdmFyIHVzZWRPcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZShvcGVyYXRpb24udHlwZSk7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChvcGVyYXRpb24udHlwZSA9PT0gdHlwZSwgMykgOiBpbnZhcmlhbnQob3BlcmF0aW9uLnR5cGUgPT09IHR5cGUsIFwiUnVubmluZyBhIFwiICsgcmVxdWlyZWRPcGVyYXRpb25OYW1lICsgXCIgcmVxdWlyZXMgYSBncmFwaHFsIFwiICtcbiAgICAgICAgICAgIChyZXF1aXJlZE9wZXJhdGlvbk5hbWUgKyBcIiwgYnV0IGEgXCIgKyB1c2VkT3BlcmF0aW9uTmFtZSArIFwiIHdhcyB1c2VkIGluc3RlYWQuXCIpKTtcbiAgICB9O1xuICAgIHJldHVybiBPcGVyYXRpb25EYXRhO1xufSgpKTtcblxudmFyIFF1ZXJ5RGF0YSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFF1ZXJ5RGF0YSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdWVyeURhdGEoX2EpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfYS5vcHRpb25zLCBjb250ZXh0ID0gX2EuY29udGV4dCwgb25OZXdEYXRhID0gX2Eub25OZXdEYXRhO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcmV2aW91c0RhdGEgPSB7fTtcbiAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmFibGUgPSB7fTtcbiAgICAgICAgX3RoaXMucnVuTGF6eSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5ydW5MYXp5UXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgX3RoaXMuY2xlYW51cCgpO1xuICAgICAgICAgICAgX3RoaXMucnVuTGF6eSA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5sYXp5T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICBfdGhpcy5vbk5ld0RhdGEoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0RXhlY3V0ZVJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5nZXRRdWVyeVJlc3VsdCgpO1xuICAgICAgICAgICAgX3RoaXMuc3RhcnRRdWVyeVN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub2JzUmVmZXRjaCA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5yZWZldGNoKHZhcmlhYmxlcyk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9ic0ZldGNoTW9yZSA9IGZ1bmN0aW9uIChmZXRjaE1vcmVPcHRpb25zKSB7IHJldHVybiBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5mZXRjaE1vcmUoZmV0Y2hNb3JlT3B0aW9ucyk7IH07XG4gICAgICAgIF90aGlzLm9ic1VwZGF0ZVF1ZXJ5ID0gZnVuY3Rpb24gKG1hcEZuKSB7IHJldHVybiBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS51cGRhdGVRdWVyeShtYXBGbik7IH07XG4gICAgICAgIF90aGlzLm9ic1N0YXJ0UG9sbGluZyA9IGZ1bmN0aW9uIChwb2xsSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlICYmXG4gICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkgJiZcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5zdGFydFBvbGxpbmcocG9sbEludGVydmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub2JzU3RvcFBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZSAmJlxuICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5ICYmXG4gICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkuc3RvcFBvbGxpbmcoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub2JzU3Vic2NyaWJlVG9Nb3JlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHsgcmV0dXJuIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LnN1YnNjcmliZVRvTW9yZShvcHRpb25zKTsgfTtcbiAgICAgICAgX3RoaXMub25OZXdEYXRhID0gb25OZXdEYXRhO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2xpZW50KCk7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuZ2V0T3B0aW9ucygpLCBza2lwID0gX2Euc2tpcCwgcXVlcnkgPSBfYS5xdWVyeTtcbiAgICAgICAgaWYgKHNraXAgfHwgcXVlcnkgIT09IHRoaXMucHJldmlvdXNEYXRhLnF1ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVF1ZXJ5U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzRGF0YS5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlT2JzZXJ2YWJsZVF1ZXJ5KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZClcbiAgICAgICAgICAgIHRoaXMuc3RhcnRRdWVyeVN1YnNjcmlwdGlvbigpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGVjdXRlU3NyUmVzdWx0KCkgfHwgdGhpcy5nZXRFeGVjdXRlUmVzdWx0KCk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmV4ZWN1dGVMYXp5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMucnVuTGF6eVxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgdGhpcy5ydW5MYXp5UXVlcnksXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogTmV0d29ya1N0YXR1cy5yZWFkeSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICA6IFt0aGlzLnJ1bkxhenlRdWVyeSwgdGhpcy5leGVjdXRlKCldO1xuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5mZXRjaERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgIGlmIChvcHRpb25zLnNraXAgfHwgb3B0aW9ucy5zc3IgPT09IGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgb2JzID0gdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeTtcbiAgICAgICAgdmFyIGN1cnJlbnRSZXN1bHQgPSBvYnMuZ2V0Q3VycmVudFJlc3VsdCgpO1xuICAgICAgICByZXR1cm4gY3VycmVudFJlc3VsdC5sb2FkaW5nID8gb2JzLnJlc3VsdCgpIDogZmFsc2U7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmFmdGVyRXhlY3V0ZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX2IgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLmxhenksIGxhenkgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYjtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIWxhenkgfHwgdGhpcy5ydW5MYXp5KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yT3JDb21wbGV0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZpb3VzT3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcy51bm1vdW50LmJpbmQodGhpcyk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUXVlcnlTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQ7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmdldE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gX3N1cGVyLnByb3RvdHlwZS5nZXRPcHRpb25zLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmxhenlPcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zLnZhcmlhYmxlcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zLnZhcmlhYmxlcyksIHRoaXMubGF6eU9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgICAgIG9wdGlvbnMuY29udGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zLmNvbnRleHQpLCB0aGlzLmxhenlPcHRpb25zLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJ1bkxhenkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnNraXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLnNzckluaXRpYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dCAmJiB0aGlzLmNvbnRleHQucmVuZGVyUHJvbWlzZXM7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmdldEV4ZWN1dGVTc3JSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzc3JEaXNhYmxlZCA9IHRoaXMuZ2V0T3B0aW9ucygpLnNzciA9PT0gZmFsc2U7XG4gICAgICAgIHZhciBmZXRjaERpc2FibGVkID0gdGhpcy5yZWZyZXNoQ2xpZW50KCkuY2xpZW50LmRpc2FibGVOZXR3b3JrRmV0Y2hlcztcbiAgICAgICAgdmFyIHNzckxvYWRpbmcgPSBfX2Fzc2lnbih7IGxvYWRpbmc6IHRydWUsIG5ldHdvcmtTdGF0dXM6IE5ldHdvcmtTdGF0dXMubG9hZGluZywgY2FsbGVkOiB0cnVlLCBkYXRhOiB1bmRlZmluZWQsIHN0YWxlOiBmYWxzZSwgY2xpZW50OiB0aGlzLmNsaWVudCB9LCB0aGlzLm9ic2VydmFibGVRdWVyeUZpZWxkcygpKTtcbiAgICAgICAgaWYgKHNzckRpc2FibGVkICYmICh0aGlzLnNzckluaXRpYXRlZCgpIHx8IGZldGNoRGlzYWJsZWQpKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQgPSBzc3JMb2FkaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHNzckxvYWRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMuc3NySW5pdGlhdGVkKCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlbmRlclByb21pc2VzLmFkZFF1ZXJ5UHJvbWlzZSh0aGlzLCB0aGlzLmdldEV4ZWN1dGVSZXN1bHQpIHx8IHNzckxvYWRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUucHJlcGFyZU9ic2VydmFibGVRdWVyeU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgIHRoaXMudmVyaWZ5RG9jdW1lbnRUeXBlKG9wdGlvbnMucXVlcnksIERvY3VtZW50VHlwZS5RdWVyeSk7XG4gICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IG9wdGlvbnMuZGlzcGxheU5hbWUgfHwgJ1F1ZXJ5JztcbiAgICAgICAgaWYgKHRoaXMuc3NySW5pdGlhdGVkKCkgJiZcbiAgICAgICAgICAgIChvcHRpb25zLmZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1hbmQtbmV0d29yaycpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID0gJ2NhY2hlLWZpcnN0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSwgY29udGV4dDogb3B0aW9ucy5jb250ZXh0LCBtZXRhZGF0YTogeyByZWFjdENvbXBvbmVudDogeyBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgfSB9IH0pO1xuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5pbml0aWFsaXplT2JzZXJ2YWJsZVF1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodGhpcy5zc3JJbml0aWF0ZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeSA9IHRoaXMuY29udGV4dC5yZW5kZXJQcm9taXNlcy5nZXRTU1JPYnNlcnZhYmxlKHRoaXMuZ2V0T3B0aW9ucygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlUXVlcnlPcHRpb25zID0gdGhpcy5wcmVwYXJlT2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEub2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvYnNlcnZhYmxlUXVlcnlPcHRpb25zKSwgeyBjaGlsZHJlbjogbnVsbCB9KTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkgPSB0aGlzLnJlZnJlc2hDbGllbnQoKS5jbGllbnQud2F0Y2hRdWVyeShfX2Fzc2lnbih7fSwgb2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucykpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3NySW5pdGlhdGVkKCkpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmNvbnRleHQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW5kZXJQcm9taXNlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlZ2lzdGVyU1NST2JzZXJ2YWJsZSh0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LCBvYnNlcnZhYmxlUXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS51cGRhdGVPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplT2JzZXJ2YWJsZVF1ZXJ5KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld09ic2VydmFibGVRdWVyeU9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5wcmVwYXJlT2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucygpKSwgeyBjaGlsZHJlbjogbnVsbCB9KTtcbiAgICAgICAgaWYgKCFlcXVhbChuZXdPYnNlcnZhYmxlUXVlcnlPcHRpb25zLCB0aGlzLnByZXZpb3VzRGF0YS5vYnNlcnZhYmxlUXVlcnlPcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEub2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucyA9IG5ld09ic2VydmFibGVRdWVyeU9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlXG4gICAgICAgICAgICAgICAgLnF1ZXJ5LnNldE9wdGlvbnMobmV3T2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucylcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5zdGFydFF1ZXJ5U3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24gfHwgdGhpcy5nZXRPcHRpb25zKCkuc2tpcClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG9ic1F1ZXJ5ID0gdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeTtcbiAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24gPSBvYnNRdWVyeS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBuZXR3b3JrU3RhdHVzID0gX2EubmV0d29ya1N0YXR1cywgZGF0YSA9IF9hLmRhdGE7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gX3RoaXMucHJldmlvdXNEYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNSZXN1bHQgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNSZXN1bHQubG9hZGluZyA9PT0gbG9hZGluZyAmJlxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1Jlc3VsdC5uZXR3b3JrU3RhdHVzID09PSBuZXR3b3JrU3RhdHVzICYmXG4gICAgICAgICAgICAgICAgICAgIGVxdWFsKHByZXZpb3VzUmVzdWx0LmRhdGEsIGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMub25OZXdEYXRhKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc3Vic2NyaWJlVG9RdWVyeSgpO1xuICAgICAgICAgICAgICAgIGlmICghZXJyb3IuaGFzT3duUHJvcGVydHkoJ2dyYXBoUUxFcnJvcnMnKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gX3RoaXMucHJldmlvdXNEYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoKHByZXZpb3VzUmVzdWx0ICYmIHByZXZpb3VzUmVzdWx0LmxvYWRpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICFlcXVhbChlcnJvciwgX3RoaXMucHJldmlvdXNEYXRhLmVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcmV2aW91c0RhdGEuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub25OZXdEYXRhKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLnJlc3Vic2NyaWJlVG9RdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVRdWVyeVN1YnNjcmlwdGlvbigpO1xuICAgICAgICB2YXIgbGFzdEVycm9yID0gdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5nZXRMYXN0RXJyb3IoKTtcbiAgICAgICAgdmFyIGxhc3RSZXN1bHQgPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LmdldExhc3RSZXN1bHQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5yZXNldExhc3RSZXN1bHRzKCk7XG4gICAgICAgIHRoaXMuc3RhcnRRdWVyeVN1YnNjcmlwdGlvbigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnksIHtcbiAgICAgICAgICAgIGxhc3RFcnJvcjogbGFzdEVycm9yLFxuICAgICAgICAgICAgbGFzdFJlc3VsdDogbGFzdFJlc3VsdCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmdldFF1ZXJ5UmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5vYnNlcnZhYmxlUXVlcnlGaWVsZHMoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3VsdCksIHsgZGF0YTogdW5kZWZpbmVkLCBlcnJvcjogdW5kZWZpbmVkLCBsb2FkaW5nOiBmYWxzZSwgY2FsbGVkOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRSZXN1bHQgPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LmdldEN1cnJlbnRSZXN1bHQoKTtcbiAgICAgICAgICAgIHZhciBsb2FkaW5nID0gY3VycmVudFJlc3VsdC5sb2FkaW5nLCBwYXJ0aWFsID0gY3VycmVudFJlc3VsdC5wYXJ0aWFsLCBuZXR3b3JrU3RhdHVzID0gY3VycmVudFJlc3VsdC5uZXR3b3JrU3RhdHVzLCBlcnJvcnMgPSBjdXJyZW50UmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGN1cnJlbnRSZXN1bHQuZXJyb3IsIGRhdGEgPSBjdXJyZW50UmVzdWx0LmRhdGE7XG4gICAgICAgICAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgQXBvbGxvRXJyb3IoeyBncmFwaFFMRXJyb3JzOiBlcnJvcnMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzdWx0KSwgeyBsb2FkaW5nOiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLCBjYWxsZWQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAobG9hZGluZykge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0RhdGEgPSB0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQgJiYgdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0LmRhdGE7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPVxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0RhdGEgJiYgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJldmlvdXNEYXRhKSwgZGF0YSkgOiBwcmV2aW91c0RhdGEgfHwgZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogKHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkuZ2V0TGFzdFJlc3VsdCgpIHx8IHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZmV0Y2hQb2xpY3kgPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5Lm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRpYWxSZWZldGNoID0gb3B0aW9ucy5wYXJ0aWFsUmVmZXRjaDtcbiAgICAgICAgICAgICAgICBpZiAocGFydGlhbFJlZmV0Y2ggJiZcbiAgICAgICAgICAgICAgICAgICAgIWRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbCAmJlxuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSAhPT0gJ2NhY2hlLW9ubHknKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogTmV0d29ya1N0YXR1cy5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJlZmV0Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jbGllbnQgPSB0aGlzLmNsaWVudDtcbiAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEubG9hZGluZyA9XG4gICAgICAgICAgICAodGhpcy5wcmV2aW91c0RhdGEucmVzdWx0ICYmIHRoaXMucHJldmlvdXNEYXRhLnJlc3VsdC5sb2FkaW5nKSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5ICYmXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LnJlc2V0UXVlcnlTdG9yZUVycm9ycygpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5oYW5kbGVFcnJvck9yQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzUXVlcnkgPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5O1xuICAgICAgICBpZiAoIW9ic1F1ZXJ5IHx8ICF0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJldmlvdXNEYXRhLnJlc3VsdCwgZGF0YSA9IF9hLmRhdGEsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBlcnJvciA9IF9hLmVycm9yO1xuICAgICAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IHRoaXMuZ2V0T3B0aW9ucygpLCBxdWVyeSA9IF9iLnF1ZXJ5LCB2YXJpYWJsZXMgPSBfYi52YXJpYWJsZXMsIG9uQ29tcGxldGVkID0gX2Iub25Db21wbGV0ZWQsIG9uRXJyb3IgPSBfYi5vbkVycm9yO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNPcHRpb25zICYmXG4gICAgICAgICAgICAgICAgIXRoaXMucHJldmlvdXNEYXRhLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICBlcXVhbCh0aGlzLnByZXZpb3VzT3B0aW9ucy5xdWVyeSwgcXVlcnkpICYmXG4gICAgICAgICAgICAgICAgZXF1YWwodGhpcy5wcmV2aW91c09wdGlvbnMudmFyaWFibGVzLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGVkICYmICFlcnJvcikge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob25FcnJvciAmJiBlcnJvcikge1xuICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLnJlbW92ZVF1ZXJ5U3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUub2JzZXJ2YWJsZVF1ZXJ5RmllbGRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9ic2VydmFibGUudmFyaWFibGVzLFxuICAgICAgICAgICAgcmVmZXRjaDogdGhpcy5vYnNSZWZldGNoLFxuICAgICAgICAgICAgZmV0Y2hNb3JlOiB0aGlzLm9ic0ZldGNoTW9yZSxcbiAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5OiB0aGlzLm9ic1VwZGF0ZVF1ZXJ5LFxuICAgICAgICAgICAgc3RhcnRQb2xsaW5nOiB0aGlzLm9ic1N0YXJ0UG9sbGluZyxcbiAgICAgICAgICAgIHN0b3BQb2xsaW5nOiB0aGlzLm9ic1N0b3BQb2xsaW5nLFxuICAgICAgICAgICAgc3Vic2NyaWJlVG9Nb3JlOiB0aGlzLm9ic1N1YnNjcmliZVRvTW9yZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBRdWVyeURhdGE7XG59KE9wZXJhdGlvbkRhdGEpKTtcblxuZnVuY3Rpb24gdXNlRGVlcE1lbW8obWVtb0ZuLCBrZXkpIHtcbiAgICB2YXIgcmVmID0gdXNlUmVmKCk7XG4gICAgaWYgKCFyZWYuY3VycmVudCB8fCAhZXF1YWwoa2V5LCByZWYuY3VycmVudC5rZXkpKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0geyBrZXk6IGtleSwgdmFsdWU6IG1lbW9GbigpIH07XG4gICAgfVxuICAgIHJldHVybiByZWYuY3VycmVudC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gdXNlQmFzZVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zLCBsYXp5KSB7XG4gICAgaWYgKGxhenkgPT09IHZvaWQgMCkgeyBsYXp5ID0gZmFsc2U7IH1cbiAgICB2YXIgY29udGV4dCA9IHVzZUNvbnRleHQoZ2V0QXBvbGxvQ29udGV4dCgpKTtcbiAgICB2YXIgX2EgPSB1c2VSZWR1Y2VyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICsgMTsgfSwgMCksIHRpY2sgPSBfYVswXSwgZm9yY2VVcGRhdGUgPSBfYVsxXTtcbiAgICB2YXIgdXBkYXRlZE9wdGlvbnMgPSBvcHRpb25zID8gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHF1ZXJ5OiBxdWVyeSB9KSA6IHsgcXVlcnk6IHF1ZXJ5IH07XG4gICAgdmFyIHF1ZXJ5RGF0YVJlZiA9IHVzZVJlZigpO1xuICAgIHZhciBxdWVyeURhdGEgPSBxdWVyeURhdGFSZWYuY3VycmVudCB8fFxuICAgICAgICBuZXcgUXVlcnlEYXRhKHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHVwZGF0ZWRPcHRpb25zLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIG9uTmV3RGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghcXVlcnlEYXRhLnNzckluaXRpYXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICBxdWVyeURhdGEuc2V0T3B0aW9ucyh1cGRhdGVkT3B0aW9ucyk7XG4gICAgcXVlcnlEYXRhLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIGlmIChxdWVyeURhdGEuc3NySW5pdGlhdGVkKCkgJiYgIXF1ZXJ5RGF0YVJlZi5jdXJyZW50KSB7XG4gICAgICAgIHF1ZXJ5RGF0YVJlZi5jdXJyZW50ID0gcXVlcnlEYXRhO1xuICAgIH1cbiAgICB2YXIgbWVtbyA9IHtcbiAgICAgICAgb3B0aW9uczogX19hc3NpZ24oX19hc3NpZ24oe30sIHVwZGF0ZWRPcHRpb25zKSwgeyBvbkVycm9yOiB1bmRlZmluZWQsIG9uQ29tcGxldGVkOiB1bmRlZmluZWQgfSksXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIHRpY2s6IHRpY2ssXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdXNlRGVlcE1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gKGxhenkgPyBxdWVyeURhdGEuZXhlY3V0ZUxhenkoKSA6IHF1ZXJ5RGF0YS5leGVjdXRlKCkpOyB9LCBtZW1vKTtcbiAgICB2YXIgcXVlcnlSZXN1bHQgPSBsYXp5XG4gICAgICAgID8gcmVzdWx0WzFdXG4gICAgICAgIDogcmVzdWx0O1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghcXVlcnlEYXRhUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHF1ZXJ5RGF0YVJlZi5jdXJyZW50ID0gcXVlcnlEYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBxdWVyeURhdGEuY2xlYW51cCgpOyB9O1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gcXVlcnlEYXRhLmFmdGVyRXhlY3V0ZSh7IGxhenk6IGxhenkgfSk7IH0sIFtcbiAgICAgICAgcXVlcnlSZXN1bHQubG9hZGluZyxcbiAgICAgICAgcXVlcnlSZXN1bHQubmV0d29ya1N0YXR1cyxcbiAgICAgICAgcXVlcnlSZXN1bHQuZXJyb3IsXG4gICAgICAgIHF1ZXJ5UmVzdWx0LmRhdGEsXG4gICAgXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdXNlUXVlcnkocXVlcnksIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdXNlQmFzZVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHVzZUxhenlRdWVyeShxdWVyeSwgb3B0aW9ucykge1xuICAgIHJldHVybiB1c2VCYXNlUXVlcnkocXVlcnksIG9wdGlvbnMsIHRydWUpO1xufVxuXG52YXIgTXV0YXRpb25EYXRhID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTXV0YXRpb25EYXRhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE11dGF0aW9uRGF0YShfYSkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IF9hLm9wdGlvbnMsIGNvbnRleHQgPSBfYS5jb250ZXh0LCByZXN1bHQgPSBfYS5yZXN1bHQsIHNldFJlc3VsdCA9IF9hLnNldFJlc3VsdDtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgY29udGV4dCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucnVuTXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb25GdW5jdGlvbk9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbkZ1bmN0aW9uT3B0aW9ucyA9PT0gdm9pZCAwKSB7IG11dGF0aW9uRnVuY3Rpb25PcHRpb25zID0ge307IH1cbiAgICAgICAgICAgIF90aGlzLm9uTXV0YXRpb25TdGFydCgpO1xuICAgICAgICAgICAgdmFyIG11dGF0aW9uSWQgPSBfdGhpcy5nZW5lcmF0ZU5ld011dGF0aW9uSWQoKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5tdXRhdGUobXV0YXRpb25GdW5jdGlvbk9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25NdXRhdGlvbkNvbXBsZXRlZChyZXNwb25zZSwgbXV0YXRpb25JZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25NdXRhdGlvbkVycm9yKGVycm9yLCBtdXRhdGlvbklkKTtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmdldE9wdGlvbnMoKS5vbkVycm9yKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy52ZXJpZnlEb2N1bWVudFR5cGUob3B0aW9ucy5tdXRhdGlvbiwgRG9jdW1lbnRUeXBlLk11dGF0aW9uKTtcbiAgICAgICAgX3RoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICBfdGhpcy5zZXRSZXN1bHQgPSBzZXRSZXN1bHQ7XG4gICAgICAgIF90aGlzLm1vc3RSZWNlbnRNdXRhdGlvbklkID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNdXRhdGlvbkRhdGEucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52ZXJpZnlEb2N1bWVudFR5cGUodGhpcy5nZXRPcHRpb25zKCkubXV0YXRpb24sIERvY3VtZW50VHlwZS5NdXRhdGlvbik7XG4gICAgICAgIHJlc3VsdC5jbGllbnQgPSB0aGlzLnJlZnJlc2hDbGllbnQoKS5jbGllbnQ7XG4gICAgICAgIHJldHVybiBbdGhpcy5ydW5NdXRhdGlvbiwgcmVzdWx0XTtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUuYWZ0ZXJFeGVjdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLnVubW91bnQuYmluZCh0aGlzKTtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUubXV0YXRlID0gZnVuY3Rpb24gKG11dGF0aW9uRnVuY3Rpb25PcHRpb25zKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuZ2V0T3B0aW9ucygpLCBtdXRhdGlvbiA9IF9hLm11dGF0aW9uLCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIG9wdGltaXN0aWNSZXNwb25zZSA9IF9hLm9wdGltaXN0aWNSZXNwb25zZSwgdXBkYXRlID0gX2EudXBkYXRlLCBfYiA9IF9hLmNvbnRleHQsIG11dGF0aW9uQ29udGV4dCA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iLCBfYyA9IF9hLmF3YWl0UmVmZXRjaFF1ZXJpZXMsIGF3YWl0UmVmZXRjaFF1ZXJpZXMgPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYywgZmV0Y2hQb2xpY3kgPSBfYS5mZXRjaFBvbGljeTtcbiAgICAgICAgdmFyIG11dGF0ZU9wdGlvbnMgPSBfX2Fzc2lnbih7fSwgbXV0YXRpb25GdW5jdGlvbk9wdGlvbnMpO1xuICAgICAgICB2YXIgbXV0YXRlVmFyaWFibGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdmFyaWFibGVzLCBtdXRhdGVPcHRpb25zLnZhcmlhYmxlcyk7XG4gICAgICAgIGRlbGV0ZSBtdXRhdGVPcHRpb25zLnZhcmlhYmxlcztcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudC5tdXRhdGUoX19hc3NpZ24oeyBtdXRhdGlvbjogbXV0YXRpb24sXG4gICAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IG9wdGltaXN0aWNSZXNwb25zZSwgcmVmZXRjaFF1ZXJpZXM6IG11dGF0ZU9wdGlvbnMucmVmZXRjaFF1ZXJpZXMgfHwgdGhpcy5nZXRPcHRpb25zKCkucmVmZXRjaFF1ZXJpZXMsIGF3YWl0UmVmZXRjaFF1ZXJpZXM6IGF3YWl0UmVmZXRjaFF1ZXJpZXMsXG4gICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZSwgY29udGV4dDogbXV0YXRpb25Db250ZXh0LCBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksIHZhcmlhYmxlczogbXV0YXRlVmFyaWFibGVzIH0sIG11dGF0ZU9wdGlvbnMpKTtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUub25NdXRhdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVzdWx0LmxvYWRpbmcgJiYgIXRoaXMuZ2V0T3B0aW9ucygpLmlnbm9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUub25NdXRhdGlvbkNvbXBsZXRlZCA9IGZ1bmN0aW9uIChyZXNwb25zZSwgbXV0YXRpb25JZCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmdldE9wdGlvbnMoKSwgb25Db21wbGV0ZWQgPSBfYS5vbkNvbXBsZXRlZCwgaWdub3JlUmVzdWx0cyA9IF9hLmlnbm9yZVJlc3VsdHM7XG4gICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YSwgZXJyb3JzID0gcmVzcG9uc2UuZXJyb3JzO1xuICAgICAgICB2YXIgZXJyb3IgPSBlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gbmV3IEFwb2xsb0Vycm9yKHsgZ3JhcGhRTEVycm9yczogZXJyb3JzIH0pXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGNhbGxPbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9uQ29tcGxldGVkID8gb25Db21wbGV0ZWQoZGF0YSkgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5pc01vc3RSZWNlbnRNdXRhdGlvbihtdXRhdGlvbklkKSAmJiAhaWdub3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoe1xuICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbE9uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUub25NdXRhdGlvbkVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBtdXRhdGlvbklkKSB7XG4gICAgICAgIHZhciBvbkVycm9yID0gdGhpcy5nZXRPcHRpb25zKCkub25FcnJvcjtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3N0UmVjZW50TXV0YXRpb24obXV0YXRpb25JZCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGNhbGxlZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNdXRhdGlvbkRhdGEucHJvdG90eXBlLmdlbmVyYXRlTmV3TXV0YXRpb25JZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICsrdGhpcy5tb3N0UmVjZW50TXV0YXRpb25JZDtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUuaXNNb3N0UmVjZW50TXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb25JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3N0UmVjZW50TXV0YXRpb25JZCA9PT0gbXV0YXRpb25JZDtcbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUudXBkYXRlUmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQgJiZcbiAgICAgICAgICAgICghdGhpcy5wcmV2aW91c1Jlc3VsdCB8fCAhZXF1YWwodGhpcy5wcmV2aW91c1Jlc3VsdCwgcmVzdWx0KSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTXV0YXRpb25EYXRhO1xufShPcGVyYXRpb25EYXRhKSk7XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uKG11dGF0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSB1c2VDb250ZXh0KGdldEFwb2xsb0NvbnRleHQoKSk7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoeyBjYWxsZWQ6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZSB9KSwgcmVzdWx0ID0gX2FbMF0sIHNldFJlc3VsdCA9IF9hWzFdO1xuICAgIHZhciB1cGRhdGVkT3B0aW9ucyA9IG9wdGlvbnMgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgbXV0YXRpb246IG11dGF0aW9uIH0pIDogeyBtdXRhdGlvbjogbXV0YXRpb24gfTtcbiAgICB2YXIgbXV0YXRpb25EYXRhUmVmID0gdXNlUmVmKCk7XG4gICAgZnVuY3Rpb24gZ2V0TXV0YXRpb25EYXRhUmVmKCkge1xuICAgICAgICBpZiAoIW11dGF0aW9uRGF0YVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBtdXRhdGlvbkRhdGFSZWYuY3VycmVudCA9IG5ldyBNdXRhdGlvbkRhdGEoe1xuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHVwZGF0ZWRPcHRpb25zLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0OiBzZXRSZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtdXRhdGlvbkRhdGFSZWYuY3VycmVudDtcbiAgICB9XG4gICAgdmFyIG11dGF0aW9uRGF0YSA9IGdldE11dGF0aW9uRGF0YVJlZigpO1xuICAgIG11dGF0aW9uRGF0YS5zZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKTtcbiAgICBtdXRhdGlvbkRhdGEuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG11dGF0aW9uRGF0YS5hZnRlckV4ZWN1dGUoKTsgfSk7XG4gICAgcmV0dXJuIG11dGF0aW9uRGF0YS5leGVjdXRlKHJlc3VsdCk7XG59XG5cbnZhciBTdWJzY3JpcHRpb25EYXRhID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3Vic2NyaXB0aW9uRGF0YSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJzY3JpcHRpb25EYXRhKF9hKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gX2Eub3B0aW9ucywgY29udGV4dCA9IF9hLmNvbnRleHQsIHNldFJlc3VsdCA9IF9hLnNldFJlc3VsdDtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgY29udGV4dCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmFibGUgPSB7fTtcbiAgICAgICAgX3RoaXMuc2V0UmVzdWx0ID0gc2V0UmVzdWx0O1xuICAgICAgICBfdGhpcy5pbml0aWFsaXplKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmICh0aGlzLmdldE9wdGlvbnMoKS5za2lwID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB0aGlzLmdldE9wdGlvbnMoKS52YXJpYWJsZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1cnJlbnRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIGlmICh0aGlzLnJlZnJlc2hDbGllbnQoKS5pc05ldykge1xuICAgICAgICAgICAgY3VycmVudFJlc3VsdCA9IHRoaXMuZ2V0TG9hZGluZ1Jlc3VsdCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaG91bGRSZXN1YnNjcmliZSA9IHRoaXMuZ2V0T3B0aW9ucygpLnNob3VsZFJlc3Vic2NyaWJlO1xuICAgICAgICBpZiAodHlwZW9mIHNob3VsZFJlc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzaG91bGRSZXN1YnNjcmliZSA9ICEhc2hvdWxkUmVzdWJzY3JpYmUodGhpcy5nZXRPcHRpb25zKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRSZXN1YnNjcmliZSAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNPcHRpb25zICYmXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByZXZpb3VzT3B0aW9ucykubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgKHRoaXMucHJldmlvdXNPcHRpb25zLnN1YnNjcmlwdGlvbiAhPT0gdGhpcy5nZXRPcHRpb25zKCkuc3Vic2NyaXB0aW9uIHx8XG4gICAgICAgICAgICAgICAgIWVxdWFsKHRoaXMucHJldmlvdXNPcHRpb25zLnZhcmlhYmxlcywgdGhpcy5nZXRPcHRpb25zKCkudmFyaWFibGVzKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNPcHRpb25zLnNraXAgIT09IHRoaXMuZ2V0T3B0aW9ucygpLnNraXApKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQgPSB0aGlzLmdldExvYWRpbmdSZXN1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemUodGhpcy5nZXRPcHRpb25zKCkpO1xuICAgICAgICB0aGlzLnN0YXJ0U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNPcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY3VycmVudFJlc3VsdCksIHsgdmFyaWFibGVzOiB0aGlzLmdldE9wdGlvbnMoKS52YXJpYWJsZXMgfSk7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS5hZnRlckV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW5kU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5O1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5IHx8IHRoaXMuZ2V0T3B0aW9ucygpLnNraXAgPT09IHRydWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkgPSB0aGlzLnJlZnJlc2hDbGllbnQoKS5jbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBvcHRpb25zLnN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICBmZXRjaFBvbGljeTogb3B0aW9ucy5mZXRjaFBvbGljeVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLnN0YXJ0U3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUuc3Vic2NyaXB0aW9uID0gdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogdGhpcy51cGRhdGVDdXJyZW50RGF0YS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3I6IHRoaXMudXBkYXRlRXJyb3IuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiB0aGlzLmNvbXBsZXRlU3Vic2NyaXB0aW9uLmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS5nZXRMb2FkaW5nUmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkYXRhOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLnVwZGF0ZVJlc3VsdCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS51cGRhdGVDdXJyZW50RGF0YSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgdmFyIG9uU3Vic2NyaXB0aW9uRGF0YSA9IHRoaXMuZ2V0T3B0aW9ucygpLm9uU3Vic2NyaXB0aW9uRGF0YTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoe1xuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiB1bmRlZmluZWRcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvblN1YnNjcmlwdGlvbkRhdGEpIHtcbiAgICAgICAgICAgIG9uU3Vic2NyaXB0aW9uRGF0YSh7XG4gICAgICAgICAgICAgICAgY2xpZW50OiB0aGlzLnJlZnJlc2hDbGllbnQoKS5jbGllbnQsXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uRGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUudXBkYXRlRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoe1xuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS5jb21wbGV0ZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9uU3Vic2NyaXB0aW9uQ29tcGxldGUgPSB0aGlzLmdldE9wdGlvbnMoKS5vblN1YnNjcmlwdGlvbkNvbXBsZXRlO1xuICAgICAgICBpZiAob25TdWJzY3JpcHRpb25Db21wbGV0ZSlcbiAgICAgICAgICAgIG9uU3Vic2NyaXB0aW9uQ29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5lbmRTdWJzY3JpcHRpb24oKTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmVuZFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9ic2VydmFibGUuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudE9ic2VydmFibGUuc3Vic2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uRGF0YTtcbn0oT3BlcmF0aW9uRGF0YSkpO1xuXG5mdW5jdGlvbiB1c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSB1c2VDb250ZXh0KGdldEFwb2xsb0NvbnRleHQoKSk7XG4gICAgdmFyIHVwZGF0ZWRPcHRpb25zID0gb3B0aW9uc1xuICAgICAgICA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvbiB9KSA6IHsgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb24gfTtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6ICF1cGRhdGVkT3B0aW9ucy5za2lwLFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBkYXRhOiB1bmRlZmluZWRcbiAgICB9KSwgcmVzdWx0ID0gX2FbMF0sIHNldFJlc3VsdCA9IF9hWzFdO1xuICAgIHZhciBzdWJzY3JpcHRpb25EYXRhUmVmID0gdXNlUmVmKCk7XG4gICAgZnVuY3Rpb24gZ2V0U3Vic2NyaXB0aW9uRGF0YVJlZigpIHtcbiAgICAgICAgaWYgKCFzdWJzY3JpcHRpb25EYXRhUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkRhdGFSZWYuY3VycmVudCA9IG5ldyBTdWJzY3JpcHRpb25EYXRhKHtcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB1cGRhdGVkT3B0aW9ucyxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIHNldFJlc3VsdDogc2V0UmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uRGF0YVJlZi5jdXJyZW50O1xuICAgIH1cbiAgICB2YXIgc3Vic2NyaXB0aW9uRGF0YSA9IGdldFN1YnNjcmlwdGlvbkRhdGFSZWYoKTtcbiAgICBzdWJzY3JpcHRpb25EYXRhLnNldE9wdGlvbnModXBkYXRlZE9wdGlvbnMsIHRydWUpO1xuICAgIHN1YnNjcmlwdGlvbkRhdGEuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmlwdGlvbkRhdGEuYWZ0ZXJFeGVjdXRlKCk7IH0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpcHRpb25EYXRhLmNsZWFudXAuYmluZChzdWJzY3JpcHRpb25EYXRhKTsgfSwgW10pO1xuICAgIHJldHVybiBzdWJzY3JpcHRpb25EYXRhLmV4ZWN1dGUocmVzdWx0KTtcbn1cblxuZnVuY3Rpb24gdXNlQXBvbGxvQ2xpZW50KCkge1xuICAgIHZhciBjbGllbnQgPSBSZWFjdC51c2VDb250ZXh0KGdldEFwb2xsb0NvbnRleHQoKSkuY2xpZW50O1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChjbGllbnQsIDEpIDogaW52YXJpYW50KGNsaWVudCwgJ05vIEFwb2xsbyBDbGllbnQgaW5zdGFuY2UgY2FuIGJlIGZvdW5kLiBQbGVhc2UgZW5zdXJlIHRoYXQgeW91ICcgK1xuICAgICAgICAnaGF2ZSBjYWxsZWQgYEFwb2xsb1Byb3ZpZGVyYCBoaWdoZXIgdXAgaW4geW91ciB0cmVlLicpO1xuICAgIHJldHVybiBjbGllbnQ7XG59XG5cbmZ1bmN0aW9uIG1ha2VEZWZhdWx0UXVlcnlJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlZW46IGZhbHNlLFxuICAgICAgICBvYnNlcnZhYmxlOiBudWxsXG4gICAgfTtcbn1cbnZhciBSZW5kZXJQcm9taXNlcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVuZGVyUHJvbWlzZXMoKSB7XG4gICAgICAgIHRoaXMucXVlcnlQcm9taXNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5xdWVyeUluZm9UcmllID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUucmVnaXN0ZXJTU1JPYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9ic2VydmFibGUsIHByb3BzKSB7XG4gICAgICAgIHRoaXMubG9va3VwUXVlcnlJbmZvKHByb3BzKS5vYnNlcnZhYmxlID0gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5nZXRTU1JPYnNlcnZhYmxlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvb2t1cFF1ZXJ5SW5mbyhwcm9wcykub2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5hZGRRdWVyeVByb21pc2UgPSBmdW5jdGlvbiAocXVlcnlJbnN0YW5jZSwgZmluaXNoKSB7XG4gICAgICAgIHZhciBpbmZvID0gdGhpcy5sb29rdXBRdWVyeUluZm8ocXVlcnlJbnN0YW5jZS5nZXRPcHRpb25zKCkpO1xuICAgICAgICBpZiAoIWluZm8uc2Vlbikge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVByb21pc2VzLnNldChxdWVyeUluc3RhbmNlLmdldE9wdGlvbnMoKSwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHF1ZXJ5SW5zdGFuY2UuZmV0Y2hEYXRhKCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmlzaCgpO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmhhc1Byb21pc2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeVByb21pc2VzLnNpemUgPiAwO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmNvbnN1bWVBbmRBd2FpdFByb21pc2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5xdWVyeVByb21pc2VzLmZvckVhY2goZnVuY3Rpb24gKHByb21pc2UsIHF1ZXJ5SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIF90aGlzLmxvb2t1cFF1ZXJ5SW5mbyhxdWVyeUluc3RhbmNlKS5zZWVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9O1xuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5sb29rdXBRdWVyeUluZm8gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgdmFyIHF1ZXJ5SW5mb1RyaWUgPSB0aGlzLnF1ZXJ5SW5mb1RyaWU7XG4gICAgICAgIHZhciBxdWVyeSA9IHByb3BzLnF1ZXJ5LCB2YXJpYWJsZXMgPSBwcm9wcy52YXJpYWJsZXM7XG4gICAgICAgIHZhciB2YXJNYXAgPSBxdWVyeUluZm9UcmllLmdldChxdWVyeSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICBpZiAoIXF1ZXJ5SW5mb1RyaWUuaGFzKHF1ZXJ5KSlcbiAgICAgICAgICAgIHF1ZXJ5SW5mb1RyaWUuc2V0KHF1ZXJ5LCB2YXJNYXApO1xuICAgICAgICB2YXIgdmFyaWFibGVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodmFyaWFibGVzKTtcbiAgICAgICAgdmFyIGluZm8gPSB2YXJNYXAuZ2V0KHZhcmlhYmxlc1N0cmluZykgfHwgbWFrZURlZmF1bHRRdWVyeUluZm8oKTtcbiAgICAgICAgaWYgKCF2YXJNYXAuaGFzKHZhcmlhYmxlc1N0cmluZykpXG4gICAgICAgICAgICB2YXJNYXAuc2V0KHZhcmlhYmxlc1N0cmluZywgaW5mbyk7XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgIH07XG4gICAgcmV0dXJuIFJlbmRlclByb21pc2VzO1xufSgpKTtcblxuZXhwb3J0IHsgUmVuZGVyUHJvbWlzZXMsIHVzZUFwb2xsb0NsaWVudCwgdXNlTGF6eVF1ZXJ5LCB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVN1YnNjcmlwdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtaG9va3MuZXNtLmpzLm1hcFxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufSIsInZhciBfYSA9IE9iamVjdC5wcm90b3R5cGUsIHRvU3RyaW5nID0gX2EudG9TdHJpbmcsIGhhc093blByb3BlcnR5ID0gX2EuaGFzT3duUHJvcGVydHk7XHJcbnZhciBwcmV2aW91c0NvbXBhcmlzb25zID0gbmV3IE1hcCgpO1xyXG4vKipcclxuICogUGVyZm9ybXMgYSBkZWVwIGVxdWFsaXR5IGNoZWNrIG9uIHR3byBKYXZhU2NyaXB0IHZhbHVlcywgdG9sZXJhdGluZyBjeWNsZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBlcXVhbChhLCBiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBjaGVjayhhLCBiKTtcclxuICAgIH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHByZXZpb3VzQ29tcGFyaXNvbnMuY2xlYXIoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjaGVjayhhLCBiKSB7XHJcbiAgICAvLyBJZiB0aGUgdHdvIHZhbHVlcyBhcmUgc3RyaWN0bHkgZXF1YWwsIG91ciBqb2IgaXMgZWFzeS5cclxuICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nIHJldHVybnMgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcnVudGltZSB0eXBlIG9mXHJcbiAgICAvLyB0aGUgZ2l2ZW4gdmFsdWUgdGhhdCBpcyBjb25zaWRlcmFibHkgbW9yZSBwcmVjaXNlIHRoYW4gdHlwZW9mLlxyXG4gICAgdmFyIGFUYWcgPSB0b1N0cmluZy5jYWxsKGEpO1xyXG4gICAgdmFyIGJUYWcgPSB0b1N0cmluZy5jYWxsKGIpO1xyXG4gICAgLy8gSWYgdGhlIHJ1bnRpbWUgdHlwZXMgb2YgYSBhbmQgYiBhcmUgZGlmZmVyZW50LCB0aGV5IGNvdWxkIG1heWJlIGJlIGVxdWFsXHJcbiAgICAvLyB1bmRlciBzb21lIGludGVycHJldGF0aW9uIG9mIGVxdWFsaXR5LCBidXQgZm9yIHNpbXBsaWNpdHkgYW5kIHBlcmZvcm1hbmNlXHJcbiAgICAvLyB3ZSBqdXN0IHJldHVybiBmYWxzZSBpbnN0ZWFkLlxyXG4gICAgaWYgKGFUYWcgIT09IGJUYWcpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGFUYWcpIHtcclxuICAgICAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6XHJcbiAgICAgICAgICAgIC8vIEFycmF5cyBhcmUgYSBsb3QgbGlrZSBvdGhlciBvYmplY3RzLCBidXQgd2UgY2FuIGNoZWFwbHkgY29tcGFyZSB0aGVpclxyXG4gICAgICAgICAgICAvLyBsZW5ndGhzIGFzIGEgc2hvcnQtY3V0IGJlZm9yZSBjb21wYXJpbmcgdGhlaXIgZWxlbWVudHMuXHJcbiAgICAgICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gRmFsbCB0aHJvdWdoIHRvIG9iamVjdCBjYXNlLi4uXHJcbiAgICAgICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzoge1xyXG4gICAgICAgICAgICBpZiAocHJldmlvdXNseUNvbXBhcmVkKGEsIGIpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xyXG4gICAgICAgICAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcclxuICAgICAgICAgICAgLy8gSWYgYGFgIGFuZCBgYmAgaGF2ZSBhIGRpZmZlcmVudCBudW1iZXIgb2YgZW51bWVyYWJsZSBrZXlzLCB0aGV5XHJcbiAgICAgICAgICAgIC8vIG11c3QgYmUgZGlmZmVyZW50LlxyXG4gICAgICAgICAgICB2YXIga2V5Q291bnQgPSBhS2V5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChrZXlDb3VudCAhPT0gYktleXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBOb3cgbWFrZSBzdXJlIHRoZXkgaGF2ZSB0aGUgc2FtZSBrZXlzLlxyXG4gICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGtleUNvdW50OyArK2spIHtcclxuICAgICAgICAgICAgICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChiLCBhS2V5c1trXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRmluYWxseSwgY2hlY2sgZGVlcCBlcXVhbGl0eSBvZiBhbGwgY2hpbGQgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBrZXlDb3VudDsgKytrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gYUtleXNba107XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrKGFba2V5XSwgYltrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnW29iamVjdCBFcnJvcl0nOlxyXG4gICAgICAgICAgICByZXR1cm4gYS5uYW1lID09PSBiLm5hbWUgJiYgYS5tZXNzYWdlID09PSBiLm1lc3NhZ2U7XHJcbiAgICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcclxuICAgICAgICAgICAgLy8gSGFuZGxlIE5hTiwgd2hpY2ggaXMgIT09IGl0c2VsZi5cclxuICAgICAgICAgICAgaWYgKGEgIT09IGEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYiAhPT0gYjtcclxuICAgICAgICAvLyBGYWxsIHRocm91Z2ggdG8gc2hhcmVkICthID09PSArYiBjYXNlLi4uXHJcbiAgICAgICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XHJcbiAgICAgICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XHJcbiAgICAgICAgICAgIHJldHVybiArYSA9PT0gK2I7XHJcbiAgICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcclxuICAgICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxyXG4gICAgICAgICAgICByZXR1cm4gYSA9PSBcIlwiICsgYjtcclxuICAgICAgICBjYXNlICdbb2JqZWN0IE1hcF0nOlxyXG4gICAgICAgIGNhc2UgJ1tvYmplY3QgU2V0XSc6IHtcclxuICAgICAgICAgICAgaWYgKGEuc2l6ZSAhPT0gYi5zaXplKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAocHJldmlvdXNseUNvbXBhcmVkKGEsIGIpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHZhciBhSXRlcmF0b3IgPSBhLmVudHJpZXMoKTtcclxuICAgICAgICAgICAgdmFyIGlzTWFwID0gYVRhZyA9PT0gJ1tvYmplY3QgTWFwXSc7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IGFJdGVyYXRvci5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5mby5kb25lKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBpbnN0YW5jZW9mIFNldCwgYVZhbHVlID09PSBhS2V5LlxyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gaW5mby52YWx1ZSwgYUtleSA9IF9hWzBdLCBhVmFsdWUgPSBfYVsxXTtcclxuICAgICAgICAgICAgICAgIC8vIFNvIHRoaXMgd29ya3MgdGhlIHNhbWUgd2F5IGZvciBib3RoIFNldCBhbmQgTWFwLlxyXG4gICAgICAgICAgICAgICAgaWYgKCFiLmhhcyhhS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEhvd2V2ZXIsIHdlIGNhcmUgYWJvdXQgZGVlcCBlcXVhbGl0eSBvZiB2YWx1ZXMgb25seSB3aGVuIGRlYWxpbmdcclxuICAgICAgICAgICAgICAgIC8vIHdpdGggTWFwIHN0cnVjdHVyZXMuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNNYXAgJiYgIWNoZWNrKGFWYWx1ZSwgYi5nZXQoYUtleSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIE90aGVyd2lzZSB0aGUgdmFsdWVzIGFyZSBub3QgZXF1YWwuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gcHJldmlvdXNseUNvbXBhcmVkKGEsIGIpIHtcclxuICAgIC8vIFRob3VnaCBjeWNsaWMgcmVmZXJlbmNlcyBjYW4gbWFrZSBhbiBvYmplY3QgZ3JhcGggYXBwZWFyIGluZmluaXRlIGZyb20gdGhlXHJcbiAgICAvLyBwZXJzcGVjdGl2ZSBvZiBhIGRlcHRoLWZpcnN0IHRyYXZlcnNhbCwgdGhlIGdyYXBoIHN0aWxsIGNvbnRhaW5zIGEgZmluaXRlXHJcbiAgICAvLyBudW1iZXIgb2YgZGlzdGluY3Qgb2JqZWN0IHJlZmVyZW5jZXMuIFdlIHVzZSB0aGUgcHJldmlvdXNDb21wYXJpc29ucyBjYWNoZVxyXG4gICAgLy8gdG8gYXZvaWQgY29tcGFyaW5nIHRoZSBzYW1lIHBhaXIgb2Ygb2JqZWN0IHJlZmVyZW5jZXMgbW9yZSB0aGFuIG9uY2UsIHdoaWNoXHJcbiAgICAvLyBndWFyYW50ZWVzIHRlcm1pbmF0aW9uIChldmVuIGlmIHdlIGVuZCB1cCBjb21wYXJpbmcgZXZlcnkgb2JqZWN0IGluIG9uZVxyXG4gICAgLy8gZ3JhcGggdG8gZXZlcnkgb2JqZWN0IGluIHRoZSBvdGhlciBncmFwaCwgd2hpY2ggaXMgZXh0cmVtZWx5IHVubGlrZWx5KSxcclxuICAgIC8vIHdoaWxlIHN0aWxsIGFsbG93aW5nIHdlaXJkIGlzb21vcnBoaWMgc3RydWN0dXJlcyAobGlrZSByaW5ncyB3aXRoIGRpZmZlcmVudFxyXG4gICAgLy8gbGVuZ3RocykgYSBjaGFuY2UgdG8gcGFzcyB0aGUgZXF1YWxpdHkgdGVzdC5cclxuICAgIHZhciBiU2V0ID0gcHJldmlvdXNDb21wYXJpc29ucy5nZXQoYSk7XHJcbiAgICBpZiAoYlNldCkge1xyXG4gICAgICAgIC8vIFJldHVybiB0cnVlIGhlcmUgYmVjYXVzZSB3ZSBjYW4gYmUgc3VyZSBmYWxzZSB3aWxsIGJlIHJldHVybmVkIHNvbWV3aGVyZVxyXG4gICAgICAgIC8vIGVsc2UgaWYgdGhlIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50LlxyXG4gICAgICAgIGlmIChiU2V0LmhhcyhiKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwcmV2aW91c0NvbXBhcmlzb25zLnNldChhLCBiU2V0ID0gbmV3IFNldCk7XHJcbiAgICB9XHJcbiAgICBiU2V0LmFkZChiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxuXG5leHBvcnQgZGVmYXVsdCBlcXVhbDtcbmV4cG9ydCB7IGVxdWFsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcXVhbGl0eS5lc20uanMubWFwXG4iLCJpbXBvcnQgeyBfX2V4dGVuZHMsIF9fYXNzaWduLCBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbiwgaXNFcXVhbCwgdHJ5RnVuY3Rpb25PckxvZ0Vycm9yLCBjbG9uZURlZXAsIG1lcmdlRGVlcCwgaGFzRGlyZWN0aXZlcywgcmVtb3ZlQ2xpZW50U2V0c0Zyb21Eb2N1bWVudCwgYnVpbGRRdWVyeUZyb21TZWxlY3Rpb25TZXQsIGdldE1haW5EZWZpbml0aW9uLCBnZXRGcmFnbWVudERlZmluaXRpb25zLCBjcmVhdGVGcmFnbWVudE1hcCwgbWVyZ2VEZWVwQXJyYXksIHJlc3VsdEtleU5hbWVGcm9tRmllbGQsIGFyZ3VtZW50c09iamVjdEZyb21GaWVsZCwgc2hvdWxkSW5jbHVkZSwgaXNGaWVsZCwgaXNJbmxpbmVGcmFnbWVudCwgY2FuVXNlV2Vha01hcCwgZ3JhcGhRTFJlc3VsdEhhc0Vycm9yLCByZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50LCBoYXNDbGllbnRFeHBvcnRzLCBnZXREZWZhdWx0VmFsdWVzLCBnZXRPcGVyYXRpb25OYW1lIH0gZnJvbSAnYXBvbGxvLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIE9ic2VydmFibGUkMSwgZXhlY3V0ZSwgQXBvbGxvTGluayB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuaW1wb3J0IHsgSW52YXJpYW50RXJyb3IsIGludmFyaWFudCB9IGZyb20gJ3RzLWludmFyaWFudCc7XG5pbXBvcnQgeyB2aXNpdCwgQlJFQUsgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlL3Zpc2l0b3InO1xuXG52YXIgTmV0d29ya1N0YXR1cztcbihmdW5jdGlvbiAoTmV0d29ya1N0YXR1cykge1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcImxvYWRpbmdcIl0gPSAxXSA9IFwibG9hZGluZ1wiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcInNldFZhcmlhYmxlc1wiXSA9IDJdID0gXCJzZXRWYXJpYWJsZXNcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJmZXRjaE1vcmVcIl0gPSAzXSA9IFwiZmV0Y2hNb3JlXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicmVmZXRjaFwiXSA9IDRdID0gXCJyZWZldGNoXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicG9sbFwiXSA9IDZdID0gXCJwb2xsXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicmVhZHlcIl0gPSA3XSA9IFwicmVhZHlcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJlcnJvclwiXSA9IDhdID0gXCJlcnJvclwiO1xufSkoTmV0d29ya1N0YXR1cyB8fCAoTmV0d29ya1N0YXR1cyA9IHt9KSk7XG5mdW5jdGlvbiBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cykge1xuICAgIHJldHVybiBuZXR3b3JrU3RhdHVzIDwgNztcbn1cblxudmFyIE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPYnNlcnZhYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGVbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVsnQEBvYnNlcnZhYmxlJ10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGU7XG59KE9ic2VydmFibGUkMSkpO1xuXG5mdW5jdGlvbiBpc05vbkVtcHR5QXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gaXNBcG9sbG9FcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyLmhhc093blByb3BlcnR5KCdncmFwaFFMRXJyb3JzJyk7XG59XG52YXIgZ2VuZXJhdGVFcnJvck1lc3NhZ2UgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnJztcbiAgICBpZiAoaXNOb25FbXB0eUFycmF5KGVyci5ncmFwaFFMRXJyb3JzKSkge1xuICAgICAgICBlcnIuZ3JhcGhRTEVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChncmFwaFFMRXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBncmFwaFFMRXJyb3JcbiAgICAgICAgICAgICAgICA/IGdyYXBoUUxFcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiAnRXJyb3IgbWVzc2FnZSBub3QgZm91bmQuJztcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCJHcmFwaFFMIGVycm9yOiBcIiArIGVycm9yTWVzc2FnZSArIFwiXFxuXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZXJyLm5ldHdvcmtFcnJvcikge1xuICAgICAgICBtZXNzYWdlICs9ICdOZXR3b3JrIGVycm9yOiAnICsgZXJyLm5ldHdvcmtFcnJvci5tZXNzYWdlICsgJ1xcbic7XG4gICAgfVxuICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xcbiQvLCAnJyk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59O1xudmFyIEFwb2xsb0Vycm9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXBvbGxvRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBvbGxvRXJyb3IoX2EpIHtcbiAgICAgICAgdmFyIGdyYXBoUUxFcnJvcnMgPSBfYS5ncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgPSBfYS5uZXR3b3JrRXJyb3IsIGVycm9yTWVzc2FnZSA9IF9hLmVycm9yTWVzc2FnZSwgZXh0cmFJbmZvID0gX2EuZXh0cmFJbmZvO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlcnJvck1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmdyYXBoUUxFcnJvcnMgPSBncmFwaFFMRXJyb3JzIHx8IFtdO1xuICAgICAgICBfdGhpcy5uZXR3b3JrRXJyb3IgPSBuZXR3b3JrRXJyb3IgfHwgbnVsbDtcbiAgICAgICAgaWYgKCFlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgIF90aGlzLm1lc3NhZ2UgPSBnZW5lcmF0ZUVycm9yTWVzc2FnZShfdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5tZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmV4dHJhSW5mbyA9IGV4dHJhSW5mbztcbiAgICAgICAgX3RoaXMuX19wcm90b19fID0gQXBvbGxvRXJyb3IucHJvdG90eXBlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBBcG9sbG9FcnJvcjtcbn0oRXJyb3IpKTtcblxudmFyIEZldGNoVHlwZTtcbihmdW5jdGlvbiAoRmV0Y2hUeXBlKSB7XG4gICAgRmV0Y2hUeXBlW0ZldGNoVHlwZVtcIm5vcm1hbFwiXSA9IDFdID0gXCJub3JtYWxcIjtcbiAgICBGZXRjaFR5cGVbRmV0Y2hUeXBlW1wicmVmZXRjaFwiXSA9IDJdID0gXCJyZWZldGNoXCI7XG4gICAgRmV0Y2hUeXBlW0ZldGNoVHlwZVtcInBvbGxcIl0gPSAzXSA9IFwicG9sbFwiO1xufSkoRmV0Y2hUeXBlIHx8IChGZXRjaFR5cGUgPSB7fSkpO1xuXG52YXIgaGFzRXJyb3IgPSBmdW5jdGlvbiAoc3RvcmVWYWx1ZSwgcG9saWN5KSB7XG4gICAgaWYgKHBvbGljeSA9PT0gdm9pZCAwKSB7IHBvbGljeSA9ICdub25lJzsgfVxuICAgIHJldHVybiBzdG9yZVZhbHVlICYmIChzdG9yZVZhbHVlLm5ldHdvcmtFcnJvciB8fFxuICAgICAgICAocG9saWN5ID09PSAnbm9uZScgJiYgaXNOb25FbXB0eUFycmF5KHN0b3JlVmFsdWUuZ3JhcGhRTEVycm9ycykpKTtcbn07XG52YXIgT2JzZXJ2YWJsZVF1ZXJ5ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT2JzZXJ2YWJsZVF1ZXJ5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVRdWVyeShfYSkge1xuICAgICAgICB2YXIgcXVlcnlNYW5hZ2VyID0gX2EucXVlcnlNYW5hZ2VyLCBvcHRpb25zID0gX2Eub3B0aW9ucywgX2IgPSBfYS5zaG91bGRTdWJzY3JpYmUsIHNob3VsZFN1YnNjcmliZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uU3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5pc1Rvcm5Eb3duID0gZmFsc2U7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBfdGhpcy52YXJpYWJsZXMgPSBvcHRpb25zLnZhcmlhYmxlcyB8fCB7fTtcbiAgICAgICAgX3RoaXMucXVlcnlJZCA9IHF1ZXJ5TWFuYWdlci5nZW5lcmF0ZVF1ZXJ5SWQoKTtcbiAgICAgICAgX3RoaXMuc2hvdWxkU3Vic2NyaWJlID0gc2hvdWxkU3Vic2NyaWJlO1xuICAgICAgICB2YXIgb3BEZWYgPSBnZXRPcGVyYXRpb25EZWZpbml0aW9uKG9wdGlvbnMucXVlcnkpO1xuICAgICAgICBfdGhpcy5xdWVyeU5hbWUgPSBvcERlZiAmJiBvcERlZi5uYW1lICYmIG9wRGVmLm5hbWUudmFsdWU7XG4gICAgICAgIF90aGlzLnF1ZXJ5TWFuYWdlciA9IHF1ZXJ5TWFuYWdlcjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMub2JzZXJ2ZXJzLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnF1ZXJ5TWFuYWdlci5yZW1vdmVRdWVyeShfdGhpcy5xdWVyeUlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IF90aGlzLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5jdXJyZW50UmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZXRDdXJyZW50UmVzdWx0KCk7XG4gICAgICAgIGlmIChyZXN1bHQuZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHQuZGF0YSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVG9ybkRvd24pIHtcbiAgICAgICAgICAgIHZhciBsYXN0UmVzdWx0ID0gdGhpcy5sYXN0UmVzdWx0O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiAhdGhpcy5sYXN0RXJyb3IgJiYgbGFzdFJlc3VsdCAmJiBsYXN0UmVzdWx0LmRhdGEgfHwgdm9pZCAwLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0aGlzLmxhc3RFcnJvcixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBOZXR3b3JrU3RhdHVzLmVycm9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLnF1ZXJ5TWFuYWdlci5nZXRDdXJyZW50UXVlcnlSZXN1bHQodGhpcyksIGRhdGEgPSBfYS5kYXRhLCBwYXJ0aWFsID0gX2EucGFydGlhbDtcbiAgICAgICAgdmFyIHF1ZXJ5U3RvcmVWYWx1ZSA9IHRoaXMucXVlcnlNYW5hZ2VyLnF1ZXJ5U3RvcmUuZ2V0KHRoaXMucXVlcnlJZCk7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBmZXRjaFBvbGljeSA9IHRoaXMub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgdmFyIGlzTmV0d29ya0ZldGNoUG9saWN5ID0gZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJztcbiAgICAgICAgaWYgKHF1ZXJ5U3RvcmVWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIG5ldHdvcmtTdGF0dXMgPSBxdWVyeVN0b3JlVmFsdWUubmV0d29ya1N0YXR1cztcbiAgICAgICAgICAgIGlmIChoYXNFcnJvcihxdWVyeVN0b3JlVmFsdWUsIHRoaXMub3B0aW9ucy5lcnJvclBvbGljeSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBuZXR3b3JrU3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogbmV3IEFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHF1ZXJ5U3RvcmVWYWx1ZS5ncmFwaFFMRXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yOiBxdWVyeVN0b3JlVmFsdWUubmV0d29ya0Vycm9yLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHF1ZXJ5U3RvcmVWYWx1ZS52YXJpYWJsZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudmFyaWFibGVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy52YXJpYWJsZXMpLCBxdWVyeVN0b3JlVmFsdWUudmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IHRoaXMub3B0aW9ucy52YXJpYWJsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cyksXG4gICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1cyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocXVlcnlTdG9yZVZhbHVlLmdyYXBoUUxFcnJvcnMgJiYgdGhpcy5vcHRpb25zLmVycm9yUG9saWN5ID09PSAnYWxsJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lcnJvcnMgPSBxdWVyeVN0b3JlVmFsdWUuZ3JhcGhRTEVycm9ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBsb2FkaW5nID0gaXNOZXR3b3JrRmV0Y2hQb2xpY3kgfHxcbiAgICAgICAgICAgICAgICAocGFydGlhbCAmJiBmZXRjaFBvbGljeSAhPT0gJ2NhY2hlLW9ubHknKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogbG9hZGluZyA/IE5ldHdvcmtTdGF0dXMubG9hZGluZyA6IE5ldHdvcmtTdGF0dXMucmVhZHksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGFydGlhbCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMYXN0UmVzdWx0KF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXN1bHQpLCB7IHN0YWxlOiBmYWxzZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXN1bHQpLCB7IHBhcnRpYWw6IHBhcnRpYWwgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmlzRGlmZmVyZW50RnJvbUxhc3RSZXN1bHQgPSBmdW5jdGlvbiAobmV3UmVzdWx0KSB7XG4gICAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMubGFzdFJlc3VsdFNuYXBzaG90O1xuICAgICAgICByZXR1cm4gIShzbmFwc2hvdCAmJlxuICAgICAgICAgICAgbmV3UmVzdWx0ICYmXG4gICAgICAgICAgICBzbmFwc2hvdC5uZXR3b3JrU3RhdHVzID09PSBuZXdSZXN1bHQubmV0d29ya1N0YXR1cyAmJlxuICAgICAgICAgICAgc25hcHNob3Quc3RhbGUgPT09IG5ld1Jlc3VsdC5zdGFsZSAmJlxuICAgICAgICAgICAgaXNFcXVhbChzbmFwc2hvdC5kYXRhLCBuZXdSZXN1bHQuZGF0YSkpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRMYXN0UmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0UmVzdWx0O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRMYXN0RXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RFcnJvcjtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVzZXRMYXN0UmVzdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubGFzdFJlc3VsdDtcbiAgICAgICAgZGVsZXRlIHRoaXMubGFzdFJlc3VsdFNuYXBzaG90O1xuICAgICAgICBkZWxldGUgdGhpcy5sYXN0RXJyb3I7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXNldFF1ZXJ5U3RvcmVFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBxdWVyeVN0b3JlID0gdGhpcy5xdWVyeU1hbmFnZXIucXVlcnlTdG9yZS5nZXQodGhpcy5xdWVyeUlkKTtcbiAgICAgICAgaWYgKHF1ZXJ5U3RvcmUpIHtcbiAgICAgICAgICAgIHF1ZXJ5U3RvcmUubmV0d29ya0Vycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHF1ZXJ5U3RvcmUuZ3JhcGhRTEVycm9ycyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlZmV0Y2ggPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBmZXRjaFBvbGljeSA9IHRoaXMub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSAnY2FjaGUtb25seScpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgSW52YXJpYW50RXJyb3IoMSkgOiBuZXcgSW52YXJpYW50RXJyb3IoJ2NhY2hlLW9ubHkgZmV0Y2hQb2xpY3kgb3B0aW9uIHNob3VsZCBub3QgYmUgdXNlZCB0b2dldGhlciB3aXRoIHF1ZXJ5IHJlZmV0Y2guJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZXRjaFBvbGljeSAhPT0gJ25vLWNhY2hlJyAmJlxuICAgICAgICAgICAgZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1hbmQtbmV0d29yaycpIHtcbiAgICAgICAgICAgIGZldGNoUG9saWN5ID0gJ25ldHdvcmstb25seSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VxdWFsKHRoaXMudmFyaWFibGVzLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnZhcmlhYmxlcyksIHZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VxdWFsKHRoaXMub3B0aW9ucy52YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnZhcmlhYmxlcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMudmFyaWFibGVzKSwgdGhpcy52YXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5mZXRjaFF1ZXJ5KHRoaXMucXVlcnlJZCwgX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIHsgZmV0Y2hQb2xpY3k6IGZldGNoUG9saWN5IH0pLCBGZXRjaFR5cGUucmVmZXRjaCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmZldGNoTW9yZSA9IGZ1bmN0aW9uIChmZXRjaE1vcmVPcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmZXRjaE1vcmVPcHRpb25zLnVwZGF0ZVF1ZXJ5LCAyKSA6IGludmFyaWFudChmZXRjaE1vcmVPcHRpb25zLnVwZGF0ZVF1ZXJ5LCAndXBkYXRlUXVlcnkgb3B0aW9uIGlzIHJlcXVpcmVkLiBUaGlzIGZ1bmN0aW9uIGRlZmluZXMgaG93IHRvIHVwZGF0ZSB0aGUgcXVlcnkgZGF0YSB3aXRoIHRoZSBuZXcgcmVzdWx0cy4nKTtcbiAgICAgICAgdmFyIGNvbWJpbmVkT3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCAoZmV0Y2hNb3JlT3B0aW9ucy5xdWVyeSA/IGZldGNoTW9yZU9wdGlvbnMgOiBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgZmV0Y2hNb3JlT3B0aW9ucyksIHsgdmFyaWFibGVzOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy52YXJpYWJsZXMpLCBmZXRjaE1vcmVPcHRpb25zLnZhcmlhYmxlcykgfSkpKSwgeyBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScgfSk7XG4gICAgICAgIHZhciBxaWQgPSB0aGlzLnF1ZXJ5TWFuYWdlci5nZW5lcmF0ZVF1ZXJ5SWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyXG4gICAgICAgICAgICAuZmV0Y2hRdWVyeShxaWQsIGNvbWJpbmVkT3B0aW9ucywgRmV0Y2hUeXBlLm5vcm1hbCwgdGhpcy5xdWVyeUlkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkoZnVuY3Rpb24gKHByZXZpb3VzUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoTW9yZU9wdGlvbnMudXBkYXRlUXVlcnkocHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hNb3JlUmVzdWx0OiBmZXRjaE1vcmVSZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjb21iaW5lZE9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5xdWVyeU1hbmFnZXIuc3RvcFF1ZXJ5KHFpZCk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hNb3JlUmVzdWx0O1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLnF1ZXJ5TWFuYWdlci5zdG9wUXVlcnkocWlkKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc3Vic2NyaWJlVG9Nb3JlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMucXVlcnlNYW5hZ2VyXG4gICAgICAgICAgICAuc3RhcnRHcmFwaFFMU3Vic2NyaXB0aW9uKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBvcHRpb25zLmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHN1YnNjcmlwdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlUXVlcnkgPSBvcHRpb25zLnVwZGF0ZVF1ZXJ5O1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVRdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShmdW5jdGlvbiAocHJldmlvdXMsIF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFyaWFibGVzID0gX2EudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVF1ZXJ5KHByZXZpb3VzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uRGF0YTogc3Vic2NyaXB0aW9uRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiB8fCBpbnZhcmlhbnQuZXJyb3IoJ1VuaGFuZGxlZCBHcmFwaFFMIHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChzdWJzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnN1YnNjcmlwdGlvbnMuZGVsZXRlKHN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgIHZhciBvbGRGZXRjaFBvbGljeSA9IHRoaXMub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIG9wdHMpO1xuICAgICAgICBpZiAob3B0cy5wb2xsSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQb2xsaW5nKG9wdHMucG9sbEludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRzLnBvbGxJbnRlcnZhbCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wUG9sbGluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmZXRjaFBvbGljeSA9IG9wdHMuZmV0Y2hQb2xpY3k7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFZhcmlhYmxlcyh0aGlzLm9wdGlvbnMudmFyaWFibGVzLCBvbGRGZXRjaFBvbGljeSAhPT0gZmV0Y2hQb2xpY3kgJiYgKG9sZEZldGNoUG9saWN5ID09PSAnY2FjaGUtb25seScgfHxcbiAgICAgICAgICAgIG9sZEZldGNoUG9saWN5ID09PSAnc3RhbmRieScgfHxcbiAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyksIG9wdHMuZmV0Y2hSZXN1bHRzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc2V0VmFyaWFibGVzID0gZnVuY3Rpb24gKHZhcmlhYmxlcywgdHJ5RmV0Y2gsIGZldGNoUmVzdWx0cykge1xuICAgICAgICBpZiAodHJ5RmV0Y2ggPT09IHZvaWQgMCkgeyB0cnlGZXRjaCA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChmZXRjaFJlc3VsdHMgPT09IHZvaWQgMCkgeyBmZXRjaFJlc3VsdHMgPSB0cnVlOyB9XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwgdGhpcy52YXJpYWJsZXM7XG4gICAgICAgIGlmICghdHJ5RmV0Y2ggJiYgaXNFcXVhbCh2YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLnNpemUgJiYgZmV0Y2hSZXN1bHRzXG4gICAgICAgICAgICAgICAgPyB0aGlzLnJlc3VsdCgpXG4gICAgICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IHRoaXMub3B0aW9ucy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgICAgIGlmICghdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5mZXRjaFF1ZXJ5KHRoaXMucXVlcnlJZCwgdGhpcy5vcHRpb25zKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUudXBkYXRlUXVlcnkgPSBmdW5jdGlvbiAobWFwRm4pIHtcbiAgICAgICAgdmFyIHF1ZXJ5TWFuYWdlciA9IHRoaXMucXVlcnlNYW5hZ2VyO1xuICAgICAgICB2YXIgX2EgPSBxdWVyeU1hbmFnZXIuZ2V0UXVlcnlXaXRoUHJldmlvdXNSZXN1bHQodGhpcy5xdWVyeUlkKSwgcHJldmlvdXNSZXN1bHQgPSBfYS5wcmV2aW91c1Jlc3VsdCwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBkb2N1bWVudCA9IF9hLmRvY3VtZW50O1xuICAgICAgICB2YXIgbmV3UmVzdWx0ID0gdHJ5RnVuY3Rpb25PckxvZ0Vycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXBGbihwcmV2aW91c1Jlc3VsdCwgeyB2YXJpYWJsZXM6IHZhcmlhYmxlcyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdSZXN1bHQpIHtcbiAgICAgICAgICAgIHF1ZXJ5TWFuYWdlci5kYXRhU3RvcmUubWFya1VwZGF0ZVF1ZXJ5UmVzdWx0KGRvY3VtZW50LCB2YXJpYWJsZXMsIG5ld1Jlc3VsdCk7XG4gICAgICAgICAgICBxdWVyeU1hbmFnZXIuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnN0b3BQb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5zdG9wUG9sbGluZ1F1ZXJ5KHRoaXMucXVlcnlJZCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wb2xsSW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnN0YXJ0UG9sbGluZyA9IGZ1bmN0aW9uIChwb2xsSW50ZXJ2YWwpIHtcbiAgICAgICAgYXNzZXJ0Tm90Q2FjaGVGaXJzdE9yT25seSh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnBvbGxJbnRlcnZhbCA9IHBvbGxJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuc3RhcnRQb2xsaW5nUXVlcnkodGhpcy5vcHRpb25zLCB0aGlzLnF1ZXJ5SWQpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS51cGRhdGVMYXN0UmVzdWx0ID0gZnVuY3Rpb24gKG5ld1Jlc3VsdCkge1xuICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHQgPSB0aGlzLmxhc3RSZXN1bHQ7XG4gICAgICAgIHRoaXMubGFzdFJlc3VsdCA9IG5ld1Jlc3VsdDtcbiAgICAgICAgdGhpcy5sYXN0UmVzdWx0U25hcHNob3QgPSB0aGlzLnF1ZXJ5TWFuYWdlci5hc3N1bWVJbW11dGFibGVSZXN1bHRzXG4gICAgICAgICAgICA/IG5ld1Jlc3VsdFxuICAgICAgICAgICAgOiBjbG9uZURlZXAobmV3UmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5vblN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHN1Yk9ic2VydmVyID0gb2JzZXJ2ZXIuX3N1YnNjcmlwdGlvbi5fb2JzZXJ2ZXI7XG4gICAgICAgICAgICBpZiAoc3ViT2JzZXJ2ZXIgJiYgIXN1Yk9ic2VydmVyLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3ViT2JzZXJ2ZXIuZXJyb3IgPSBkZWZhdWx0U3Vic2NyaXB0aW9uT2JzZXJ2ZXJFcnJvckNhbGxiYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkgeyB9XG4gICAgICAgIHZhciBmaXJzdCA9ICF0aGlzLm9ic2VydmVycy5zaXplO1xuICAgICAgICB0aGlzLm9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCAmJiB0aGlzLmxhc3RSZXN1bHQpXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMubGFzdFJlc3VsdCk7XG4gICAgICAgIGlmIChvYnNlcnZlci5lcnJvciAmJiB0aGlzLmxhc3RFcnJvcilcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHRoaXMubGFzdEVycm9yKTtcbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFVwUXVlcnkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpICYmICFfdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRlYXJEb3duUXVlcnkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc2V0VXBRdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gdGhpcywgcXVlcnlNYW5hZ2VyID0gX2EucXVlcnlNYW5hZ2VyLCBxdWVyeUlkID0gX2EucXVlcnlJZDtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkU3Vic2NyaWJlKSB7XG4gICAgICAgICAgICBxdWVyeU1hbmFnZXIuYWRkT2JzZXJ2YWJsZVF1ZXJ5KHF1ZXJ5SWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9sbEludGVydmFsKSB7XG4gICAgICAgICAgICBhc3NlcnROb3RDYWNoZUZpcnN0T3JPbmx5KHRoaXMpO1xuICAgICAgICAgICAgcXVlcnlNYW5hZ2VyLnN0YXJ0UG9sbGluZ1F1ZXJ5KHRoaXMub3B0aW9ucywgcXVlcnlJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUxhc3RSZXN1bHQoX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLmxhc3RSZXN1bHQpLCB7IGVycm9yczogZXJyb3IuZ3JhcGhRTEVycm9ycywgbmV0d29ya1N0YXR1czogTmV0d29ya1N0YXR1cy5lcnJvciwgbG9hZGluZzogZmFsc2UgfSkpO1xuICAgICAgICAgICAgaXRlcmF0ZU9ic2VydmVyc1NhZmVseShfdGhpcy5vYnNlcnZlcnMsICdlcnJvcicsIF90aGlzLmxhc3RFcnJvciA9IGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgcXVlcnlNYW5hZ2VyLm9ic2VydmVRdWVyeShxdWVyeUlkLCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGFzdEVycm9yIHx8IF90aGlzLmlzRGlmZmVyZW50RnJvbUxhc3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHRfMSA9IF90aGlzLnVwZGF0ZUxhc3RSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMub3B0aW9ucywgcXVlcnlfMSA9IF9hLnF1ZXJ5LCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIGZldGNoUG9saWN5XzEgPSBfYS5mZXRjaFBvbGljeTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5TWFuYWdlci50cmFuc2Zvcm0ocXVlcnlfMSkuaGFzQ2xpZW50RXhwb3J0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlNYW5hZ2VyLmdldExvY2FsU3RhdGUoKS5hZGRFeHBvcnRlZFZhcmlhYmxlcyhxdWVyeV8xLCB2YXJpYWJsZXMpLnRoZW4oZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c1ZhcmlhYmxlcyA9IF90aGlzLnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy52YXJpYWJsZXMgPSBfdGhpcy5vcHRpb25zLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5sb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVzdWx0XzEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3lfMSAhPT0gJ2NhY2hlLW9ubHknICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TWFuYWdlci50cmFuc2Zvcm0ocXVlcnlfMSkuc2VydmVyUXVlcnkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRXF1YWwocHJldmlvdXNWYXJpYWJsZXMsIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVmZXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZU9ic2VydmVyc1NhZmVseShfdGhpcy5vYnNlcnZlcnMsICduZXh0JywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkoX3RoaXMub2JzZXJ2ZXJzLCAnbmV4dCcsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IG9uRXJyb3IsXG4gICAgICAgIH0pLmNhdGNoKG9uRXJyb3IpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS50ZWFyRG93blF1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcXVlcnlNYW5hZ2VyID0gdGhpcy5xdWVyeU1hbmFnZXI7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IHRydWU7XG4gICAgICAgIHF1ZXJ5TWFuYWdlci5zdG9wUG9sbGluZ1F1ZXJ5KHRoaXMucXVlcnlJZCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1Yi51bnN1YnNjcmliZSgpOyB9KTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmNsZWFyKCk7XG4gICAgICAgIHF1ZXJ5TWFuYWdlci5yZW1vdmVPYnNlcnZhYmxlUXVlcnkodGhpcy5xdWVyeUlkKTtcbiAgICAgICAgcXVlcnlNYW5hZ2VyLnN0b3BRdWVyeSh0aGlzLnF1ZXJ5SWQpO1xuICAgICAgICB0aGlzLm9ic2VydmVycy5jbGVhcigpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVRdWVyeTtcbn0oT2JzZXJ2YWJsZSkpO1xuZnVuY3Rpb24gZGVmYXVsdFN1YnNjcmlwdGlvbk9ic2VydmVyRXJyb3JDYWxsYmFjayhlcnJvcikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiB8fCBpbnZhcmlhbnQuZXJyb3IoJ1VuaGFuZGxlZCBlcnJvcicsIGVycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrKTtcbn1cbmZ1bmN0aW9uIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkob2JzZXJ2ZXJzLCBtZXRob2QsIGFyZ3VtZW50KSB7XG4gICAgdmFyIG9ic2VydmVyc1dpdGhNZXRob2QgPSBbXTtcbiAgICBvYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzKSB7IHJldHVybiBvYnNbbWV0aG9kXSAmJiBvYnNlcnZlcnNXaXRoTWV0aG9kLnB1c2gob2JzKTsgfSk7XG4gICAgb2JzZXJ2ZXJzV2l0aE1ldGhvZC5mb3JFYWNoKGZ1bmN0aW9uIChvYnMpIHsgcmV0dXJuIG9ic1ttZXRob2RdKGFyZ3VtZW50KTsgfSk7XG59XG5mdW5jdGlvbiBhc3NlcnROb3RDYWNoZUZpcnN0T3JPbmx5KG9ic1F1ZXJ5KSB7XG4gICAgdmFyIGZldGNoUG9saWN5ID0gb2JzUXVlcnkub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1maXJzdCcgJiYgZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1vbmx5JywgMykgOiBpbnZhcmlhbnQoZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1maXJzdCcgJiYgZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1vbmx5JywgJ1F1ZXJpZXMgdGhhdCBzcGVjaWZ5IHRoZSBjYWNoZS1maXJzdCBhbmQgY2FjaGUtb25seSBmZXRjaFBvbGljaWVzIGNhbm5vdCBhbHNvIGJlIHBvbGxpbmcgcXVlcmllcy4nKTtcbn1cblxudmFyIE11dGF0aW9uU3RvcmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE11dGF0aW9uU3RvcmUoKSB7XG4gICAgICAgIHRoaXMuc3RvcmUgPSB7fTtcbiAgICB9XG4gICAgTXV0YXRpb25TdG9yZS5wcm90b3R5cGUuZ2V0U3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlO1xuICAgIH07XG4gICAgTXV0YXRpb25TdG9yZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG11dGF0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVbbXV0YXRpb25JZF07XG4gICAgfTtcbiAgICBNdXRhdGlvblN0b3JlLnByb3RvdHlwZS5pbml0TXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb25JZCwgbXV0YXRpb24sIHZhcmlhYmxlcykge1xuICAgICAgICB0aGlzLnN0b3JlW211dGF0aW9uSWRdID0ge1xuICAgICAgICAgICAgbXV0YXRpb246IG11dGF0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMgfHwge30sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNdXRhdGlvblN0b3JlLnByb3RvdHlwZS5tYXJrTXV0YXRpb25FcnJvciA9IGZ1bmN0aW9uIChtdXRhdGlvbklkLCBlcnJvcikge1xuICAgICAgICB2YXIgbXV0YXRpb24gPSB0aGlzLnN0b3JlW211dGF0aW9uSWRdO1xuICAgICAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgICAgICAgIG11dGF0aW9uLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIG11dGF0aW9uLmVycm9yID0gZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11dGF0aW9uU3RvcmUucHJvdG90eXBlLm1hcmtNdXRhdGlvblJlc3VsdCA9IGZ1bmN0aW9uIChtdXRhdGlvbklkKSB7XG4gICAgICAgIHZhciBtdXRhdGlvbiA9IHRoaXMuc3RvcmVbbXV0YXRpb25JZF07XG4gICAgICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgICAgICAgbXV0YXRpb24ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbXV0YXRpb24uZXJyb3IgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNdXRhdGlvblN0b3JlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHt9O1xuICAgIH07XG4gICAgcmV0dXJuIE11dGF0aW9uU3RvcmU7XG59KCkpO1xuXG52YXIgUXVlcnlTdG9yZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUXVlcnlTdG9yZSgpIHtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHt9O1xuICAgIH1cbiAgICBRdWVyeVN0b3JlLnByb3RvdHlwZS5nZXRTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmU7XG4gICAgfTtcbiAgICBRdWVyeVN0b3JlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVtxdWVyeUlkXTtcbiAgICB9O1xuICAgIFF1ZXJ5U3RvcmUucHJvdG90eXBlLmluaXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICB2YXIgcHJldmlvdXNRdWVyeSA9IHRoaXMuc3RvcmVbcXVlcnkucXVlcnlJZF07XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudCghcHJldmlvdXNRdWVyeSB8fFxuICAgICAgICAgICAgcHJldmlvdXNRdWVyeS5kb2N1bWVudCA9PT0gcXVlcnkuZG9jdW1lbnQgfHxcbiAgICAgICAgICAgIGlzRXF1YWwocHJldmlvdXNRdWVyeS5kb2N1bWVudCwgcXVlcnkuZG9jdW1lbnQpLCAxOSkgOiBpbnZhcmlhbnQoIXByZXZpb3VzUXVlcnkgfHxcbiAgICAgICAgICAgIHByZXZpb3VzUXVlcnkuZG9jdW1lbnQgPT09IHF1ZXJ5LmRvY3VtZW50IHx8XG4gICAgICAgICAgICBpc0VxdWFsKHByZXZpb3VzUXVlcnkuZG9jdW1lbnQsIHF1ZXJ5LmRvY3VtZW50KSwgJ0ludGVybmFsIEVycm9yOiBtYXkgbm90IHVwZGF0ZSBleGlzdGluZyBxdWVyeSBzdHJpbmcgaW4gc3RvcmUnKTtcbiAgICAgICAgdmFyIGlzU2V0VmFyaWFibGVzID0gZmFsc2U7XG4gICAgICAgIHZhciBwcmV2aW91c1ZhcmlhYmxlcyA9IG51bGw7XG4gICAgICAgIGlmIChxdWVyeS5zdG9yZVByZXZpb3VzVmFyaWFibGVzICYmXG4gICAgICAgICAgICBwcmV2aW91c1F1ZXJ5ICYmXG4gICAgICAgICAgICBwcmV2aW91c1F1ZXJ5Lm5ldHdvcmtTdGF0dXMgIT09IE5ldHdvcmtTdGF0dXMubG9hZGluZykge1xuICAgICAgICAgICAgaWYgKCFpc0VxdWFsKHByZXZpb3VzUXVlcnkudmFyaWFibGVzLCBxdWVyeS52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgaXNTZXRWYXJpYWJsZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFyaWFibGVzID0gcHJldmlvdXNRdWVyeS52YXJpYWJsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ldHdvcmtTdGF0dXM7XG4gICAgICAgIGlmIChpc1NldFZhcmlhYmxlcykge1xuICAgICAgICAgICAgbmV0d29ya1N0YXR1cyA9IE5ldHdvcmtTdGF0dXMuc2V0VmFyaWFibGVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHF1ZXJ5LmlzUG9sbCkge1xuICAgICAgICAgICAgbmV0d29ya1N0YXR1cyA9IE5ldHdvcmtTdGF0dXMucG9sbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChxdWVyeS5pc1JlZmV0Y2gpIHtcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXMgPSBOZXR3b3JrU3RhdHVzLnJlZmV0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzID0gTmV0d29ya1N0YXR1cy5sb2FkaW5nO1xuICAgICAgICB9XG4gICAgICAgIHZhciBncmFwaFFMRXJyb3JzID0gW107XG4gICAgICAgIGlmIChwcmV2aW91c1F1ZXJ5ICYmIHByZXZpb3VzUXVlcnkuZ3JhcGhRTEVycm9ycykge1xuICAgICAgICAgICAgZ3JhcGhRTEVycm9ycyA9IHByZXZpb3VzUXVlcnkuZ3JhcGhRTEVycm9ycztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3JlW3F1ZXJ5LnF1ZXJ5SWRdID0ge1xuICAgICAgICAgICAgZG9jdW1lbnQ6IHF1ZXJ5LmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBxdWVyeS52YXJpYWJsZXMsXG4gICAgICAgICAgICBwcmV2aW91c1ZhcmlhYmxlczogcHJldmlvdXNWYXJpYWJsZXMsXG4gICAgICAgICAgICBuZXR3b3JrRXJyb3I6IG51bGwsXG4gICAgICAgICAgICBncmFwaFFMRXJyb3JzOiBncmFwaFFMRXJyb3JzLFxuICAgICAgICAgICAgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1cyxcbiAgICAgICAgICAgIG1ldGFkYXRhOiBxdWVyeS5tZXRhZGF0YSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeS5mZXRjaE1vcmVGb3JRdWVyeUlkID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgdGhpcy5zdG9yZVtxdWVyeS5mZXRjaE1vcmVGb3JRdWVyeUlkXSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZVtxdWVyeS5mZXRjaE1vcmVGb3JRdWVyeUlkXS5uZXR3b3JrU3RhdHVzID1cbiAgICAgICAgICAgICAgICBOZXR3b3JrU3RhdHVzLmZldGNoTW9yZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlTdG9yZS5wcm90b3R5cGUubWFya1F1ZXJ5UmVzdWx0ID0gZnVuY3Rpb24gKHF1ZXJ5SWQsIHJlc3VsdCwgZmV0Y2hNb3JlRm9yUXVlcnlJZCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RvcmUgfHwgIXRoaXMuc3RvcmVbcXVlcnlJZF0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc3RvcmVbcXVlcnlJZF0ubmV0d29ya0Vycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdG9yZVtxdWVyeUlkXS5ncmFwaFFMRXJyb3JzID0gaXNOb25FbXB0eUFycmF5KHJlc3VsdC5lcnJvcnMpID8gcmVzdWx0LmVycm9ycyA6IFtdO1xuICAgICAgICB0aGlzLnN0b3JlW3F1ZXJ5SWRdLnByZXZpb3VzVmFyaWFibGVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdG9yZVtxdWVyeUlkXS5uZXR3b3JrU3RhdHVzID0gTmV0d29ya1N0YXR1cy5yZWFkeTtcbiAgICAgICAgaWYgKHR5cGVvZiBmZXRjaE1vcmVGb3JRdWVyeUlkID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgdGhpcy5zdG9yZVtmZXRjaE1vcmVGb3JRdWVyeUlkXSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZVtmZXRjaE1vcmVGb3JRdWVyeUlkXS5uZXR3b3JrU3RhdHVzID0gTmV0d29ya1N0YXR1cy5yZWFkeTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlTdG9yZS5wcm90b3R5cGUubWFya1F1ZXJ5RXJyb3IgPSBmdW5jdGlvbiAocXVlcnlJZCwgZXJyb3IsIGZldGNoTW9yZUZvclF1ZXJ5SWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0b3JlIHx8ICF0aGlzLnN0b3JlW3F1ZXJ5SWRdKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0b3JlW3F1ZXJ5SWRdLm5ldHdvcmtFcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLnN0b3JlW3F1ZXJ5SWRdLm5ldHdvcmtTdGF0dXMgPSBOZXR3b3JrU3RhdHVzLmVycm9yO1xuICAgICAgICBpZiAodHlwZW9mIGZldGNoTW9yZUZvclF1ZXJ5SWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLm1hcmtRdWVyeVJlc3VsdENsaWVudChmZXRjaE1vcmVGb3JRdWVyeUlkLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlTdG9yZS5wcm90b3R5cGUubWFya1F1ZXJ5UmVzdWx0Q2xpZW50ID0gZnVuY3Rpb24gKHF1ZXJ5SWQsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBzdG9yZVZhbHVlID0gdGhpcy5zdG9yZSAmJiB0aGlzLnN0b3JlW3F1ZXJ5SWRdO1xuICAgICAgICBpZiAoc3RvcmVWYWx1ZSkge1xuICAgICAgICAgICAgc3RvcmVWYWx1ZS5uZXR3b3JrRXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgc3RvcmVWYWx1ZS5wcmV2aW91c1ZhcmlhYmxlcyA9IG51bGw7XG4gICAgICAgICAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBzdG9yZVZhbHVlLm5ldHdvcmtTdGF0dXMgPSBOZXR3b3JrU3RhdHVzLnJlYWR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeVN0b3JlLnByb3RvdHlwZS5zdG9wUXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zdG9yZVtxdWVyeUlkXTtcbiAgICB9O1xuICAgIFF1ZXJ5U3RvcmUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKG9ic2VydmFibGVRdWVyeUlkcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0b3JlKS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZVF1ZXJ5SWRzLmluZGV4T2YocXVlcnlJZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RvcFF1ZXJ5KHF1ZXJ5SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RvcmVbcXVlcnlJZF0ubmV0d29ya1N0YXR1cyA9IE5ldHdvcmtTdGF0dXMubG9hZGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUXVlcnlTdG9yZTtcbn0oKSk7XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG52YXIgTG9jYWxTdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9jYWxTdGF0ZShfYSkge1xuICAgICAgICB2YXIgY2FjaGUgPSBfYS5jYWNoZSwgY2xpZW50ID0gX2EuY2xpZW50LCByZXNvbHZlcnMgPSBfYS5yZXNvbHZlcnMsIGZyYWdtZW50TWF0Y2hlciA9IF9hLmZyYWdtZW50TWF0Y2hlcjtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICBpZiAoY2xpZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFJlc29sdmVycyhyZXNvbHZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcmFnbWVudE1hdGNoZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RnJhZ21lbnRNYXRjaGVyKGZyYWdtZW50TWF0Y2hlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuYWRkUmVzb2x2ZXJzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IHRoaXMucmVzb2x2ZXJzIHx8IHt9O1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNvbHZlcnMpKSB7XG4gICAgICAgICAgICByZXNvbHZlcnMuZm9yRWFjaChmdW5jdGlvbiAocmVzb2x2ZXJHcm91cCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmVycyA9IG1lcmdlRGVlcChfdGhpcy5yZXNvbHZlcnMsIHJlc29sdmVyR3JvdXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmVycyA9IG1lcmdlRGVlcCh0aGlzLnJlc29sdmVycywgcmVzb2x2ZXJzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IHt9O1xuICAgICAgICB0aGlzLmFkZFJlc29sdmVycyhyZXNvbHZlcnMpO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuZ2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlcnMgfHwge307XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5ydW5SZXNvbHZlcnMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50ID0gX2EuZG9jdW1lbnQsIHJlbW90ZVJlc3VsdCA9IF9hLnJlbW90ZVJlc3VsdCwgY29udGV4dCA9IF9hLmNvbnRleHQsIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgX2IgPSBfYS5vbmx5UnVuRm9yY2VkUmVzb2x2ZXJzLCBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2I7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVEb2N1bWVudChkb2N1bWVudCwgcmVtb3RlUmVzdWx0LmRhdGEsIGNvbnRleHQsIHZhcmlhYmxlcywgdGhpcy5mcmFnbWVudE1hdGNoZXIsIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMpLnRoZW4oZnVuY3Rpb24gKGxvY2FsUmVzdWx0KSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIHJlbW90ZVJlc3VsdCksIHsgZGF0YTogbG9jYWxSZXN1bHQucmVzdWx0IH0pKTsgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHJlbW90ZVJlc3VsdF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5zZXRGcmFnbWVudE1hdGNoZXIgPSBmdW5jdGlvbiAoZnJhZ21lbnRNYXRjaGVyKSB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnRNYXRjaGVyID0gZnJhZ21lbnRNYXRjaGVyO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuZ2V0RnJhZ21lbnRNYXRjaGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mcmFnbWVudE1hdGNoZXI7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5jbGllbnRRdWVyeSA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICBpZiAoaGFzRGlyZWN0aXZlcyhbJ2NsaWVudCddLCBkb2N1bWVudCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiB8fCBpbnZhcmlhbnQud2FybignRm91bmQgQGNsaWVudCBkaXJlY3RpdmVzIGluIGEgcXVlcnkgYnV0IG5vIEFwb2xsb0NsaWVudCByZXNvbHZlcnMgJyArXG4gICAgICAgICAgICAgICAgJ3dlcmUgc3BlY2lmaWVkLiBUaGlzIG1lYW5zIEFwb2xsb0NsaWVudCBsb2NhbCByZXNvbHZlciBoYW5kbGluZyAnICtcbiAgICAgICAgICAgICAgICAnaGFzIGJlZW4gZGlzYWJsZWQsIGFuZCBAY2xpZW50IGRpcmVjdGl2ZXMgd2lsbCBiZSBwYXNzZWQgdGhyb3VnaCAnICtcbiAgICAgICAgICAgICAgICAndG8geW91ciBsaW5rIGNoYWluLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2VydmVyUXVlcnkgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZXJzID8gcmVtb3ZlQ2xpZW50U2V0c0Zyb21Eb2N1bWVudChkb2N1bWVudCkgOiBkb2N1bWVudDtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnByZXBhcmVDb250ZXh0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICAgICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZTtcbiAgICAgICAgdmFyIG5ld0NvbnRleHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY2FjaGU6IGNhY2hlLCBnZXRDYWNoZUtleTogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZS5jb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlLmNvbmZpZy5kYXRhSWRGcm9tT2JqZWN0KG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIDYpIDogaW52YXJpYW50KGZhbHNlLCAnVG8gdXNlIGNvbnRleHQuZ2V0Q2FjaGVLZXksIHlvdSBuZWVkIHRvIHVzZSBhIGNhY2hlIHRoYXQgaGFzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2EgY29uZmlndXJhYmxlIGRhdGFJZEZyb21PYmplY3QsIGxpa2UgYXBvbGxvLWNhY2hlLWlubWVtb3J5LicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gfSk7XG4gICAgICAgIHJldHVybiBuZXdDb250ZXh0O1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuYWRkRXhwb3J0ZWRWYXJpYWJsZXMgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0ge307IH1cbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZURvY3VtZW50KGRvY3VtZW50LCB0aGlzLmJ1aWxkUm9vdFZhbHVlRnJvbUNhY2hlKGRvY3VtZW50LCB2YXJpYWJsZXMpIHx8IHt9LCB0aGlzLnByZXBhcmVDb250ZXh0KGNvbnRleHQpLCB2YXJpYWJsZXMpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdmFyaWFibGVzKSwgZGF0YS5leHBvcnRlZFZhcmlhYmxlcykpOyB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgX19hc3NpZ24oe30sIHZhcmlhYmxlcyldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2hvdWxkRm9yY2VSZXNvbHZlcnMgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIGZvcmNlUmVzb2x2ZXJzID0gZmFsc2U7XG4gICAgICAgIHZpc2l0KGRvY3VtZW50LCB7XG4gICAgICAgICAgICBEaXJlY3RpdmU6IHtcbiAgICAgICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubmFtZS52YWx1ZSA9PT0gJ2NsaWVudCcgJiYgbm9kZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlUmVzb2x2ZXJzID0gbm9kZS5hcmd1bWVudHMuc29tZShmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZy5uYW1lLnZhbHVlID09PSAnYWx3YXlzJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcudmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnLnZhbHVlLnZhbHVlID09PSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9yY2VSZXNvbHZlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQlJFQUs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JjZVJlc29sdmVycztcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmJ1aWxkUm9vdFZhbHVlRnJvbUNhY2hlID0gZnVuY3Rpb24gKGRvY3VtZW50LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZGlmZih7XG4gICAgICAgICAgICBxdWVyeTogYnVpbGRRdWVyeUZyb21TZWxlY3Rpb25TZXQoZG9jdW1lbnQpLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICB9KS5yZXN1bHQ7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5yZXNvbHZlRG9jdW1lbnQgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHJvb3RWYWx1ZSwgY29udGV4dCwgdmFyaWFibGVzLCBmcmFnbWVudE1hdGNoZXIsIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHt9OyB9XG4gICAgICAgIGlmIChmcmFnbWVudE1hdGNoZXIgPT09IHZvaWQgMCkgeyBmcmFnbWVudE1hdGNoZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9OyB9XG4gICAgICAgIGlmIChvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzID09PSB2b2lkIDApIHsgb25seVJ1bkZvcmNlZFJlc29sdmVycyA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtYWluRGVmaW5pdGlvbiwgZnJhZ21lbnRzLCBmcmFnbWVudE1hcCwgZGVmaW5pdGlvbk9wZXJhdGlvbiwgZGVmYXVsdE9wZXJhdGlvblR5cGUsIF9hLCBjYWNoZSwgY2xpZW50LCBleGVjQ29udGV4dDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBtYWluRGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICBmcmFnbWVudHMgPSBnZXRGcmFnbWVudERlZmluaXRpb25zKGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICBmcmFnbWVudE1hcCA9IGNyZWF0ZUZyYWdtZW50TWFwKGZyYWdtZW50cyk7XG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbk9wZXJhdGlvbiA9IG1haW5EZWZpbml0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5vcGVyYXRpb247XG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wZXJhdGlvblR5cGUgPSBkZWZpbml0aW9uT3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGRlZmluaXRpb25PcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIDogJ1F1ZXJ5JztcbiAgICAgICAgICAgICAgICBfYSA9IHRoaXMsIGNhY2hlID0gX2EuY2FjaGUsIGNsaWVudCA9IF9hLmNsaWVudDtcbiAgICAgICAgICAgICAgICBleGVjQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRNYXA6IGZyYWdtZW50TWFwLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY2FjaGU6IGNhY2hlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50OiBjbGllbnQgfSksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudE1hdGNoZXI6IGZyYWdtZW50TWF0Y2hlcixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wZXJhdGlvblR5cGU6IGRlZmF1bHRPcGVyYXRpb25UeXBlLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRlZFZhcmlhYmxlczoge30sXG4gICAgICAgICAgICAgICAgICAgIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnM6IG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZVNlbGVjdGlvblNldChtYWluRGVmaW5pdGlvbi5zZWxlY3Rpb25TZXQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0ZWRWYXJpYWJsZXM6IGV4ZWNDb250ZXh0LmV4cG9ydGVkVmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICB9KTsgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZVNlbGVjdGlvblNldCA9IGZ1bmN0aW9uIChzZWxlY3Rpb25TZXQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50TWFwLCBjb250ZXh0LCB2YXJpYWJsZXMsIHJlc3VsdHNUb01lcmdlLCBleGVjdXRlO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudE1hcCA9IGV4ZWNDb250ZXh0LmZyYWdtZW50TWFwLCBjb250ZXh0ID0gZXhlY0NvbnRleHQuY29udGV4dCwgdmFyaWFibGVzID0gZXhlY0NvbnRleHQudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgIHJlc3VsdHNUb01lcmdlID0gW3Jvb3RWYWx1ZV07XG4gICAgICAgICAgICAgICAgZXhlY3V0ZSA9IGZ1bmN0aW9uIChzZWxlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50LCB0eXBlQ29uZGl0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ZpZWxkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZUZpZWxkKHNlbGVjdGlvbiwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkudGhlbihmdW5jdGlvbiAoZmllbGRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZmllbGRSZXN1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1RvTWVyZ2UucHVzaCgoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FbcmVzdWx0S2V5TmFtZUZyb21GaWVsZChzZWxlY3Rpb24pXSA9IGZpZWxkUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbmxpbmVGcmFnbWVudChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgPSBzZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGZyYWdtZW50TWFwW3NlbGVjdGlvbi5uYW1lLnZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZnJhZ21lbnQsIDcpIDogaW52YXJpYW50KGZyYWdtZW50LCBcIk5vIGZyYWdtZW50IG5hbWVkIFwiICsgc2VsZWN0aW9uLm5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50ICYmIGZyYWdtZW50LnR5cGVDb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlQ29uZGl0aW9uID0gZnJhZ21lbnQudHlwZUNvbmRpdGlvbi5uYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGVjQ29udGV4dC5mcmFnbWVudE1hdGNoZXIocm9vdFZhbHVlLCB0eXBlQ29uZGl0aW9uLCBjb250ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZVNlbGVjdGlvblNldChmcmFnbWVudC5zZWxlY3Rpb25TZXQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpLnRoZW4oZnVuY3Rpb24gKGZyYWdtZW50UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1RvTWVyZ2UucHVzaChmcmFnbWVudFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7IH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBQcm9taXNlLmFsbChzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5tYXAoZXhlY3V0ZSkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlRGVlcEFycmF5KHJlc3VsdHNUb01lcmdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZUZpZWxkID0gZnVuY3Rpb24gKGZpZWxkLCByb290VmFsdWUsIGV4ZWNDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YXJpYWJsZXMsIGZpZWxkTmFtZSwgYWxpYXNlZEZpZWxkTmFtZSwgYWxpYXNVc2VkLCBkZWZhdWx0UmVzdWx0LCByZXN1bHRQcm9taXNlLCByZXNvbHZlclR5cGUsIHJlc29sdmVyTWFwLCByZXNvbHZlO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSBleGVjQ29udGV4dC52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgZmllbGROYW1lID0gZmllbGQubmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBhbGlhc2VkRmllbGROYW1lID0gcmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCk7XG4gICAgICAgICAgICAgICAgYWxpYXNVc2VkID0gZmllbGROYW1lICE9PSBhbGlhc2VkRmllbGROYW1lO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRSZXN1bHQgPSByb290VmFsdWVbYWxpYXNlZEZpZWxkTmFtZV0gfHwgcm9vdFZhbHVlW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgcmVzdWx0UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShkZWZhdWx0UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4ZWNDb250ZXh0Lm9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG91bGRGb3JjZVJlc29sdmVycyhmaWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJUeXBlID0gcm9vdFZhbHVlLl9fdHlwZW5hbWUgfHwgZXhlY0NvbnRleHQuZGVmYXVsdE9wZXJhdGlvblR5cGU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyTWFwID0gdGhpcy5yZXNvbHZlcnMgJiYgdGhpcy5yZXNvbHZlcnNbcmVzb2x2ZXJUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmVyTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzb2x2ZXJNYXBbYWxpYXNVc2VkID8gZmllbGROYW1lIDogYWxpYXNlZEZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmVzb2x2ZShyb290VmFsdWUsIGFyZ3VtZW50c09iamVjdEZyb21GaWVsZChmaWVsZCwgdmFyaWFibGVzKSwgZXhlY0NvbnRleHQuY29udGV4dCwgeyBmaWVsZDogZmllbGQsIGZyYWdtZW50TWFwOiBleGVjQ29udGV4dC5mcmFnbWVudE1hcCB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCByZXN1bHRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7IHJlc3VsdCA9IGRlZmF1bHRSZXN1bHQ7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnZXhwb3J0JyAmJiBkaXJlY3RpdmUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmcubmFtZS52YWx1ZSA9PT0gJ2FzJyAmJiBhcmcudmFsdWUua2luZCA9PT0gJ1N0cmluZ1ZhbHVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjQ29udGV4dC5leHBvcnRlZFZhcmlhYmxlc1thcmcudmFsdWUudmFsdWVdID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU3ViU2VsZWN0ZWRBcnJheShmaWVsZCwgcmVzdWx0LCBleGVjQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVTZWxlY3Rpb25TZXQoZmllbGQuc2VsZWN0aW9uU2V0LCByZXN1bHQsIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZVN1YlNlbGVjdGVkQXJyYXkgPSBmdW5jdGlvbiAoZmllbGQsIHJlc3VsdCwgZXhlY0NvbnRleHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU3ViU2VsZWN0ZWRBcnJheShmaWVsZCwgaXRlbSwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KGZpZWxkLnNlbGVjdGlvblNldCwgaXRlbSwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gTG9jYWxTdGF0ZTtcbn0oKSk7XG5cbmZ1bmN0aW9uIG11bHRpcGxleChpbm5lcikge1xuICAgIHZhciBvYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHN1YiA9IG51bGw7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlcnMuYWRkKG9ic2VydmVyKTtcbiAgICAgICAgc3ViID0gc3ViIHx8IGlubmVyLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzKSB7IHJldHVybiBvYnMubmV4dCAmJiBvYnMubmV4dCh2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzKSB7IHJldHVybiBvYnMuZXJyb3IgJiYgb2JzLmVycm9yKGVycm9yKTsgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzKSB7IHJldHVybiBvYnMuY29tcGxldGUgJiYgb2JzLmNvbXBsZXRlKCk7IH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcikgJiYgIW9ic2VydmVycy5zaXplICYmIHN1Yikge1xuICAgICAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHN1YiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhc3luY01hcChvYnNlcnZhYmxlLCBtYXBGbikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIG5leHQgPSBvYnNlcnZlci5uZXh0LCBlcnJvciA9IG9ic2VydmVyLmVycm9yLCBjb21wbGV0ZSA9IG9ic2VydmVyLmNvbXBsZXRlO1xuICAgICAgICB2YXIgYWN0aXZlTmV4dENvdW50ID0gMDtcbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgaGFuZGxlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICsrYWN0aXZlTmV4dENvdW50O1xuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobWFwRm4odmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLS1hY3RpdmVOZXh0Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgJiYgbmV4dC5jYWxsKG9ic2VydmVyLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgJiYgaGFuZGxlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC0tYWN0aXZlTmV4dENvdW50O1xuICAgICAgICAgICAgICAgICAgICBlcnJvciAmJiBlcnJvci5jYWxsKG9ic2VydmVyLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciAmJiBlcnJvci5jYWxsKG9ic2VydmVyLCBlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVOZXh0Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUgJiYgY29tcGxldGUuY2FsbChvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHN1YiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3ViLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgfSk7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUXVlcnlNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWVyeU1hbmFnZXIoX2EpIHtcbiAgICAgICAgdmFyIGxpbmsgPSBfYS5saW5rLCBfYiA9IF9hLnF1ZXJ5RGVkdXBsaWNhdGlvbiwgcXVlcnlEZWR1cGxpY2F0aW9uID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIHN0b3JlID0gX2Euc3RvcmUsIF9jID0gX2Eub25Ccm9hZGNhc3QsIG9uQnJvYWRjYXN0ID0gX2MgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSA6IF9jLCBfZCA9IF9hLnNzck1vZGUsIHNzck1vZGUgPSBfZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZCwgX2UgPSBfYS5jbGllbnRBd2FyZW5lc3MsIGNsaWVudEF3YXJlbmVzcyA9IF9lID09PSB2b2lkIDAgPyB7fSA6IF9lLCBsb2NhbFN0YXRlID0gX2EubG9jYWxTdGF0ZSwgYXNzdW1lSW1tdXRhYmxlUmVzdWx0cyA9IF9hLmFzc3VtZUltbXV0YWJsZVJlc3VsdHM7XG4gICAgICAgIHRoaXMubXV0YXRpb25TdG9yZSA9IG5ldyBNdXRhdGlvblN0b3JlKCk7XG4gICAgICAgIHRoaXMucXVlcnlTdG9yZSA9IG5ldyBRdWVyeVN0b3JlKCk7XG4gICAgICAgIHRoaXMuY2xpZW50QXdhcmVuZXNzID0ge307XG4gICAgICAgIHRoaXMuaWRDb3VudGVyID0gMTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmZldGNoUXVlcnlSZWplY3RGbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ2FjaGUgPSBuZXcgKGNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xuICAgICAgICB0aGlzLmluRmxpZ2h0TGlua09ic2VydmFibGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbmZvQnlRdWVyeUlkID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICB0aGlzLnF1ZXJ5RGVkdXBsaWNhdGlvbiA9IHF1ZXJ5RGVkdXBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5kYXRhU3RvcmUgPSBzdG9yZTtcbiAgICAgICAgdGhpcy5vbkJyb2FkY2FzdCA9IG9uQnJvYWRjYXN0O1xuICAgICAgICB0aGlzLmNsaWVudEF3YXJlbmVzcyA9IGNsaWVudEF3YXJlbmVzcztcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlID0gbG9jYWxTdGF0ZSB8fCBuZXcgTG9jYWxTdGF0ZSh7IGNhY2hlOiBzdG9yZS5nZXRDYWNoZSgpIH0pO1xuICAgICAgICB0aGlzLnNzck1vZGUgPSBzc3JNb2RlO1xuICAgICAgICB0aGlzLmFzc3VtZUltbXV0YWJsZVJlc3VsdHMgPSAhIWFzc3VtZUltbXV0YWJsZVJlc3VsdHM7XG4gICAgfVxuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9pbmZvLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wUXVlcnlOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmV0Y2hRdWVyeVJlamVjdEZucy5mb3JFYWNoKGZ1bmN0aW9uIChyZWplY3QpIHtcbiAgICAgICAgICAgIHJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgSW52YXJpYW50RXJyb3IoOCkgOiBuZXcgSW52YXJpYW50RXJyb3IoJ1F1ZXJ5TWFuYWdlciBzdG9wcGVkIHdoaWxlIHF1ZXJ5IHdhcyBpbiBmbGlnaHQnKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5tdXRhdGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG11dGF0aW9uID0gX2EubXV0YXRpb24sIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgb3B0aW1pc3RpY1Jlc3BvbnNlID0gX2Eub3B0aW1pc3RpY1Jlc3BvbnNlLCB1cGRhdGVRdWVyaWVzQnlOYW1lID0gX2EudXBkYXRlUXVlcmllcywgX2IgPSBfYS5yZWZldGNoUXVlcmllcywgcmVmZXRjaFF1ZXJpZXMgPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYiwgX2MgPSBfYS5hd2FpdFJlZmV0Y2hRdWVyaWVzLCBhd2FpdFJlZmV0Y2hRdWVyaWVzID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIHVwZGF0ZVdpdGhQcm94eUZuID0gX2EudXBkYXRlLCBfZCA9IF9hLmVycm9yUG9saWN5LCBlcnJvclBvbGljeSA9IF9kID09PSB2b2lkIDAgPyAnbm9uZScgOiBfZCwgZmV0Y2hQb2xpY3kgPSBfYS5mZXRjaFBvbGljeSwgX2UgPSBfYS5jb250ZXh0LCBjb250ZXh0ID0gX2UgPT09IHZvaWQgMCA/IHt9IDogX2U7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtdXRhdGlvbklkLCBnZW5lcmF0ZVVwZGF0ZVF1ZXJpZXNJbmZvLCBzZWxmO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2YpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9mLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChtdXRhdGlvbiwgOSkgOiBpbnZhcmlhbnQobXV0YXRpb24sICdtdXRhdGlvbiBvcHRpb24gaXMgcmVxdWlyZWQuIFlvdSBtdXN0IHNwZWNpZnkgeW91ciBHcmFwaFFMIGRvY3VtZW50IGluIHRoZSBtdXRhdGlvbiBvcHRpb24uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoIWZldGNoUG9saWN5IHx8IGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnLCAxMCkgOiBpbnZhcmlhbnQoIWZldGNoUG9saWN5IHx8IGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnLCBcIk11dGF0aW9ucyBvbmx5IHN1cHBvcnQgYSAnbm8tY2FjaGUnIGZldGNoUG9saWN5LiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBkaXNhYmxlIHRoZSBjYWNoZSwgcmVtb3ZlIHlvdXIgZmV0Y2hQb2xpY3kgc2V0dGluZyB0byBwcm9jZWVkIHdpdGggdGhlIGRlZmF1bHQgbXV0YXRpb24gYmVoYXZpb3IuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25JZCA9IHRoaXMuZ2VuZXJhdGVRdWVyeUlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbiA9IHRoaXMudHJhbnNmb3JtKG11dGF0aW9uKS5kb2N1bWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UXVlcnkobXV0YXRpb25JZCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgZG9jdW1lbnQ6IG11dGF0aW9uIH0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG11dGF0aW9uLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRyYW5zZm9ybShtdXRhdGlvbikuaGFzQ2xpZW50RXhwb3J0cykgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5sb2NhbFN0YXRlLmFkZEV4cG9ydGVkVmFyaWFibGVzKG11dGF0aW9uLCB2YXJpYWJsZXMsIGNvbnRleHQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzID0gX2Yuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2YubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVVwZGF0ZVF1ZXJpZXNJbmZvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlUXVlcmllc0J5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9hLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZVF1ZXJ5ID0gX2Eub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeU5hbWUgPSBvYnNlcnZhYmxlUXVlcnkucXVlcnlOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeU5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkuY2FsbCh1cGRhdGVRdWVyaWVzQnlOYW1lLCBxdWVyeU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldFtxdWVyeUlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZXI6IHVwZGF0ZVF1ZXJpZXNCeU5hbWVbcXVlcnlOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBfdGhpcy5xdWVyeVN0b3JlLmdldChxdWVyeUlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXV0YXRpb25TdG9yZS5pbml0TXV0YXRpb24obXV0YXRpb25JZCwgbXV0YXRpb24sIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTdG9yZS5tYXJrTXV0YXRpb25Jbml0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbklkOiBtdXRhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVRdWVyaWVzOiBnZW5lcmF0ZVVwZGF0ZVF1ZXJpZXNJbmZvKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVXaXRoUHJveHlGbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IG9wdGltaXN0aWNSZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmVSZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRPYnNlcnZhYmxlRnJvbUxpbmsobXV0YXRpb24sIF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBvcHRpbWlzdGljUmVzcG9uc2U6IG9wdGltaXN0aWNSZXNwb25zZSB9KSwgdmFyaWFibGVzLCBmYWxzZSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCkgJiYgZXJyb3JQb2xpY3kgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBBcG9sbG9FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiByZXN1bHQuZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm11dGF0aW9uU3RvcmUubWFya011dGF0aW9uUmVzdWx0KG11dGF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZXRjaFBvbGljeSAhPT0gJ25vLWNhY2hlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRhdGFTdG9yZS5tYXJrTXV0YXRpb25SZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25JZDogbXV0YXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG11dGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVRdWVyaWVzOiBnZW5lcmF0ZVVwZGF0ZVF1ZXJpZXNJbmZvKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZVdpdGhQcm94eUZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm11dGF0aW9uU3RvcmUubWFya011dGF0aW9uRXJyb3IobXV0YXRpb25JZCwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRhdGFTdG9yZS5tYXJrTXV0YXRpb25Db21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uSWQ6IG11dGF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWNSZXNwb25zZTogb3B0aW1pc3RpY1Jlc3BvbnNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0UXVlcnkobXV0YXRpb25JZCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgZG9jdW1lbnQ6IG51bGwgfSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tdXRhdGlvblN0b3JlLm1hcmtNdXRhdGlvbkVycm9yKG11dGF0aW9uSWQsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXRhU3RvcmUubWFya011dGF0aW9uQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbklkOiBtdXRhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IG9wdGltaXN0aWNSZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlZmV0Y2hRdWVyaWVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzID0gcmVmZXRjaFF1ZXJpZXMoc3RvcmVSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmZXRjaFF1ZXJ5UHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb25FbXB0eUFycmF5KHJlZmV0Y2hRdWVyaWVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWZldGNoUXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVmZXRjaFF1ZXJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZVF1ZXJ5ID0gX2Eub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JzZXJ2YWJsZVF1ZXJ5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlUXVlcnkucXVlcnlOYW1lID09PSByZWZldGNoUXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyeVByb21pc2VzLnB1c2gob2JzZXJ2YWJsZVF1ZXJ5LnJlZmV0Y2goKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiByZWZldGNoUXVlcnkucXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogcmVmZXRjaFF1ZXJ5LnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZmV0Y2hRdWVyeS5jb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5T3B0aW9ucy5jb250ZXh0ID0gcmVmZXRjaFF1ZXJ5LmNvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyeVByb21pc2VzLnB1c2goc2VsZi5xdWVyeShxdWVyeU9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGF3YWl0UmVmZXRjaFF1ZXJpZXMgPyByZWZldGNoUXVlcnlQcm9taXNlcyA6IFtdKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRRdWVyeShtdXRhdGlvbklkLCBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyBkb2N1bWVudDogbnVsbCB9KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvclBvbGljeSA9PT0gJ2lnbm9yZScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlUmVzdWx0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaFFMUmVzdWx0SGFzRXJyb3Ioc3RvcmVSZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RvcmVSZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc3RvcmVSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkLCBvcHRpb25zLCBmZXRjaFR5cGUsIGZldGNoTW9yZUZvclF1ZXJ5SWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hLCBtZXRhZGF0YSwgX2IsIGZldGNoUG9saWN5LCBfYywgY29udGV4dCwgcXVlcnksIHZhcmlhYmxlcywgc3RvcmVSZXN1bHQsIGlzTmV0d29ya09ubHksIG5lZWRUb0ZldGNoLCBfZCwgY29tcGxldGUsIHJlc3VsdCwgc2hvdWxkRmV0Y2gsIHJlcXVlc3RJZCwgY2FuY2VsLCBuZXR3b3JrUmVzdWx0O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9lLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gb3B0aW9ucy5tZXRhZGF0YSwgbWV0YWRhdGEgPSBfYSA9PT0gdm9pZCAwID8gbnVsbCA6IF9hLCBfYiA9IG9wdGlvbnMuZmV0Y2hQb2xpY3ksIGZldGNoUG9saWN5ID0gX2IgPT09IHZvaWQgMCA/ICdjYWNoZS1maXJzdCcgOiBfYiwgX2MgPSBvcHRpb25zLmNvbnRleHQsIGNvbnRleHQgPSBfYyA9PT0gdm9pZCAwID8ge30gOiBfYztcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ob3B0aW9ucy5xdWVyeSkuZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhxdWVyeSwgb3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRyYW5zZm9ybShxdWVyeSkuaGFzQ2xpZW50RXhwb3J0cykgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5sb2NhbFN0YXRlLmFkZEV4cG9ydGVkVmFyaWFibGVzKHF1ZXJ5LCB2YXJpYWJsZXMsIGNvbnRleHQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHZhcmlhYmxlczogdmFyaWFibGVzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNOZXR3b3JrT25seSA9IGZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fCBmZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRUb0ZldGNoID0gaXNOZXR3b3JrT25seTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOZXR3b3JrT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kID0gdGhpcy5kYXRhU3RvcmUuZ2V0Q2FjaGUoKS5kaWZmKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBjb21wbGV0ZSA9IF9kLmNvbXBsZXRlLCByZXN1bHQgPSBfZC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZFRvRmV0Y2ggPSAhY29tcGxldGUgfHwgZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1hbmQtbmV0d29yayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRGZXRjaCA9IG5lZWRUb0ZldGNoICYmIGZldGNoUG9saWN5ICE9PSAnY2FjaGUtb25seScgJiYgZmV0Y2hQb2xpY3kgIT09ICdzdGFuZGJ5JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNEaXJlY3RpdmVzKFsnbGl2ZSddLCBxdWVyeSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkRmV0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdElkID0gdGhpcy5pZENvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbCA9IGZldGNoUG9saWN5ICE9PSAnbm8tY2FjaGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnVwZGF0ZVF1ZXJ5V2F0Y2gocXVlcnlJZCwgcXVlcnksIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFF1ZXJ5KHF1ZXJ5SWQsIGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RSZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGNhbmNlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZGF0ZShmZXRjaE1vcmVGb3JRdWVyeUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlTdG9yZS5pbml0UXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5SWQ6IHF1ZXJ5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlUHJldmlvdXNWYXJpYWJsZXM6IHNob3VsZEZldGNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUG9sbDogZmV0Y2hUeXBlID09PSBGZXRjaFR5cGUucG9sbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlZmV0Y2g6IGZldGNoVHlwZSA9PT0gRmV0Y2hUeXBlLnJlZmV0Y2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoTW9yZUZvclF1ZXJ5SWQ6IGZldGNoTW9yZUZvclF1ZXJ5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya1Jlc3VsdCA9IHRoaXMuZmV0Y2hSZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5SWQ6IHF1ZXJ5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hNb3JlRm9yUXVlcnlJZDogZmV0Y2hNb3JlRm9yUXVlcnlJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXBvbGxvRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0SWQgPj0gX3RoaXMuZ2V0UXVlcnkocXVlcnlJZCkubGFzdFJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnF1ZXJ5U3RvcmUubWFya1F1ZXJ5RXJyb3IocXVlcnlJZCwgZXJyb3IsIGZldGNoTW9yZUZvclF1ZXJ5SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmludmFsaWRhdGUocXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW52YWxpZGF0ZShmZXRjaE1vcmVGb3JRdWVyeUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXBvbGxvRXJyb3IoeyBuZXR3b3JrRXJyb3I6IGVycm9yIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZldGNoUG9saWN5ICE9PSAnY2FjaGUtYW5kLW5ldHdvcmsnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV0d29ya1Jlc3VsdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtSZXN1bHQuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlTdG9yZS5tYXJrUXVlcnlSZXN1bHRDbGllbnQocXVlcnlJZCwgIXNob3VsZEZldGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZGF0ZShxdWVyeUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZGF0ZShmZXRjaE1vcmVGb3JRdWVyeUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybShxdWVyeSkuaGFzRm9yY2VkUmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLmxvY2FsU3RhdGUucnVuUmVzb2x2ZXJzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZVJlc3VsdDogeyBkYXRhOiBzdG9yZVJlc3VsdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seVJ1bkZvcmNlZFJlc29sdmVyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYXJrUXVlcnlSZXN1bHQocXVlcnlJZCwgcmVzdWx0LCBvcHRpb25zLCBmZXRjaE1vcmVGb3JRdWVyeUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IGRhdGE6IHN0b3JlUmVzdWx0IH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUubWFya1F1ZXJ5UmVzdWx0ID0gZnVuY3Rpb24gKHF1ZXJ5SWQsIHJlc3VsdCwgX2EsIGZldGNoTW9yZUZvclF1ZXJ5SWQpIHtcbiAgICAgICAgdmFyIGZldGNoUG9saWN5ID0gX2EuZmV0Y2hQb2xpY3ksIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgZXJyb3JQb2xpY3kgPSBfYS5lcnJvclBvbGljeTtcbiAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFF1ZXJ5KHF1ZXJ5SWQsIGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgbmV3RGF0YTogeyByZXN1bHQ6IHJlc3VsdC5kYXRhLCBjb21wbGV0ZTogdHJ1ZSB9LFxuICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRhU3RvcmUubWFya1F1ZXJ5UmVzdWx0KHJlc3VsdCwgdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5kb2N1bWVudCwgdmFyaWFibGVzLCBmZXRjaE1vcmVGb3JRdWVyeUlkLCBlcnJvclBvbGljeSA9PT0gJ2lnbm9yZScgfHwgZXJyb3JQb2xpY3kgPT09ICdhbGwnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5xdWVyeUxpc3RlbmVyRm9yT2JzZXJ2ZXIgPSBmdW5jdGlvbiAocXVlcnlJZCwgb3B0aW9ucywgb2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJndW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlclttZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXJbbWV0aG9kXShhcmd1bWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiB8fCBpbnZhcmlhbnQuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWV0aG9kID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiIHx8IGludmFyaWFudC5lcnJvcihhcmd1bWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChxdWVyeVN0b3JlVmFsdWUsIG5ld0RhdGEpIHtcbiAgICAgICAgICAgIF90aGlzLmludmFsaWRhdGUocXVlcnlJZCwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKCFxdWVyeVN0b3JlVmFsdWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMuZ2V0UXVlcnkocXVlcnlJZCksIG9ic2VydmFibGVRdWVyeSA9IF9hLm9ic2VydmFibGVRdWVyeSwgZG9jdW1lbnQgPSBfYS5kb2N1bWVudDtcbiAgICAgICAgICAgIHZhciBmZXRjaFBvbGljeSA9IG9ic2VydmFibGVRdWVyeVxuICAgICAgICAgICAgICAgID8gb2JzZXJ2YWJsZVF1ZXJ5Lm9wdGlvbnMuZmV0Y2hQb2xpY3lcbiAgICAgICAgICAgICAgICA6IG9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgPT09ICdzdGFuZGJ5JylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgbG9hZGluZyA9IGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChxdWVyeVN0b3JlVmFsdWUubmV0d29ya1N0YXR1cyk7XG4gICAgICAgICAgICB2YXIgbGFzdFJlc3VsdCA9IG9ic2VydmFibGVRdWVyeSAmJiBvYnNlcnZhYmxlUXVlcnkuZ2V0TGFzdFJlc3VsdCgpO1xuICAgICAgICAgICAgdmFyIG5ldHdvcmtTdGF0dXNDaGFuZ2VkID0gISEobGFzdFJlc3VsdCAmJlxuICAgICAgICAgICAgICAgIGxhc3RSZXN1bHQubmV0d29ya1N0YXR1cyAhPT0gcXVlcnlTdG9yZVZhbHVlLm5ldHdvcmtTdGF0dXMpO1xuICAgICAgICAgICAgdmFyIHNob3VsZE5vdGlmeUlmTG9hZGluZyA9IG9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEgfHxcbiAgICAgICAgICAgICAgICAoIW5ld0RhdGEgJiYgcXVlcnlTdG9yZVZhbHVlLnByZXZpb3VzVmFyaWFibGVzKSB8fFxuICAgICAgICAgICAgICAgIChuZXR3b3JrU3RhdHVzQ2hhbmdlZCAmJiBvcHRpb25zLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSkgfHxcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ2NhY2hlLW9ubHknIHx8XG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1hbmQtbmV0d29yayc7XG4gICAgICAgICAgICBpZiAobG9hZGluZyAmJiAhc2hvdWxkTm90aWZ5SWZMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhc0dyYXBoUUxFcnJvcnMgPSBpc05vbkVtcHR5QXJyYXkocXVlcnlTdG9yZVZhbHVlLmdyYXBoUUxFcnJvcnMpO1xuICAgICAgICAgICAgdmFyIGVycm9yUG9saWN5ID0gb2JzZXJ2YWJsZVF1ZXJ5XG4gICAgICAgICAgICAgICAgJiYgb2JzZXJ2YWJsZVF1ZXJ5Lm9wdGlvbnMuZXJyb3JQb2xpY3lcbiAgICAgICAgICAgICAgICB8fCBvcHRpb25zLmVycm9yUG9saWN5XG4gICAgICAgICAgICAgICAgfHwgJ25vbmUnO1xuICAgICAgICAgICAgaWYgKGVycm9yUG9saWN5ID09PSAnbm9uZScgJiYgaGFzR3JhcGhRTEVycm9ycyB8fCBxdWVyeVN0b3JlVmFsdWUubmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGludm9rZSgnZXJyb3InLCBuZXcgQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiBxdWVyeVN0b3JlVmFsdWUuZ3JhcGhRTEVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yOiBxdWVyeVN0b3JlVmFsdWUubmV0d29ya0Vycm9yLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIGlzTWlzc2luZyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAobmV3RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgIT09ICduby1jYWNoZScgJiYgZmV0Y2hQb2xpY3kgIT09ICduZXR3b3JrLW9ubHknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRRdWVyeShxdWVyeUlkLCBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyBuZXdEYXRhOiBudWxsIH0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gbmV3RGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGlzTWlzc2luZyA9ICFuZXdEYXRhLmNvbXBsZXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RFcnJvciA9IG9ic2VydmFibGVRdWVyeSAmJiBvYnNlcnZhYmxlUXVlcnkuZ2V0TGFzdEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvclN0YXR1c0NoYW5nZWQgPSBlcnJvclBvbGljeSAhPT0gJ25vbmUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAobGFzdEVycm9yICYmIGxhc3RFcnJvci5ncmFwaFFMRXJyb3JzKSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0b3JlVmFsdWUuZ3JhcGhRTEVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RSZXN1bHQgJiYgbGFzdFJlc3VsdC5kYXRhICYmICFlcnJvclN0YXR1c0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBsYXN0UmVzdWx0LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc01pc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWZmUmVzdWx0ID0gX3RoaXMuZGF0YVN0b3JlLmdldENhY2hlKCkuZGlmZih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogcXVlcnlTdG9yZVZhbHVlLnByZXZpb3VzVmFyaWFibGVzIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5U3RvcmVWYWx1ZS52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRpZmZSZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNNaXNzaW5nID0gIWRpZmZSZXN1bHQuY29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHN0YWxlID0gaXNNaXNzaW5nICYmICEob3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSB8fFxuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ2NhY2hlLW9ubHknKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0RnJvbVN0b3JlID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzdGFsZSA/IGxhc3RSZXN1bHQgJiYgbGFzdFJlc3VsdC5kYXRhIDogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogcXVlcnlTdG9yZVZhbHVlLm5ldHdvcmtTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YWxlOiBzdGFsZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChlcnJvclBvbGljeSA9PT0gJ2FsbCcgJiYgaGFzR3JhcGhRTEVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRGcm9tU3RvcmUuZXJyb3JzID0gcXVlcnlTdG9yZVZhbHVlLmdyYXBoUUxFcnJvcnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGludm9rZSgnbmV4dCcsIHJlc3VsdEZyb21TdG9yZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAobmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgaW52b2tlKCdlcnJvcicsIG5ldyBBcG9sbG9FcnJvcih7IG5ldHdvcmtFcnJvcjogbmV0d29ya0Vycm9yIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHZhciB0cmFuc2Zvcm1DYWNoZSA9IHRoaXMudHJhbnNmb3JtQ2FjaGU7XG4gICAgICAgIGlmICghdHJhbnNmb3JtQ2FjaGUuaGFzKGRvY3VtZW50KSkge1xuICAgICAgICAgICAgdmFyIGNhY2hlID0gdGhpcy5kYXRhU3RvcmUuZ2V0Q2FjaGUoKTtcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1lZCA9IGNhY2hlLnRyYW5zZm9ybURvY3VtZW50KGRvY3VtZW50KTtcbiAgICAgICAgICAgIHZhciBmb3JMaW5rID0gcmVtb3ZlQ29ubmVjdGlvbkRpcmVjdGl2ZUZyb21Eb2N1bWVudChjYWNoZS50cmFuc2Zvcm1Gb3JMaW5rKHRyYW5zZm9ybWVkKSk7XG4gICAgICAgICAgICB2YXIgY2xpZW50UXVlcnkgPSB0aGlzLmxvY2FsU3RhdGUuY2xpZW50UXVlcnkodHJhbnNmb3JtZWQpO1xuICAgICAgICAgICAgdmFyIHNlcnZlclF1ZXJ5ID0gdGhpcy5sb2NhbFN0YXRlLnNlcnZlclF1ZXJ5KGZvckxpbmspO1xuICAgICAgICAgICAgdmFyIGNhY2hlRW50cnlfMSA9IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogdHJhbnNmb3JtZWQsXG4gICAgICAgICAgICAgICAgaGFzQ2xpZW50RXhwb3J0czogaGFzQ2xpZW50RXhwb3J0cyh0cmFuc2Zvcm1lZCksXG4gICAgICAgICAgICAgICAgaGFzRm9yY2VkUmVzb2x2ZXJzOiB0aGlzLmxvY2FsU3RhdGUuc2hvdWxkRm9yY2VSZXNvbHZlcnModHJhbnNmb3JtZWQpLFxuICAgICAgICAgICAgICAgIGNsaWVudFF1ZXJ5OiBjbGllbnRRdWVyeSxcbiAgICAgICAgICAgICAgICBzZXJ2ZXJRdWVyeTogc2VydmVyUXVlcnksXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhcnM6IGdldERlZmF1bHRWYWx1ZXMoZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbih0cmFuc2Zvcm1lZCkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBhZGQgPSBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvYyAmJiAhdHJhbnNmb3JtQ2FjaGUuaGFzKGRvYykpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KGRvYywgY2FjaGVFbnRyeV8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYWRkKGRvY3VtZW50KTtcbiAgICAgICAgICAgIGFkZCh0cmFuc2Zvcm1lZCk7XG4gICAgICAgICAgICBhZGQoY2xpZW50UXVlcnkpO1xuICAgICAgICAgICAgYWRkKHNlcnZlclF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KGRvY3VtZW50KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0VmFyaWFibGVzID0gZnVuY3Rpb24gKGRvY3VtZW50LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnRyYW5zZm9ybShkb2N1bWVudCkuZGVmYXVsdFZhcnMpLCB2YXJpYWJsZXMpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS53YXRjaFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNob3VsZFN1YnNjcmliZSkge1xuICAgICAgICBpZiAoc2hvdWxkU3Vic2NyaWJlID09PSB2b2lkIDApIHsgc2hvdWxkU3Vic2NyaWJlID0gdHJ1ZTsgfVxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQob3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gJ3N0YW5kYnknLCAxMSkgOiBpbnZhcmlhbnQob3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gJ3N0YW5kYnknLCAnY2xpZW50LndhdGNoUXVlcnkgY2Fubm90IGJlIGNhbGxlZCB3aXRoIGZldGNoUG9saWN5IHNldCB0byBcInN0YW5kYnlcIicpO1xuICAgICAgICBvcHRpb25zLnZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG9wdGlvbnMucXVlcnksIG9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRyYW5zZm9ybWVkT3B0aW9ucyA9IF9fYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnlNYW5hZ2VyOiB0aGlzLFxuICAgICAgICAgICAgb3B0aW9uczogdHJhbnNmb3JtZWRPcHRpb25zLFxuICAgICAgICAgICAgc2hvdWxkU3Vic2NyaWJlOiBzaG91bGRTdWJzY3JpYmUsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChvcHRpb25zLnF1ZXJ5LCAxMikgOiBpbnZhcmlhbnQob3B0aW9ucy5xdWVyeSwgJ3F1ZXJ5IG9wdGlvbiBpcyByZXF1aXJlZC4gWW91IG11c3Qgc3BlY2lmeSB5b3VyIEdyYXBoUUwgZG9jdW1lbnQgJyArXG4gICAgICAgICAgICAnaW4gdGhlIHF1ZXJ5IG9wdGlvbi4nKTtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KG9wdGlvbnMucXVlcnkua2luZCA9PT0gJ0RvY3VtZW50JywgMTMpIDogaW52YXJpYW50KG9wdGlvbnMucXVlcnkua2luZCA9PT0gJ0RvY3VtZW50JywgJ1lvdSBtdXN0IHdyYXAgdGhlIHF1ZXJ5IHN0cmluZyBpbiBhIFwiZ3FsXCIgdGFnLicpO1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoIW9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEsIDE0KSA6IGludmFyaWFudCghb3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSwgJ3JldHVyblBhcnRpYWxEYXRhIG9wdGlvbiBvbmx5IHN1cHBvcnRlZCBvbiB3YXRjaFF1ZXJ5LicpO1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoIW9wdGlvbnMucG9sbEludGVydmFsLCAxNSkgOiBpbnZhcmlhbnQoIW9wdGlvbnMucG9sbEludGVydmFsLCAncG9sbEludGVydmFsIG9wdGlvbiBvbmx5IHN1cHBvcnRlZCBvbiB3YXRjaFF1ZXJ5LicpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHdhdGNoZWRRdWVyeSA9IF90aGlzLndhdGNoUXVlcnkob3B0aW9ucywgZmFsc2UpO1xuICAgICAgICAgICAgX3RoaXMuZmV0Y2hRdWVyeVJlamVjdEZucy5zZXQoXCJxdWVyeTpcIiArIHdhdGNoZWRRdWVyeS5xdWVyeUlkLCByZWplY3QpO1xuICAgICAgICAgICAgd2F0Y2hlZFF1ZXJ5XG4gICAgICAgICAgICAgICAgLnJlc3VsdCgpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZmV0Y2hRdWVyeVJlamVjdEZucy5kZWxldGUoXCJxdWVyeTpcIiArIHdhdGNoZWRRdWVyeS5xdWVyeUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVRdWVyeUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMuaWRDb3VudGVyKyspO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wUXVlcnlJblN0b3JlID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5zdG9wUXVlcnlJblN0b3JlTm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wUXVlcnlJblN0b3JlTm9Ccm9hZGNhc3QgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB0aGlzLnN0b3BQb2xsaW5nUXVlcnkocXVlcnlJZCk7XG4gICAgICAgIHRoaXMucXVlcnlTdG9yZS5zdG9wUXVlcnkocXVlcnlJZCk7XG4gICAgICAgIHRoaXMuaW52YWxpZGF0ZShxdWVyeUlkKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuYWRkUXVlcnlMaXN0ZW5lciA9IGZ1bmN0aW9uIChxdWVyeUlkLCBsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnNldFF1ZXJ5KHF1ZXJ5SWQsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IF9hLmxpc3RlbmVycztcbiAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHsgaW52YWxpZGF0ZWQ6IGZhbHNlIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVRdWVyeVdhdGNoID0gZnVuY3Rpb24gKHF1ZXJ5SWQsIGRvY3VtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYW5jZWwgPSB0aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpLmNhbmNlbDtcbiAgICAgICAgaWYgKGNhbmNlbClcbiAgICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGVRdWVyeSA9IF90aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlUXVlcnkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdFJlc3VsdCA9IG9ic2VydmFibGVRdWVyeS5nZXRMYXN0UmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNSZXN1bHQgPSBsYXN0UmVzdWx0LmRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU3RvcmUuZ2V0Q2FjaGUoKS53YXRjaCh7XG4gICAgICAgICAgICBxdWVyeTogZG9jdW1lbnQsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgb3B0aW1pc3RpYzogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZpb3VzUmVzdWx0OiBwcmV2aW91c1Jlc3VsdCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAobmV3RGF0YSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFF1ZXJ5KHF1ZXJ5SWQsIGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGludmFsaWRhdGVkOiB0cnVlLCBuZXdEYXRhOiBuZXdEYXRhIH0pOyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5hZGRPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCwgb2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgIHRoaXMuc2V0UXVlcnkocXVlcnlJZCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgb2JzZXJ2YWJsZVF1ZXJ5OiBvYnNlcnZhYmxlUXVlcnkgfSk7IH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB2YXIgY2FuY2VsID0gdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5jYW5jZWw7XG4gICAgICAgIHRoaXMuc2V0UXVlcnkocXVlcnlJZCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgb2JzZXJ2YWJsZVF1ZXJ5OiBudWxsIH0pOyB9KTtcbiAgICAgICAgaWYgKGNhbmNlbClcbiAgICAgICAgICAgIGNhbmNlbCgpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5jbGVhclN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZldGNoUXVlcnlSZWplY3RGbnMuZm9yRWFjaChmdW5jdGlvbiAocmVqZWN0KSB7XG4gICAgICAgICAgICByZWplY3QocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gbmV3IEludmFyaWFudEVycm9yKDE2KSA6IG5ldyBJbnZhcmlhbnRFcnJvcignU3RvcmUgcmVzZXQgd2hpbGUgcXVlcnkgd2FzIGluIGZsaWdodCAobm90IGNvbXBsZXRlZCBpbiBsaW5rIGNoYWluKScpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXNldElkcyA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX2EsIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlUXVlcnkgPSBfYS5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZVF1ZXJ5KVxuICAgICAgICAgICAgICAgIHJlc2V0SWRzLnB1c2gocXVlcnlJZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnF1ZXJ5U3RvcmUucmVzZXQocmVzZXRJZHMpO1xuICAgICAgICB0aGlzLm11dGF0aW9uU3RvcmUucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVN0b3JlLnJlc2V0KCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlc2V0U3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmNsZWFyU3RvcmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyA9IGZ1bmN0aW9uIChpbmNsdWRlU3RhbmRieSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaW5jbHVkZVN0YW5kYnkgPT09IHZvaWQgMCkgeyBpbmNsdWRlU3RhbmRieSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBvYnNlcnZhYmxlUXVlcnlQcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX2EsIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlUXVlcnkgPSBfYS5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGZldGNoUG9saWN5ID0gb2JzZXJ2YWJsZVF1ZXJ5Lm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5LnJlc2V0TGFzdFJlc3VsdHMoKTtcbiAgICAgICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1vbmx5JyAmJlxuICAgICAgICAgICAgICAgICAgICAoaW5jbHVkZVN0YW5kYnkgfHwgZmV0Y2hQb2xpY3kgIT09ICdzdGFuZGJ5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5UHJvbWlzZXMucHVzaChvYnNlcnZhYmxlUXVlcnkucmVmZXRjaCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0UXVlcnkocXVlcnlJZCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgbmV3RGF0YTogbnVsbCB9KTsgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW52YWxpZGF0ZShxdWVyeUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob2JzZXJ2YWJsZVF1ZXJ5UHJvbWlzZXMpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5vYnNlcnZlUXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCwgb3B0aW9ucywgb2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5hZGRRdWVyeUxpc3RlbmVyKHF1ZXJ5SWQsIHRoaXMucXVlcnlMaXN0ZW5lckZvck9ic2VydmVyKHF1ZXJ5SWQsIG9wdGlvbnMsIG9ic2VydmVyKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnkocXVlcnlJZCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0YXJ0UXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCwgb3B0aW9ucywgbGlzdGVuZXIpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiIHx8IGludmFyaWFudC53YXJuKFwiVGhlIFF1ZXJ5TWFuYWdlci5zdGFydFF1ZXJ5IG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkXCIpO1xuICAgICAgICB0aGlzLmFkZFF1ZXJ5TGlzdGVuZXIocXVlcnlJZCwgbGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmZldGNoUXVlcnkocXVlcnlJZCwgb3B0aW9ucylcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0pO1xuICAgICAgICByZXR1cm4gcXVlcnlJZDtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RhcnRHcmFwaFFMU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBxdWVyeSA9IF9hLnF1ZXJ5LCBmZXRjaFBvbGljeSA9IF9hLmZldGNoUG9saWN5LCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXM7XG4gICAgICAgIHF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ocXVlcnkpLmRvY3VtZW50O1xuICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhxdWVyeSwgdmFyaWFibGVzKTtcbiAgICAgICAgdmFyIG1ha2VPYnNlcnZhYmxlID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldE9ic2VydmFibGVGcm9tTGluayhxdWVyeSwge30sIHZhcmlhYmxlcywgZmFsc2UpLm1hcChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmZXRjaFBvbGljeSB8fCBmZXRjaFBvbGljeSAhPT0gJ25vLWNhY2hlJykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kYXRhU3RvcmUubWFya1N1YnNjcmlwdGlvblJlc3VsdChyZXN1bHQsIHF1ZXJ5LCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtKHF1ZXJ5KS5oYXNDbGllbnRFeHBvcnRzKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZVByb21pc2VfMSA9IHRoaXMubG9jYWxTdGF0ZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyhxdWVyeSwgdmFyaWFibGVzKS50aGVuKG1ha2VPYnNlcnZhYmxlKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ViID0gbnVsbDtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlUHJvbWlzZV8xLnRoZW4oZnVuY3Rpb24gKG9ic2VydmFibGUpIHsgcmV0dXJuIHN1YiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTsgfSwgb2JzZXJ2ZXIuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWIgJiYgc3ViLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFrZU9ic2VydmFibGUodmFyaWFibGVzKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5zdG9wUXVlcnlOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeU5vQnJvYWRjYXN0ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5zdG9wUXVlcnlJblN0b3JlTm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIHRoaXMucmVtb3ZlUXVlcnkocXVlcnlJZCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlbW92ZVF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5mZXRjaFF1ZXJ5UmVqZWN0Rm5zLmRlbGV0ZShcInF1ZXJ5OlwiICsgcXVlcnlJZCk7XG4gICAgICAgIHRoaXMuZmV0Y2hRdWVyeVJlamVjdEZucy5kZWxldGUoXCJmZXRjaFJlcXVlc3Q6XCIgKyBxdWVyeUlkKTtcbiAgICAgICAgdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5zdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgICAgIHRoaXMucXVlcmllcy5kZWxldGUocXVlcnlJZCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldEN1cnJlbnRRdWVyeVJlc3VsdCA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlUXVlcnksIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgX2EgPSBvYnNlcnZhYmxlUXVlcnkub3B0aW9ucywgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBxdWVyeSA9IF9hLnF1ZXJ5LCBmZXRjaFBvbGljeSA9IF9hLmZldGNoUG9saWN5LCByZXR1cm5QYXJ0aWFsRGF0YSA9IF9hLnJldHVyblBhcnRpYWxEYXRhO1xuICAgICAgICB2YXIgbGFzdFJlc3VsdCA9IG9ic2VydmFibGVRdWVyeS5nZXRMYXN0UmVzdWx0KCk7XG4gICAgICAgIHZhciBuZXdEYXRhID0gdGhpcy5nZXRRdWVyeShvYnNlcnZhYmxlUXVlcnkucXVlcnlJZCkubmV3RGF0YTtcbiAgICAgICAgaWYgKG5ld0RhdGEgJiYgbmV3RGF0YS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogbmV3RGF0YS5yZXN1bHQsIHBhcnRpYWw6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnIHx8IGZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5Jykge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogdW5kZWZpbmVkLCBwYXJ0aWFsOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYiA9IHRoaXMuZGF0YVN0b3JlLmdldENhY2hlKCkuZGlmZih7XG4gICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIHByZXZpb3VzUmVzdWx0OiBsYXN0UmVzdWx0ID8gbGFzdFJlc3VsdC5kYXRhIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiBvcHRpbWlzdGljLFxuICAgICAgICB9KSwgcmVzdWx0ID0gX2IucmVzdWx0LCBjb21wbGV0ZSA9IF9iLmNvbXBsZXRlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogKGNvbXBsZXRlIHx8IHJldHVyblBhcnRpYWxEYXRhKSA/IHJlc3VsdCA6IHZvaWQgMCxcbiAgICAgICAgICAgIHBhcnRpYWw6ICFjb21wbGV0ZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0UXVlcnlXaXRoUHJldmlvdXNSZXN1bHQgPSBmdW5jdGlvbiAocXVlcnlJZE9yT2JzZXJ2YWJsZSkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICBpZiAodHlwZW9mIHF1ZXJ5SWRPck9ic2VydmFibGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgZm91bmRPYnNlcnZlYWJsZVF1ZXJ5ID0gdGhpcy5nZXRRdWVyeShxdWVyeUlkT3JPYnNlcnZhYmxlKS5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZm91bmRPYnNlcnZlYWJsZVF1ZXJ5LCAxNykgOiBpbnZhcmlhbnQoZm91bmRPYnNlcnZlYWJsZVF1ZXJ5LCBcIk9ic2VydmFibGVRdWVyeSB3aXRoIHRoaXMgaWQgZG9lc24ndCBleGlzdDogXCIgKyBxdWVyeUlkT3JPYnNlcnZhYmxlKTtcbiAgICAgICAgICAgIG9ic2VydmFibGVRdWVyeSA9IGZvdW5kT2JzZXJ2ZWFibGVRdWVyeTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmFibGVRdWVyeSA9IHF1ZXJ5SWRPck9ic2VydmFibGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gb2JzZXJ2YWJsZVF1ZXJ5Lm9wdGlvbnMsIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgcXVlcnkgPSBfYS5xdWVyeTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZXZpb3VzUmVzdWx0OiB0aGlzLmdldEN1cnJlbnRRdWVyeVJlc3VsdChvYnNlcnZhYmxlUXVlcnksIGZhbHNlKS5kYXRhLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICBkb2N1bWVudDogcXVlcnksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmJyb2FkY2FzdFF1ZXJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMub25Ccm9hZGNhc3QoKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKGluZm8sIGlkKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5pbnZhbGlkYXRlZCkge1xuICAgICAgICAgICAgICAgIGluZm8ubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIoX3RoaXMucXVlcnlTdG9yZS5nZXQoaWQpLCBpbmZvLm5ld0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRMb2NhbFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFN0YXRlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRPYnNlcnZhYmxlRnJvbUxpbmsgPSBmdW5jdGlvbiAocXVlcnksIGNvbnRleHQsIHZhcmlhYmxlcywgZGVkdXBsaWNhdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoZGVkdXBsaWNhdGlvbiA9PT0gdm9pZCAwKSB7IGRlZHVwbGljYXRpb24gPSB0aGlzLnF1ZXJ5RGVkdXBsaWNhdGlvbjsgfVxuICAgICAgICB2YXIgb2JzZXJ2YWJsZTtcbiAgICAgICAgdmFyIHNlcnZlclF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ocXVlcnkpLnNlcnZlclF1ZXJ5O1xuICAgICAgICBpZiAoc2VydmVyUXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGluRmxpZ2h0TGlua09ic2VydmFibGVzXzEgPSBfYS5pbkZsaWdodExpbmtPYnNlcnZhYmxlcywgbGluayA9IF9hLmxpbms7XG4gICAgICAgICAgICB2YXIgb3BlcmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBzZXJ2ZXJRdWVyeSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25OYW1lOiBnZXRPcGVyYXRpb25OYW1lKHNlcnZlclF1ZXJ5KSB8fCB2b2lkIDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogdGhpcy5wcmVwYXJlQ29udGV4dChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dCksIHsgZm9yY2VGZXRjaDogIWRlZHVwbGljYXRpb24gfSkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBvcGVyYXRpb24uY29udGV4dDtcbiAgICAgICAgICAgIGlmIChkZWR1cGxpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ5VmFyaWFibGVzXzEgPSBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xLmdldChzZXJ2ZXJRdWVyeSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgIGluRmxpZ2h0TGlua09ic2VydmFibGVzXzEuc2V0KHNlcnZlclF1ZXJ5LCBieVZhcmlhYmxlc18xKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFySnNvbl8xID0gSlNPTi5zdHJpbmdpZnkodmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlID0gYnlWYXJpYWJsZXNfMS5nZXQodmFySnNvbl8xKTtcbiAgICAgICAgICAgICAgICBpZiAoIW9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnlWYXJpYWJsZXNfMS5zZXQodmFySnNvbl8xLCBvYnNlcnZhYmxlID0gbXVsdGlwbGV4KGV4ZWN1dGUobGluaywgb3BlcmF0aW9uKSkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5VmFyaWFibGVzXzEuZGVsZXRlKHZhckpzb25fMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJ5VmFyaWFibGVzXzEuc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xLmRlbGV0ZShzZXJ2ZXJRdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbnVwU3ViXzEudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsZWFudXBTdWJfMSA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IGNsZWFudXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogY2xlYW51cCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjbGVhbnVwLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlID0gbXVsdGlwbGV4KGV4ZWN1dGUobGluaywgb3BlcmF0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5vZih7IGRhdGE6IHt9IH0pO1xuICAgICAgICAgICAgY29udGV4dCA9IHRoaXMucHJlcGFyZUNvbnRleHQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsaWVudFF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ocXVlcnkpLmNsaWVudFF1ZXJ5O1xuICAgICAgICBpZiAoY2xpZW50UXVlcnkpIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSBhc3luY01hcChvYnNlcnZhYmxlLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxvY2FsU3RhdGUucnVuUmVzb2x2ZXJzKHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IGNsaWVudFF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVSZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hSZXF1ZXN0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXF1ZXN0SWQgPSBfYS5yZXF1ZXN0SWQsIHF1ZXJ5SWQgPSBfYS5xdWVyeUlkLCBkb2N1bWVudCA9IF9hLmRvY3VtZW50LCBvcHRpb25zID0gX2Eub3B0aW9ucywgZmV0Y2hNb3JlRm9yUXVlcnlJZCA9IF9hLmZldGNoTW9yZUZvclF1ZXJ5SWQ7XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSBvcHRpb25zLnZhcmlhYmxlcywgX2IgPSBvcHRpb25zLmVycm9yUG9saWN5LCBlcnJvclBvbGljeSA9IF9iID09PSB2b2lkIDAgPyAnbm9uZScgOiBfYiwgZmV0Y2hQb2xpY3kgPSBvcHRpb25zLmZldGNoUG9saWN5O1xuICAgICAgICB2YXIgcmVzdWx0RnJvbVN0b3JlO1xuICAgICAgICB2YXIgZXJyb3JzRnJvbVN0b3JlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBfdGhpcy5nZXRPYnNlcnZhYmxlRnJvbUxpbmsoZG9jdW1lbnQsIG9wdGlvbnMuY29udGV4dCwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgIHZhciBmcXJmSWQgPSBcImZldGNoUmVxdWVzdDpcIiArIHF1ZXJ5SWQ7XG4gICAgICAgICAgICBfdGhpcy5mZXRjaFF1ZXJ5UmVqZWN0Rm5zLnNldChmcXJmSWQsIHJlamVjdCk7XG4gICAgICAgICAgICB2YXIgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5mZXRjaFF1ZXJ5UmVqZWN0Rm5zLmRlbGV0ZShmcXJmSWQpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFF1ZXJ5KHF1ZXJ5SWQsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IF9hLnN1YnNjcmlwdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMuZGVsZXRlKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdElkID49IF90aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpLmxhc3RSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFya1F1ZXJ5UmVzdWx0KHF1ZXJ5SWQsIHJlc3VsdCwgb3B0aW9ucywgZmV0Y2hNb3JlRm9yUXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnF1ZXJ5U3RvcmUubWFya1F1ZXJ5UmVzdWx0KHF1ZXJ5SWQsIHJlc3VsdCwgZmV0Y2hNb3JlRm9yUXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmludmFsaWRhdGUocXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmludmFsaWRhdGUoZmV0Y2hNb3JlRm9yUXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yUG9saWN5ID09PSAnbm9uZScgJiYgaXNOb25FbXB0eUFycmF5KHJlc3VsdC5lcnJvcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHJlc3VsdC5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yUG9saWN5ID09PSAnYWxsJykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnNGcm9tU3RvcmUgPSByZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmV0Y2hNb3JlRm9yUXVlcnlJZCB8fCBmZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRGcm9tU3RvcmUgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLmRhdGFTdG9yZS5nZXRDYWNoZSgpLmRpZmYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KSwgcmVzdWx0XzEgPSBfYS5yZXN1bHQsIGNvbXBsZXRlID0gX2EuY29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZSB8fCBvcHRpb25zLnJldHVyblBhcnRpYWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGcm9tU3RvcmUgPSByZXN1bHRfMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0RnJvbVN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnNGcm9tU3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IE5ldHdvcmtTdGF0dXMucmVhZHksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLnNldFF1ZXJ5KHF1ZXJ5SWQsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gX2Euc3Vic2NyaXB0aW9ucztcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25zLmFkZChzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5xdWVyaWVzLmdldChxdWVyeUlkKSB8fCB7XG4gICAgICAgICAgICBsaXN0ZW5lcnM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgIGludmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRvY3VtZW50OiBudWxsLFxuICAgICAgICAgICAgbmV3RGF0YTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RSZXF1ZXN0SWQ6IDEsXG4gICAgICAgICAgICBvYnNlcnZhYmxlUXVlcnk6IG51bGwsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25zOiBuZXcgU2V0KCksXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zZXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkLCB1cGRhdGVyKSB7XG4gICAgICAgIHZhciBwcmV2ID0gdGhpcy5nZXRRdWVyeShxdWVyeUlkKTtcbiAgICAgICAgdmFyIG5ld0luZm8gPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJldiksIHVwZGF0ZXIocHJldikpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuc2V0KHF1ZXJ5SWQsIG5ld0luZm8pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5pbnZhbGlkYXRlID0gZnVuY3Rpb24gKHF1ZXJ5SWQsIGludmFsaWRhdGVkKSB7XG4gICAgICAgIGlmIChpbnZhbGlkYXRlZCA9PT0gdm9pZCAwKSB7IGludmFsaWRhdGVkID0gdHJ1ZTsgfVxuICAgICAgICBpZiAocXVlcnlJZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRRdWVyeShxdWVyeUlkLCBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyBpbnZhbGlkYXRlZDogaW52YWxpZGF0ZWQgfSk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnByZXBhcmVDb250ZXh0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICAgICAgdmFyIG5ld0NvbnRleHQgPSB0aGlzLmxvY2FsU3RhdGUucHJlcGFyZUNvbnRleHQoY29udGV4dCk7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbmV3Q29udGV4dCksIHsgY2xpZW50QXdhcmVuZXNzOiB0aGlzLmNsaWVudEF3YXJlbmVzcyB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuY2hlY2tJbkZsaWdodCA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcnlTdG9yZS5nZXQocXVlcnlJZCk7XG4gICAgICAgIHJldHVybiAocXVlcnkgJiZcbiAgICAgICAgICAgIHF1ZXJ5Lm5ldHdvcmtTdGF0dXMgIT09IE5ldHdvcmtTdGF0dXMucmVhZHkgJiZcbiAgICAgICAgICAgIHF1ZXJ5Lm5ldHdvcmtTdGF0dXMgIT09IE5ldHdvcmtTdGF0dXMuZXJyb3IpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdGFydFBvbGxpbmdRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBxdWVyeUlkLCBsaXN0ZW5lcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcG9sbEludGVydmFsID0gb3B0aW9ucy5wb2xsSW50ZXJ2YWw7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChwb2xsSW50ZXJ2YWwsIDE4KSA6IGludmFyaWFudChwb2xsSW50ZXJ2YWwsICdBdHRlbXB0ZWQgdG8gc3RhcnQgYSBwb2xsaW5nIHF1ZXJ5IHdpdGhvdXQgYSBwb2xsaW5nIGludGVydmFsLicpO1xuICAgICAgICBpZiAoIXRoaXMuc3NyTW9kZSkge1xuICAgICAgICAgICAgdmFyIGluZm8gPSB0aGlzLnBvbGxpbmdJbmZvQnlRdWVyeUlkLmdldChxdWVyeUlkKTtcbiAgICAgICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9sbGluZ0luZm9CeVF1ZXJ5SWQuc2V0KHF1ZXJ5SWQsIChpbmZvID0ge30pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZm8uaW50ZXJ2YWwgPSBwb2xsSW50ZXJ2YWw7XG4gICAgICAgICAgICBpbmZvLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknIH0pO1xuICAgICAgICAgICAgdmFyIG1heWJlRmV0Y2hfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IF90aGlzLnBvbGxpbmdJbmZvQnlRdWVyeUlkLmdldChxdWVyeUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY2hlY2tJbkZsaWdodChxdWVyeUlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9sbF8xKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5mZXRjaFF1ZXJ5KHF1ZXJ5SWQsIGluZm8ub3B0aW9ucywgRmV0Y2hUeXBlLnBvbGwpLnRoZW4ocG9sbF8xLCBwb2xsXzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBwb2xsXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZm8gPSBfdGhpcy5wb2xsaW5nSW5mb0J5UXVlcnlJZC5nZXQocXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGluZm8udGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIGluZm8udGltZW91dCA9IHNldFRpbWVvdXQobWF5YmVGZXRjaF8xLCBpbmZvLmludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRRdWVyeUxpc3RlbmVyKHF1ZXJ5SWQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvbGxfMSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeUlkO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wUG9sbGluZ1F1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW5mb0J5UXVlcnlJZC5kZWxldGUocXVlcnlJZCk7XG4gICAgfTtcbiAgICByZXR1cm4gUXVlcnlNYW5hZ2VyO1xufSgpKTtcblxudmFyIERhdGFTdG9yZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGF0YVN0b3JlKGluaXRpYWxDYWNoZSkge1xuICAgICAgICB0aGlzLmNhY2hlID0gaW5pdGlhbENhY2hlO1xuICAgIH1cbiAgICBEYXRhU3RvcmUucHJvdG90eXBlLmdldENhY2hlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZTtcbiAgICB9O1xuICAgIERhdGFTdG9yZS5wcm90b3R5cGUubWFya1F1ZXJ5UmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCwgZG9jdW1lbnQsIHZhcmlhYmxlcywgZmV0Y2hNb3JlRm9yUXVlcnlJZCwgaWdub3JlRXJyb3JzKSB7XG4gICAgICAgIGlmIChpZ25vcmVFcnJvcnMgPT09IHZvaWQgMCkgeyBpZ25vcmVFcnJvcnMgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgd3JpdGVXaXRoRXJyb3JzID0gIWdyYXBoUUxSZXN1bHRIYXNFcnJvcihyZXN1bHQpO1xuICAgICAgICBpZiAoaWdub3JlRXJyb3JzICYmIGdyYXBoUUxSZXN1bHRIYXNFcnJvcihyZXN1bHQpICYmIHJlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICB3cml0ZVdpdGhFcnJvcnMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmV0Y2hNb3JlRm9yUXVlcnlJZCAmJiB3cml0ZVdpdGhFcnJvcnMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUud3JpdGUoe1xuICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9RVUVSWScsXG4gICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERhdGFTdG9yZS5wcm90b3R5cGUubWFya1N1YnNjcmlwdGlvblJlc3VsdCA9IGZ1bmN0aW9uIChyZXN1bHQsIGRvY3VtZW50LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgaWYgKCFncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS53cml0ZSh7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICBkYXRhSWQ6ICdST09UX1NVQlNDUklQVElPTicsXG4gICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERhdGFTdG9yZS5wcm90b3R5cGUubWFya011dGF0aW9uSW5pdCA9IGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobXV0YXRpb24ub3B0aW1pc3RpY1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW1pc3RpY18xO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtdXRhdGlvbi5vcHRpbWlzdGljUmVzcG9uc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBvcHRpbWlzdGljXzEgPSBtdXRhdGlvbi5vcHRpbWlzdGljUmVzcG9uc2UobXV0YXRpb24udmFyaWFibGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGltaXN0aWNfMSA9IG11dGF0aW9uLm9wdGltaXN0aWNSZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucmVjb3JkT3B0aW1pc3RpY1RyYW5zYWN0aW9uKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWcgPSBfdGhpcy5jYWNoZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jYWNoZSA9IGM7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFya011dGF0aW9uUmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uSWQ6IG11dGF0aW9uLm11dGF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHsgZGF0YTogb3B0aW1pc3RpY18xIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogbXV0YXRpb24uZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG11dGF0aW9uLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJpZXM6IG11dGF0aW9uLnVwZGF0ZVF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IG11dGF0aW9uLnVwZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWNoZSA9IG9yaWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgbXV0YXRpb24ubXV0YXRpb25JZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERhdGFTdG9yZS5wcm90b3R5cGUubWFya011dGF0aW9uUmVzdWx0ID0gZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKG11dGF0aW9uLnJlc3VsdCkpIHtcbiAgICAgICAgICAgIHZhciBjYWNoZVdyaXRlc18xID0gW3tcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBtdXRhdGlvbi5yZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9NVVRBVElPTicsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBtdXRhdGlvbi5kb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBtdXRhdGlvbi52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICB2YXIgdXBkYXRlUXVlcmllc18xID0gbXV0YXRpb24udXBkYXRlUXVlcmllcztcbiAgICAgICAgICAgIGlmICh1cGRhdGVRdWVyaWVzXzEpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh1cGRhdGVRdWVyaWVzXzEpLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IHVwZGF0ZVF1ZXJpZXNfMVtpZF0sIHF1ZXJ5ID0gX2EucXVlcnksIHVwZGF0ZXIgPSBfYS51cGRhdGVyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBfdGhpcy5jYWNoZS5kaWZmKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeS5kb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogcXVlcnkudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSksIGN1cnJlbnRRdWVyeVJlc3VsdCA9IF9iLnJlc3VsdCwgY29tcGxldGUgPSBfYi5jb21wbGV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFF1ZXJ5UmVzdWx0ID0gdHJ5RnVuY3Rpb25PckxvZ0Vycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlcihjdXJyZW50UXVlcnlSZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25SZXN1bHQ6IG11dGF0aW9uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lOiBnZXRPcGVyYXRpb25OYW1lKHF1ZXJ5LmRvY3VtZW50KSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFyaWFibGVzOiBxdWVyeS52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UXVlcnlSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVdyaXRlc18xLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IG5leHRRdWVyeVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9RVUVSWScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeS5kb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBxdWVyeS52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucGVyZm9ybVRyYW5zYWN0aW9uKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVXcml0ZXNfMS5mb3JFYWNoKGZ1bmN0aW9uICh3cml0ZSkgeyByZXR1cm4gYy53cml0ZSh3cml0ZSk7IH0pO1xuICAgICAgICAgICAgICAgIHZhciB1cGRhdGUgPSBtdXRhdGlvbi51cGRhdGU7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnlGdW5jdGlvbk9yTG9nRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gdXBkYXRlKGMsIG11dGF0aW9uLnJlc3VsdCk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEYXRhU3RvcmUucHJvdG90eXBlLm1hcmtNdXRhdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBtdXRhdGlvbklkID0gX2EubXV0YXRpb25JZCwgb3B0aW1pc3RpY1Jlc3BvbnNlID0gX2Eub3B0aW1pc3RpY1Jlc3BvbnNlO1xuICAgICAgICBpZiAob3B0aW1pc3RpY1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnJlbW92ZU9wdGltaXN0aWMobXV0YXRpb25JZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERhdGFTdG9yZS5wcm90b3R5cGUubWFya1VwZGF0ZVF1ZXJ5UmVzdWx0ID0gZnVuY3Rpb24gKGRvY3VtZW50LCB2YXJpYWJsZXMsIG5ld1Jlc3VsdCkge1xuICAgICAgICB0aGlzLmNhY2hlLndyaXRlKHtcbiAgICAgICAgICAgIHJlc3VsdDogbmV3UmVzdWx0LFxuICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9RVUVSWScsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIHF1ZXJ5OiBkb2N1bWVudCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEYXRhU3RvcmUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZXNldCgpO1xuICAgIH07XG4gICAgcmV0dXJuIERhdGFTdG9yZTtcbn0oKSk7XG5cbnZhciB2ZXJzaW9uID0gXCIyLjYuMTBcIjtcblxudmFyIGhhc1N1Z2dlc3RlZERldnRvb2xzID0gZmFsc2U7XG52YXIgQXBvbGxvQ2xpZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcG9sbG9DbGllbnQob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMucmVzZXRTdG9yZUNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdmFyIGNhY2hlID0gb3B0aW9ucy5jYWNoZSwgX2EgPSBvcHRpb25zLnNzck1vZGUsIHNzck1vZGUgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnNzckZvcmNlRmV0Y2hEZWxheSwgc3NyRm9yY2VGZXRjaERlbGF5ID0gX2IgPT09IHZvaWQgMCA/IDAgOiBfYiwgY29ubmVjdFRvRGV2VG9vbHMgPSBvcHRpb25zLmNvbm5lY3RUb0RldlRvb2xzLCBfYyA9IG9wdGlvbnMucXVlcnlEZWR1cGxpY2F0aW9uLCBxdWVyeURlZHVwbGljYXRpb24gPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsIF9kID0gb3B0aW9ucy5hc3N1bWVJbW11dGFibGVSZXN1bHRzLCBhc3N1bWVJbW11dGFibGVSZXN1bHRzID0gX2QgPT09IHZvaWQgMCA/IGZhbHNlIDogX2QsIHJlc29sdmVycyA9IG9wdGlvbnMucmVzb2x2ZXJzLCB0eXBlRGVmcyA9IG9wdGlvbnMudHlwZURlZnMsIGZyYWdtZW50TWF0Y2hlciA9IG9wdGlvbnMuZnJhZ21lbnRNYXRjaGVyLCBjbGllbnRBd2FyZW5lc3NOYW1lID0gb3B0aW9ucy5uYW1lLCBjbGllbnRBd2FyZW5lc3NWZXJzaW9uID0gb3B0aW9ucy52ZXJzaW9uO1xuICAgICAgICB2YXIgbGluayA9IG9wdGlvbnMubGluaztcbiAgICAgICAgaWYgKCFsaW5rICYmIHJlc29sdmVycykge1xuICAgICAgICAgICAgbGluayA9IEFwb2xsb0xpbmsuZW1wdHkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpbmsgfHwgIWNhY2hlKSB7XG4gICAgICAgICAgICB0aHJvdyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgSW52YXJpYW50RXJyb3IoNCkgOiBuZXcgSW52YXJpYW50RXJyb3IoXCJJbiBvcmRlciB0byBpbml0aWFsaXplIEFwb2xsbyBDbGllbnQsIHlvdSBtdXN0IHNwZWNpZnkgJ2xpbmsnIGFuZCAnY2FjaGUnIHByb3BlcnRpZXMgaW4gdGhlIG9wdGlvbnMgb2JqZWN0LlxcblwiICtcbiAgICAgICAgICAgICAgICBcIlRoZXNlIG9wdGlvbnMgYXJlIHBhcnQgb2YgdGhlIHVwZ3JhZGUgcmVxdWlyZW1lbnRzIHdoZW4gbWlncmF0aW5nIGZyb20gQXBvbGxvIENsaWVudCAxLnggdG8gQXBvbGxvIENsaWVudCAyLnguXFxuXCIgK1xuICAgICAgICAgICAgICAgIFwiRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSB2aXNpdDogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy90dXRvcmlhbC9jbGllbnQuaHRtbCNhcG9sbG8tY2xpZW50LXNldHVwXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGluayA9IGxpbms7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICAgICAgdGhpcy5zdG9yZSA9IG5ldyBEYXRhU3RvcmUoY2FjaGUpO1xuICAgICAgICB0aGlzLmRpc2FibGVOZXR3b3JrRmV0Y2hlcyA9IHNzck1vZGUgfHwgc3NyRm9yY2VGZXRjaERlbGF5ID4gMDtcbiAgICAgICAgdGhpcy5xdWVyeURlZHVwbGljYXRpb24gPSBxdWVyeURlZHVwbGljYXRpb247XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy50eXBlRGVmcyA9IHR5cGVEZWZzO1xuICAgICAgICBpZiAoc3NyRm9yY2VGZXRjaERlbGF5KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIChfdGhpcy5kaXNhYmxlTmV0d29ya0ZldGNoZXMgPSBmYWxzZSk7IH0sIHNzckZvcmNlRmV0Y2hEZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53YXRjaFF1ZXJ5ID0gdGhpcy53YXRjaFF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubXV0YXRlID0gdGhpcy5tdXRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNldFN0b3JlID0gdGhpcy5yZXNldFN0b3JlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzID0gdGhpcy5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdmFyIGRlZmF1bHRDb25uZWN0VG9EZXZUb29scyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAhd2luZG93Ll9fQVBPTExPX0NMSUVOVF9fO1xuICAgICAgICBpZiAodHlwZW9mIGNvbm5lY3RUb0RldlRvb2xzID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBkZWZhdWx0Q29ubmVjdFRvRGV2VG9vbHNcbiAgICAgICAgICAgIDogY29ubmVjdFRvRGV2VG9vbHMgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5fX0FQT0xMT19DTElFTlRfXyA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNTdWdnZXN0ZWREZXZ0b29scyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBoYXNTdWdnZXN0ZWREZXZ0b29scyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cudG9wID09PSB3aW5kb3cuc2VsZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Ll9fQVBPTExPX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnRG93bmxvYWQgdGhlIEFwb2xsbyBEZXZUb29scyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IGV4cGVyaWVuY2U6ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9hcG9sbG8tY2xpZW50LWRldmVsb3Blci10L2pka2tua2tiZWJiYXBpbGdvZWNjY2lnbGtmYm1ibmZtJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlID0gbmV3IExvY2FsU3RhdGUoe1xuICAgICAgICAgICAgY2FjaGU6IGNhY2hlLFxuICAgICAgICAgICAgY2xpZW50OiB0aGlzLFxuICAgICAgICAgICAgcmVzb2x2ZXJzOiByZXNvbHZlcnMsXG4gICAgICAgICAgICBmcmFnbWVudE1hdGNoZXI6IGZyYWdtZW50TWF0Y2hlcixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyID0gbmV3IFF1ZXJ5TWFuYWdlcih7XG4gICAgICAgICAgICBsaW5rOiB0aGlzLmxpbmssXG4gICAgICAgICAgICBzdG9yZTogdGhpcy5zdG9yZSxcbiAgICAgICAgICAgIHF1ZXJ5RGVkdXBsaWNhdGlvbjogcXVlcnlEZWR1cGxpY2F0aW9uLFxuICAgICAgICAgICAgc3NyTW9kZTogc3NyTW9kZSxcbiAgICAgICAgICAgIGNsaWVudEF3YXJlbmVzczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGNsaWVudEF3YXJlbmVzc05hbWUsXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogY2xpZW50QXdhcmVuZXNzVmVyc2lvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2NhbFN0YXRlOiB0aGlzLmxvY2FsU3RhdGUsXG4gICAgICAgICAgICBhc3N1bWVJbW11dGFibGVSZXN1bHRzOiBhc3N1bWVJbW11dGFibGVSZXN1bHRzLFxuICAgICAgICAgICAgb25Ccm9hZGNhc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGV2VG9vbHNIb29rQ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGV2VG9vbHNIb29rQ2Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcmllczogX3RoaXMucXVlcnlNYW5hZ2VyLnF1ZXJ5U3RvcmUuZ2V0U3RvcmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnM6IF90aGlzLnF1ZXJ5TWFuYWdlci5tdXRhdGlvblN0b3JlLmdldFN0b3JlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVdpdGhPcHRpbWlzdGljUmVzdWx0czogX3RoaXMuY2FjaGUuZXh0cmFjdCh0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuc3RvcCgpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS53YXRjaFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE9wdGlvbnMud2F0Y2hRdWVyeSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLndhdGNoUXVlcnkpLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlTmV0d29ya0ZldGNoZXMgJiZcbiAgICAgICAgICAgIChvcHRpb25zLmZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1hbmQtbmV0d29yaycpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiAnY2FjaGUtZmlyc3QnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci53YXRjaFF1ZXJ5KG9wdGlvbnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRPcHRpb25zLnF1ZXJ5KSB7XG4gICAgICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMucXVlcnkpLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQob3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gJ2NhY2hlLWFuZC1uZXR3b3JrJywgNSkgOiBpbnZhcmlhbnQob3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gJ2NhY2hlLWFuZC1uZXR3b3JrJywgJ1RoZSBjYWNoZS1hbmQtbmV0d29yayBmZXRjaFBvbGljeSBkb2VzIG5vdCB3b3JrIHdpdGggY2xpZW50LnF1ZXJ5LCBiZWNhdXNlICcgK1xuICAgICAgICAgICAgJ2NsaWVudC5xdWVyeSBjYW4gb25seSByZXR1cm4gYSBzaW5nbGUgcmVzdWx0LiBQbGVhc2UgdXNlIGNsaWVudC53YXRjaFF1ZXJ5ICcgK1xuICAgICAgICAgICAgJ3RvIHJlY2VpdmUgbXVsdGlwbGUgcmVzdWx0cyBmcm9tIHRoZSBjYWNoZSBhbmQgdGhlIG5ldHdvcmssIG9yIGNvbnNpZGVyICcgK1xuICAgICAgICAgICAgJ3VzaW5nIGEgZGlmZmVyZW50IGZldGNoUG9saWN5LCBzdWNoIGFzIGNhY2hlLWZpcnN0IG9yIG5ldHdvcmstb25seS4nKTtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzICYmIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiAnY2FjaGUtZmlyc3QnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5xdWVyeShvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUubXV0YXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRlKSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLm11dGF0ZShvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLnN0YXJ0R3JhcGhRTFN1YnNjcmlwdGlvbihvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVhZFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVhZFF1ZXJ5KG9wdGlvbnMsIG9wdGltaXN0aWMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZWFkRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucywgb3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZWFkRnJhZ21lbnQob3B0aW9ucywgb3B0aW1pc3RpYyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLndyaXRlUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5jYWNoZS53cml0ZVF1ZXJ5KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLndyaXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5jYWNoZS53cml0ZUZyYWdtZW50KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLndyaXRlRGF0YSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmNhY2hlLndyaXRlRGF0YShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5fX2FjdGlvbkhvb2tGb3JEZXZUb29scyA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB0aGlzLmRldlRvb2xzSG9va0NiID0gY2I7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLl9fcmVxdWVzdFJhdyA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBleGVjdXRlKHRoaXMubGluaywgcGF5bG9hZCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmluaXRRdWVyeU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiB8fCBpbnZhcmlhbnQud2FybignQ2FsbGluZyB0aGUgaW5pdFF1ZXJ5TWFuYWdlciBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeSwgJyArXG4gICAgICAgICAgICAnYW5kIGl0IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIEFwb2xsb0NsaWVudCBpbiB2ZXJzaW9uIDMuMC4nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZXNldFN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnF1ZXJ5TWFuYWdlci5jbGVhclN0b3JlKCk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLmFsbChfdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzLm1hcChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH0pKTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcygpOyB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuY2xlYXJTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5xdWVyeU1hbmFnZXIuY2xlYXJTdG9yZSgpOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoX3RoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcy5tYXAoZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9KSk7IH0pO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5vblJlc2V0U3RvcmUgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVzZXRTdG9yZUNhbGxiYWNrcyA9IF90aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSBjYjsgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLm9uQ2xlYXJTdG9yZSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzID0gX3RoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09IGNiOyB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzID0gZnVuY3Rpb24gKGluY2x1ZGVTdGFuZGJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMoaW5jbHVkZVN0YW5kYnkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKG9wdGltaXN0aWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZXh0cmFjdChvcHRpbWlzdGljKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVzdG9yZSA9IGZ1bmN0aW9uIChzZXJpYWxpemVkU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVzdG9yZShzZXJpYWxpemVkU3RhdGUpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5hZGRSZXNvbHZlcnMgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdGF0ZS5hZGRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUuc2V0UmVzb2x2ZXJzKHJlc29sdmVycyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmdldFJlc29sdmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTdGF0ZS5nZXRSZXNvbHZlcnMoKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc2V0TG9jYWxTdGF0ZUZyYWdtZW50TWF0Y2hlciA9IGZ1bmN0aW9uIChmcmFnbWVudE1hdGNoZXIpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlLnNldEZyYWdtZW50TWF0Y2hlcihmcmFnbWVudE1hdGNoZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIEFwb2xsb0NsaWVudDtcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwb2xsb0NsaWVudDtcbmV4cG9ydCB7IEFwb2xsb0NsaWVudCwgQXBvbGxvRXJyb3IsIEZldGNoVHlwZSwgTmV0d29ya1N0YXR1cywgT2JzZXJ2YWJsZVF1ZXJ5LCBpc0Fwb2xsb0Vycm9yIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idW5kbGUuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnemVuLW9ic2VydmFibGUtdHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPYnNlcnZhYmxlIH0gZnJvbSAnemVuLW9ic2VydmFibGUtdHMnO1xuaW1wb3J0IHsgaW52YXJpYW50LCBJbnZhcmlhbnRFcnJvciB9IGZyb20gJ3RzLWludmFyaWFudCc7XG5pbXBvcnQgeyBfX2V4dGVuZHMsIF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgZ2V0T3BlcmF0aW9uTmFtZSB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuZXhwb3J0IHsgZ2V0T3BlcmF0aW9uTmFtZSB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU9wZXJhdGlvbihvcGVyYXRpb24pIHtcbiAgICB2YXIgT1BFUkFUSU9OX0ZJRUxEUyA9IFtcbiAgICAgICAgJ3F1ZXJ5JyxcbiAgICAgICAgJ29wZXJhdGlvbk5hbWUnLFxuICAgICAgICAndmFyaWFibGVzJyxcbiAgICAgICAgJ2V4dGVuc2lvbnMnLFxuICAgICAgICAnY29udGV4dCcsXG4gICAgXTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMob3BlcmF0aW9uKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgaWYgKE9QRVJBVElPTl9GSUVMRFMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gbmV3IEludmFyaWFudEVycm9yKDIpIDogbmV3IEludmFyaWFudEVycm9yKFwiaWxsZWdhbCBhcmd1bWVudDogXCIgKyBrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcGVyYXRpb247XG59XG52YXIgTGlua0Vycm9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGlua0Vycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExpbmtFcnJvcihtZXNzYWdlLCBsaW5rKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBMaW5rRXJyb3I7XG59KEVycm9yKSk7XG5mdW5jdGlvbiBpc1Rlcm1pbmF0aW5nKGxpbmspIHtcbiAgICByZXR1cm4gbGluay5yZXF1ZXN0Lmxlbmd0aCA8PSAxO1xufVxuZnVuY3Rpb24gdG9Qcm9taXNlKG9ic2VydmFibGUpIHtcbiAgICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiB8fCBpbnZhcmlhbnQud2FybihcIlByb21pc2UgV3JhcHBlciBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIHJlc3VsdHMgZnJvbSBPYnNlcnZhYmxlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG52YXIgbWFrZVByb21pc2UgPSB0b1Byb21pc2U7XG5mdW5jdGlvbiBmcm9tUHJvbWlzZShwcm9taXNlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBwcm9taXNlXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmcm9tRXJyb3IoZXJyb3JWYWx1ZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3JWYWx1ZSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1PcGVyYXRpb24ob3BlcmF0aW9uKSB7XG4gICAgdmFyIHRyYW5zZm9ybWVkT3BlcmF0aW9uID0ge1xuICAgICAgICB2YXJpYWJsZXM6IG9wZXJhdGlvbi52YXJpYWJsZXMgfHwge30sXG4gICAgICAgIGV4dGVuc2lvbnM6IG9wZXJhdGlvbi5leHRlbnNpb25zIHx8IHt9LFxuICAgICAgICBvcGVyYXRpb25OYW1lOiBvcGVyYXRpb24ub3BlcmF0aW9uTmFtZSxcbiAgICAgICAgcXVlcnk6IG9wZXJhdGlvbi5xdWVyeSxcbiAgICB9O1xuICAgIGlmICghdHJhbnNmb3JtZWRPcGVyYXRpb24ub3BlcmF0aW9uTmFtZSkge1xuICAgICAgICB0cmFuc2Zvcm1lZE9wZXJhdGlvbi5vcGVyYXRpb25OYW1lID1cbiAgICAgICAgICAgIHR5cGVvZiB0cmFuc2Zvcm1lZE9wZXJhdGlvbi5xdWVyeSAhPT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGdldE9wZXJhdGlvbk5hbWUodHJhbnNmb3JtZWRPcGVyYXRpb24ucXVlcnkpXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkT3BlcmF0aW9uO1xufVxuZnVuY3Rpb24gY3JlYXRlT3BlcmF0aW9uKHN0YXJ0aW5nLCBvcGVyYXRpb24pIHtcbiAgICB2YXIgY29udGV4dCA9IF9fYXNzaWduKHt9LCBzdGFydGluZyk7XG4gICAgdmFyIHNldENvbnRleHQgPSBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICBpZiAodHlwZW9mIG5leHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBfX2Fzc2lnbih7fSwgY29udGV4dCwgbmV4dChjb250ZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gX19hc3NpZ24oe30sIGNvbnRleHQsIG5leHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChfX2Fzc2lnbih7fSwgY29udGV4dCkpOyB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcGVyYXRpb24sICdzZXRDb250ZXh0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHNldENvbnRleHQsXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wZXJhdGlvbiwgJ2dldENvbnRleHQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogZ2V0Q29udGV4dCxcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3BlcmF0aW9uLCAndG9LZXknLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0S2V5KG9wZXJhdGlvbik7IH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIG9wZXJhdGlvbjtcbn1cbmZ1bmN0aW9uIGdldEtleShvcGVyYXRpb24pIHtcbiAgICB2YXIgcXVlcnkgPSBvcGVyYXRpb24ucXVlcnksIHZhcmlhYmxlcyA9IG9wZXJhdGlvbi52YXJpYWJsZXMsIG9wZXJhdGlvbk5hbWUgPSBvcGVyYXRpb24ub3BlcmF0aW9uTmFtZTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoW29wZXJhdGlvbk5hbWUsIHF1ZXJ5LCB2YXJpYWJsZXNdKTtcbn1cblxuZnVuY3Rpb24gcGFzc3Rocm91Z2gob3AsIGZvcndhcmQpIHtcbiAgICByZXR1cm4gZm9yd2FyZCA/IGZvcndhcmQob3ApIDogT2JzZXJ2YWJsZS5vZigpO1xufVxuZnVuY3Rpb24gdG9MaW5rKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicgPyBuZXcgQXBvbGxvTGluayhoYW5kbGVyKSA6IGhhbmRsZXI7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JzZXJ2YWJsZS5vZigpOyB9KTtcbn1cbmZ1bmN0aW9uIGZyb20obGlua3MpIHtcbiAgICBpZiAobGlua3MubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gZW1wdHkoKTtcbiAgICByZXR1cm4gbGlua3MubWFwKHRvTGluaykucmVkdWNlKGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiB4LmNvbmNhdCh5KTsgfSk7XG59XG5mdW5jdGlvbiBzcGxpdCh0ZXN0LCBsZWZ0LCByaWdodCkge1xuICAgIHZhciBsZWZ0TGluayA9IHRvTGluayhsZWZ0KTtcbiAgICB2YXIgcmlnaHRMaW5rID0gdG9MaW5rKHJpZ2h0IHx8IG5ldyBBcG9sbG9MaW5rKHBhc3N0aHJvdWdoKSk7XG4gICAgaWYgKGlzVGVybWluYXRpbmcobGVmdExpbmspICYmIGlzVGVybWluYXRpbmcocmlnaHRMaW5rKSkge1xuICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRlc3Qob3BlcmF0aW9uKVxuICAgICAgICAgICAgICAgID8gbGVmdExpbmsucmVxdWVzdChvcGVyYXRpb24pIHx8IE9ic2VydmFibGUub2YoKVxuICAgICAgICAgICAgICAgIDogcmlnaHRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uKSB8fCBPYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0KG9wZXJhdGlvbilcbiAgICAgICAgICAgICAgICA/IGxlZnRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmb3J3YXJkKSB8fCBPYnNlcnZhYmxlLm9mKClcbiAgICAgICAgICAgICAgICA6IHJpZ2h0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZm9yd2FyZCkgfHwgT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG52YXIgY29uY2F0ID0gZnVuY3Rpb24gKGZpcnN0LCBzZWNvbmQpIHtcbiAgICB2YXIgZmlyc3RMaW5rID0gdG9MaW5rKGZpcnN0KTtcbiAgICBpZiAoaXNUZXJtaW5hdGluZyhmaXJzdExpbmspKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiB8fCBpbnZhcmlhbnQud2FybihuZXcgTGlua0Vycm9yKFwiWW91IGFyZSBjYWxsaW5nIGNvbmNhdCBvbiBhIHRlcm1pbmF0aW5nIGxpbmssIHdoaWNoIHdpbGwgaGF2ZSBubyBlZmZlY3RcIiwgZmlyc3RMaW5rKSk7XG4gICAgICAgIHJldHVybiBmaXJzdExpbms7XG4gICAgfVxuICAgIHZhciBuZXh0TGluayA9IHRvTGluayhzZWNvbmQpO1xuICAgIGlmIChpc1Rlcm1pbmF0aW5nKG5leHRMaW5rKSkge1xuICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZnVuY3Rpb24gKG9wKSB7IHJldHVybiBuZXh0TGluay5yZXF1ZXN0KG9wKSB8fCBPYnNlcnZhYmxlLm9mKCk7IH0pIHx8IE9ic2VydmFibGUub2YoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICAgICAgcmV0dXJuIChmaXJzdExpbmsucmVxdWVzdChvcGVyYXRpb24sIGZ1bmN0aW9uIChvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0TGluay5yZXF1ZXN0KG9wLCBmb3J3YXJkKSB8fCBPYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgICAgICB9KSB8fCBPYnNlcnZhYmxlLm9mKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xudmFyIEFwb2xsb0xpbmsgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwb2xsb0xpbmsocmVxdWVzdCkge1xuICAgICAgICBpZiAocmVxdWVzdClcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgfVxuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLnNwbGl0ID0gZnVuY3Rpb24gKHRlc3QsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmNhdChzcGxpdCh0ZXN0LCBsZWZ0LCByaWdodCB8fCBuZXcgQXBvbGxvTGluayhwYXNzdGhyb3VnaCkpKTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIHJldHVybiBjb25jYXQodGhpcywgbmV4dCk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICB0aHJvdyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgSW52YXJpYW50RXJyb3IoMSkgOiBuZXcgSW52YXJpYW50RXJyb3IoJ3JlcXVlc3QgaXMgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLmVtcHR5ID0gZW1wdHk7XG4gICAgQXBvbGxvTGluay5mcm9tID0gZnJvbTtcbiAgICBBcG9sbG9MaW5rLnNwbGl0ID0gc3BsaXQ7XG4gICAgQXBvbGxvTGluay5leGVjdXRlID0gZXhlY3V0ZTtcbiAgICByZXR1cm4gQXBvbGxvTGluaztcbn0oKSk7XG5mdW5jdGlvbiBleGVjdXRlKGxpbmssIG9wZXJhdGlvbikge1xuICAgIHJldHVybiAobGluay5yZXF1ZXN0KGNyZWF0ZU9wZXJhdGlvbihvcGVyYXRpb24uY29udGV4dCwgdHJhbnNmb3JtT3BlcmF0aW9uKHZhbGlkYXRlT3BlcmF0aW9uKG9wZXJhdGlvbikpKSkgfHwgT2JzZXJ2YWJsZS5vZigpKTtcbn1cblxuZXhwb3J0IHsgQXBvbGxvTGluaywgY29uY2F0LCBjcmVhdGVPcGVyYXRpb24sIGVtcHR5LCBleGVjdXRlLCBmcm9tLCBmcm9tRXJyb3IsIGZyb21Qcm9taXNlLCBtYWtlUHJvbWlzZSwgc3BsaXQsIHRvUHJvbWlzZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVuZGxlLmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IHZpc2l0IH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZS92aXNpdG9yJztcbmltcG9ydCB7IEludmFyaWFudEVycm9yLCBpbnZhcmlhbnQgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fc3ByZWFkQXJyYXlzIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICdmYXN0LWpzb24tc3RhYmxlLXN0cmluZ2lmeSc7XG5leHBvcnQgeyBlcXVhbCBhcyBpc0VxdWFsIH0gZnJvbSAnQHdyeS9lcXVhbGl0eSc7XG5cbmZ1bmN0aW9uIGlzU2NhbGFyVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gWydTdHJpbmdWYWx1ZScsICdCb29sZWFuVmFsdWUnLCAnRW51bVZhbHVlJ10uaW5kZXhPZih2YWx1ZS5raW5kKSA+IC0xO1xufVxuZnVuY3Rpb24gaXNOdW1iZXJWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiBbJ0ludFZhbHVlJywgJ0Zsb2F0VmFsdWUnXS5pbmRleE9mKHZhbHVlLmtpbmQpID4gLTE7XG59XG5mdW5jdGlvbiBpc1N0cmluZ1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdTdHJpbmdWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0Jvb2xlYW5WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnQm9vbGVhblZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzSW50VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0ludFZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzRmxvYXRWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnRmxvYXRWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc1ZhcmlhYmxlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZSc7XG59XG5mdW5jdGlvbiBpc09iamVjdFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdPYmplY3RWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0xpc3RWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnTGlzdFZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzRW51bVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdFbnVtVmFsdWUnO1xufVxuZnVuY3Rpb24gaXNOdWxsVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ051bGxWYWx1ZSc7XG59XG5mdW5jdGlvbiB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24oYXJnT2JqLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKSB7XG4gICAgaWYgKGlzSW50VmFsdWUodmFsdWUpIHx8IGlzRmxvYXRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gTnVtYmVyKHZhbHVlLnZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNCb29sZWFuVmFsdWUodmFsdWUpIHx8IGlzU3RyaW5nVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdFZhbHVlKHZhbHVlKSkge1xuICAgICAgICB2YXIgbmVzdGVkQXJnT2JqXzEgPSB7fTtcbiAgICAgICAgdmFsdWUuZmllbGRzLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKG5lc3RlZEFyZ09ial8xLCBvYmoubmFtZSwgb2JqLnZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gbmVzdGVkQXJnT2JqXzE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVmFyaWFibGUodmFsdWUpKSB7XG4gICAgICAgIHZhciB2YXJpYWJsZVZhbHVlID0gKHZhcmlhYmxlcyB8fCB7fSlbdmFsdWUubmFtZS52YWx1ZV07XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhcmlhYmxlVmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTGlzdFZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YWx1ZS52YWx1ZXMubWFwKGZ1bmN0aW9uIChsaXN0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBuZXN0ZWRBcmdBcnJheU9iaiA9IHt9O1xuICAgICAgICAgICAgdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKG5lc3RlZEFyZ0FycmF5T2JqLCBuYW1lLCBsaXN0VmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQXJnQXJyYXlPYmpbbmFtZS52YWx1ZV07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0VudW1WYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTnVsbFZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gbmV3IEludmFyaWFudEVycm9yKDE3KSA6IG5ldyBJbnZhcmlhbnRFcnJvcihcIlRoZSBpbmxpbmUgYXJndW1lbnQgXFxcIlwiICsgbmFtZS52YWx1ZSArIFwiXFxcIiBvZiBraW5kIFxcXCJcIiArIHZhbHVlLmtpbmQgKyBcIlxcXCJcIiArXG4gICAgICAgICAgICAnaXMgbm90IHN1cHBvcnRlZC4gVXNlIHZhcmlhYmxlcyBpbnN0ZWFkIG9mIGlubGluZSBhcmd1bWVudHMgdG8gJyArXG4gICAgICAgICAgICAnb3ZlcmNvbWUgdGhpcyBsaW1pdGF0aW9uLicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0b3JlS2V5TmFtZUZyb21GaWVsZChmaWVsZCwgdmFyaWFibGVzKSB7XG4gICAgdmFyIGRpcmVjdGl2ZXNPYmogPSBudWxsO1xuICAgIGlmIChmaWVsZC5kaXJlY3RpdmVzKSB7XG4gICAgICAgIGRpcmVjdGl2ZXNPYmogPSB7fTtcbiAgICAgICAgZmllbGQuZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXNPYmpbZGlyZWN0aXZlLm5hbWUudmFsdWVdID0ge307XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGRpcmVjdGl2ZXNPYmpbZGlyZWN0aXZlLm5hbWUudmFsdWVdLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBhcmdPYmogPSBudWxsO1xuICAgIGlmIChmaWVsZC5hcmd1bWVudHMgJiYgZmllbGQuYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBhcmdPYmogPSB7fTtcbiAgICAgICAgZmllbGQuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09iaiwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0U3RvcmVLZXlOYW1lKGZpZWxkLm5hbWUudmFsdWUsIGFyZ09iaiwgZGlyZWN0aXZlc09iaik7XG59XG52YXIgS05PV05fRElSRUNUSVZFUyA9IFtcbiAgICAnY29ubmVjdGlvbicsXG4gICAgJ2luY2x1ZGUnLFxuICAgICdza2lwJyxcbiAgICAnY2xpZW50JyxcbiAgICAncmVzdCcsXG4gICAgJ2V4cG9ydCcsXG5dO1xuZnVuY3Rpb24gZ2V0U3RvcmVLZXlOYW1lKGZpZWxkTmFtZSwgYXJncywgZGlyZWN0aXZlcykge1xuICAgIGlmIChkaXJlY3RpdmVzICYmXG4gICAgICAgIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXSAmJlxuICAgICAgICBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2tleSddKSB7XG4gICAgICAgIGlmIChkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddICYmXG4gICAgICAgICAgICBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJLZXlzID0gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXVxuICAgICAgICAgICAgICAgID8gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXVxuICAgICAgICAgICAgICAgIDogW107XG4gICAgICAgICAgICBmaWx0ZXJLZXlzLnNvcnQoKTtcbiAgICAgICAgICAgIHZhciBxdWVyeUFyZ3NfMSA9IGFyZ3M7XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWRBcmdzXzEgPSB7fTtcbiAgICAgICAgICAgIGZpbHRlcktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRBcmdzXzFba2V5XSA9IHF1ZXJ5QXJnc18xW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2tleSddICsgXCIoXCIgKyBKU09OLnN0cmluZ2lmeShmaWx0ZXJlZEFyZ3NfMSkgKyBcIilcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2tleSddO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBjb21wbGV0ZUZpZWxkTmFtZSA9IGZpZWxkTmFtZTtcbiAgICBpZiAoYXJncykge1xuICAgICAgICB2YXIgc3RyaW5naWZpZWRBcmdzID0gc3RyaW5naWZ5KGFyZ3MpO1xuICAgICAgICBjb21wbGV0ZUZpZWxkTmFtZSArPSBcIihcIiArIHN0cmluZ2lmaWVkQXJncyArIFwiKVwiO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aXZlcykge1xuICAgICAgICBPYmplY3Qua2V5cyhkaXJlY3RpdmVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChLTk9XTl9ESVJFQ1RJVkVTLmluZGV4T2Yoa2V5KSAhPT0gLTEpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZXNba2V5XSAmJiBPYmplY3Qua2V5cyhkaXJlY3RpdmVzW2tleV0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlRmllbGROYW1lICs9IFwiQFwiICsga2V5ICsgXCIoXCIgKyBKU09OLnN0cmluZ2lmeShkaXJlY3RpdmVzW2tleV0pICsgXCIpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUZpZWxkTmFtZSArPSBcIkBcIiArIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wbGV0ZUZpZWxkTmFtZTtcbn1cbmZ1bmN0aW9uIGFyZ3VtZW50c09iamVjdEZyb21GaWVsZChmaWVsZCwgdmFyaWFibGVzKSB7XG4gICAgaWYgKGZpZWxkLmFyZ3VtZW50cyAmJiBmaWVsZC5hcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBhcmdPYmpfMSA9IHt9O1xuICAgICAgICBmaWVsZC5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvT2JqZWN0UmVwcmVzZW50YXRpb24oYXJnT2JqXzEsIG5hbWUsIHZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFyZ09ial8xO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHJlc3VsdEtleU5hbWVGcm9tRmllbGQoZmllbGQpIHtcbiAgICByZXR1cm4gZmllbGQuYWxpYXMgPyBmaWVsZC5hbGlhcy52YWx1ZSA6IGZpZWxkLm5hbWUudmFsdWU7XG59XG5mdW5jdGlvbiBpc0ZpZWxkKHNlbGVjdGlvbikge1xuICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0ZpZWxkJztcbn1cbmZ1bmN0aW9uIGlzSW5saW5lRnJhZ21lbnQoc2VsZWN0aW9uKSB7XG4gICAgcmV0dXJuIHNlbGVjdGlvbi5raW5kID09PSAnSW5saW5lRnJhZ21lbnQnO1xufVxuZnVuY3Rpb24gaXNJZFZhbHVlKGlkT2JqZWN0KSB7XG4gICAgcmV0dXJuIGlkT2JqZWN0ICYmXG4gICAgICAgIGlkT2JqZWN0LnR5cGUgPT09ICdpZCcgJiZcbiAgICAgICAgdHlwZW9mIGlkT2JqZWN0LmdlbmVyYXRlZCA9PT0gJ2Jvb2xlYW4nO1xufVxuZnVuY3Rpb24gdG9JZFZhbHVlKGlkQ29uZmlnLCBnZW5lcmF0ZWQpIHtcbiAgICBpZiAoZ2VuZXJhdGVkID09PSB2b2lkIDApIHsgZ2VuZXJhdGVkID0gZmFsc2U7IH1cbiAgICByZXR1cm4gX19hc3NpZ24oeyB0eXBlOiAnaWQnLCBnZW5lcmF0ZWQ6IGdlbmVyYXRlZCB9LCAodHlwZW9mIGlkQ29uZmlnID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHsgaWQ6IGlkQ29uZmlnLCB0eXBlbmFtZTogdW5kZWZpbmVkIH1cbiAgICAgICAgOiBpZENvbmZpZykpO1xufVxuZnVuY3Rpb24gaXNKc29uVmFsdWUoanNvbk9iamVjdCkge1xuICAgIHJldHVybiAoanNvbk9iamVjdCAhPSBudWxsICYmXG4gICAgICAgIHR5cGVvZiBqc29uT2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBqc29uT2JqZWN0LnR5cGUgPT09ICdqc29uJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0VmFsdWVGcm9tVmFyaWFibGUobm9kZSkge1xuICAgIHRocm93IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IG5ldyBJbnZhcmlhbnRFcnJvcigxOCkgOiBuZXcgSW52YXJpYW50RXJyb3IoXCJWYXJpYWJsZSBub2RlcyBhcmUgbm90IHN1cHBvcnRlZCBieSB2YWx1ZUZyb21Ob2RlXCIpO1xufVxuZnVuY3Rpb24gdmFsdWVGcm9tTm9kZShub2RlLCBvblZhcmlhYmxlKSB7XG4gICAgaWYgKG9uVmFyaWFibGUgPT09IHZvaWQgMCkgeyBvblZhcmlhYmxlID0gZGVmYXVsdFZhbHVlRnJvbVZhcmlhYmxlOyB9XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgICAgY2FzZSAnVmFyaWFibGUnOlxuICAgICAgICAgICAgcmV0dXJuIG9uVmFyaWFibGUobm9kZSk7XG4gICAgICAgIGNhc2UgJ051bGxWYWx1ZSc6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgY2FzZSAnSW50VmFsdWUnOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5vZGUudmFsdWUsIDEwKTtcbiAgICAgICAgY2FzZSAnRmxvYXRWYWx1ZSc6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChub2RlLnZhbHVlKTtcbiAgICAgICAgY2FzZSAnTGlzdFZhbHVlJzpcbiAgICAgICAgICAgIHJldHVybiBub2RlLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHZhbHVlRnJvbU5vZGUodiwgb25WYXJpYWJsZSk7IH0pO1xuICAgICAgICBjYXNlICdPYmplY3RWYWx1ZSc6IHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IG5vZGUuZmllbGRzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICB2YWx1ZVtmaWVsZC5uYW1lLnZhbHVlXSA9IHZhbHVlRnJvbU5vZGUoZmllbGQudmFsdWUsIG9uVmFyaWFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbm9kZS52YWx1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERpcmVjdGl2ZUluZm9Gcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcykge1xuICAgIGlmIChmaWVsZC5kaXJlY3RpdmVzICYmIGZpZWxkLmRpcmVjdGl2ZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmVPYmpfMSA9IHt9O1xuICAgICAgICBmaWVsZC5kaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgZGlyZWN0aXZlT2JqXzFbZGlyZWN0aXZlLm5hbWUudmFsdWVdID0gYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKGRpcmVjdGl2ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaXJlY3RpdmVPYmpfMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzaG91bGRJbmNsdWRlKHNlbGVjdGlvbiwgdmFyaWFibGVzKSB7XG4gICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHt9OyB9XG4gICAgcmV0dXJuIGdldEluY2x1c2lvbkRpcmVjdGl2ZXMoc2VsZWN0aW9uLmRpcmVjdGl2ZXMpLmV2ZXJ5KGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gX2EuZGlyZWN0aXZlLCBpZkFyZ3VtZW50ID0gX2EuaWZBcmd1bWVudDtcbiAgICAgICAgdmFyIGV2YWxlZFZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmIChpZkFyZ3VtZW50LnZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScpIHtcbiAgICAgICAgICAgIGV2YWxlZFZhbHVlID0gdmFyaWFibGVzW2lmQXJndW1lbnQudmFsdWUubmFtZS52YWx1ZV07XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZXZhbGVkVmFsdWUgIT09IHZvaWQgMCwgMTMpIDogaW52YXJpYW50KGV2YWxlZFZhbHVlICE9PSB2b2lkIDAsIFwiSW52YWxpZCB2YXJpYWJsZSByZWZlcmVuY2VkIGluIEBcIiArIGRpcmVjdGl2ZS5uYW1lLnZhbHVlICsgXCIgZGlyZWN0aXZlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2YWxlZFZhbHVlID0gaWZBcmd1bWVudC52YWx1ZS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlLm5hbWUudmFsdWUgPT09ICdza2lwJyA/ICFldmFsZWRWYWx1ZSA6IGV2YWxlZFZhbHVlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0RGlyZWN0aXZlTmFtZXMoZG9jKSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgdmlzaXQoZG9jLCB7XG4gICAgICAgIERpcmVjdGl2ZTogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIG5hbWVzLnB1c2gobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmFtZXM7XG59XG5mdW5jdGlvbiBoYXNEaXJlY3RpdmVzKG5hbWVzLCBkb2MpIHtcbiAgICByZXR1cm4gZ2V0RGlyZWN0aXZlTmFtZXMoZG9jKS5zb21lKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBuYW1lcy5pbmRleE9mKG5hbWUpID4gLTE7IH0pO1xufVxuZnVuY3Rpb24gaGFzQ2xpZW50RXhwb3J0cyhkb2N1bWVudCkge1xuICAgIHJldHVybiAoZG9jdW1lbnQgJiZcbiAgICAgICAgaGFzRGlyZWN0aXZlcyhbJ2NsaWVudCddLCBkb2N1bWVudCkgJiZcbiAgICAgICAgaGFzRGlyZWN0aXZlcyhbJ2V4cG9ydCddLCBkb2N1bWVudCkpO1xufVxuZnVuY3Rpb24gaXNJbmNsdXNpb25EaXJlY3RpdmUoX2EpIHtcbiAgICB2YXIgdmFsdWUgPSBfYS5uYW1lLnZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJ3NraXAnIHx8IHZhbHVlID09PSAnaW5jbHVkZSc7XG59XG5mdW5jdGlvbiBnZXRJbmNsdXNpb25EaXJlY3RpdmVzKGRpcmVjdGl2ZXMpIHtcbiAgICByZXR1cm4gZGlyZWN0aXZlcyA/IGRpcmVjdGl2ZXMuZmlsdGVyKGlzSW5jbHVzaW9uRGlyZWN0aXZlKS5tYXAoZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICB2YXIgZGlyZWN0aXZlQXJndW1lbnRzID0gZGlyZWN0aXZlLmFyZ3VtZW50cztcbiAgICAgICAgdmFyIGRpcmVjdGl2ZU5hbWUgPSBkaXJlY3RpdmUubmFtZS52YWx1ZTtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGRpcmVjdGl2ZUFyZ3VtZW50cyAmJiBkaXJlY3RpdmVBcmd1bWVudHMubGVuZ3RoID09PSAxLCAxNCkgOiBpbnZhcmlhbnQoZGlyZWN0aXZlQXJndW1lbnRzICYmIGRpcmVjdGl2ZUFyZ3VtZW50cy5sZW5ndGggPT09IDEsIFwiSW5jb3JyZWN0IG51bWJlciBvZiBhcmd1bWVudHMgZm9yIHRoZSBAXCIgKyBkaXJlY3RpdmVOYW1lICsgXCIgZGlyZWN0aXZlLlwiKTtcbiAgICAgICAgdmFyIGlmQXJndW1lbnQgPSBkaXJlY3RpdmVBcmd1bWVudHNbMF07XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChpZkFyZ3VtZW50Lm5hbWUgJiYgaWZBcmd1bWVudC5uYW1lLnZhbHVlID09PSAnaWYnLCAxNSkgOiBpbnZhcmlhbnQoaWZBcmd1bWVudC5uYW1lICYmIGlmQXJndW1lbnQubmFtZS52YWx1ZSA9PT0gJ2lmJywgXCJJbnZhbGlkIGFyZ3VtZW50IGZvciB0aGUgQFwiICsgZGlyZWN0aXZlTmFtZSArIFwiIGRpcmVjdGl2ZS5cIik7XG4gICAgICAgIHZhciBpZlZhbHVlID0gaWZBcmd1bWVudC52YWx1ZTtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGlmVmFsdWUgJiZcbiAgICAgICAgICAgIChpZlZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScgfHwgaWZWYWx1ZS5raW5kID09PSAnQm9vbGVhblZhbHVlJyksIDE2KSA6IGludmFyaWFudChpZlZhbHVlICYmXG4gICAgICAgICAgICAoaWZWYWx1ZS5raW5kID09PSAnVmFyaWFibGUnIHx8IGlmVmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZScpLCBcIkFyZ3VtZW50IGZvciB0aGUgQFwiICsgZGlyZWN0aXZlTmFtZSArIFwiIGRpcmVjdGl2ZSBtdXN0IGJlIGEgdmFyaWFibGUgb3IgYSBib29sZWFuIHZhbHVlLlwiKTtcbiAgICAgICAgcmV0dXJuIHsgZGlyZWN0aXZlOiBkaXJlY3RpdmUsIGlmQXJndW1lbnQ6IGlmQXJndW1lbnQgfTtcbiAgICB9KSA6IFtdO1xufVxuXG5mdW5jdGlvbiBnZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQoZG9jdW1lbnQsIGZyYWdtZW50TmFtZSkge1xuICAgIHZhciBhY3R1YWxGcmFnbWVudE5hbWUgPSBmcmFnbWVudE5hbWU7XG4gICAgdmFyIGZyYWdtZW50cyA9IFtdO1xuICAgIGRvY3VtZW50LmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgSW52YXJpYW50RXJyb3IoMTEpIDogbmV3IEludmFyaWFudEVycm9yKFwiRm91bmQgYSBcIiArIGRlZmluaXRpb24ub3BlcmF0aW9uICsgXCIgb3BlcmF0aW9uXCIgKyAoZGVmaW5pdGlvbi5uYW1lID8gXCIgbmFtZWQgJ1wiICsgZGVmaW5pdGlvbi5uYW1lLnZhbHVlICsgXCInXCIgOiAnJykgKyBcIi4gXCIgK1xuICAgICAgICAgICAgICAgICdObyBvcGVyYXRpb25zIGFyZSBhbGxvd2VkIHdoZW4gdXNpbmcgYSBmcmFnbWVudCBhcyBhIHF1ZXJ5LiBPbmx5IGZyYWdtZW50cyBhcmUgYWxsb3dlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJykge1xuICAgICAgICAgICAgZnJhZ21lbnRzLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGFjdHVhbEZyYWdtZW50TmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZyYWdtZW50cy5sZW5ndGggPT09IDEsIDEyKSA6IGludmFyaWFudChmcmFnbWVudHMubGVuZ3RoID09PSAxLCBcIkZvdW5kIFwiICsgZnJhZ21lbnRzLmxlbmd0aCArIFwiIGZyYWdtZW50cy4gYGZyYWdtZW50TmFtZWAgbXVzdCBiZSBwcm92aWRlZCB3aGVuIHRoZXJlIGlzIG5vdCBleGFjdGx5IDEgZnJhZ21lbnQuXCIpO1xuICAgICAgICBhY3R1YWxGcmFnbWVudE5hbWUgPSBmcmFnbWVudHNbMF0ubmFtZS52YWx1ZTtcbiAgICB9XG4gICAgdmFyIHF1ZXJ5ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGRvY3VtZW50KSwgeyBkZWZpbml0aW9uczogX19zcHJlYWRBcnJheXMoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdPcGVyYXRpb25EZWZpbml0aW9uJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246ICdxdWVyeScsXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZyYWdtZW50U3ByZWFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFjdHVhbEZyYWdtZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICBdLCBkb2N1bWVudC5kZWZpbml0aW9ucykgfSk7XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBzb3VyY2VzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcgfHwgc291cmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGdldE11dGF0aW9uRGVmaW5pdGlvbihkb2MpIHtcbiAgICBjaGVja0RvY3VtZW50KGRvYyk7XG4gICAgdmFyIG11dGF0aW9uRGVmID0gZG9jLmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiZcbiAgICAgICAgICAgIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnbXV0YXRpb24nO1xuICAgIH0pWzBdO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChtdXRhdGlvbkRlZiwgMSkgOiBpbnZhcmlhbnQobXV0YXRpb25EZWYsICdNdXN0IGNvbnRhaW4gYSBtdXRhdGlvbiBkZWZpbml0aW9uLicpO1xuICAgIHJldHVybiBtdXRhdGlvbkRlZjtcbn1cbmZ1bmN0aW9uIGNoZWNrRG9jdW1lbnQoZG9jKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGRvYyAmJiBkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgMikgOiBpbnZhcmlhbnQoZG9jICYmIGRvYy5raW5kID09PSAnRG9jdW1lbnQnLCBcIkV4cGVjdGluZyBhIHBhcnNlZCBHcmFwaFFMIGRvY3VtZW50LiBQZXJoYXBzIHlvdSBuZWVkIHRvIHdyYXAgdGhlIHF1ZXJ5IHN0cmluZyBpbiBhIFxcXCJncWxcXFwiIHRhZz8gaHR0cDovL2RvY3MuYXBvbGxvc3RhY2suY29tL2Fwb2xsby1jbGllbnQvY29yZS5odG1sI2dxbFwiKTtcbiAgICB2YXIgb3BlcmF0aW9ucyA9IGRvYy5kZWZpbml0aW9uc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nOyB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgIT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gbmV3IEludmFyaWFudEVycm9yKDMpIDogbmV3IEludmFyaWFudEVycm9yKFwiU2NoZW1hIHR5cGUgZGVmaW5pdGlvbnMgbm90IGFsbG93ZWQgaW4gcXVlcmllcy4gRm91bmQ6IFxcXCJcIiArIGRlZmluaXRpb24ua2luZCArIFwiXFxcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9KTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQob3BlcmF0aW9ucy5sZW5ndGggPD0gMSwgNCkgOiBpbnZhcmlhbnQob3BlcmF0aW9ucy5sZW5ndGggPD0gMSwgXCJBbWJpZ3VvdXMgR3JhcGhRTCBkb2N1bWVudDogY29udGFpbnMgXCIgKyBvcGVyYXRpb25zLmxlbmd0aCArIFwiIG9wZXJhdGlvbnNcIik7XG4gICAgcmV0dXJuIGRvYztcbn1cbmZ1bmN0aW9uIGdldE9wZXJhdGlvbkRlZmluaXRpb24oZG9jKSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2MpO1xuICAgIHJldHVybiBkb2MuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7IHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJzsgfSlbMF07XG59XG5mdW5jdGlvbiBnZXRPcGVyYXRpb25EZWZpbml0aW9uT3JEaWUoZG9jdW1lbnQpIHtcbiAgICB2YXIgZGVmID0gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihkb2N1bWVudCk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGRlZiwgNSkgOiBpbnZhcmlhbnQoZGVmLCBcIkdyYXBoUUwgZG9jdW1lbnQgaXMgbWlzc2luZyBhbiBvcGVyYXRpb25cIik7XG4gICAgcmV0dXJuIGRlZjtcbn1cbmZ1bmN0aW9uIGdldE9wZXJhdGlvbk5hbWUoZG9jKSB7XG4gICAgcmV0dXJuIChkb2MuZGVmaW5pdGlvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgZGVmaW5pdGlvbi5uYW1lO1xuICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgubmFtZS52YWx1ZTsgfSlbMF0gfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBnZXRGcmFnbWVudERlZmluaXRpb25zKGRvYykge1xuICAgIHJldHVybiBkb2MuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7IHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nOyB9KTtcbn1cbmZ1bmN0aW9uIGdldFF1ZXJ5RGVmaW5pdGlvbihkb2MpIHtcbiAgICB2YXIgcXVlcnlEZWYgPSBnZXRPcGVyYXRpb25EZWZpbml0aW9uKGRvYyk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KHF1ZXJ5RGVmICYmIHF1ZXJ5RGVmLm9wZXJhdGlvbiA9PT0gJ3F1ZXJ5JywgNikgOiBpbnZhcmlhbnQocXVlcnlEZWYgJiYgcXVlcnlEZWYub3BlcmF0aW9uID09PSAncXVlcnknLCAnTXVzdCBjb250YWluIGEgcXVlcnkgZGVmaW5pdGlvbi4nKTtcbiAgICByZXR1cm4gcXVlcnlEZWY7XG59XG5mdW5jdGlvbiBnZXRGcmFnbWVudERlZmluaXRpb24oZG9jKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGRvYy5raW5kID09PSAnRG9jdW1lbnQnLCA3KSA6IGludmFyaWFudChkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgXCJFeHBlY3RpbmcgYSBwYXJzZWQgR3JhcGhRTCBkb2N1bWVudC4gUGVyaGFwcyB5b3UgbmVlZCB0byB3cmFwIHRoZSBxdWVyeSBzdHJpbmcgaW4gYSBcXFwiZ3FsXFxcIiB0YWc/IGh0dHA6Ly9kb2NzLmFwb2xsb3N0YWNrLmNvbS9hcG9sbG8tY2xpZW50L2NvcmUuaHRtbCNncWxcIik7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGRvYy5kZWZpbml0aW9ucy5sZW5ndGggPD0gMSwgOCkgOiBpbnZhcmlhbnQoZG9jLmRlZmluaXRpb25zLmxlbmd0aCA8PSAxLCAnRnJhZ21lbnQgbXVzdCBoYXZlIGV4YWN0bHkgb25lIGRlZmluaXRpb24uJyk7XG4gICAgdmFyIGZyYWdtZW50RGVmID0gZG9jLmRlZmluaXRpb25zWzBdO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmcmFnbWVudERlZi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJywgOSkgOiBpbnZhcmlhbnQoZnJhZ21lbnREZWYua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicsICdNdXN0IGJlIGEgZnJhZ21lbnQgZGVmaW5pdGlvbi4nKTtcbiAgICByZXR1cm4gZnJhZ21lbnREZWY7XG59XG5mdW5jdGlvbiBnZXRNYWluRGVmaW5pdGlvbihxdWVyeURvYykge1xuICAgIGNoZWNrRG9jdW1lbnQocXVlcnlEb2MpO1xuICAgIHZhciBmcmFnbWVudERlZmluaXRpb247XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHF1ZXJ5RG9jLmRlZmluaXRpb25zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgZGVmaW5pdGlvbiA9IF9hW19pXTtcbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICB2YXIgb3BlcmF0aW9uID0gZGVmaW5pdGlvbi5vcGVyYXRpb247XG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAncXVlcnknIHx8XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uID09PSAnbXV0YXRpb24nIHx8XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nICYmICFmcmFnbWVudERlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGZyYWdtZW50RGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWdtZW50RGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gZnJhZ21lbnREZWZpbml0aW9uO1xuICAgIH1cbiAgICB0aHJvdyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgSW52YXJpYW50RXJyb3IoMTApIDogbmV3IEludmFyaWFudEVycm9yKCdFeHBlY3RlZCBhIHBhcnNlZCBHcmFwaFFMIHF1ZXJ5IHdpdGggYSBxdWVyeSwgbXV0YXRpb24sIHN1YnNjcmlwdGlvbiwgb3IgYSBmcmFnbWVudC4nKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50TWFwKGZyYWdtZW50cykge1xuICAgIGlmIChmcmFnbWVudHMgPT09IHZvaWQgMCkgeyBmcmFnbWVudHMgPSBbXTsgfVxuICAgIHZhciBzeW1UYWJsZSA9IHt9O1xuICAgIGZyYWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgICAgICBzeW1UYWJsZVtmcmFnbWVudC5uYW1lLnZhbHVlXSA9IGZyYWdtZW50O1xuICAgIH0pO1xuICAgIHJldHVybiBzeW1UYWJsZTtcbn1cbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZXMoZGVmaW5pdGlvbikge1xuICAgIGlmIChkZWZpbml0aW9uICYmXG4gICAgICAgIGRlZmluaXRpb24udmFyaWFibGVEZWZpbml0aW9ucyAmJlxuICAgICAgICBkZWZpbml0aW9uLnZhcmlhYmxlRGVmaW5pdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWVzID0gZGVmaW5pdGlvbi52YXJpYWJsZURlZmluaXRpb25zXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF9hLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHZhcmlhYmxlID0gX2EudmFyaWFibGUsIGRlZmF1bHRWYWx1ZSA9IF9hLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWVPYmogPSB7fTtcbiAgICAgICAgICAgIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihkZWZhdWx0VmFsdWVPYmosIHZhcmlhYmxlLm5hbWUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlT2JqO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFzc2lnbi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXlzKFt7fV0sIGRlZmF1bHRWYWx1ZXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xufVxuZnVuY3Rpb24gdmFyaWFibGVzSW5PcGVyYXRpb24ob3BlcmF0aW9uKSB7XG4gICAgdmFyIG5hbWVzID0gbmV3IFNldCgpO1xuICAgIGlmIChvcGVyYXRpb24udmFyaWFibGVEZWZpbml0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gb3BlcmF0aW9uLnZhcmlhYmxlRGVmaW5pdGlvbnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGVmaW5pdGlvbiA9IF9hW19pXTtcbiAgICAgICAgICAgIG5hbWVzLmFkZChkZWZpbml0aW9uLnZhcmlhYmxlLm5hbWUudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuYW1lcztcbn1cblxuZnVuY3Rpb24gZmlsdGVySW5QbGFjZShhcnJheSwgdGVzdCwgY29udGV4dCkge1xuICAgIHZhciB0YXJnZXQgPSAwO1xuICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGkpIHtcbiAgICAgICAgaWYgKHRlc3QuY2FsbCh0aGlzLCBlbGVtLCBpLCBhcnJheSkpIHtcbiAgICAgICAgICAgIGFycmF5W3RhcmdldCsrXSA9IGVsZW07XG4gICAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcbiAgICBhcnJheS5sZW5ndGggPSB0YXJnZXQ7XG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG52YXIgVFlQRU5BTUVfRklFTEQgPSB7XG4gICAga2luZDogJ0ZpZWxkJyxcbiAgICBuYW1lOiB7XG4gICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdfX3R5cGVuYW1lJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzRW1wdHkob3AsIGZyYWdtZW50cykge1xuICAgIHJldHVybiBvcC5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5ldmVyeShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0ZyYWdtZW50U3ByZWFkJyAmJlxuICAgICAgICAgICAgaXNFbXB0eShmcmFnbWVudHNbc2VsZWN0aW9uLm5hbWUudmFsdWVdLCBmcmFnbWVudHMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbnVsbElmRG9jSXNFbXB0eShkb2MpIHtcbiAgICByZXR1cm4gaXNFbXB0eShnZXRPcGVyYXRpb25EZWZpbml0aW9uKGRvYykgfHwgZ2V0RnJhZ21lbnREZWZpbml0aW9uKGRvYyksIGNyZWF0ZUZyYWdtZW50TWFwKGdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jKSkpXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IGRvYztcbn1cbmZ1bmN0aW9uIGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiBkaXJlY3RpdmVNYXRjaGVyKGRpcmVjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoZGlyLm5hbWUgJiYgZGlyLm5hbWUgPT09IGRpcmVjdGl2ZS5uYW1lLnZhbHVlKSB8fFxuICAgICAgICAgICAgICAgIChkaXIudGVzdCAmJiBkaXIudGVzdChkaXJlY3RpdmUpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQoZGlyZWN0aXZlcywgZG9jKSB7XG4gICAgdmFyIHZhcmlhYmxlc0luVXNlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgdmFyaWFibGVzVG9SZW1vdmUgPSBbXTtcbiAgICB2YXIgZnJhZ21lbnRTcHJlYWRzSW5Vc2UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBmcmFnbWVudFNwcmVhZHNUb1JlbW92ZSA9IFtdO1xuICAgIHZhciBtb2RpZmllZERvYyA9IG51bGxJZkRvY0lzRW1wdHkodmlzaXQoZG9jLCB7XG4gICAgICAgIFZhcmlhYmxlOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUsIF9rZXksIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQua2luZCAhPT0gJ1ZhcmlhYmxlRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzSW5Vc2Vbbm9kZS5uYW1lLnZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRmllbGQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3RpdmVzICYmIG5vZGUuZGlyZWN0aXZlcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2hvdWxkUmVtb3ZlRmllbGQgPSBkaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24gKGRpcmVjdGl2ZSkgeyByZXR1cm4gZGlyZWN0aXZlLnJlbW92ZTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRSZW1vdmVGaWVsZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kaXJlY3RpdmVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRpcmVjdGl2ZXMuc29tZShnZXREaXJlY3RpdmVNYXRjaGVyKGRpcmVjdGl2ZXMpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcmd1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmcudmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzVG9SZW1vdmUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXJnLnZhbHVlLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QWxsRnJhZ21lbnRTcHJlYWRzRnJvbVNlbGVjdGlvblNldChub2RlLnNlbGVjdGlvblNldCkuZm9yRWFjaChmdW5jdGlvbiAoZnJhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFNwcmVhZHNUb1JlbW92ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZyYWcubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEZyYWdtZW50U3ByZWFkOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNwcmVhZHNJblVzZVtub2RlLm5hbWUudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIERpcmVjdGl2ZToge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KSk7XG4gICAgaWYgKG1vZGlmaWVkRG9jICYmXG4gICAgICAgIGZpbHRlckluUGxhY2UodmFyaWFibGVzVG9SZW1vdmUsIGZ1bmN0aW9uICh2KSB7IHJldHVybiAhdmFyaWFibGVzSW5Vc2Vbdi5uYW1lXTsgfSkubGVuZ3RoKSB7XG4gICAgICAgIG1vZGlmaWVkRG9jID0gcmVtb3ZlQXJndW1lbnRzRnJvbURvY3VtZW50KHZhcmlhYmxlc1RvUmVtb3ZlLCBtb2RpZmllZERvYyk7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZERvYyAmJlxuICAgICAgICBmaWx0ZXJJblBsYWNlKGZyYWdtZW50U3ByZWFkc1RvUmVtb3ZlLCBmdW5jdGlvbiAoZnMpIHsgcmV0dXJuICFmcmFnbWVudFNwcmVhZHNJblVzZVtmcy5uYW1lXTsgfSlcbiAgICAgICAgICAgIC5sZW5ndGgpIHtcbiAgICAgICAgbW9kaWZpZWREb2MgPSByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudChmcmFnbWVudFNwcmVhZHNUb1JlbW92ZSwgbW9kaWZpZWREb2MpO1xuICAgIH1cbiAgICByZXR1cm4gbW9kaWZpZWREb2M7XG59XG5mdW5jdGlvbiBhZGRUeXBlbmFtZVRvRG9jdW1lbnQoZG9jKSB7XG4gICAgcmV0dXJuIHZpc2l0KGNoZWNrRG9jdW1lbnQoZG9jKSwge1xuICAgICAgICBTZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSwgX2tleSwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAmJlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbnMgPSBub2RlLnNlbGVjdGlvbnM7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHNraXAgPSBzZWxlY3Rpb25zLnNvbWUoZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGlzRmllbGQoc2VsZWN0aW9uKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbi5uYW1lLnZhbHVlID09PSAnX190eXBlbmFtZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24ubmFtZS52YWx1ZS5sYXN0SW5kZXhPZignX18nLCAwKSA9PT0gMCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChza2lwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIGlmIChpc0ZpZWxkKGZpZWxkKSAmJlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXJlY3RpdmVzICYmXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lLnZhbHVlID09PSAnZXhwb3J0JzsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG5vZGUpLCB7IHNlbGVjdGlvbnM6IF9fc3ByZWFkQXJyYXlzKHNlbGVjdGlvbnMsIFtUWVBFTkFNRV9GSUVMRF0pIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbnZhciBjb25uZWN0aW9uUmVtb3ZlQ29uZmlnID0ge1xuICAgIHRlc3Q6IGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgdmFyIHdpbGxSZW1vdmUgPSBkaXJlY3RpdmUubmFtZS52YWx1ZSA9PT0gJ2Nvbm5lY3Rpb24nO1xuICAgICAgICBpZiAod2lsbFJlbW92ZSkge1xuICAgICAgICAgICAgaWYgKCFkaXJlY3RpdmUuYXJndW1lbnRzIHx8XG4gICAgICAgICAgICAgICAgIWRpcmVjdGl2ZS5hcmd1bWVudHMuc29tZShmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBhcmcubmFtZS52YWx1ZSA9PT0gJ2tleSc7IH0pKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiIHx8IGludmFyaWFudC53YXJuKCdSZW1vdmluZyBhbiBAY29ubmVjdGlvbiBkaXJlY3RpdmUgZXZlbiB0aG91Z2ggaXQgZG9lcyBub3QgaGF2ZSBhIGtleS4gJyArXG4gICAgICAgICAgICAgICAgICAgICdZb3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBrZXkgcGFyYW1ldGVyIHRvIHNwZWNpZnkgYSBzdG9yZSBrZXkuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpbGxSZW1vdmU7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50KGRvYykge1xuICAgIHJldHVybiByZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50KFtjb25uZWN0aW9uUmVtb3ZlQ29uZmlnXSwgY2hlY2tEb2N1bWVudChkb2MpKTtcbn1cbmZ1bmN0aW9uIGhhc0RpcmVjdGl2ZXNJblNlbGVjdGlvblNldChkaXJlY3RpdmVzLCBzZWxlY3Rpb25TZXQsIG5lc3RlZENoZWNrKSB7XG4gICAgaWYgKG5lc3RlZENoZWNrID09PSB2b2lkIDApIHsgbmVzdGVkQ2hlY2sgPSB0cnVlOyB9XG4gICAgcmV0dXJuIChzZWxlY3Rpb25TZXQgJiZcbiAgICAgICAgc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMgJiZcbiAgICAgICAgc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuc29tZShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gaGFzRGlyZWN0aXZlc0luU2VsZWN0aW9uKGRpcmVjdGl2ZXMsIHNlbGVjdGlvbiwgbmVzdGVkQ2hlY2spO1xuICAgICAgICB9KSk7XG59XG5mdW5jdGlvbiBoYXNEaXJlY3RpdmVzSW5TZWxlY3Rpb24oZGlyZWN0aXZlcywgc2VsZWN0aW9uLCBuZXN0ZWRDaGVjaykge1xuICAgIGlmIChuZXN0ZWRDaGVjayA9PT0gdm9pZCAwKSB7IG5lc3RlZENoZWNrID0gdHJ1ZTsgfVxuICAgIGlmICghaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXNlbGVjdGlvbi5kaXJlY3RpdmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChzZWxlY3Rpb24uZGlyZWN0aXZlcy5zb21lKGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykpIHx8XG4gICAgICAgIChuZXN0ZWRDaGVjayAmJlxuICAgICAgICAgICAgaGFzRGlyZWN0aXZlc0luU2VsZWN0aW9uU2V0KGRpcmVjdGl2ZXMsIHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQsIG5lc3RlZENoZWNrKSkpO1xufVxuZnVuY3Rpb24gZ2V0RGlyZWN0aXZlc0Zyb21Eb2N1bWVudChkaXJlY3RpdmVzLCBkb2MpIHtcbiAgICBjaGVja0RvY3VtZW50KGRvYyk7XG4gICAgdmFyIHBhcmVudFBhdGg7XG4gICAgcmV0dXJuIG51bGxJZkRvY0lzRW1wdHkodmlzaXQoZG9jLCB7XG4gICAgICAgIFNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlLCBfa2V5LCBfcGFyZW50LCBwYXRoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQYXRoID0gcGF0aC5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRQYXRoIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoID09PSBwYXJlbnRQYXRoIHx8XG4gICAgICAgICAgICAgICAgICAgICFjdXJyZW50UGF0aC5zdGFydHNXaXRoKHBhcmVudFBhdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb25zV2l0aERpcmVjdGl2ZXMgPSBub2RlLnNlbGVjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHsgcmV0dXJuIGhhc0RpcmVjdGl2ZXNJblNlbGVjdGlvbihkaXJlY3RpdmVzLCBzZWxlY3Rpb24pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNEaXJlY3RpdmVzSW5TZWxlY3Rpb25TZXQoZGlyZWN0aXZlcywgbm9kZSwgZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50UGF0aCA9IGN1cnJlbnRQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBub2RlKSwgeyBzZWxlY3Rpb25zOiBzZWxlY3Rpb25zV2l0aERpcmVjdGl2ZXMgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSkpO1xufVxuZnVuY3Rpb24gZ2V0QXJndW1lbnRNYXRjaGVyKGNvbmZpZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBhcmd1bWVudE1hdGNoZXIoYXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZy5zb21lKGZ1bmN0aW9uIChhQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnQudmFsdWUgJiZcbiAgICAgICAgICAgICAgICBhcmd1bWVudC52YWx1ZS5raW5kID09PSAnVmFyaWFibGUnICYmXG4gICAgICAgICAgICAgICAgYXJndW1lbnQudmFsdWUubmFtZSAmJlxuICAgICAgICAgICAgICAgIChhQ29uZmlnLm5hbWUgPT09IGFyZ3VtZW50LnZhbHVlLm5hbWUudmFsdWUgfHxcbiAgICAgICAgICAgICAgICAgICAgKGFDb25maWcudGVzdCAmJiBhQ29uZmlnLnRlc3QoYXJndW1lbnQpKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQoY29uZmlnLCBkb2MpIHtcbiAgICB2YXIgYXJnTWF0Y2hlciA9IGdldEFyZ3VtZW50TWF0Y2hlcihjb25maWcpO1xuICAgIHJldHVybiBudWxsSWZEb2NJc0VtcHR5KHZpc2l0KGRvYywge1xuICAgICAgICBPcGVyYXRpb25EZWZpbml0aW9uOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG5vZGUpLCB7IHZhcmlhYmxlRGVmaW5pdGlvbnM6IG5vZGUudmFyaWFibGVEZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHZhckRlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFjb25maWcuc29tZShmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBhcmcubmFtZSA9PT0gdmFyRGVmLnZhcmlhYmxlLm5hbWUudmFsdWU7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9KSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEZpZWxkOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2hvdWxkUmVtb3ZlRmllbGQgPSBjb25maWcuc29tZShmdW5jdGlvbiAoYXJnQ29uZmlnKSB7IHJldHVybiBhcmdDb25maWcucmVtb3ZlOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlRmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ01hdGNoQ291bnRfMSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ01hdGNoZXIoYXJnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ01hdGNoQ291bnRfMSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ01hdGNoQ291bnRfMSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBBcmd1bWVudDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ01hdGNoZXIobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KSk7XG59XG5mdW5jdGlvbiByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudChjb25maWcsIGRvYykge1xuICAgIGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zb21lKGZ1bmN0aW9uIChkZWYpIHsgcmV0dXJuIGRlZi5uYW1lID09PSBub2RlLm5hbWUudmFsdWU7IH0pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbElmRG9jSXNFbXB0eSh2aXNpdChkb2MsIHtcbiAgICAgICAgRnJhZ21lbnRTcHJlYWQ6IHsgZW50ZXI6IGVudGVyIH0sXG4gICAgICAgIEZyYWdtZW50RGVmaW5pdGlvbjogeyBlbnRlcjogZW50ZXIgfSxcbiAgICB9KSk7XG59XG5mdW5jdGlvbiBnZXRBbGxGcmFnbWVudFNwcmVhZHNGcm9tU2VsZWN0aW9uU2V0KHNlbGVjdGlvblNldCkge1xuICAgIHZhciBhbGxGcmFnbWVudHMgPSBbXTtcbiAgICBzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKChpc0ZpZWxkKHNlbGVjdGlvbikgfHwgaXNJbmxpbmVGcmFnbWVudChzZWxlY3Rpb24pKSAmJlxuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgZ2V0QWxsRnJhZ21lbnRTcHJlYWRzRnJvbVNlbGVjdGlvblNldChzZWxlY3Rpb24uc2VsZWN0aW9uU2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnKSB7IHJldHVybiBhbGxGcmFnbWVudHMucHVzaChmcmFnKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0aW9uLmtpbmQgPT09ICdGcmFnbWVudFNwcmVhZCcpIHtcbiAgICAgICAgICAgIGFsbEZyYWdtZW50cy5wdXNoKHNlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWxsRnJhZ21lbnRzO1xufVxuZnVuY3Rpb24gYnVpbGRRdWVyeUZyb21TZWxlY3Rpb25TZXQoZG9jdW1lbnQpIHtcbiAgICB2YXIgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKGRvY3VtZW50KTtcbiAgICB2YXIgZGVmaW5pdGlvbk9wZXJhdGlvbiA9IGRlZmluaXRpb24ub3BlcmF0aW9uO1xuICAgIGlmIChkZWZpbml0aW9uT3BlcmF0aW9uID09PSAncXVlcnknKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9XG4gICAgdmFyIG1vZGlmaWVkRG9jID0gdmlzaXQoZG9jdW1lbnQsIHtcbiAgICAgICAgT3BlcmF0aW9uRGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBub2RlKSwgeyBvcGVyYXRpb246ICdxdWVyeScgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBtb2RpZmllZERvYztcbn1cbmZ1bmN0aW9uIHJlbW92ZUNsaWVudFNldHNGcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjaGVja0RvY3VtZW50KGRvY3VtZW50KTtcbiAgICB2YXIgbW9kaWZpZWREb2MgPSByZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50KFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGVzdDogZnVuY3Rpb24gKGRpcmVjdGl2ZSkgeyByZXR1cm4gZGlyZWN0aXZlLm5hbWUudmFsdWUgPT09ICdjbGllbnQnOyB9LFxuICAgICAgICAgICAgcmVtb3ZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sIGRvY3VtZW50KTtcbiAgICBpZiAobW9kaWZpZWREb2MpIHtcbiAgICAgICAgbW9kaWZpZWREb2MgPSB2aXNpdChtb2RpZmllZERvYywge1xuICAgICAgICAgICAgRnJhZ21lbnREZWZpbml0aW9uOiB7XG4gICAgICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVHlwZW5hbWVPbmx5ID0gbm9kZS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5ldmVyeShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzRmllbGQoc2VsZWN0aW9uKSAmJiBzZWxlY3Rpb24ubmFtZS52YWx1ZSA9PT0gJ19fdHlwZW5hbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNUeXBlbmFtZU9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGlmaWVkRG9jO1xufVxuXG52YXIgY2FuVXNlV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmICEodHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiZcbiAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyk7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgICByZXR1cm4gY2xvbmVEZWVwSGVscGVyKHZhbHVlLCBuZXcgTWFwKCkpO1xufVxuZnVuY3Rpb24gY2xvbmVEZWVwSGVscGVyKHZhbCwgc2Vlbikge1xuICAgIHN3aXRjaCAodG9TdHJpbmcuY2FsbCh2YWwpKSB7XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IEFycmF5XVwiOiB7XG4gICAgICAgICAgICBpZiAoc2Vlbi5oYXModmFsKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5nZXQodmFsKTtcbiAgICAgICAgICAgIHZhciBjb3B5XzEgPSB2YWwuc2xpY2UoMCk7XG4gICAgICAgICAgICBzZWVuLnNldCh2YWwsIGNvcHlfMSk7XG4gICAgICAgICAgICBjb3B5XzEuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb3B5XzFbaV0gPSBjbG9uZURlZXBIZWxwZXIoY2hpbGQsIHNlZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29weV8xO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IE9iamVjdF1cIjoge1xuICAgICAgICAgICAgaWYgKHNlZW4uaGFzKHZhbCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlZW4uZ2V0KHZhbCk7XG4gICAgICAgICAgICB2YXIgY29weV8yID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKSk7XG4gICAgICAgICAgICBzZWVuLnNldCh2YWwsIGNvcHlfMik7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2YWwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGNvcHlfMltrZXldID0gY2xvbmVEZWVwSGVscGVyKHZhbFtrZXldLCBzZWVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHlfMjtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEVudigpIHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICB9XG4gICAgcmV0dXJuICdkZXZlbG9wbWVudCc7XG59XG5mdW5jdGlvbiBpc0VudihlbnYpIHtcbiAgICByZXR1cm4gZ2V0RW52KCkgPT09IGVudjtcbn1cbmZ1bmN0aW9uIGlzUHJvZHVjdGlvbigpIHtcbiAgICByZXR1cm4gaXNFbnYoJ3Byb2R1Y3Rpb24nKSA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzRGV2ZWxvcG1lbnQoKSB7XG4gICAgcmV0dXJuIGlzRW52KCdkZXZlbG9wbWVudCcpID09PSB0cnVlO1xufVxuZnVuY3Rpb24gaXNUZXN0KCkge1xuICAgIHJldHVybiBpc0VudigndGVzdCcpID09PSB0cnVlO1xufVxuXG5mdW5jdGlvbiB0cnlGdW5jdGlvbk9yTG9nRXJyb3IoZikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBkZWVwRnJlZXplKG8pIHtcbiAgICBPYmplY3QuZnJlZXplKG8pO1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG8pLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgaWYgKG9bcHJvcF0gIT09IG51bGwgJiZcbiAgICAgICAgICAgICh0eXBlb2Ygb1twcm9wXSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9bcHJvcF0gPT09ICdmdW5jdGlvbicpICYmXG4gICAgICAgICAgICAhT2JqZWN0LmlzRnJvemVuKG9bcHJvcF0pKSB7XG4gICAgICAgICAgICBkZWVwRnJlZXplKG9bcHJvcF0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG87XG59XG5mdW5jdGlvbiBtYXliZURlZXBGcmVlemUob2JqKSB7XG4gICAgaWYgKGlzRGV2ZWxvcG1lbnQoKSB8fCBpc1Rlc3QoKSkge1xuICAgICAgICB2YXIgc3ltYm9sSXNQb2x5ZmlsbGVkID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCcnKSA9PT0gJ3N0cmluZyc7XG4gICAgICAgIGlmICghc3ltYm9sSXNQb2x5ZmlsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVlcEZyZWV6ZShvYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBtZXJnZURlZXAoKSB7XG4gICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBzb3VyY2VzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBtZXJnZURlZXBBcnJheShzb3VyY2VzKTtcbn1cbmZ1bmN0aW9uIG1lcmdlRGVlcEFycmF5KHNvdXJjZXMpIHtcbiAgICB2YXIgdGFyZ2V0ID0gc291cmNlc1swXSB8fCB7fTtcbiAgICB2YXIgY291bnQgPSBzb3VyY2VzLmxlbmd0aDtcbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICAgIHZhciBwYXN0Q29waWVzID0gW107XG4gICAgICAgIHRhcmdldCA9IHNoYWxsb3dDb3B5Rm9yTWVyZ2UodGFyZ2V0LCBwYXN0Q29waWVzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtZXJnZUhlbHBlcih0YXJnZXQsIHNvdXJjZXNbaV0sIHBhc3RDb3BpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuZnVuY3Rpb24gbWVyZ2VIZWxwZXIodGFyZ2V0LCBzb3VyY2UsIHBhc3RDb3BpZXMpIHtcbiAgICBpZiAoaXNPYmplY3Qoc291cmNlKSAmJiBpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIGlmIChPYmplY3QuaXNFeHRlbnNpYmxlICYmICFPYmplY3QuaXNFeHRlbnNpYmxlKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHNoYWxsb3dDb3B5Rm9yTWVyZ2UodGFyZ2V0LCBwYXN0Q29waWVzKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZUtleSkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZVZhbHVlID0gc291cmNlW3NvdXJjZUtleV07XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHNvdXJjZUtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VmFsdWUgPSB0YXJnZXRbc291cmNlS2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlVmFsdWUgIT09IHRhcmdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtzb3VyY2VLZXldID0gbWVyZ2VIZWxwZXIoc2hhbGxvd0NvcHlGb3JNZXJnZSh0YXJnZXRWYWx1ZSwgcGFzdENvcGllcyksIHNvdXJjZVZhbHVlLCBwYXN0Q29waWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlS2V5XSA9IHNvdXJjZVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbn1cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5Rm9yTWVyZ2UodmFsdWUsIHBhc3RDb3BpZXMpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBwYXN0Q29waWVzLmluZGV4T2YodmFsdWUpIDwgMCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IF9fYXNzaWduKHsgX19wcm90b19fOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpIH0sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBwYXN0Q29waWVzLnB1c2godmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBoYXZlV2FybmVkID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG5mdW5jdGlvbiB3YXJuT25jZUluRGV2ZWxvcG1lbnQobXNnLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09IHZvaWQgMCkgeyB0eXBlID0gJ3dhcm4nOyB9XG4gICAgaWYgKCFpc1Byb2R1Y3Rpb24oKSAmJiAhaGF2ZVdhcm5lZFttc2ddKSB7XG4gICAgICAgIGlmICghaXNUZXN0KCkpIHtcbiAgICAgICAgICAgIGhhdmVXYXJuZWRbbXNnXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihtc2cpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcFN5bWJvbHMoZGF0YSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbn1cblxuZXhwb3J0IHsgYWRkVHlwZW5hbWVUb0RvY3VtZW50LCBhcmd1bWVudHNPYmplY3RGcm9tRmllbGQsIGFzc2lnbiwgYnVpbGRRdWVyeUZyb21TZWxlY3Rpb25TZXQsIGNhblVzZVdlYWtNYXAsIGNoZWNrRG9jdW1lbnQsIGNsb25lRGVlcCwgY3JlYXRlRnJhZ21lbnRNYXAsIGdldERlZmF1bHRWYWx1ZXMsIGdldERpcmVjdGl2ZUluZm9Gcm9tRmllbGQsIGdldERpcmVjdGl2ZU5hbWVzLCBnZXREaXJlY3RpdmVzRnJvbURvY3VtZW50LCBnZXRFbnYsIGdldEZyYWdtZW50RGVmaW5pdGlvbiwgZ2V0RnJhZ21lbnREZWZpbml0aW9ucywgZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50LCBnZXRJbmNsdXNpb25EaXJlY3RpdmVzLCBnZXRNYWluRGVmaW5pdGlvbiwgZ2V0TXV0YXRpb25EZWZpbml0aW9uLCBnZXRPcGVyYXRpb25EZWZpbml0aW9uLCBnZXRPcGVyYXRpb25EZWZpbml0aW9uT3JEaWUsIGdldE9wZXJhdGlvbk5hbWUsIGdldFF1ZXJ5RGVmaW5pdGlvbiwgZ2V0U3RvcmVLZXlOYW1lLCBncmFwaFFMUmVzdWx0SGFzRXJyb3IsIGhhc0NsaWVudEV4cG9ydHMsIGhhc0RpcmVjdGl2ZXMsIGlzRGV2ZWxvcG1lbnQsIGlzRW52LCBpc0ZpZWxkLCBpc0lkVmFsdWUsIGlzSW5saW5lRnJhZ21lbnQsIGlzSnNvblZhbHVlLCBpc051bWJlclZhbHVlLCBpc1Byb2R1Y3Rpb24sIGlzU2NhbGFyVmFsdWUsIGlzVGVzdCwgbWF5YmVEZWVwRnJlZXplLCBtZXJnZURlZXAsIG1lcmdlRGVlcEFycmF5LCByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQsIHJlbW92ZUNsaWVudFNldHNGcm9tRG9jdW1lbnQsIHJlbW92ZUNvbm5lY3Rpb25EaXJlY3RpdmVGcm9tRG9jdW1lbnQsIHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQsIHJlbW92ZUZyYWdtZW50U3ByZWFkRnJvbURvY3VtZW50LCByZXN1bHRLZXlOYW1lRnJvbUZpZWxkLCBzaG91bGRJbmNsdWRlLCBzdG9yZUtleU5hbWVGcm9tRmllbGQsIHN0cmlwU3ltYm9scywgdG9JZFZhbHVlLCB0cnlGdW5jdGlvbk9yTG9nRXJyb3IsIHZhbHVlRnJvbU5vZGUsIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbiwgdmFyaWFibGVzSW5PcGVyYXRpb24sIHdhcm5PbmNlSW5EZXZlbG9wbWVudCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVuZGxlLmVzbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgb3B0cykge1xuICAgIGlmICghb3B0cykgb3B0cyA9IHt9O1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykgb3B0cyA9IHsgY21wOiBvcHRzIH07XG4gICAgdmFyIGN5Y2xlcyA9ICh0eXBlb2Ygb3B0cy5jeWNsZXMgPT09ICdib29sZWFuJykgPyBvcHRzLmN5Y2xlcyA6IGZhbHNlO1xuXG4gICAgdmFyIGNtcCA9IG9wdHMuY21wICYmIChmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHZhciBhb2JqID0geyBrZXk6IGEsIHZhbHVlOiBub2RlW2FdIH07XG4gICAgICAgICAgICAgICAgdmFyIGJvYmogPSB7IGtleTogYiwgdmFsdWU6IG5vZGVbYl0gfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZihhb2JqLCBib2JqKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSkob3B0cy5jbXApO1xuXG4gICAgdmFyIHNlZW4gPSBbXTtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIHN0cmluZ2lmeSAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSAmJiBub2RlLnRvSlNPTiAmJiB0eXBlb2Ygbm9kZS50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnRvSlNPTigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIG5vZGUgPT0gJ251bWJlcicpIHJldHVybiBpc0Zpbml0ZShub2RlKSA/ICcnICsgbm9kZSA6ICdudWxsJztcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0JykgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG5vZGUpO1xuXG4gICAgICAgIHZhciBpLCBvdXQ7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICAgICAgICBvdXQgPSAnWyc7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpKSBvdXQgKz0gJywnO1xuICAgICAgICAgICAgICAgIG91dCArPSBzdHJpbmdpZnkobm9kZVtpXSkgfHwgJ251bGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dCArICddJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuXG4gICAgICAgIGlmIChzZWVuLmluZGV4T2Yobm9kZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoY3ljbGVzKSByZXR1cm4gSlNPTi5zdHJpbmdpZnkoJ19fY3ljbGVfXycpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ucHVzaChub2RlKSAtIDE7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMobm9kZSkuc29ydChjbXAgJiYgY21wKG5vZGUpKTtcbiAgICAgICAgb3V0ID0gJyc7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0cmluZ2lmeShub2RlW2tleV0pO1xuXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChvdXQpIG91dCArPSAnLCc7XG4gICAgICAgICAgICBvdXQgKz0gSlNPTi5zdHJpbmdpZnkoa2V5KSArICc6JyArIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHNlZW4uc3BsaWNlKHNlZW5JbmRleCwgMSk7XG4gICAgICAgIHJldHVybiAneycgKyBvdXQgKyAnfSc7XG4gICAgfSkoZGF0YSk7XG59O1xuIiwidmFyIHBhcnNlciA9IHJlcXVpcmUoJ2dyYXBocWwvbGFuZ3VhZ2UvcGFyc2VyJyk7XG5cbnZhciBwYXJzZSA9IHBhcnNlci5wYXJzZTtcblxuLy8gU3RyaXAgaW5zaWduaWZpY2FudCB3aGl0ZXNwYWNlXG4vLyBOb3RlIHRoYXQgdGhpcyBjb3VsZCBkbyBhIGxvdCBtb3JlLCBzdWNoIGFzIHJlb3JkZXIgZmllbGRzIGV0Yy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFxzLF0rL2csICcgJykudHJpbSgpO1xufVxuXG4vLyBBIG1hcCBkb2NTdHJpbmcgLT4gZ3JhcGhxbCBkb2N1bWVudFxudmFyIGRvY0NhY2hlID0ge307XG5cbi8vIEEgbWFwIGZyYWdtZW50TmFtZSAtPiBbbm9ybWFsaXplZCBzb3VyY2VdXG52YXIgZnJhZ21lbnRTb3VyY2VNYXAgPSB7fTtcblxuZnVuY3Rpb24gY2FjaGVLZXlGcm9tTG9jKGxvYykge1xuICByZXR1cm4gbm9ybWFsaXplKGxvYy5zb3VyY2UuYm9keS5zdWJzdHJpbmcobG9jLnN0YXJ0LCBsb2MuZW5kKSk7XG59XG5cbi8vIEZvciB0ZXN0aW5nLlxuZnVuY3Rpb24gcmVzZXRDYWNoZXMoKSB7XG4gIGRvY0NhY2hlID0ge307XG4gIGZyYWdtZW50U291cmNlTWFwID0ge307XG59XG5cbi8vIFRha2UgYSB1bnN0cmlwcGVkIHBhcnNlZCBkb2N1bWVudCAocXVlcnkvbXV0YXRpb24gb3IgZXZlbiBmcmFnbWVudCksIGFuZFxuLy8gY2hlY2sgYWxsIGZyYWdtZW50IGRlZmluaXRpb25zLCBjaGVja2luZyBmb3IgbmFtZS0+c291cmNlIHVuaXF1ZW5lc3MuXG4vLyBXZSBhbHNvIHdhbnQgdG8gbWFrZSBzdXJlIG9ubHkgdW5pcXVlIGZyYWdtZW50cyBleGlzdCBpbiB0aGUgZG9jdW1lbnQuXG52YXIgcHJpbnRGcmFnbWVudFdhcm5pbmdzID0gdHJ1ZTtcbmZ1bmN0aW9uIHByb2Nlc3NGcmFnbWVudHMoYXN0KSB7XG4gIHZhciBhc3RGcmFnbWVudE1hcCA9IHt9O1xuICB2YXIgZGVmaW5pdGlvbnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFzdC5kZWZpbml0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmcmFnbWVudERlZmluaXRpb24gPSBhc3QuZGVmaW5pdGlvbnNbaV07XG5cbiAgICBpZiAoZnJhZ21lbnREZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nKSB7XG4gICAgICB2YXIgZnJhZ21lbnROYW1lID0gZnJhZ21lbnREZWZpbml0aW9uLm5hbWUudmFsdWU7XG4gICAgICB2YXIgc291cmNlS2V5ID0gY2FjaGVLZXlGcm9tTG9jKGZyYWdtZW50RGVmaW5pdGlvbi5sb2MpO1xuXG4gICAgICAvLyBXZSBrbm93IHNvbWV0aGluZyBhYm91dCB0aGlzIGZyYWdtZW50XG4gICAgICBpZiAoZnJhZ21lbnRTb3VyY2VNYXAuaGFzT3duUHJvcGVydHkoZnJhZ21lbnROYW1lKSAmJiAhZnJhZ21lbnRTb3VyY2VNYXBbZnJhZ21lbnROYW1lXVtzb3VyY2VLZXldKSB7XG5cbiAgICAgICAgLy8gdGhpcyBpcyBhIHByb2JsZW0gYmVjYXVzZSB0aGUgYXBwIGRldmVsb3BlciBpcyB0cnlpbmcgdG8gcmVnaXN0ZXIgYW5vdGhlciBmcmFnbWVudCB3aXRoXG4gICAgICAgIC8vIHRoZSBzYW1lIG5hbWUgYXMgb25lIHByZXZpb3VzbHkgcmVnaXN0ZXJlZC4gU28sIHdlIHRlbGwgdGhlbSBhYm91dCBpdC5cbiAgICAgICAgaWYgKHByaW50RnJhZ21lbnRXYXJuaW5ncykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IGZyYWdtZW50IHdpdGggbmFtZSBcIiArIGZyYWdtZW50TmFtZSArIFwiIGFscmVhZHkgZXhpc3RzLlxcblwiXG4gICAgICAgICAgICArIFwiZ3JhcGhxbC10YWcgZW5mb3JjZXMgYWxsIGZyYWdtZW50IG5hbWVzIGFjcm9zcyB5b3VyIGFwcGxpY2F0aW9uIHRvIGJlIHVuaXF1ZTsgcmVhZCBtb3JlIGFib3V0XFxuXCJcbiAgICAgICAgICAgICsgXCJ0aGlzIGluIHRoZSBkb2NzOiBodHRwOi8vZGV2LmFwb2xsb2RhdGEuY29tL2NvcmUvZnJhZ21lbnRzLmh0bWwjdW5pcXVlLW5hbWVzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnJhZ21lbnRTb3VyY2VNYXBbZnJhZ21lbnROYW1lXVtzb3VyY2VLZXldID0gdHJ1ZTtcblxuICAgICAgfSBlbHNlIGlmICghZnJhZ21lbnRTb3VyY2VNYXAuaGFzT3duUHJvcGVydHkoZnJhZ21lbnROYW1lKSkge1xuICAgICAgICBmcmFnbWVudFNvdXJjZU1hcFtmcmFnbWVudE5hbWVdID0ge307XG4gICAgICAgIGZyYWdtZW50U291cmNlTWFwW2ZyYWdtZW50TmFtZV1bc291cmNlS2V5XSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghYXN0RnJhZ21lbnRNYXBbc291cmNlS2V5XSkge1xuICAgICAgICBhc3RGcmFnbWVudE1hcFtzb3VyY2VLZXldID0gdHJ1ZTtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChmcmFnbWVudERlZmluaXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGZyYWdtZW50RGVmaW5pdGlvbik7XG4gICAgfVxuICB9XG5cbiAgYXN0LmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIHJldHVybiBhc3Q7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVGcmFnbWVudFdhcm5pbmdzKCkge1xuICBwcmludEZyYWdtZW50V2FybmluZ3MgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc3RyaXBMb2MoZG9jLCByZW1vdmVMb2NBdFRoaXNMZXZlbCkge1xuICB2YXIgZG9jVHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkb2MpO1xuXG4gIGlmIChkb2NUeXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmV0dXJuIGRvYy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBzdHJpcExvYyhkLCByZW1vdmVMb2NBdFRoaXNMZXZlbCk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZG9jVHlwZSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgaW5wdXQuJyk7XG4gIH1cblxuICAvLyBXZSBkb24ndCB3YW50IHRvIHJlbW92ZSB0aGUgcm9vdCBsb2MgZmllbGQgc28gd2UgY2FuIHVzZSBpdFxuICAvLyBmb3IgZnJhZ21lbnQgc3Vic3RpdHV0aW9uIChzZWUgYmVsb3cpXG4gIGlmIChyZW1vdmVMb2NBdFRoaXNMZXZlbCAmJiBkb2MubG9jKSB7XG4gICAgZGVsZXRlIGRvYy5sb2M7XG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXBvbGxvZ3JhcGhxbC9ncmFwaHFsLXRhZy9pc3N1ZXMvNDBcbiAgaWYgKGRvYy5sb2MpIHtcbiAgICBkZWxldGUgZG9jLmxvYy5zdGFydFRva2VuO1xuICAgIGRlbGV0ZSBkb2MubG9jLmVuZFRva2VuO1xuICB9XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkb2MpO1xuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciB2YWx1ZVR5cGU7XG5cbiAgZm9yIChrZXkgaW4ga2V5cykge1xuICAgIGlmIChrZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhbHVlID0gZG9jW2tleXNba2V5XV07XG4gICAgICB2YWx1ZVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgICBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBPYmplY3RdJyB8fCB2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgZG9jW2tleXNba2V5XV0gPSBzdHJpcExvYyh2YWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvYztcbn1cblxudmFyIGV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gZmFsc2U7XG5mdW5jdGlvbiBwYXJzZURvY3VtZW50KGRvYykge1xuICB2YXIgY2FjaGVLZXkgPSBub3JtYWxpemUoZG9jKTtcblxuICBpZiAoZG9jQ2FjaGVbY2FjaGVLZXldKSB7XG4gICAgcmV0dXJuIGRvY0NhY2hlW2NhY2hlS2V5XTtcbiAgfVxuXG4gIHZhciBwYXJzZWQgPSBwYXJzZShkb2MsIHsgZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXM6IGV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzIH0pO1xuICBpZiAoIXBhcnNlZCB8fCBwYXJzZWQua2luZCAhPT0gJ0RvY3VtZW50Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgR3JhcGhRTCBkb2N1bWVudC4nKTtcbiAgfVxuXG4gIC8vIGNoZWNrIHRoYXQgYWxsIFwibmV3XCIgZnJhZ21lbnRzIGluc2lkZSB0aGUgZG9jdW1lbnRzIGFyZSBjb25zaXN0ZW50IHdpdGhcbiAgLy8gZXhpc3RpbmcgZnJhZ21lbnRzIG9mIHRoZSBzYW1lIG5hbWVcbiAgcGFyc2VkID0gcHJvY2Vzc0ZyYWdtZW50cyhwYXJzZWQpO1xuICBwYXJzZWQgPSBzdHJpcExvYyhwYXJzZWQsIGZhbHNlKTtcbiAgZG9jQ2FjaGVbY2FjaGVLZXldID0gcGFyc2VkO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzKCkge1xuICBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcygpIHtcbiAgZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBmYWxzZTtcbn1cblxuLy8gWFhYIFRoaXMgc2hvdWxkIGV2ZW50dWFsbHkgZGlzYWxsb3cgYXJiaXRyYXJ5IHN0cmluZyBpbnRlcnBvbGF0aW9uLCBsaWtlIFJlbGF5IGRvZXNcbmZ1bmN0aW9uIGdxbCgvKiBhcmd1bWVudHMgKi8pIHtcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gIHZhciBsaXRlcmFscyA9IGFyZ3NbMF07XG5cbiAgLy8gV2UgYWx3YXlzIGdldCBsaXRlcmFsc1swXSBhbmQgdGhlbiBtYXRjaGluZyBwb3N0IGxpdGVyYWxzIGZvciBlYWNoIGFyZyBnaXZlblxuICB2YXIgcmVzdWx0ID0gKHR5cGVvZihsaXRlcmFscykgPT09IFwic3RyaW5nXCIpID8gbGl0ZXJhbHMgOiBsaXRlcmFsc1swXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJnc1tpXSAmJiBhcmdzW2ldLmtpbmQgJiYgYXJnc1tpXS5raW5kID09PSAnRG9jdW1lbnQnKSB7XG4gICAgICByZXN1bHQgKz0gYXJnc1tpXS5sb2Muc291cmNlLmJvZHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSBhcmdzW2ldO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSBsaXRlcmFsc1tpXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZURvY3VtZW50KHJlc3VsdCk7XG59XG5cbi8vIFN1cHBvcnQgdHlwZXNjcmlwdCwgd2hpY2ggaXNuJ3QgYXMgbmljZSBhcyBCYWJlbCBhYm91dCBkZWZhdWx0IGV4cG9ydHNcbmdxbC5kZWZhdWx0ID0gZ3FsO1xuZ3FsLnJlc2V0Q2FjaGVzID0gcmVzZXRDYWNoZXM7XG5ncWwuZGlzYWJsZUZyYWdtZW50V2FybmluZ3MgPSBkaXNhYmxlRnJhZ21lbnRXYXJuaW5ncztcbmdxbC5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzO1xuZ3FsLmRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcztcblxubW9kdWxlLmV4cG9ydHMgPSBncWw7XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7IHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG4vLyBGSVhNRTpcbi8vIGZsb3dsaW50IHVuaW5pdGlhbGl6ZWQtaW5zdGFuY2UtcHJvcGVydHk6b2ZmXG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gXCIuLi9qc3V0aWxzL2lzT2JqZWN0TGlrZS5tanNcIjtcbmltcG9ydCB7IFNZTUJPTF9UT19TVFJJTkdfVEFHIH0gZnJvbSBcIi4uL3BvbHlmaWxscy9zeW1ib2xzLm1qc1wiO1xuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi4vbGFuZ3VhZ2UvbG9jYXRpb24ubWpzXCI7XG5pbXBvcnQgeyBwcmludExvY2F0aW9uLCBwcmludFNvdXJjZUxvY2F0aW9uIH0gZnJvbSBcIi4uL2xhbmd1YWdlL3ByaW50TG9jYXRpb24ubWpzXCI7XG4vKipcbiAqIEEgR3JhcGhRTEVycm9yIGRlc2NyaWJlcyBhbiBFcnJvciBmb3VuZCBkdXJpbmcgdGhlIHBhcnNlLCB2YWxpZGF0ZSwgb3JcbiAqIGV4ZWN1dGUgcGhhc2VzIG9mIHBlcmZvcm1pbmcgYSBHcmFwaFFMIG9wZXJhdGlvbi4gSW4gYWRkaXRpb24gdG8gYSBtZXNzYWdlXG4gKiBhbmQgc3RhY2sgdHJhY2UsIGl0IGFsc28gaW5jbHVkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2F0aW9ucyBpbiBhXG4gKiBHcmFwaFFMIGRvY3VtZW50IGFuZC9vciBleGVjdXRpb24gcmVzdWx0IHRoYXQgY29ycmVzcG9uZCB0byB0aGUgRXJyb3IuXG4gKi9cblxuZXhwb3J0IHZhciBHcmFwaFFMRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoR3JhcGhRTEVycm9yLCBfRXJyb3IpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoR3JhcGhRTEVycm9yKTtcblxuICAvKipcbiAgICogQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIEVycm9yIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG4gICAqXG4gICAqIEVudW1lcmFibGUsIGFuZCBhcHBlYXJzIGluIHRoZSByZXN1bHQgb2YgSlNPTi5zdHJpbmdpZnkoKS5cbiAgICpcbiAgICogTm90ZTogc2hvdWxkIGJlIHRyZWF0ZWQgYXMgcmVhZG9ubHksIGRlc3BpdGUgaW52YXJpYW50IHVzYWdlLlxuICAgKi9cblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgeyBsaW5lLCBjb2x1bW4gfSBsb2NhdGlvbnMgd2l0aGluIHRoZSBzb3VyY2UgR3JhcGhRTCBkb2N1bWVudFxuICAgKiB3aGljaCBjb3JyZXNwb25kIHRvIHRoaXMgZXJyb3IuXG4gICAqXG4gICAqIEVycm9ycyBkdXJpbmcgdmFsaWRhdGlvbiBvZnRlbiBjb250YWluIG11bHRpcGxlIGxvY2F0aW9ucywgZm9yIGV4YW1wbGUgdG9cbiAgICogcG9pbnQgb3V0IHR3byB0aGluZ3Mgd2l0aCB0aGUgc2FtZSBuYW1lLiBFcnJvcnMgZHVyaW5nIGV4ZWN1dGlvbiBpbmNsdWRlIGFcbiAgICogc2luZ2xlIGxvY2F0aW9uLCB0aGUgZmllbGQgd2hpY2ggcHJvZHVjZWQgdGhlIGVycm9yLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBkZXNjcmliaW5nIHRoZSBKU09OLXBhdGggaW50byB0aGUgZXhlY3V0aW9uIHJlc3BvbnNlIHdoaWNoXG4gICAqIGNvcnJlc3BvbmRzIHRvIHRoaXMgZXJyb3IuIE9ubHkgaW5jbHVkZWQgZm9yIGVycm9ycyBkdXJpbmcgZXhlY3V0aW9uLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBHcmFwaFFMIEFTVCBOb2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgZXJyb3IuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnQgZm9yIHRoZSBmaXJzdCBsb2NhdGlvbiBvZiB0aGlzIGVycm9yLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgdGhpcyBFcnJvciByZXByZXNlbnRzIG1vcmUgdGhhbiBvbmUgbm9kZSwgdGhlIHNvdXJjZSBtYXkgbm90XG4gICAqIHJlcHJlc2VudCBub2RlcyBhZnRlciB0aGUgZmlyc3Qgbm9kZS5cbiAgICovXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGNoYXJhY3RlciBvZmZzZXRzIHdpdGhpbiB0aGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnRcbiAgICogd2hpY2ggY29ycmVzcG9uZCB0byB0aGlzIGVycm9yLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIG9yaWdpbmFsIGVycm9yIHRocm93biBmcm9tIGEgZmllbGQgcmVzb2x2ZXIgZHVyaW5nIGV4ZWN1dGlvbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIEV4dGVuc2lvbiBmaWVsZHMgdG8gYWRkIHRvIHRoZSBmb3JtYXR0ZWQgZXJyb3IuXG4gICAqL1xuICBmdW5jdGlvbiBHcmFwaFFMRXJyb3IobWVzc2FnZSwgbm9kZXMsIHNvdXJjZSwgcG9zaXRpb25zLCBwYXRoLCBvcmlnaW5hbEVycm9yLCBleHRlbnNpb25zKSB7XG4gICAgdmFyIF9sb2NhdGlvbnMyLCBfc291cmNlMiwgX3Bvc2l0aW9uczIsIF9leHRlbnNpb25zMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmFwaFFMRXJyb3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKTsgLy8gQ29tcHV0ZSBsaXN0IG9mIGJsYW1lIG5vZGVzLlxuXG4gICAgdmFyIF9ub2RlcyA9IEFycmF5LmlzQXJyYXkobm9kZXMpID8gbm9kZXMubGVuZ3RoICE9PSAwID8gbm9kZXMgOiB1bmRlZmluZWQgOiBub2RlcyA/IFtub2Rlc10gOiB1bmRlZmluZWQ7IC8vIENvbXB1dGUgbG9jYXRpb25zIGluIHRoZSBzb3VyY2UgZm9yIHRoZSBnaXZlbiBub2Rlcy9wb3NpdGlvbnMuXG5cblxuICAgIHZhciBfc291cmNlID0gc291cmNlO1xuXG4gICAgaWYgKCFfc291cmNlICYmIF9ub2Rlcykge1xuICAgICAgdmFyIF9ub2RlcyQwJGxvYztcblxuICAgICAgX3NvdXJjZSA9IChfbm9kZXMkMCRsb2MgPSBfbm9kZXNbMF0ubG9jKSA9PT0gbnVsbCB8fCBfbm9kZXMkMCRsb2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub2RlcyQwJGxvYy5zb3VyY2U7XG4gICAgfVxuXG4gICAgdmFyIF9wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG5cbiAgICBpZiAoIV9wb3NpdGlvbnMgJiYgX25vZGVzKSB7XG4gICAgICBfcG9zaXRpb25zID0gX25vZGVzLnJlZHVjZShmdW5jdGlvbiAobGlzdCwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZS5sb2MpIHtcbiAgICAgICAgICBsaXN0LnB1c2gobm9kZS5sb2Muc3RhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgaWYgKF9wb3NpdGlvbnMgJiYgX3Bvc2l0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIF9wb3NpdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIF9sb2NhdGlvbnM7XG5cbiAgICBpZiAocG9zaXRpb25zICYmIHNvdXJjZSkge1xuICAgICAgX2xvY2F0aW9ucyA9IHBvc2l0aW9ucy5tYXAoZnVuY3Rpb24gKHBvcykge1xuICAgICAgICByZXR1cm4gZ2V0TG9jYXRpb24oc291cmNlLCBwb3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChfbm9kZXMpIHtcbiAgICAgIF9sb2NhdGlvbnMgPSBfbm9kZXMucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmxvYykge1xuICAgICAgICAgIGxpc3QucHVzaChnZXRMb2NhdGlvbihub2RlLmxvYy5zb3VyY2UsIG5vZGUubG9jLnN0YXJ0KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICB2YXIgX2V4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuXG4gICAgaWYgKF9leHRlbnNpb25zID09IG51bGwgJiYgb3JpZ2luYWxFcnJvciAhPSBudWxsKSB7XG4gICAgICB2YXIgb3JpZ2luYWxFeHRlbnNpb25zID0gb3JpZ2luYWxFcnJvci5leHRlbnNpb25zO1xuXG4gICAgICBpZiAoaXNPYmplY3RMaWtlKG9yaWdpbmFsRXh0ZW5zaW9ucykpIHtcbiAgICAgICAgX2V4dGVuc2lvbnMgPSBvcmlnaW5hbEV4dGVuc2lvbnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6ICdHcmFwaFFMRXJyb3InXG4gICAgICB9LFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB2YWx1ZTogbWVzc2FnZSxcbiAgICAgICAgLy8gQnkgYmVpbmcgZW51bWVyYWJsZSwgSlNPTi5zdHJpbmdpZnkgd2lsbCBpbmNsdWRlIGBtZXNzYWdlYCBpbiB0aGVcbiAgICAgICAgLy8gcmVzdWx0aW5nIG91dHB1dC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNpbXBsZXN0IHBvc3NpYmxlIEdyYXBoUUxcbiAgICAgICAgLy8gc2VydmljZSBhZGhlcmVzIHRvIHRoZSBzcGVjLlxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxvY2F0aW9uczoge1xuICAgICAgICAvLyBDb2VyY2luZyBmYWxzeSB2YWx1ZXMgdG8gdW5kZWZpbmVkIGVuc3VyZXMgdGhleSB3aWxsIG5vdCBiZSBpbmNsdWRlZFxuICAgICAgICAvLyBpbiBKU09OLnN0cmluZ2lmeSgpIHdoZW4gbm90IHByb3ZpZGVkLlxuICAgICAgICB2YWx1ZTogKF9sb2NhdGlvbnMyID0gX2xvY2F0aW9ucykgIT09IG51bGwgJiYgX2xvY2F0aW9uczIgIT09IHZvaWQgMCA/IF9sb2NhdGlvbnMyIDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCeSBiZWluZyBlbnVtZXJhYmxlLCBKU09OLnN0cmluZ2lmeSB3aWxsIGluY2x1ZGUgYGxvY2F0aW9uc2AgaW4gdGhlXG4gICAgICAgIC8vIHJlc3VsdGluZyBvdXRwdXQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBHcmFwaFFMXG4gICAgICAgIC8vIHNlcnZpY2UgYWRoZXJlcyB0byB0aGUgc3BlYy5cbiAgICAgICAgZW51bWVyYWJsZTogX2xvY2F0aW9ucyAhPSBudWxsXG4gICAgICB9LFxuICAgICAgcGF0aDoge1xuICAgICAgICAvLyBDb2VyY2luZyBmYWxzeSB2YWx1ZXMgdG8gdW5kZWZpbmVkIGVuc3VyZXMgdGhleSB3aWxsIG5vdCBiZSBpbmNsdWRlZFxuICAgICAgICAvLyBpbiBKU09OLnN0cmluZ2lmeSgpIHdoZW4gbm90IHByb3ZpZGVkLlxuICAgICAgICB2YWx1ZTogcGF0aCAhPT0gbnVsbCAmJiBwYXRoICE9PSB2b2lkIDAgPyBwYXRoIDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCeSBiZWluZyBlbnVtZXJhYmxlLCBKU09OLnN0cmluZ2lmeSB3aWxsIGluY2x1ZGUgYHBhdGhgIGluIHRoZVxuICAgICAgICAvLyByZXN1bHRpbmcgb3V0cHV0LiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2ltcGxlc3QgcG9zc2libGUgR3JhcGhRTFxuICAgICAgICAvLyBzZXJ2aWNlIGFkaGVyZXMgdG8gdGhlIHNwZWMuXG4gICAgICAgIGVudW1lcmFibGU6IHBhdGggIT0gbnVsbFxuICAgICAgfSxcbiAgICAgIG5vZGVzOiB7XG4gICAgICAgIHZhbHVlOiBfbm9kZXMgIT09IG51bGwgJiYgX25vZGVzICE9PSB2b2lkIDAgPyBfbm9kZXMgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdmFsdWU6IChfc291cmNlMiA9IF9zb3VyY2UpICE9PSBudWxsICYmIF9zb3VyY2UyICE9PSB2b2lkIDAgPyBfc291cmNlMiA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uczoge1xuICAgICAgICB2YWx1ZTogKF9wb3NpdGlvbnMyID0gX3Bvc2l0aW9ucykgIT09IG51bGwgJiYgX3Bvc2l0aW9uczIgIT09IHZvaWQgMCA/IF9wb3NpdGlvbnMyIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgb3JpZ2luYWxFcnJvcjoge1xuICAgICAgICB2YWx1ZTogb3JpZ2luYWxFcnJvclxuICAgICAgfSxcbiAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgLy8gQ29lcmNpbmcgZmFsc3kgdmFsdWVzIHRvIHVuZGVmaW5lZCBlbnN1cmVzIHRoZXkgd2lsbCBub3QgYmUgaW5jbHVkZWRcbiAgICAgICAgLy8gaW4gSlNPTi5zdHJpbmdpZnkoKSB3aGVuIG5vdCBwcm92aWRlZC5cbiAgICAgICAgdmFsdWU6IChfZXh0ZW5zaW9uczIgPSBfZXh0ZW5zaW9ucykgIT09IG51bGwgJiYgX2V4dGVuc2lvbnMyICE9PSB2b2lkIDAgPyBfZXh0ZW5zaW9uczIgOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIEJ5IGJlaW5nIGVudW1lcmFibGUsIEpTT04uc3RyaW5naWZ5IHdpbGwgaW5jbHVkZSBgcGF0aGAgaW4gdGhlXG4gICAgICAgIC8vIHJlc3VsdGluZyBvdXRwdXQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBHcmFwaFFMXG4gICAgICAgIC8vIHNlcnZpY2UgYWRoZXJlcyB0byB0aGUgc3BlYy5cbiAgICAgICAgZW51bWVyYWJsZTogX2V4dGVuc2lvbnMgIT0gbnVsbFxuICAgICAgfVxuICAgIH0pOyAvLyBJbmNsdWRlIChub24tZW51bWVyYWJsZSkgc3RhY2sgdHJhY2UuXG5cbiAgICBpZiAob3JpZ2luYWxFcnJvciA9PT0gbnVsbCB8fCBvcmlnaW5hbEVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbEVycm9yLnN0YWNrKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdzdGFjaycsIHtcbiAgICAgICAgdmFsdWU6IG9yaWdpbmFsRXJyb3Iuc3RhY2ssXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcbiAgICB9IC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcblxuXG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgR3JhcGhRTEVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAnc3RhY2snLCB7XG4gICAgICAgIHZhbHVlOiBFcnJvcigpLnN0YWNrLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JhcGhRTEVycm9yLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBwcmludEVycm9yKHRoaXMpO1xuICAgIH0gLy8gRklYTUU6IHdvcmthcm91bmQgdG8gbm90IGJyZWFrIGNoYWkgY29tcGFyaXNvbnMsIHNob3VsZCBiZSByZW1vdmUgaW4gdjE2XG4gICAgLy8gJEZsb3dGaXhNZSBGbG93IGRvZXNuJ3Qgc3VwcG9ydCBjb21wdXRlZCBwcm9wZXJ0aWVzIHlldFxuXG4gIH0sIHtcbiAgICBrZXk6IFNZTUJPTF9UT19TVFJJTkdfVEFHLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHcmFwaFFMRXJyb3I7XG59KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuLyoqXG4gKiBQcmludHMgYSBHcmFwaFFMRXJyb3IgdG8gYSBzdHJpbmcsIHJlcHJlc2VudGluZyB1c2VmdWwgbG9jYXRpb24gaW5mb3JtYXRpb25cbiAqIGFib3V0IHRoZSBlcnJvcidzIHBvc2l0aW9uIGluIHRoZSBzb3VyY2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RXJyb3IoZXJyb3IpIHtcbiAgdmFyIG91dHB1dCA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgaWYgKGVycm9yLm5vZGVzKSB7XG4gICAgZm9yICh2YXIgX2kyID0gMCwgX2Vycm9yJG5vZGVzMiA9IGVycm9yLm5vZGVzOyBfaTIgPCBfZXJyb3Ikbm9kZXMyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBub2RlID0gX2Vycm9yJG5vZGVzMltfaTJdO1xuXG4gICAgICBpZiAobm9kZS5sb2MpIHtcbiAgICAgICAgb3V0cHV0ICs9ICdcXG5cXG4nICsgcHJpbnRMb2NhdGlvbihub2RlLmxvYyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGVycm9yLnNvdXJjZSAmJiBlcnJvci5sb2NhdGlvbnMpIHtcbiAgICBmb3IgKHZhciBfaTQgPSAwLCBfZXJyb3IkbG9jYXRpb25zMiA9IGVycm9yLmxvY2F0aW9uczsgX2k0IDwgX2Vycm9yJGxvY2F0aW9uczIubGVuZ3RoOyBfaTQrKykge1xuICAgICAgdmFyIGxvY2F0aW9uID0gX2Vycm9yJGxvY2F0aW9uczJbX2k0XTtcbiAgICAgIG91dHB1dCArPSAnXFxuXFxuJyArIHByaW50U291cmNlTG9jYXRpb24oZXJyb3Iuc291cmNlLCBsb2NhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbiIsImltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gXCIuL0dyYXBoUUxFcnJvci5tanNcIjtcbi8qKlxuICogUHJvZHVjZXMgYSBHcmFwaFFMRXJyb3IgcmVwcmVzZW50aW5nIGEgc3ludGF4IGVycm9yLCBjb250YWluaW5nIHVzZWZ1bFxuICogZGVzY3JpcHRpdmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN5bnRheCBlcnJvcidzIHBvc2l0aW9uIGluIHRoZSBzb3VyY2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgR3JhcGhRTEVycm9yKFwiU3ludGF4IEVycm9yOiBcIi5jb25jYXQoZGVzY3JpcHRpb24pLCB1bmRlZmluZWQsIHNvdXJjZSwgW3Bvc2l0aW9uXSk7XG59XG4iLCJpbXBvcnQgaW52YXJpYW50IGZyb20gXCIuL2ludmFyaWFudC5tanNcIjtcbmltcG9ydCBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sIGZyb20gXCIuL25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wubWpzXCI7XG4vKipcbiAqIFRoZSBgZGVmaW5lSW5zcGVjdCgpYCBmdW5jdGlvbiBkZWZpbmVzIGBpbnNwZWN0KClgIHByb3RvdHlwZSBtZXRob2QgYXMgYWxpYXMgb2YgYHRvSlNPTmBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmVJbnNwZWN0KGNsYXNzT2JqZWN0KSB7XG4gIHZhciBmbiA9IGNsYXNzT2JqZWN0LnByb3RvdHlwZS50b0pTT047XG4gIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCBpbnZhcmlhbnQoMCk7XG4gIGNsYXNzT2JqZWN0LnByb3RvdHlwZS5pbnNwZWN0ID0gZm47IC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlIChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcblxuICBpZiAobm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbCkge1xuICAgIGNsYXNzT2JqZWN0LnByb3RvdHlwZVtub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sXSA9IGZuO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXZBc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIHZhciBib29sZWFuQ29uZGl0aW9uID0gQm9vbGVhbihjb25kaXRpb24pOyAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAoU2VlIHRyYW5zZm9ybWF0aW9uIGRvbmUgaW4gJy4vcmVzb3VyY2VzL2lubGluZUludmFyaWFudC5qcycpXG5cbiAgaWYgKCFib29sZWFuQ29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sIGZyb20gXCIuL25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wubWpzXCI7XG52YXIgTUFYX0FSUkFZX0xFTkdUSCA9IDEwO1xudmFyIE1BWF9SRUNVUlNJVkVfREVQVEggPSAyO1xuLyoqXG4gKiBVc2VkIHRvIHByaW50IHZhbHVlcyBpbiBlcnJvciBtZXNzYWdlcy5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnNwZWN0KHZhbHVlKSB7XG4gIHJldHVybiBmb3JtYXRWYWx1ZSh2YWx1ZSwgW10pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZSh2YWx1ZSwgc2VlblZhbHVlcykge1xuICBzd2l0Y2ggKF90eXBlb2YodmFsdWUpKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICByZXR1cm4gdmFsdWUubmFtZSA/IFwiW2Z1bmN0aW9uIFwiLmNvbmNhdCh2YWx1ZS5uYW1lLCBcIl1cIikgOiAnW2Z1bmN0aW9uXSc7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXRPYmplY3RWYWx1ZSh2YWx1ZSwgc2VlblZhbHVlcyk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0T2JqZWN0VmFsdWUodmFsdWUsIHByZXZpb3VzbHlTZWVuVmFsdWVzKSB7XG4gIGlmIChwcmV2aW91c2x5U2VlblZhbHVlcy5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICB9XG5cbiAgdmFyIHNlZW5WYWx1ZXMgPSBbXS5jb25jYXQocHJldmlvdXNseVNlZW5WYWx1ZXMsIFt2YWx1ZV0pO1xuICB2YXIgY3VzdG9tSW5zcGVjdEZuID0gZ2V0Q3VzdG9tRm4odmFsdWUpO1xuXG4gIGlmIChjdXN0b21JbnNwZWN0Rm4gIT09IHVuZGVmaW5lZCkge1xuICAgIC8vICRGbG93Rml4TWUoPj0wLjkwLjApXG4gICAgdmFyIGN1c3RvbVZhbHVlID0gY3VzdG9tSW5zcGVjdEZuLmNhbGwodmFsdWUpOyAvLyBjaGVjayBmb3IgaW5maW5pdGUgcmVjdXJzaW9uXG5cbiAgICBpZiAoY3VzdG9tVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1c3RvbVZhbHVlID09PSAnc3RyaW5nJyA/IGN1c3RvbVZhbHVlIDogZm9ybWF0VmFsdWUoY3VzdG9tVmFsdWUsIHNlZW5WYWx1ZXMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmb3JtYXRBcnJheSh2YWx1ZSwgc2VlblZhbHVlcyk7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0T2JqZWN0KHZhbHVlLCBzZWVuVmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0T2JqZWN0KG9iamVjdCwgc2VlblZhbHVlcykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICd7fSc7XG4gIH1cblxuICBpZiAoc2VlblZhbHVlcy5sZW5ndGggPiBNQVhfUkVDVVJTSVZFX0RFUFRIKSB7XG4gICAgcmV0dXJuICdbJyArIGdldE9iamVjdFRhZyhvYmplY3QpICsgJ10nO1xuICB9XG5cbiAgdmFyIHByb3BlcnRpZXMgPSBrZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gZm9ybWF0VmFsdWUob2JqZWN0W2tleV0sIHNlZW5WYWx1ZXMpO1xuICAgIHJldHVybiBrZXkgKyAnOiAnICsgdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gJ3sgJyArIHByb3BlcnRpZXMuam9pbignLCAnKSArICcgfSc7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGFycmF5LCBzZWVuVmFsdWVzKSB7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1tdJztcbiAgfVxuXG4gIGlmIChzZWVuVmFsdWVzLmxlbmd0aCA+IE1BWF9SRUNVUlNJVkVfREVQVEgpIHtcbiAgICByZXR1cm4gJ1tBcnJheV0nO1xuICB9XG5cbiAgdmFyIGxlbiA9IE1hdGgubWluKE1BWF9BUlJBWV9MRU5HVEgsIGFycmF5Lmxlbmd0aCk7XG4gIHZhciByZW1haW5pbmcgPSBhcnJheS5sZW5ndGggLSBsZW47XG4gIHZhciBpdGVtcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpdGVtcy5wdXNoKGZvcm1hdFZhbHVlKGFycmF5W2ldLCBzZWVuVmFsdWVzKSk7XG4gIH1cblxuICBpZiAocmVtYWluaW5nID09PSAxKSB7XG4gICAgaXRlbXMucHVzaCgnLi4uIDEgbW9yZSBpdGVtJyk7XG4gIH0gZWxzZSBpZiAocmVtYWluaW5nID4gMSkge1xuICAgIGl0ZW1zLnB1c2goXCIuLi4gXCIuY29uY2F0KHJlbWFpbmluZywgXCIgbW9yZSBpdGVtc1wiKSk7XG4gIH1cblxuICByZXR1cm4gJ1snICsgaXRlbXMuam9pbignLCAnKSArICddJztcbn1cblxuZnVuY3Rpb24gZ2V0Q3VzdG9tRm4ob2JqZWN0KSB7XG4gIHZhciBjdXN0b21JbnNwZWN0Rm4gPSBvYmplY3RbU3RyaW5nKG5vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wpXTtcblxuICBpZiAodHlwZW9mIGN1c3RvbUluc3BlY3RGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBjdXN0b21JbnNwZWN0Rm47XG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdC5pbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9iamVjdC5pbnNwZWN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdFRhZyhvYmplY3QpIHtcbiAgdmFyIHRhZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLnJlcGxhY2UoL15cXFtvYmplY3QgLywgJycpLnJlcGxhY2UoL10kLywgJycpO1xuXG4gIGlmICh0YWcgPT09ICdPYmplY3QnICYmIHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbmFtZSA9IG9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiBuYW1lICE9PSAnJykge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhZztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgdmFyIGJvb2xlYW5Db25kaXRpb24gPSBCb29sZWFuKGNvbmRpdGlvbik7IC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlIChTZWUgdHJhbnNmb3JtYXRpb24gZG9uZSBpbiAnLi9yZXNvdXJjZXMvaW5saW5lSW52YXJpYW50LmpzJylcblxuICBpZiAoIWJvb2xlYW5Db25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSAhPSBudWxsID8gbWVzc2FnZSA6ICdVbmV4cGVjdGVkIGludmFyaWFudCB0cmlnZ2VyZWQuJyk7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90XG4gKiBgbnVsbGAgYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIF90eXBlb2YodmFsdWUpID09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xufVxuIiwiLy8gaXN0YW5idWwgaWdub3JlIG5leHQgKFNlZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMvaXNzdWVzLzIzMTcnKVxudmFyIG5vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuZm9yID09PSAnZnVuY3Rpb24nID8gU3ltYm9sLmZvcignbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKSA6IHVuZGVmaW5lZDtcbmV4cG9ydCBkZWZhdWx0IG5vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2w7XG4iLCJpbXBvcnQgZGVmaW5lSW5zcGVjdCBmcm9tIFwiLi4vanN1dGlscy9kZWZpbmVJbnNwZWN0Lm1qc1wiO1xuXG4vKipcbiAqIENvbnRhaW5zIGEgcmFuZ2Ugb2YgVVRGLTggY2hhcmFjdGVyIG9mZnNldHMgYW5kIHRva2VuIHJlZmVyZW5jZXMgdGhhdFxuICogaWRlbnRpZnkgdGhlIHJlZ2lvbiBvZiB0aGUgc291cmNlIGZyb20gd2hpY2ggdGhlIEFTVCBkZXJpdmVkLlxuICovXG5leHBvcnQgdmFyIExvY2F0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoaXMgTm9kZSBiZWdpbnMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgY2hhcmFjdGVyIG9mZnNldCBhdCB3aGljaCB0aGlzIE5vZGUgZW5kcy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBUb2tlbiBhdCB3aGljaCB0aGlzIE5vZGUgYmVnaW5zLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIFRva2VuIGF0IHdoaWNoIHRoaXMgTm9kZSBlbmRzLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIFNvdXJjZSBkb2N1bWVudCB0aGUgQVNUIHJlcHJlc2VudHMuXG4gICAqL1xuICBmdW5jdGlvbiBMb2NhdGlvbihzdGFydFRva2VuLCBlbmRUb2tlbiwgc291cmNlKSB7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0VG9rZW4uc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSBlbmRUb2tlbi5lbmQ7XG4gICAgdGhpcy5zdGFydFRva2VuID0gc3RhcnRUb2tlbjtcbiAgICB0aGlzLmVuZFRva2VuID0gZW5kVG9rZW47XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTG9jYXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgICAgZW5kOiB0aGlzLmVuZFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIExvY2F0aW9uO1xufSgpOyAvLyBQcmludCBhIHNpbXBsaWZpZWQgZm9ybSB3aGVuIGFwcGVhcmluZyBpbiBgaW5zcGVjdGAgYW5kIGB1dGlsLmluc3BlY3RgLlxuXG5kZWZpbmVJbnNwZWN0KExvY2F0aW9uKTtcbi8qKlxuICogUmVwcmVzZW50cyBhIHJhbmdlIG9mIGNoYXJhY3RlcnMgcmVwcmVzZW50ZWQgYnkgYSBsZXhpY2FsIHRva2VuXG4gKiB3aXRoaW4gYSBTb3VyY2UuXG4gKi9cblxuZXhwb3J0IHZhciBUb2tlbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBUaGUga2luZCBvZiBUb2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoaXMgTm9kZSBiZWdpbnMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgY2hhcmFjdGVyIG9mZnNldCBhdCB3aGljaCB0aGlzIE5vZGUgZW5kcy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSAxLWluZGV4ZWQgbGluZSBudW1iZXIgb24gd2hpY2ggdGhpcyBUb2tlbiBhcHBlYXJzLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIDEtaW5kZXhlZCBjb2x1bW4gbnVtYmVyIGF0IHdoaWNoIHRoaXMgVG9rZW4gYmVnaW5zLlxuICAgKi9cblxuICAvKipcbiAgICogRm9yIG5vbi1wdW5jdHVhdGlvbiB0b2tlbnMsIHJlcHJlc2VudHMgdGhlIGludGVycHJldGVkIHZhbHVlIG9mIHRoZSB0b2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRva2VucyBleGlzdCBhcyBub2RlcyBpbiBhIGRvdWJsZS1saW5rZWQtbGlzdCBhbW9uZ3N0IGFsbCB0b2tlbnNcbiAgICogaW5jbHVkaW5nIGlnbm9yZWQgdG9rZW5zLiA8U09GPiBpcyBhbHdheXMgdGhlIGZpcnN0IG5vZGUgYW5kIDxFT0Y+XG4gICAqIHRoZSBsYXN0LlxuICAgKi9cbiAgZnVuY3Rpb24gVG9rZW4oa2luZCwgc3RhcnQsIGVuZCwgbGluZSwgY29sdW1uLCBwcmV2LCB2YWx1ZSkge1xuICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucHJldiA9IHByZXY7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gVG9rZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzIudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiB0aGlzLmtpbmQsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGxpbmU6IHRoaXMubGluZSxcbiAgICAgIGNvbHVtbjogdGhpcy5jb2x1bW5cbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBUb2tlbjtcbn0oKTsgLy8gUHJpbnQgYSBzaW1wbGlmaWVkIGZvcm0gd2hlbiBhcHBlYXJpbmcgaW4gYGluc3BlY3RgIGFuZCBgdXRpbC5pbnNwZWN0YC5cblxuZGVmaW5lSW5zcGVjdChUb2tlbik7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGUobWF5YmVOb2RlKSB7XG4gIHJldHVybiBtYXliZU5vZGUgIT0gbnVsbCAmJiB0eXBlb2YgbWF5YmVOb2RlLmtpbmQgPT09ICdzdHJpbmcnO1xufVxuLyoqXG4gKiBUaGUgbGlzdCBvZiBhbGwgcG9zc2libGUgQVNUIG5vZGUgdHlwZXMuXG4gKi9cbiIsIi8qKlxuICogUHJvZHVjZXMgdGhlIHZhbHVlIG9mIGEgYmxvY2sgc3RyaW5nIGZyb20gaXRzIHBhcnNlZCByYXcgdmFsdWUsIHNpbWlsYXIgdG9cbiAqIENvZmZlZVNjcmlwdCdzIGJsb2NrIHN0cmluZywgUHl0aG9uJ3MgZG9jc3RyaW5nIHRyaW0gb3IgUnVieSdzIHN0cmlwX2hlcmVkb2MuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRzIHRoZSBHcmFwaFFMIHNwZWMncyBCbG9ja1N0cmluZ1ZhbHVlKCkgc3RhdGljIGFsZ29yaXRobS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZGVudEJsb2NrU3RyaW5nVmFsdWUocmF3U3RyaW5nKSB7XG4gIC8vIEV4cGFuZCBhIGJsb2NrIHN0cmluZydzIHJhdyB2YWx1ZSBpbnRvIGluZGVwZW5kZW50IGxpbmVzLlxuICB2YXIgbGluZXMgPSByYXdTdHJpbmcuc3BsaXQoL1xcclxcbnxbXFxuXFxyXS9nKTsgLy8gUmVtb3ZlIGNvbW1vbiBpbmRlbnRhdGlvbiBmcm9tIGFsbCBsaW5lcyBidXQgZmlyc3QuXG5cbiAgdmFyIGNvbW1vbkluZGVudCA9IGdldEJsb2NrU3RyaW5nSW5kZW50YXRpb24obGluZXMpO1xuXG4gIGlmIChjb21tb25JbmRlbnQgIT09IDApIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5lc1tpXSA9IGxpbmVzW2ldLnNsaWNlKGNvbW1vbkluZGVudCk7XG4gICAgfVxuICB9IC8vIFJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyBibGFuayBsaW5lcy5cblxuXG4gIHdoaWxlIChsaW5lcy5sZW5ndGggPiAwICYmIGlzQmxhbmsobGluZXNbMF0pKSB7XG4gICAgbGluZXMuc2hpZnQoKTtcbiAgfVxuXG4gIHdoaWxlIChsaW5lcy5sZW5ndGggPiAwICYmIGlzQmxhbmsobGluZXNbbGluZXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgbGluZXMucG9wKCk7XG4gIH0gLy8gUmV0dXJuIGEgc3RyaW5nIG9mIHRoZSBsaW5lcyBqb2luZWQgd2l0aCBVKzAwMEEuXG5cblxuICByZXR1cm4gbGluZXMuam9pbignXFxuJyk7XG59XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCbG9ja1N0cmluZ0luZGVudGF0aW9uKGxpbmVzKSB7XG4gIHZhciBjb21tb25JbmRlbnQgPSBudWxsO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbGluZSA9IGxpbmVzW2ldO1xuICAgIHZhciBpbmRlbnQgPSBsZWFkaW5nV2hpdGVzcGFjZShsaW5lKTtcblxuICAgIGlmIChpbmRlbnQgPT09IGxpbmUubGVuZ3RoKSB7XG4gICAgICBjb250aW51ZTsgLy8gc2tpcCBlbXB0eSBsaW5lc1xuICAgIH1cblxuICAgIGlmIChjb21tb25JbmRlbnQgPT09IG51bGwgfHwgaW5kZW50IDwgY29tbW9uSW5kZW50KSB7XG4gICAgICBjb21tb25JbmRlbnQgPSBpbmRlbnQ7XG5cbiAgICAgIGlmIChjb21tb25JbmRlbnQgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbW1vbkluZGVudCA9PT0gbnVsbCA/IDAgOiBjb21tb25JbmRlbnQ7XG59XG5cbmZ1bmN0aW9uIGxlYWRpbmdXaGl0ZXNwYWNlKHN0cikge1xuICB2YXIgaSA9IDA7XG5cbiAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoICYmIChzdHJbaV0gPT09ICcgJyB8fCBzdHJbaV0gPT09ICdcXHQnKSkge1xuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiBpO1xufVxuXG5mdW5jdGlvbiBpc0JsYW5rKHN0cikge1xuICByZXR1cm4gbGVhZGluZ1doaXRlc3BhY2Uoc3RyKSA9PT0gc3RyLmxlbmd0aDtcbn1cbi8qKlxuICogUHJpbnQgYSBibG9jayBzdHJpbmcgaW4gdGhlIGluZGVudGVkIGJsb2NrIGZvcm0gYnkgYWRkaW5nIGEgbGVhZGluZyBhbmRcbiAqIHRyYWlsaW5nIGJsYW5rIGxpbmUuIEhvd2V2ZXIsIGlmIGEgYmxvY2sgc3RyaW5nIHN0YXJ0cyB3aXRoIHdoaXRlc3BhY2UgYW5kIGlzXG4gKiBhIHNpbmdsZS1saW5lLCBhZGRpbmcgYSBsZWFkaW5nIGJsYW5rIGxpbmUgd291bGQgc3RyaXAgdGhhdCB3aGl0ZXNwYWNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50QmxvY2tTdHJpbmcodmFsdWUpIHtcbiAgdmFyIGluZGVudGF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgdmFyIHByZWZlck11bHRpcGxlTGluZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICB2YXIgaXNTaW5nbGVMaW5lID0gdmFsdWUuaW5kZXhPZignXFxuJykgPT09IC0xO1xuICB2YXIgaGFzTGVhZGluZ1NwYWNlID0gdmFsdWVbMF0gPT09ICcgJyB8fCB2YWx1ZVswXSA9PT0gJ1xcdCc7XG4gIHZhciBoYXNUcmFpbGluZ1F1b3RlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcIic7XG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcXFxcJztcbiAgdmFyIHByaW50QXNNdWx0aXBsZUxpbmVzID0gIWlzU2luZ2xlTGluZSB8fCBoYXNUcmFpbGluZ1F1b3RlIHx8IGhhc1RyYWlsaW5nU2xhc2ggfHwgcHJlZmVyTXVsdGlwbGVMaW5lcztcbiAgdmFyIHJlc3VsdCA9ICcnOyAvLyBGb3JtYXQgYSBtdWx0aS1saW5lIGJsb2NrIHF1b3RlIHRvIGFjY291bnQgZm9yIGxlYWRpbmcgc3BhY2UuXG5cbiAgaWYgKHByaW50QXNNdWx0aXBsZUxpbmVzICYmICEoaXNTaW5nbGVMaW5lICYmIGhhc0xlYWRpbmdTcGFjZSkpIHtcbiAgICByZXN1bHQgKz0gJ1xcbicgKyBpbmRlbnRhdGlvbjtcbiAgfVxuXG4gIHJlc3VsdCArPSBpbmRlbnRhdGlvbiA/IHZhbHVlLnJlcGxhY2UoL1xcbi9nLCAnXFxuJyArIGluZGVudGF0aW9uKSA6IHZhbHVlO1xuXG4gIGlmIChwcmludEFzTXVsdGlwbGVMaW5lcykge1xuICAgIHJlc3VsdCArPSAnXFxuJztcbiAgfVxuXG4gIHJldHVybiAnXCJcIlwiJyArIHJlc3VsdC5yZXBsYWNlKC9cIlwiXCIvZywgJ1xcXFxcIlwiXCInKSArICdcIlwiXCInO1xufVxuIiwiLyoqXG4gKiBUaGUgc2V0IG9mIGFsbG93ZWQgZGlyZWN0aXZlIGxvY2F0aW9uIHZhbHVlcy5cbiAqL1xuZXhwb3J0IHZhciBEaXJlY3RpdmVMb2NhdGlvbiA9IE9iamVjdC5mcmVlemUoe1xuICAvLyBSZXF1ZXN0IERlZmluaXRpb25zXG4gIFFVRVJZOiAnUVVFUlknLFxuICBNVVRBVElPTjogJ01VVEFUSU9OJyxcbiAgU1VCU0NSSVBUSU9OOiAnU1VCU0NSSVBUSU9OJyxcbiAgRklFTEQ6ICdGSUVMRCcsXG4gIEZSQUdNRU5UX0RFRklOSVRJT046ICdGUkFHTUVOVF9ERUZJTklUSU9OJyxcbiAgRlJBR01FTlRfU1BSRUFEOiAnRlJBR01FTlRfU1BSRUFEJyxcbiAgSU5MSU5FX0ZSQUdNRU5UOiAnSU5MSU5FX0ZSQUdNRU5UJyxcbiAgVkFSSUFCTEVfREVGSU5JVElPTjogJ1ZBUklBQkxFX0RFRklOSVRJT04nLFxuICAvLyBUeXBlIFN5c3RlbSBEZWZpbml0aW9uc1xuICBTQ0hFTUE6ICdTQ0hFTUEnLFxuICBTQ0FMQVI6ICdTQ0FMQVInLFxuICBPQkpFQ1Q6ICdPQkpFQ1QnLFxuICBGSUVMRF9ERUZJTklUSU9OOiAnRklFTERfREVGSU5JVElPTicsXG4gIEFSR1VNRU5UX0RFRklOSVRJT046ICdBUkdVTUVOVF9ERUZJTklUSU9OJyxcbiAgSU5URVJGQUNFOiAnSU5URVJGQUNFJyxcbiAgVU5JT046ICdVTklPTicsXG4gIEVOVU06ICdFTlVNJyxcbiAgRU5VTV9WQUxVRTogJ0VOVU1fVkFMVUUnLFxuICBJTlBVVF9PQkpFQ1Q6ICdJTlBVVF9PQkpFQ1QnLFxuICBJTlBVVF9GSUVMRF9ERUZJTklUSU9OOiAnSU5QVVRfRklFTERfREVGSU5JVElPTidcbn0pO1xuLyoqXG4gKiBUaGUgZW51bSB0eXBlIHJlcHJlc2VudGluZyB0aGUgZGlyZWN0aXZlIGxvY2F0aW9uIHZhbHVlcy5cbiAqL1xuIiwiLyoqXG4gKiBUaGUgc2V0IG9mIGFsbG93ZWQga2luZCB2YWx1ZXMgZm9yIEFTVCBub2Rlcy5cbiAqL1xuZXhwb3J0IHZhciBLaW5kID0gT2JqZWN0LmZyZWV6ZSh7XG4gIC8vIE5hbWVcbiAgTkFNRTogJ05hbWUnLFxuICAvLyBEb2N1bWVudFxuICBET0NVTUVOVDogJ0RvY3VtZW50JyxcbiAgT1BFUkFUSU9OX0RFRklOSVRJT046ICdPcGVyYXRpb25EZWZpbml0aW9uJyxcbiAgVkFSSUFCTEVfREVGSU5JVElPTjogJ1ZhcmlhYmxlRGVmaW5pdGlvbicsXG4gIFNFTEVDVElPTl9TRVQ6ICdTZWxlY3Rpb25TZXQnLFxuICBGSUVMRDogJ0ZpZWxkJyxcbiAgQVJHVU1FTlQ6ICdBcmd1bWVudCcsXG4gIC8vIEZyYWdtZW50c1xuICBGUkFHTUVOVF9TUFJFQUQ6ICdGcmFnbWVudFNwcmVhZCcsXG4gIElOTElORV9GUkFHTUVOVDogJ0lubGluZUZyYWdtZW50JyxcbiAgRlJBR01FTlRfREVGSU5JVElPTjogJ0ZyYWdtZW50RGVmaW5pdGlvbicsXG4gIC8vIFZhbHVlc1xuICBWQVJJQUJMRTogJ1ZhcmlhYmxlJyxcbiAgSU5UOiAnSW50VmFsdWUnLFxuICBGTE9BVDogJ0Zsb2F0VmFsdWUnLFxuICBTVFJJTkc6ICdTdHJpbmdWYWx1ZScsXG4gIEJPT0xFQU46ICdCb29sZWFuVmFsdWUnLFxuICBOVUxMOiAnTnVsbFZhbHVlJyxcbiAgRU5VTTogJ0VudW1WYWx1ZScsXG4gIExJU1Q6ICdMaXN0VmFsdWUnLFxuICBPQkpFQ1Q6ICdPYmplY3RWYWx1ZScsXG4gIE9CSkVDVF9GSUVMRDogJ09iamVjdEZpZWxkJyxcbiAgLy8gRGlyZWN0aXZlc1xuICBESVJFQ1RJVkU6ICdEaXJlY3RpdmUnLFxuICAvLyBUeXBlc1xuICBOQU1FRF9UWVBFOiAnTmFtZWRUeXBlJyxcbiAgTElTVF9UWVBFOiAnTGlzdFR5cGUnLFxuICBOT05fTlVMTF9UWVBFOiAnTm9uTnVsbFR5cGUnLFxuICAvLyBUeXBlIFN5c3RlbSBEZWZpbml0aW9uc1xuICBTQ0hFTUFfREVGSU5JVElPTjogJ1NjaGVtYURlZmluaXRpb24nLFxuICBPUEVSQVRJT05fVFlQRV9ERUZJTklUSU9OOiAnT3BlcmF0aW9uVHlwZURlZmluaXRpb24nLFxuICAvLyBUeXBlIERlZmluaXRpb25zXG4gIFNDQUxBUl9UWVBFX0RFRklOSVRJT046ICdTY2FsYXJUeXBlRGVmaW5pdGlvbicsXG4gIE9CSkVDVF9UWVBFX0RFRklOSVRJT046ICdPYmplY3RUeXBlRGVmaW5pdGlvbicsXG4gIEZJRUxEX0RFRklOSVRJT046ICdGaWVsZERlZmluaXRpb24nLFxuICBJTlBVVF9WQUxVRV9ERUZJTklUSU9OOiAnSW5wdXRWYWx1ZURlZmluaXRpb24nLFxuICBJTlRFUkZBQ0VfVFlQRV9ERUZJTklUSU9OOiAnSW50ZXJmYWNlVHlwZURlZmluaXRpb24nLFxuICBVTklPTl9UWVBFX0RFRklOSVRJT046ICdVbmlvblR5cGVEZWZpbml0aW9uJyxcbiAgRU5VTV9UWVBFX0RFRklOSVRJT046ICdFbnVtVHlwZURlZmluaXRpb24nLFxuICBFTlVNX1ZBTFVFX0RFRklOSVRJT046ICdFbnVtVmFsdWVEZWZpbml0aW9uJyxcbiAgSU5QVVRfT0JKRUNUX1RZUEVfREVGSU5JVElPTjogJ0lucHV0T2JqZWN0VHlwZURlZmluaXRpb24nLFxuICAvLyBEaXJlY3RpdmUgRGVmaW5pdGlvbnNcbiAgRElSRUNUSVZFX0RFRklOSVRJT046ICdEaXJlY3RpdmVEZWZpbml0aW9uJyxcbiAgLy8gVHlwZSBTeXN0ZW0gRXh0ZW5zaW9uc1xuICBTQ0hFTUFfRVhURU5TSU9OOiAnU2NoZW1hRXh0ZW5zaW9uJyxcbiAgLy8gVHlwZSBFeHRlbnNpb25zXG4gIFNDQUxBUl9UWVBFX0VYVEVOU0lPTjogJ1NjYWxhclR5cGVFeHRlbnNpb24nLFxuICBPQkpFQ1RfVFlQRV9FWFRFTlNJT046ICdPYmplY3RUeXBlRXh0ZW5zaW9uJyxcbiAgSU5URVJGQUNFX1RZUEVfRVhURU5TSU9OOiAnSW50ZXJmYWNlVHlwZUV4dGVuc2lvbicsXG4gIFVOSU9OX1RZUEVfRVhURU5TSU9OOiAnVW5pb25UeXBlRXh0ZW5zaW9uJyxcbiAgRU5VTV9UWVBFX0VYVEVOU0lPTjogJ0VudW1UeXBlRXh0ZW5zaW9uJyxcbiAgSU5QVVRfT0JKRUNUX1RZUEVfRVhURU5TSU9OOiAnSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uJ1xufSk7XG4vKipcbiAqIFRoZSBlbnVtIHR5cGUgcmVwcmVzZW50aW5nIHRoZSBwb3NzaWJsZSBraW5kIHZhbHVlcyBvZiBBU1Qgbm9kZXMuXG4gKi9cbiIsImltcG9ydCB7IHN5bnRheEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL3N5bnRheEVycm9yLm1qc1wiO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi9hc3QubWpzXCI7XG5pbXBvcnQgeyBUb2tlbktpbmQgfSBmcm9tIFwiLi90b2tlbktpbmQubWpzXCI7XG5pbXBvcnQgeyBkZWRlbnRCbG9ja1N0cmluZ1ZhbHVlIH0gZnJvbSBcIi4vYmxvY2tTdHJpbmcubWpzXCI7XG4vKipcbiAqIEdpdmVuIGEgU291cmNlIG9iamVjdCwgY3JlYXRlcyBhIExleGVyIGZvciB0aGF0IHNvdXJjZS5cbiAqIEEgTGV4ZXIgaXMgYSBzdGF0ZWZ1bCBzdHJlYW0gZ2VuZXJhdG9yIGluIHRoYXQgZXZlcnkgdGltZVxuICogaXQgaXMgYWR2YW5jZWQsIGl0IHJldHVybnMgdGhlIG5leHQgdG9rZW4gaW4gdGhlIFNvdXJjZS4gQXNzdW1pbmcgdGhlXG4gKiBzb3VyY2UgbGV4ZXMsIHRoZSBmaW5hbCBUb2tlbiBlbWl0dGVkIGJ5IHRoZSBsZXhlciB3aWxsIGJlIG9mIGtpbmRcbiAqIEVPRiwgYWZ0ZXIgd2hpY2ggdGhlIGxleGVyIHdpbGwgcmVwZWF0ZWRseSByZXR1cm4gdGhlIHNhbWUgRU9GIHRva2VuXG4gKiB3aGVuZXZlciBjYWxsZWQuXG4gKi9cblxuZXhwb3J0IHZhciBMZXhlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBUaGUgcHJldmlvdXNseSBmb2N1c2VkIG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBmb2N1c2VkIG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlICgxLWluZGV4ZWQpIGxpbmUgY29udGFpbmluZyB0aGUgY3VycmVudCB0b2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoZSBjdXJyZW50IGxpbmUgYmVnaW5zLlxuICAgKi9cbiAgZnVuY3Rpb24gTGV4ZXIoc291cmNlKSB7XG4gICAgdmFyIHN0YXJ0T2ZGaWxlVG9rZW4gPSBuZXcgVG9rZW4oVG9rZW5LaW5kLlNPRiwgMCwgMCwgMCwgMCwgbnVsbCk7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5sYXN0VG9rZW4gPSBzdGFydE9mRmlsZVRva2VuO1xuICAgIHRoaXMudG9rZW4gPSBzdGFydE9mRmlsZVRva2VuO1xuICAgIHRoaXMubGluZSA9IDE7XG4gICAgdGhpcy5saW5lU3RhcnQgPSAwO1xuICB9XG4gIC8qKlxuICAgKiBBZHZhbmNlcyB0aGUgdG9rZW4gc3RyZWFtIHRvIHRoZSBuZXh0IG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBMZXhlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkdmFuY2UgPSBmdW5jdGlvbiBhZHZhbmNlKCkge1xuICAgIHRoaXMubGFzdFRva2VuID0gdGhpcy50b2tlbjtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2VuID0gdGhpcy5sb29rYWhlYWQoKTtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbiAgLyoqXG4gICAqIExvb2tzIGFoZWFkIGFuZCByZXR1cm5zIHRoZSBuZXh0IG5vbi1pZ25vcmVkIHRva2VuLCBidXQgZG9lcyBub3QgY2hhbmdlXG4gICAqIHRoZSBzdGF0ZSBvZiBMZXhlci5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubG9va2FoZWFkID0gZnVuY3Rpb24gbG9va2FoZWFkKCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCAhPT0gVG9rZW5LaW5kLkVPRikge1xuICAgICAgZG8ge1xuICAgICAgICB2YXIgX3Rva2VuJG5leHQ7XG5cbiAgICAgICAgLy8gTm90ZTogbmV4dCBpcyBvbmx5IG11dGFibGUgZHVyaW5nIHBhcnNpbmcsIHNvIHdlIGNhc3QgdG8gYWxsb3cgdGhpcy5cbiAgICAgICAgdG9rZW4gPSAoX3Rva2VuJG5leHQgPSB0b2tlbi5uZXh0KSAhPT0gbnVsbCAmJiBfdG9rZW4kbmV4dCAhPT0gdm9pZCAwID8gX3Rva2VuJG5leHQgOiB0b2tlbi5uZXh0ID0gcmVhZFRva2VuKHRoaXMsIHRva2VuKTtcbiAgICAgIH0gd2hpbGUgKHRva2VuLmtpbmQgPT09IFRva2VuS2luZC5DT01NRU5UKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH07XG5cbiAgcmV0dXJuIExleGVyO1xufSgpO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQdW5jdHVhdG9yVG9rZW5LaW5kKGtpbmQpIHtcbiAgcmV0dXJuIGtpbmQgPT09IFRva2VuS2luZC5CQU5HIHx8IGtpbmQgPT09IFRva2VuS2luZC5ET0xMQVIgfHwga2luZCA9PT0gVG9rZW5LaW5kLkFNUCB8fCBraW5kID09PSBUb2tlbktpbmQuUEFSRU5fTCB8fCBraW5kID09PSBUb2tlbktpbmQuUEFSRU5fUiB8fCBraW5kID09PSBUb2tlbktpbmQuU1BSRUFEIHx8IGtpbmQgPT09IFRva2VuS2luZC5DT0xPTiB8fCBraW5kID09PSBUb2tlbktpbmQuRVFVQUxTIHx8IGtpbmQgPT09IFRva2VuS2luZC5BVCB8fCBraW5kID09PSBUb2tlbktpbmQuQlJBQ0tFVF9MIHx8IGtpbmQgPT09IFRva2VuS2luZC5CUkFDS0VUX1IgfHwga2luZCA9PT0gVG9rZW5LaW5kLkJSQUNFX0wgfHwga2luZCA9PT0gVG9rZW5LaW5kLlBJUEUgfHwga2luZCA9PT0gVG9rZW5LaW5kLkJSQUNFX1I7XG59XG5cbmZ1bmN0aW9uIHByaW50Q2hhckNvZGUoY29kZSkge1xuICByZXR1cm4gKC8vIE5hTi91bmRlZmluZWQgcmVwcmVzZW50cyBhY2Nlc3MgYmV5b25kIHRoZSBlbmQgb2YgdGhlIGZpbGUuXG4gICAgaXNOYU4oY29kZSkgPyBUb2tlbktpbmQuRU9GIDogLy8gVHJ1c3QgSlNPTiBmb3IgQVNDSUkuXG4gICAgY29kZSA8IDB4MDA3ZiA/IEpTT04uc3RyaW5naWZ5KFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpIDogLy8gT3RoZXJ3aXNlIHByaW50IHRoZSBlc2NhcGVkIGZvcm0uXG4gICAgXCJcXFwiXFxcXHVcIi5jb25jYXQoKCcwMCcgKyBjb2RlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtNCksIFwiXFxcIlwiKVxuICApO1xufVxuLyoqXG4gKiBHZXRzIHRoZSBuZXh0IHRva2VuIGZyb20gdGhlIHNvdXJjZSBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24uXG4gKlxuICogVGhpcyBza2lwcyBvdmVyIHdoaXRlc3BhY2UgdW50aWwgaXQgZmluZHMgdGhlIG5leHQgbGV4YWJsZSB0b2tlbiwgdGhlbiBsZXhlc1xuICogcHVuY3R1YXRvcnMgaW1tZWRpYXRlbHkgb3IgY2FsbHMgdGhlIGFwcHJvcHJpYXRlIGhlbHBlciBmdW5jdGlvbiBmb3IgbW9yZVxuICogY29tcGxpY2F0ZWQgdG9rZW5zLlxuICovXG5cblxuZnVuY3Rpb24gcmVhZFRva2VuKGxleGVyLCBwcmV2KSB7XG4gIHZhciBzb3VyY2UgPSBsZXhlci5zb3VyY2U7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBib2R5TGVuZ3RoID0gYm9keS5sZW5ndGg7XG4gIHZhciBwb3MgPSBwb3NpdGlvbkFmdGVyV2hpdGVzcGFjZShib2R5LCBwcmV2LmVuZCwgbGV4ZXIpO1xuICB2YXIgbGluZSA9IGxleGVyLmxpbmU7XG4gIHZhciBjb2wgPSAxICsgcG9zIC0gbGV4ZXIubGluZVN0YXJ0O1xuXG4gIGlmIChwb3MgPj0gYm9keUxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkVPRiwgYm9keUxlbmd0aCwgYm9keUxlbmd0aCwgbGluZSwgY29sLCBwcmV2KTtcbiAgfVxuXG4gIHZhciBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvcyk7IC8vIFNvdXJjZUNoYXJhY3RlclxuXG4gIHN3aXRjaCAoY29kZSkge1xuICAgIC8vICFcbiAgICBjYXNlIDMzOlxuICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQkFORywgcG9zLCBwb3MgKyAxLCBsaW5lLCBjb2wsIHByZXYpO1xuICAgIC8vICNcblxuICAgIGNhc2UgMzU6XG4gICAgICByZXR1cm4gcmVhZENvbW1lbnQoc291cmNlLCBwb3MsIGxpbmUsIGNvbCwgcHJldik7XG4gICAgLy8gJFxuXG4gICAgY2FzZSAzNjpcbiAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkRPTExBUiwgcG9zLCBwb3MgKyAxLCBsaW5lLCBjb2wsIHByZXYpO1xuICAgIC8vICZcblxuICAgIGNhc2UgMzg6XG4gICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5BTVAsIHBvcywgcG9zICsgMSwgbGluZSwgY29sLCBwcmV2KTtcbiAgICAvLyAoXG5cbiAgICBjYXNlIDQwOlxuICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuUEFSRU5fTCwgcG9zLCBwb3MgKyAxLCBsaW5lLCBjb2wsIHByZXYpO1xuICAgIC8vIClcblxuICAgIGNhc2UgNDE6XG4gICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5QQVJFTl9SLCBwb3MsIHBvcyArIDEsIGxpbmUsIGNvbCwgcHJldik7XG4gICAgLy8gLlxuXG4gICAgY2FzZSA0NjpcbiAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDQ2ICYmIGJvZHkuY2hhckNvZGVBdChwb3MgKyAyKSA9PT0gNDYpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuU1BSRUFELCBwb3MsIHBvcyArIDMsIGxpbmUsIGNvbCwgcHJldik7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIC8vIDpcblxuICAgIGNhc2UgNTg6XG4gICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5DT0xPTiwgcG9zLCBwb3MgKyAxLCBsaW5lLCBjb2wsIHByZXYpO1xuICAgIC8vID1cblxuICAgIGNhc2UgNjE6XG4gICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5FUVVBTFMsIHBvcywgcG9zICsgMSwgbGluZSwgY29sLCBwcmV2KTtcbiAgICAvLyBAXG5cbiAgICBjYXNlIDY0OlxuICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQVQsIHBvcywgcG9zICsgMSwgbGluZSwgY29sLCBwcmV2KTtcbiAgICAvLyBbXG5cbiAgICBjYXNlIDkxOlxuICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9MLCBwb3MsIHBvcyArIDEsIGxpbmUsIGNvbCwgcHJldik7XG4gICAgLy8gXVxuXG4gICAgY2FzZSA5MzpcbiAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkJSQUNLRVRfUiwgcG9zLCBwb3MgKyAxLCBsaW5lLCBjb2wsIHByZXYpO1xuICAgIC8vIHtcblxuICAgIGNhc2UgMTIzOlxuICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0VfTCwgcG9zLCBwb3MgKyAxLCBsaW5lLCBjb2wsIHByZXYpO1xuICAgIC8vIHxcblxuICAgIGNhc2UgMTI0OlxuICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuUElQRSwgcG9zLCBwb3MgKyAxLCBsaW5lLCBjb2wsIHByZXYpO1xuICAgIC8vIH1cblxuICAgIGNhc2UgMTI1OlxuICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0VfUiwgcG9zLCBwb3MgKyAxLCBsaW5lLCBjb2wsIHByZXYpO1xuICAgIC8vIEEtWiBfIGEtelxuXG4gICAgY2FzZSA2NTpcbiAgICBjYXNlIDY2OlxuICAgIGNhc2UgNjc6XG4gICAgY2FzZSA2ODpcbiAgICBjYXNlIDY5OlxuICAgIGNhc2UgNzA6XG4gICAgY2FzZSA3MTpcbiAgICBjYXNlIDcyOlxuICAgIGNhc2UgNzM6XG4gICAgY2FzZSA3NDpcbiAgICBjYXNlIDc1OlxuICAgIGNhc2UgNzY6XG4gICAgY2FzZSA3NzpcbiAgICBjYXNlIDc4OlxuICAgIGNhc2UgNzk6XG4gICAgY2FzZSA4MDpcbiAgICBjYXNlIDgxOlxuICAgIGNhc2UgODI6XG4gICAgY2FzZSA4MzpcbiAgICBjYXNlIDg0OlxuICAgIGNhc2UgODU6XG4gICAgY2FzZSA4NjpcbiAgICBjYXNlIDg3OlxuICAgIGNhc2UgODg6XG4gICAgY2FzZSA4OTpcbiAgICBjYXNlIDkwOlxuICAgIGNhc2UgOTU6XG4gICAgY2FzZSA5NzpcbiAgICBjYXNlIDk4OlxuICAgIGNhc2UgOTk6XG4gICAgY2FzZSAxMDA6XG4gICAgY2FzZSAxMDE6XG4gICAgY2FzZSAxMDI6XG4gICAgY2FzZSAxMDM6XG4gICAgY2FzZSAxMDQ6XG4gICAgY2FzZSAxMDU6XG4gICAgY2FzZSAxMDY6XG4gICAgY2FzZSAxMDc6XG4gICAgY2FzZSAxMDg6XG4gICAgY2FzZSAxMDk6XG4gICAgY2FzZSAxMTA6XG4gICAgY2FzZSAxMTE6XG4gICAgY2FzZSAxMTI6XG4gICAgY2FzZSAxMTM6XG4gICAgY2FzZSAxMTQ6XG4gICAgY2FzZSAxMTU6XG4gICAgY2FzZSAxMTY6XG4gICAgY2FzZSAxMTc6XG4gICAgY2FzZSAxMTg6XG4gICAgY2FzZSAxMTk6XG4gICAgY2FzZSAxMjA6XG4gICAgY2FzZSAxMjE6XG4gICAgY2FzZSAxMjI6XG4gICAgICByZXR1cm4gcmVhZE5hbWUoc291cmNlLCBwb3MsIGxpbmUsIGNvbCwgcHJldik7XG4gICAgLy8gLSAwLTlcblxuICAgIGNhc2UgNDU6XG4gICAgY2FzZSA0ODpcbiAgICBjYXNlIDQ5OlxuICAgIGNhc2UgNTA6XG4gICAgY2FzZSA1MTpcbiAgICBjYXNlIDUyOlxuICAgIGNhc2UgNTM6XG4gICAgY2FzZSA1NDpcbiAgICBjYXNlIDU1OlxuICAgIGNhc2UgNTY6XG4gICAgY2FzZSA1NzpcbiAgICAgIHJldHVybiByZWFkTnVtYmVyKHNvdXJjZSwgcG9zLCBjb2RlLCBsaW5lLCBjb2wsIHByZXYpO1xuICAgIC8vIFwiXG5cbiAgICBjYXNlIDM0OlxuICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvcyArIDIpID09PSAzNCkge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2NrU3RyaW5nKHNvdXJjZSwgcG9zLCBsaW5lLCBjb2wsIHByZXYsIGxleGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlYWRTdHJpbmcoc291cmNlLCBwb3MsIGxpbmUsIGNvbCwgcHJldik7XG4gIH1cblxuICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvcywgdW5leHBlY3RlZENoYXJhY3Rlck1lc3NhZ2UoY29kZSkpO1xufVxuLyoqXG4gKiBSZXBvcnQgYSBtZXNzYWdlIHRoYXQgYW4gdW5leHBlY3RlZCBjaGFyYWN0ZXIgd2FzIGVuY291bnRlcmVkLlxuICovXG5cblxuZnVuY3Rpb24gdW5leHBlY3RlZENoYXJhY3Rlck1lc3NhZ2UoY29kZSkge1xuICBpZiAoY29kZSA8IDB4MDAyMCAmJiBjb2RlICE9PSAweDAwMDkgJiYgY29kZSAhPT0gMHgwMDBhICYmIGNvZGUgIT09IDB4MDAwZCkge1xuICAgIHJldHVybiBcIkNhbm5vdCBjb250YWluIHRoZSBpbnZhbGlkIGNoYXJhY3RlciBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09IDM5KSB7XG4gICAgLy8gJ1xuICAgIHJldHVybiAnVW5leHBlY3RlZCBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyIChcXCcpLCBkaWQgeW91IG1lYW4gdG8gdXNlIGEgZG91YmxlIHF1b3RlIChcIik/JztcbiAgfVxuXG4gIHJldHVybiBcIkNhbm5vdCBwYXJzZSB0aGUgdW5leHBlY3RlZCBjaGFyYWN0ZXIgXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKTtcbn1cbi8qKlxuICogUmVhZHMgZnJvbSBib2R5IHN0YXJ0aW5nIGF0IHN0YXJ0UG9zaXRpb24gdW50aWwgaXQgZmluZHMgYSBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyLCB0aGVuIHJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoYXQgY2hhcmFjdGVyIGZvciBsZXhpbmcuXG4gKi9cblxuXG5mdW5jdGlvbiBwb3NpdGlvbkFmdGVyV2hpdGVzcGFjZShib2R5LCBzdGFydFBvc2l0aW9uLCBsZXhlcikge1xuICB2YXIgYm9keUxlbmd0aCA9IGJvZHkubGVuZ3RoO1xuICB2YXIgcG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuXG4gIHdoaWxlIChwb3NpdGlvbiA8IGJvZHlMZW5ndGgpIHtcbiAgICB2YXIgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbik7IC8vIHRhYiB8IHNwYWNlIHwgY29tbWEgfCBCT01cblxuICAgIGlmIChjb2RlID09PSA5IHx8IGNvZGUgPT09IDMyIHx8IGNvZGUgPT09IDQ0IHx8IGNvZGUgPT09IDB4ZmVmZikge1xuICAgICAgKytwb3NpdGlvbjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDEwKSB7XG4gICAgICAvLyBuZXcgbGluZVxuICAgICAgKytwb3NpdGlvbjtcbiAgICAgICsrbGV4ZXIubGluZTtcbiAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMTMpIHtcbiAgICAgIC8vIGNhcnJpYWdlIHJldHVyblxuICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpID09PSAxMCkge1xuICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKytwb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgKytsZXhlci5saW5lO1xuICAgICAgbGV4ZXIubGluZVN0YXJ0ID0gcG9zaXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cbi8qKlxuICogUmVhZHMgYSBjb21tZW50IHRva2VuIGZyb20gdGhlIHNvdXJjZSBmaWxlLlxuICpcbiAqICNbXFx1MDAwOVxcdTAwMjAtXFx1RkZGRl0qXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkQ29tbWVudChzb3VyY2UsIHN0YXJ0LCBsaW5lLCBjb2wsIHByZXYpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIGNvZGU7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0O1xuXG4gIGRvIHtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICB9IHdoaWxlICghaXNOYU4oY29kZSkgJiYgKCAvLyBTb3VyY2VDaGFyYWN0ZXIgYnV0IG5vdCBMaW5lVGVybWluYXRvclxuICBjb2RlID4gMHgwMDFmIHx8IGNvZGUgPT09IDB4MDAwOSkpO1xuXG4gIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkNPTU1FTlQsIHN0YXJ0LCBwb3NpdGlvbiwgbGluZSwgY29sLCBwcmV2LCBib2R5LnNsaWNlKHN0YXJ0ICsgMSwgcG9zaXRpb24pKTtcbn1cbi8qKlxuICogUmVhZHMgYSBudW1iZXIgdG9rZW4gZnJvbSB0aGUgc291cmNlIGZpbGUsIGVpdGhlciBhIGZsb2F0XG4gKiBvciBhbiBpbnQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgYSBkZWNpbWFsIHBvaW50IGFwcGVhcnMuXG4gKlxuICogSW50OiAgIC0/KDB8WzEtOV1bMC05XSopXG4gKiBGbG9hdDogLT8oMHxbMS05XVswLTldKikoXFwuWzAtOV0rKT8oKEV8ZSkoK3wtKT9bMC05XSspP1xuICovXG5cblxuZnVuY3Rpb24gcmVhZE51bWJlcihzb3VyY2UsIHN0YXJ0LCBmaXJzdENvZGUsIGxpbmUsIGNvbCwgcHJldikge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgY29kZSA9IGZpcnN0Q29kZTtcbiAgdmFyIHBvc2l0aW9uID0gc3RhcnQ7XG4gIHZhciBpc0Zsb2F0ID0gZmFsc2U7XG5cbiAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgLy8gLVxuICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gNDgpIHtcbiAgICAvLyAwXG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcblxuICAgIGlmIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBudW1iZXIsIHVuZXhwZWN0ZWQgZGlnaXQgYWZ0ZXIgMDogXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBvc2l0aW9uID0gcmVhZERpZ2l0cyhzb3VyY2UsIHBvc2l0aW9uLCBjb2RlKTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChjb2RlID09PSA0Nikge1xuICAgIC8vIC5cbiAgICBpc0Zsb2F0ID0gdHJ1ZTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICAgIHBvc2l0aW9uID0gcmVhZERpZ2l0cyhzb3VyY2UsIHBvc2l0aW9uLCBjb2RlKTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChjb2RlID09PSA2OSB8fCBjb2RlID09PSAxMDEpIHtcbiAgICAvLyBFIGVcbiAgICBpc0Zsb2F0ID0gdHJ1ZTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuXG4gICAgaWYgKGNvZGUgPT09IDQzIHx8IGNvZGUgPT09IDQ1KSB7XG4gICAgICAvLyArIC1cbiAgICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgcG9zaXRpb24gPSByZWFkRGlnaXRzKHNvdXJjZSwgcG9zaXRpb24sIGNvZGUpO1xuICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICB9IC8vIE51bWJlcnMgY2Fubm90IGJlIGZvbGxvd2VkIGJ5IC4gb3IgTmFtZVN0YXJ0XG5cblxuICBpZiAoY29kZSA9PT0gNDYgfHwgaXNOYW1lU3RhcnQoY29kZSkpIHtcbiAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgbnVtYmVyLCBleHBlY3RlZCBkaWdpdCBidXQgZ290OiBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVG9rZW4oaXNGbG9hdCA/IFRva2VuS2luZC5GTE9BVCA6IFRva2VuS2luZC5JTlQsIHN0YXJ0LCBwb3NpdGlvbiwgbGluZSwgY29sLCBwcmV2LCBib2R5LnNsaWNlKHN0YXJ0LCBwb3NpdGlvbikpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXcgcG9zaXRpb24gaW4gdGhlIHNvdXJjZSBhZnRlciByZWFkaW5nIGRpZ2l0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWREaWdpdHMoc291cmNlLCBzdGFydCwgZmlyc3RDb2RlKSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0O1xuICB2YXIgY29kZSA9IGZpcnN0Q29kZTtcblxuICBpZiAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB7XG4gICAgLy8gMCAtIDlcbiAgICBkbyB7XG4gICAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICAgIH0gd2hpbGUgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1Nyk7IC8vIDAgLSA5XG5cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBudW1iZXIsIGV4cGVjdGVkIGRpZ2l0IGJ1dCBnb3Q6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xufVxuLyoqXG4gKiBSZWFkcyBhIHN0cmluZyB0b2tlbiBmcm9tIHRoZSBzb3VyY2UgZmlsZS5cbiAqXG4gKiBcIihbXlwiXFxcXFxcdTAwMEFcXHUwMDBEXXwoXFxcXCh1WzAtOWEtZkEtRl17NH18W1wiXFxcXC9iZm5ydF0pKSkqXCJcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWRTdHJpbmcoc291cmNlLCBzdGFydCwgbGluZSwgY29sLCBwcmV2KSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0ICsgMTtcbiAgdmFyIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgdmFyIGNvZGUgPSAwO1xuICB2YXIgdmFsdWUgPSAnJztcblxuICB3aGlsZSAocG9zaXRpb24gPCBib2R5Lmxlbmd0aCAmJiAhaXNOYU4oY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbikpICYmIC8vIG5vdCBMaW5lVGVybWluYXRvclxuICBjb2RlICE9PSAweDAwMGEgJiYgY29kZSAhPT0gMHgwMDBkKSB7XG4gICAgLy8gQ2xvc2luZyBRdW90ZSAoXCIpXG4gICAgaWYgKGNvZGUgPT09IDM0KSB7XG4gICAgICB2YWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLlNUUklORywgc3RhcnQsIHBvc2l0aW9uICsgMSwgbGluZSwgY29sLCBwcmV2LCB2YWx1ZSk7XG4gICAgfSAvLyBTb3VyY2VDaGFyYWN0ZXJcblxuXG4gICAgaWYgKGNvZGUgPCAweDAwMjAgJiYgY29kZSAhPT0gMHgwMDA5KSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIHdpdGhpbiBTdHJpbmc6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgIH1cblxuICAgICsrcG9zaXRpb247XG5cbiAgICBpZiAoY29kZSA9PT0gOTIpIHtcbiAgICAgIC8vIFxcXG4gICAgICB2YWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uIC0gMSk7XG4gICAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcblxuICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgdmFsdWUgKz0gJ1wiJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgIHZhbHVlICs9ICcvJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgIHZhbHVlICs9ICdcXFxcJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgIHZhbHVlICs9ICdcXGInO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIHZhbHVlICs9ICdcXGYnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTEwOlxuICAgICAgICAgIHZhbHVlICs9ICdcXG4nO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE0OlxuICAgICAgICAgIHZhbHVlICs9ICdcXHInO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgIHZhbHVlICs9ICdcXHQnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE3OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIHVYWFhYXG4gICAgICAgICAgICB2YXIgY2hhckNvZGUgPSB1bmlDaGFyQ29kZShib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSwgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMiksIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDMpLCBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyA0KSk7XG5cbiAgICAgICAgICAgIGlmIChjaGFyQ29kZSA8IDApIHtcbiAgICAgICAgICAgICAgdmFyIGludmFsaWRTZXF1ZW5jZSA9IGJvZHkuc2xpY2UocG9zaXRpb24gKyAxLCBwb3NpdGlvbiArIDUpO1xuICAgICAgICAgICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZTogXFxcXHVcIi5jb25jYXQoaW52YWxpZFNlcXVlbmNlLCBcIi5cIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZTogXFxcXFwiLmNvbmNhdChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICArK3Bvc2l0aW9uO1xuICAgICAgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sICdVbnRlcm1pbmF0ZWQgc3RyaW5nLicpO1xufVxuLyoqXG4gKiBSZWFkcyBhIGJsb2NrIHN0cmluZyB0b2tlbiBmcm9tIHRoZSBzb3VyY2UgZmlsZS5cbiAqXG4gKiBcIlwiXCIoXCI/XCI/KFxcXFxcIlwiXCJ8XFxcXCg/IT1cIlwiXCIpfFteXCJcXFxcXSkpKlwiXCJcIlxuICovXG5cblxuZnVuY3Rpb24gcmVhZEJsb2NrU3RyaW5nKHNvdXJjZSwgc3RhcnQsIGxpbmUsIGNvbCwgcHJldiwgbGV4ZXIpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIHBvc2l0aW9uID0gc3RhcnQgKyAzO1xuICB2YXIgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICB2YXIgY29kZSA9IDA7XG4gIHZhciByYXdWYWx1ZSA9ICcnO1xuXG4gIHdoaWxlIChwb3NpdGlvbiA8IGJvZHkubGVuZ3RoICYmICFpc05hTihjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKSkpIHtcbiAgICAvLyBDbG9zaW5nIFRyaXBsZS1RdW90ZSAoXCJcIlwiKVxuICAgIGlmIChjb2RlID09PSAzNCAmJiBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMikgPT09IDM0KSB7XG4gICAgICByYXdWYWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkJMT0NLX1NUUklORywgc3RhcnQsIHBvc2l0aW9uICsgMywgbGluZSwgY29sLCBwcmV2LCBkZWRlbnRCbG9ja1N0cmluZ1ZhbHVlKHJhd1ZhbHVlKSk7XG4gICAgfSAvLyBTb3VyY2VDaGFyYWN0ZXJcblxuXG4gICAgaWYgKGNvZGUgPCAweDAwMjAgJiYgY29kZSAhPT0gMHgwMDA5ICYmIGNvZGUgIT09IDB4MDAwYSAmJiBjb2RlICE9PSAweDAwMGQpIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBjaGFyYWN0ZXIgd2l0aGluIFN0cmluZzogXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDEwKSB7XG4gICAgICAvLyBuZXcgbGluZVxuICAgICAgKytwb3NpdGlvbjtcbiAgICAgICsrbGV4ZXIubGluZTtcbiAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMTMpIHtcbiAgICAgIC8vIGNhcnJpYWdlIHJldHVyblxuICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpID09PSAxMCkge1xuICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKytwb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgKytsZXhlci5saW5lO1xuICAgICAgbGV4ZXIubGluZVN0YXJ0ID0gcG9zaXRpb247XG4gICAgfSBlbHNlIGlmICggLy8gRXNjYXBlIFRyaXBsZS1RdW90ZSAoXFxcIlwiXCIpXG4gICAgY29kZSA9PT0gOTIgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkgPT09IDM0ICYmIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDIpID09PSAzNCAmJiBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAzKSA9PT0gMzQpIHtcbiAgICAgIHJhd1ZhbHVlICs9IGJvZHkuc2xpY2UoY2h1bmtTdGFydCwgcG9zaXRpb24pICsgJ1wiXCJcIic7XG4gICAgICBwb3NpdGlvbiArPSA0O1xuICAgICAgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICArK3Bvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sICdVbnRlcm1pbmF0ZWQgc3RyaW5nLicpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBmb3VyIGhleGFkZWNpbWFsIGNoYXJzIHRvIHRoZSBpbnRlZ2VyIHRoYXQgdGhlXG4gKiBzdHJpbmcgcmVwcmVzZW50cy4gRm9yIGV4YW1wbGUsIHVuaUNoYXJDb2RlKCcwJywnMCcsJzAnLCdmJylcbiAqIHdpbGwgcmV0dXJuIDE1LCBhbmQgdW5pQ2hhckNvZGUoJzAnLCcwJywnZicsJ2YnKSByZXR1cm5zIDI1NS5cbiAqXG4gKiBSZXR1cm5zIGEgbmVnYXRpdmUgbnVtYmVyIG9uIGVycm9yLCBpZiBhIGNoYXIgd2FzIGludmFsaWQuXG4gKlxuICogVGhpcyBpcyBpbXBsZW1lbnRlZCBieSBub3RpbmcgdGhhdCBjaGFyMmhleCgpIHJldHVybnMgLTEgb24gZXJyb3IsXG4gKiB3aGljaCBtZWFucyB0aGUgcmVzdWx0IG9mIE9SaW5nIHRoZSBjaGFyMmhleCgpIHdpbGwgYWxzbyBiZSBuZWdhdGl2ZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHVuaUNoYXJDb2RlKGEsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGNoYXIyaGV4KGEpIDw8IDEyIHwgY2hhcjJoZXgoYikgPDwgOCB8IGNoYXIyaGV4KGMpIDw8IDQgfCBjaGFyMmhleChkKTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBoZXggY2hhcmFjdGVyIHRvIGl0cyBpbnRlZ2VyIHZhbHVlLlxuICogJzAnIGJlY29tZXMgMCwgJzknIGJlY29tZXMgOVxuICogJ0EnIGJlY29tZXMgMTAsICdGJyBiZWNvbWVzIDE1XG4gKiAnYScgYmVjb21lcyAxMCwgJ2YnIGJlY29tZXMgMTVcbiAqXG4gKiBSZXR1cm5zIC0xIG9uIGVycm9yLlxuICovXG5cblxuZnVuY3Rpb24gY2hhcjJoZXgoYSkge1xuICByZXR1cm4gYSA+PSA0OCAmJiBhIDw9IDU3ID8gYSAtIDQ4IC8vIDAtOVxuICA6IGEgPj0gNjUgJiYgYSA8PSA3MCA/IGEgLSA1NSAvLyBBLUZcbiAgOiBhID49IDk3ICYmIGEgPD0gMTAyID8gYSAtIDg3IC8vIGEtZlxuICA6IC0xO1xufVxuLyoqXG4gKiBSZWFkcyBhbiBhbHBoYW51bWVyaWMgKyB1bmRlcnNjb3JlIG5hbWUgZnJvbSB0aGUgc291cmNlLlxuICpcbiAqIFtfQS1aYS16XVtfMC05QS1aYS16XSpcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWROYW1lKHNvdXJjZSwgc3RhcnQsIGxpbmUsIGNvbCwgcHJldikge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgYm9keUxlbmd0aCA9IGJvZHkubGVuZ3RoO1xuICB2YXIgcG9zaXRpb24gPSBzdGFydCArIDE7XG4gIHZhciBjb2RlID0gMDtcblxuICB3aGlsZSAocG9zaXRpb24gIT09IGJvZHlMZW5ndGggJiYgIWlzTmFOKGNvZGUgPSBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24pKSAmJiAoY29kZSA9PT0gOTUgfHwgLy8gX1xuICBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgfHwgLy8gMC05XG4gIGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCB8fCAvLyBBLVpcbiAgY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgLy8gYS16XG4gICkge1xuICAgICsrcG9zaXRpb247XG4gIH1cblxuICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5OQU1FLCBzdGFydCwgcG9zaXRpb24sIGxpbmUsIGNvbCwgcHJldiwgYm9keS5zbGljZShzdGFydCwgcG9zaXRpb24pKTtcbn0gLy8gXyBBLVogYS16XG5cblxuZnVuY3Rpb24gaXNOYW1lU3RhcnQoY29kZSkge1xuICByZXR1cm4gY29kZSA9PT0gOTUgfHwgY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwIHx8IGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjI7XG59XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBsb2NhdGlvbiBpbiBhIFNvdXJjZS5cbiAqL1xuXG4vKipcbiAqIFRha2VzIGEgU291cmNlIGFuZCBhIFVURi04IGNoYXJhY3RlciBvZmZzZXQsIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nXG4gKiBsaW5lIGFuZCBjb2x1bW4gYXMgYSBTb3VyY2VMb2NhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uKHNvdXJjZSwgcG9zaXRpb24pIHtcbiAgdmFyIGxpbmVSZWdleHAgPSAvXFxyXFxufFtcXG5cXHJdL2c7XG4gIHZhciBsaW5lID0gMTtcbiAgdmFyIGNvbHVtbiA9IHBvc2l0aW9uICsgMTtcbiAgdmFyIG1hdGNoO1xuXG4gIHdoaWxlICgobWF0Y2ggPSBsaW5lUmVnZXhwLmV4ZWMoc291cmNlLmJvZHkpKSAmJiBtYXRjaC5pbmRleCA8IHBvc2l0aW9uKSB7XG4gICAgbGluZSArPSAxO1xuICAgIGNvbHVtbiA9IHBvc2l0aW9uICsgMSAtIChtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpbmU6IGxpbmUsXG4gICAgY29sdW1uOiBjb2x1bW5cbiAgfTtcbn1cbiIsImltcG9ydCBpbnNwZWN0IGZyb20gXCIuLi9qc3V0aWxzL2luc3BlY3QubWpzXCI7XG5pbXBvcnQgZGV2QXNzZXJ0IGZyb20gXCIuLi9qc3V0aWxzL2RldkFzc2VydC5tanNcIjtcbmltcG9ydCB7IHN5bnRheEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL3N5bnRheEVycm9yLm1qc1wiO1xuaW1wb3J0IHsgS2luZCB9IGZyb20gXCIuL2tpbmRzLm1qc1wiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi9hc3QubWpzXCI7XG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tIFwiLi9zb3VyY2UubWpzXCI7XG5pbXBvcnQgeyBUb2tlbktpbmQgfSBmcm9tIFwiLi90b2tlbktpbmQubWpzXCI7XG5pbXBvcnQgeyBEaXJlY3RpdmVMb2NhdGlvbiB9IGZyb20gXCIuL2RpcmVjdGl2ZUxvY2F0aW9uLm1qc1wiO1xuaW1wb3J0IHsgTGV4ZXIsIGlzUHVuY3R1YXRvclRva2VuS2luZCB9IGZyb20gXCIuL2xleGVyLm1qc1wiO1xuLyoqXG4gKiBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gY29udHJvbCBwYXJzZXIgYmVoYXZpb3JcbiAqL1xuXG4vKipcbiAqIEdpdmVuIGEgR3JhcGhRTCBzb3VyY2UsIHBhcnNlcyBpdCBpbnRvIGEgRG9jdW1lbnQuXG4gKiBUaHJvd3MgR3JhcGhRTEVycm9yIGlmIGEgc3ludGF4IGVycm9yIGlzIGVuY291bnRlcmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2Uoc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKHNvdXJjZSwgb3B0aW9ucyk7XG4gIHJldHVybiBwYXJzZXIucGFyc2VEb2N1bWVudCgpO1xufVxuLyoqXG4gKiBHaXZlbiBhIHN0cmluZyBjb250YWluaW5nIGEgR3JhcGhRTCB2YWx1ZSAoZXguIGBbNDJdYCksIHBhcnNlIHRoZSBBU1QgZm9yXG4gKiB0aGF0IHZhbHVlLlxuICogVGhyb3dzIEdyYXBoUUxFcnJvciBpZiBhIHN5bnRheCBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCB3aXRoaW4gdG9vbHMgdGhhdCBvcGVyYXRlIHVwb24gR3JhcGhRTCBWYWx1ZXMgZGlyZWN0bHkgYW5kXG4gKiBpbiBpc29sYXRpb24gb2YgY29tcGxldGUgR3JhcGhRTCBkb2N1bWVudHMuXG4gKlxuICogQ29uc2lkZXIgcHJvdmlkaW5nIHRoZSByZXN1bHRzIHRvIHRoZSB1dGlsaXR5IGZ1bmN0aW9uOiB2YWx1ZUZyb21BU1QoKS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWYWx1ZShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIoc291cmNlLCBvcHRpb25zKTtcbiAgcGFyc2VyLmV4cGVjdFRva2VuKFRva2VuS2luZC5TT0YpO1xuICB2YXIgdmFsdWUgPSBwYXJzZXIucGFyc2VWYWx1ZUxpdGVyYWwoZmFsc2UpO1xuICBwYXJzZXIuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkVPRik7XG4gIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogR2l2ZW4gYSBzdHJpbmcgY29udGFpbmluZyBhIEdyYXBoUUwgVHlwZSAoZXguIGBbSW50IV1gKSwgcGFyc2UgdGhlIEFTVCBmb3JcbiAqIHRoYXQgdHlwZS5cbiAqIFRocm93cyBHcmFwaFFMRXJyb3IgaWYgYSBzeW50YXggZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gKlxuICogVGhpcyBpcyB1c2VmdWwgd2l0aGluIHRvb2xzIHRoYXQgb3BlcmF0ZSB1cG9uIEdyYXBoUUwgVHlwZXMgZGlyZWN0bHkgYW5kXG4gKiBpbiBpc29sYXRpb24gb2YgY29tcGxldGUgR3JhcGhRTCBkb2N1bWVudHMuXG4gKlxuICogQ29uc2lkZXIgcHJvdmlkaW5nIHRoZSByZXN1bHRzIHRvIHRoZSB1dGlsaXR5IGZ1bmN0aW9uOiB0eXBlRnJvbUFTVCgpLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVR5cGUoc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKHNvdXJjZSwgb3B0aW9ucyk7XG4gIHBhcnNlci5leHBlY3RUb2tlbihUb2tlbktpbmQuU09GKTtcbiAgdmFyIHR5cGUgPSBwYXJzZXIucGFyc2VUeXBlUmVmZXJlbmNlKCk7XG4gIHBhcnNlci5leHBlY3RUb2tlbihUb2tlbktpbmQuRU9GKTtcbiAgcmV0dXJuIHR5cGU7XG59XG5cbnZhciBQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQYXJzZXIoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIHNvdXJjZU9iaiA9IHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID8gbmV3IFNvdXJjZShzb3VyY2UpIDogc291cmNlO1xuICAgIHNvdXJjZU9iaiBpbnN0YW5jZW9mIFNvdXJjZSB8fCBkZXZBc3NlcnQoMCwgXCJNdXN0IHByb3ZpZGUgU291cmNlLiBSZWNlaXZlZDogXCIuY29uY2F0KGluc3BlY3Qoc291cmNlT2JqKSwgXCIuXCIpKTtcbiAgICB0aGlzLl9sZXhlciA9IG5ldyBMZXhlcihzb3VyY2VPYmopO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIG5hbWUgbGV4IHRva2VuIGludG8gYSBuYW1lIHBhcnNlIG5vZGUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFBhcnNlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnBhcnNlTmFtZSA9IGZ1bmN0aW9uIHBhcnNlTmFtZSgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5OQU1FKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5OQU1FLFxuICAgICAgdmFsdWU6IHRva2VuLnZhbHVlLFxuICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIERvY3VtZW50IHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIERvY3VtZW50IDogRGVmaW5pdGlvbitcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEb2N1bWVudCA9IGZ1bmN0aW9uIHBhcnNlRG9jdW1lbnQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRE9DVU1FTlQsXG4gICAgICBkZWZpbml0aW9uczogdGhpcy5tYW55KFRva2VuS2luZC5TT0YsIHRoaXMucGFyc2VEZWZpbml0aW9uLCBUb2tlbktpbmQuRU9GKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGVmaW5pdGlvbiA6XG4gICAqICAgLSBFeGVjdXRhYmxlRGVmaW5pdGlvblxuICAgKiAgIC0gVHlwZVN5c3RlbURlZmluaXRpb25cbiAgICogICAtIFR5cGVTeXN0ZW1FeHRlbnNpb25cbiAgICpcbiAgICogRXhlY3V0YWJsZURlZmluaXRpb24gOlxuICAgKiAgIC0gT3BlcmF0aW9uRGVmaW5pdGlvblxuICAgKiAgIC0gRnJhZ21lbnREZWZpbml0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRGVmaW5pdGlvbigpIHtcbiAgICBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSkge1xuICAgICAgc3dpdGNoICh0aGlzLl9sZXhlci50b2tlbi52YWx1ZSkge1xuICAgICAgICBjYXNlICdxdWVyeSc6XG4gICAgICAgIGNhc2UgJ211dGF0aW9uJzpcbiAgICAgICAgY2FzZSAnc3Vic2NyaXB0aW9uJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9wZXJhdGlvbkRlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdmcmFnbWVudCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGcmFnbWVudERlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdzY2hlbWEnOlxuICAgICAgICBjYXNlICdzY2FsYXInOlxuICAgICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgY2FzZSAnaW50ZXJmYWNlJzpcbiAgICAgICAgY2FzZSAndW5pb24nOlxuICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICBjYXNlICdkaXJlY3RpdmUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVHlwZVN5c3RlbURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdleHRlbmQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVHlwZVN5c3RlbUV4dGVuc2lvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYXRpb25EZWZpbml0aW9uKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBlZWtEZXNjcmlwdGlvbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVR5cGVTeXN0ZW1EZWZpbml0aW9uKCk7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgT3BlcmF0aW9ucyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBPcGVyYXRpb25EZWZpbml0aW9uIDpcbiAgICogIC0gU2VsZWN0aW9uU2V0XG4gICAqICAtIE9wZXJhdGlvblR5cGUgTmFtZT8gVmFyaWFibGVEZWZpbml0aW9ucz8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0aGlzLnBlZWsoVG9rZW5LaW5kLkJSQUNFX0wpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLk9QRVJBVElPTl9ERUZJTklUSU9OLFxuICAgICAgICBvcGVyYXRpb246ICdxdWVyeScsXG4gICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFyaWFibGVEZWZpbml0aW9uczogW10sXG4gICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG9wZXJhdGlvbiA9IHRoaXMucGFyc2VPcGVyYXRpb25UeXBlKCk7XG4gICAgdmFyIG5hbWU7XG5cbiAgICBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSkge1xuICAgICAgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT1BFUkFUSU9OX0RFRklOSVRJT04sXG4gICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YXJpYWJsZURlZmluaXRpb25zOiB0aGlzLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpLFxuICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgc2VsZWN0aW9uU2V0OiB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9wZXJhdGlvblR5cGUgOiBvbmUgb2YgcXVlcnkgbXV0YXRpb24gc3Vic2NyaXB0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT3BlcmF0aW9uVHlwZSA9IGZ1bmN0aW9uIHBhcnNlT3BlcmF0aW9uVHlwZSgpIHtcbiAgICB2YXIgb3BlcmF0aW9uVG9rZW4gPSB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5OQU1FKTtcblxuICAgIHN3aXRjaCAob3BlcmF0aW9uVG9rZW4udmFsdWUpIHtcbiAgICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgICAgcmV0dXJuICdxdWVyeSc7XG5cbiAgICAgIGNhc2UgJ211dGF0aW9uJzpcbiAgICAgICAgcmV0dXJuICdtdXRhdGlvbic7XG5cbiAgICAgIGNhc2UgJ3N1YnNjcmlwdGlvbic6XG4gICAgICAgIHJldHVybiAnc3Vic2NyaXB0aW9uJztcbiAgICB9XG5cbiAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQob3BlcmF0aW9uVG9rZW4pO1xuICB9XG4gIC8qKlxuICAgKiBWYXJpYWJsZURlZmluaXRpb25zIDogKCBWYXJpYWJsZURlZmluaXRpb24rIClcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZURlZmluaXRpb25zID0gZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsTWFueShUb2tlbktpbmQuUEFSRU5fTCwgdGhpcy5wYXJzZVZhcmlhYmxlRGVmaW5pdGlvbiwgVG9rZW5LaW5kLlBBUkVOX1IpO1xuICB9XG4gIC8qKlxuICAgKiBWYXJpYWJsZURlZmluaXRpb24gOiBWYXJpYWJsZSA6IFR5cGUgRGVmYXVsdFZhbHVlPyBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZVZhcmlhYmxlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5WQVJJQUJMRV9ERUZJTklUSU9OLFxuICAgICAgdmFyaWFibGU6IHRoaXMucGFyc2VWYXJpYWJsZSgpLFxuICAgICAgdHlwZTogKHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKSwgdGhpcy5wYXJzZVR5cGVSZWZlcmVuY2UoKSksXG4gICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihUb2tlbktpbmQuRVFVQUxTKSA/IHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwodHJ1ZSkgOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVmFyaWFibGUgOiAkIE5hbWVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZSA9IGZ1bmN0aW9uIHBhcnNlVmFyaWFibGUoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuRE9MTEFSKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5WQVJJQUJMRSxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFNlbGVjdGlvblNldCA6IHsgU2VsZWN0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2VsZWN0aW9uU2V0ID0gZnVuY3Rpb24gcGFyc2VTZWxlY3Rpb25TZXQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0VMRUNUSU9OX1NFVCxcbiAgICAgIHNlbGVjdGlvbnM6IHRoaXMubWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZVNlbGVjdGlvbiwgVG9rZW5LaW5kLkJSQUNFX1IpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTZWxlY3Rpb24gOlxuICAgKiAgIC0gRmllbGRcbiAgICogICAtIEZyYWdtZW50U3ByZWFkXG4gICAqICAgLSBJbmxpbmVGcmFnbWVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIHBhcnNlU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlZWsoVG9rZW5LaW5kLlNQUkVBRCkgPyB0aGlzLnBhcnNlRnJhZ21lbnQoKSA6IHRoaXMucGFyc2VGaWVsZCgpO1xuICB9XG4gIC8qKlxuICAgKiBGaWVsZCA6IEFsaWFzPyBOYW1lIEFyZ3VtZW50cz8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0P1xuICAgKlxuICAgKiBBbGlhcyA6IE5hbWUgOlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZpZWxkID0gZnVuY3Rpb24gcGFyc2VGaWVsZCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgbmFtZU9yQWxpYXMgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBhbGlhcztcbiAgICB2YXIgbmFtZTtcblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkNPTE9OKSkge1xuICAgICAgYWxpYXMgPSBuYW1lT3JBbGlhcztcbiAgICAgIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZU9yQWxpYXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRklFTEQsXG4gICAgICBhbGlhczogYWxpYXMsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiB0aGlzLnBhcnNlQXJndW1lbnRzKGZhbHNlKSxcbiAgICAgIGRpcmVjdGl2ZXM6IHRoaXMucGFyc2VEaXJlY3RpdmVzKGZhbHNlKSxcbiAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSA/IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogQXJndW1lbnRzW0NvbnN0XSA6ICggQXJndW1lbnRbP0NvbnN0XSsgKVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUFyZ3VtZW50cyA9IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKGlzQ29uc3QpIHtcbiAgICB2YXIgaXRlbSA9IGlzQ29uc3QgPyB0aGlzLnBhcnNlQ29uc3RBcmd1bWVudCA6IHRoaXMucGFyc2VBcmd1bWVudDtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLlBBUkVOX0wsIGl0ZW0sIFRva2VuS2luZC5QQVJFTl9SKTtcbiAgfVxuICAvKipcbiAgICogQXJndW1lbnRbQ29uc3RdIDogTmFtZSA6IFZhbHVlWz9Db25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VBcmd1bWVudCA9IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5BUkdVTUVOVCxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbChmYWxzZSksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnBhcnNlQ29uc3RBcmd1bWVudCA9IGZ1bmN0aW9uIHBhcnNlQ29uc3RBcmd1bWVudCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5BUkdVTUVOVCxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICB2YWx1ZTogKHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKSwgdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbCh0cnVlKSksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgRnJhZ21lbnRzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIENvcnJlc3BvbmRzIHRvIGJvdGggRnJhZ21lbnRTcHJlYWQgYW5kIElubGluZUZyYWdtZW50IGluIHRoZSBzcGVjLlxuICAgKlxuICAgKiBGcmFnbWVudFNwcmVhZCA6IC4uLiBGcmFnbWVudE5hbWUgRGlyZWN0aXZlcz9cbiAgICpcbiAgICogSW5saW5lRnJhZ21lbnQgOiAuLi4gVHlwZUNvbmRpdGlvbj8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRnJhZ21lbnQgPSBmdW5jdGlvbiBwYXJzZUZyYWdtZW50KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLlNQUkVBRCk7XG4gICAgdmFyIGhhc1R5cGVDb25kaXRpb24gPSB0aGlzLmV4cGVjdE9wdGlvbmFsS2V5d29yZCgnb24nKTtcblxuICAgIGlmICghaGFzVHlwZUNvbmRpdGlvbiAmJiB0aGlzLnBlZWsoVG9rZW5LaW5kLk5BTUUpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLkZSQUdNRU5UX1NQUkVBRCxcbiAgICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOTElORV9GUkFHTUVOVCxcbiAgICAgIHR5cGVDb25kaXRpb246IGhhc1R5cGVDb25kaXRpb24gPyB0aGlzLnBhcnNlTmFtZWRUeXBlKCkgOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRnJhZ21lbnREZWZpbml0aW9uIDpcbiAgICogICAtIGZyYWdtZW50IEZyYWdtZW50TmFtZSBvbiBUeXBlQ29uZGl0aW9uIERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuICAgKlxuICAgKiBUeXBlQ29uZGl0aW9uIDogTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRnJhZ21lbnREZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VGcmFnbWVudERlZmluaXRpb24oKSB7XG4gICAgdmFyIF90aGlzJF9vcHRpb25zO1xuXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdmcmFnbWVudCcpOyAvLyBFeHBlcmltZW50YWwgc3VwcG9ydCBmb3IgZGVmaW5pbmcgdmFyaWFibGVzIHdpdGhpbiBmcmFnbWVudHMgY2hhbmdlc1xuICAgIC8vIHRoZSBncmFtbWFyIG9mIEZyYWdtZW50RGVmaW5pdGlvbjpcbiAgICAvLyAgIC0gZnJhZ21lbnQgRnJhZ21lbnROYW1lIFZhcmlhYmxlRGVmaW5pdGlvbnM/IG9uIFR5cGVDb25kaXRpb24gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG5cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMpID09PSBudWxsIHx8IF90aGlzJF9vcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9ucy5leHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6IEtpbmQuRlJBR01FTlRfREVGSU5JVElPTixcbiAgICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgICB2YXJpYWJsZURlZmluaXRpb25zOiB0aGlzLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpLFxuICAgICAgICB0eXBlQ29uZGl0aW9uOiAodGhpcy5leHBlY3RLZXl3b3JkKCdvbicpLCB0aGlzLnBhcnNlTmFtZWRUeXBlKCkpLFxuICAgICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wYXJzZVNlbGVjdGlvblNldCgpLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5GUkFHTUVOVF9ERUZJTklUSU9OLFxuICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgdHlwZUNvbmRpdGlvbjogKHRoaXMuZXhwZWN0S2V5d29yZCgnb24nKSwgdGhpcy5wYXJzZU5hbWVkVHlwZSgpKSxcbiAgICAgIGRpcmVjdGl2ZXM6IHRoaXMucGFyc2VEaXJlY3RpdmVzKGZhbHNlKSxcbiAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wYXJzZVNlbGVjdGlvblNldCgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBGcmFnbWVudE5hbWUgOiBOYW1lIGJ1dCBub3QgYG9uYFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZyYWdtZW50TmFtZSA9IGZ1bmN0aW9uIHBhcnNlRnJhZ21lbnROYW1lKCkge1xuICAgIGlmICh0aGlzLl9sZXhlci50b2tlbi52YWx1ZSA9PT0gJ29uJykge1xuICAgICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFyc2VOYW1lKCk7XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgVmFsdWVzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFZhbHVlW0NvbnN0XSA6XG4gICAqICAgLSBbfkNvbnN0XSBWYXJpYWJsZVxuICAgKiAgIC0gSW50VmFsdWVcbiAgICogICAtIEZsb2F0VmFsdWVcbiAgICogICAtIFN0cmluZ1ZhbHVlXG4gICAqICAgLSBCb29sZWFuVmFsdWVcbiAgICogICAtIE51bGxWYWx1ZVxuICAgKiAgIC0gRW51bVZhbHVlXG4gICAqICAgLSBMaXN0VmFsdWVbP0NvbnN0XVxuICAgKiAgIC0gT2JqZWN0VmFsdWVbP0NvbnN0XVxuICAgKlxuICAgKiBCb29sZWFuVmFsdWUgOiBvbmUgb2YgYHRydWVgIGBmYWxzZWBcbiAgICpcbiAgICogTnVsbFZhbHVlIDogYG51bGxgXG4gICAqXG4gICAqIEVudW1WYWx1ZSA6IE5hbWUgYnV0IG5vdCBgdHJ1ZWAsIGBmYWxzZWAgb3IgYG51bGxgXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFsdWVMaXRlcmFsID0gZnVuY3Rpb24gcGFyc2VWYWx1ZUxpdGVyYWwoaXNDb25zdCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgc3dpdGNoICh0b2tlbi5raW5kKSB7XG4gICAgICBjYXNlIFRva2VuS2luZC5CUkFDS0VUX0w6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlTGlzdChpc0NvbnN0KTtcblxuICAgICAgY2FzZSBUb2tlbktpbmQuQlJBQ0VfTDpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3QoaXNDb25zdCk7XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLklOVDpcbiAgICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogS2luZC5JTlQsXG4gICAgICAgICAgdmFsdWU6IHRva2VuLnZhbHVlLFxuICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLkZMT0FUOlxuICAgICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiBLaW5kLkZMT0FULFxuICAgICAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgICAgICBsb2M6IHRoaXMubG9jKHRva2VuKVxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5TVFJJTkc6XG4gICAgICBjYXNlIFRva2VuS2luZC5CTE9DS19TVFJJTkc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlU3RyaW5nTGl0ZXJhbCgpO1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5OQU1FOlxuICAgICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xuICAgICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2luZDogS2luZC5CT09MRUFOLFxuICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBjYXNlICdmYWxzZSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBraW5kOiBLaW5kLkJPT0xFQU4sXG4gICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBjYXNlICdudWxsJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtpbmQ6IEtpbmQuTlVMTCxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2luZDogS2luZC5FTlVNLFxuICAgICAgICAgICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLkRPTExBUjpcbiAgICAgICAgaWYgKCFpc0NvbnN0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VWYXJpYWJsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gIH07XG5cbiAgX3Byb3RvLnBhcnNlU3RyaW5nTGl0ZXJhbCA9IGZ1bmN0aW9uIHBhcnNlU3RyaW5nTGl0ZXJhbCgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNUUklORyxcbiAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgIGJsb2NrOiB0b2tlbi5raW5kID09PSBUb2tlbktpbmQuQkxPQ0tfU1RSSU5HLFxuICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBMaXN0VmFsdWVbQ29uc3RdIDpcbiAgICogICAtIFsgXVxuICAgKiAgIC0gWyBWYWx1ZVs/Q29uc3RdKyBdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlTGlzdCA9IGZ1bmN0aW9uIHBhcnNlTGlzdChpc0NvbnN0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgdmFyIGl0ZW0gPSBmdW5jdGlvbiBpdGVtKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnBhcnNlVmFsdWVMaXRlcmFsKGlzQ29uc3QpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5MSVNULFxuICAgICAgdmFsdWVzOiB0aGlzLmFueShUb2tlbktpbmQuQlJBQ0tFVF9MLCBpdGVtLCBUb2tlbktpbmQuQlJBQ0tFVF9SKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0VmFsdWVbQ29uc3RdIDpcbiAgICogICAtIHsgfVxuICAgKiAgIC0geyBPYmplY3RGaWVsZFs/Q29uc3RdKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gcGFyc2VPYmplY3QoaXNDb25zdCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICB2YXIgaXRlbSA9IGZ1bmN0aW9uIGl0ZW0oKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLnBhcnNlT2JqZWN0RmllbGQoaXNDb25zdCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9CSkVDVCxcbiAgICAgIGZpZWxkczogdGhpcy5hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIGl0ZW0sIFRva2VuS2luZC5CUkFDRV9SKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0RmllbGRbQ29uc3RdIDogTmFtZSA6IFZhbHVlWz9Db25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RGaWVsZCA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0RmllbGQoaXNDb25zdCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT0JKRUNUX0ZJRUxELFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHZhbHVlOiB0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKGlzQ29uc3QpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIERpcmVjdGl2ZXMgc2VjdGlvbi5cblxuICAvKipcbiAgICogRGlyZWN0aXZlc1tDb25zdF0gOiBEaXJlY3RpdmVbP0NvbnN0XStcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVzID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVzKGlzQ29uc3QpIHtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMucGVlayhUb2tlbktpbmQuQVQpKSB7XG4gICAgICBkaXJlY3RpdmVzLnB1c2godGhpcy5wYXJzZURpcmVjdGl2ZShpc0NvbnN0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gIH1cbiAgLyoqXG4gICAqIERpcmVjdGl2ZVtDb25zdF0gOiBAIE5hbWUgQXJndW1lbnRzWz9Db25zdF0/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmUoaXNDb25zdCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkFUKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5ESVJFQ1RJVkUsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgYXJndW1lbnRzOiB0aGlzLnBhcnNlQXJndW1lbnRzKGlzQ29uc3QpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIFR5cGVzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFR5cGUgOlxuICAgKiAgIC0gTmFtZWRUeXBlXG4gICAqICAgLSBMaXN0VHlwZVxuICAgKiAgIC0gTm9uTnVsbFR5cGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VUeXBlUmVmZXJlbmNlID0gZnVuY3Rpb24gcGFyc2VUeXBlUmVmZXJlbmNlKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciB0eXBlO1xuXG4gICAgaWYgKHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9MKSkge1xuICAgICAgdHlwZSA9IHRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCk7XG4gICAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5CUkFDS0VUX1IpO1xuICAgICAgdHlwZSA9IHtcbiAgICAgICAga2luZDogS2luZC5MSVNUX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gdGhpcy5wYXJzZU5hbWVkVHlwZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkJBTkcpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLk5PTl9OVUxMX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIC8qKlxuICAgKiBOYW1lZFR5cGUgOiBOYW1lXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlTmFtZWRUeXBlID0gZnVuY3Rpb24gcGFyc2VOYW1lZFR5cGUoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuTkFNRURfVFlQRSxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgVHlwZSBEZWZpbml0aW9uIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFR5cGVTeXN0ZW1EZWZpbml0aW9uIDpcbiAgICogICAtIFNjaGVtYURlZmluaXRpb25cbiAgICogICAtIFR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBEaXJlY3RpdmVEZWZpbml0aW9uXG4gICAqXG4gICAqIFR5cGVEZWZpbml0aW9uIDpcbiAgICogICAtIFNjYWxhclR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gSW50ZXJmYWNlVHlwZURlZmluaXRpb25cbiAgICogICAtIFVuaW9uVHlwZURlZmluaXRpb25cbiAgICogICAtIEVudW1UeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVR5cGVTeXN0ZW1EZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VUeXBlU3lzdGVtRGVmaW5pdGlvbigpIHtcbiAgICAvLyBNYW55IGRlZmluaXRpb25zIGJlZ2luIHdpdGggYSBkZXNjcmlwdGlvbiBhbmQgcmVxdWlyZSBhIGxvb2thaGVhZC5cbiAgICB2YXIga2V5d29yZFRva2VuID0gdGhpcy5wZWVrRGVzY3JpcHRpb24oKSA/IHRoaXMuX2xleGVyLmxvb2thaGVhZCgpIDogdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAoa2V5d29yZFRva2VuLmtpbmQgPT09IFRva2VuS2luZC5OQU1FKSB7XG4gICAgICBzd2l0Y2ggKGtleXdvcmRUb2tlbi52YWx1ZSkge1xuICAgICAgICBjYXNlICdzY2hlbWEnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2NoZW1hRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ3NjYWxhcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTY2FsYXJUeXBlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ3R5cGUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdpbnRlcmZhY2UnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW50ZXJmYWNlVHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICd1bmlvbic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VVbmlvblR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFbnVtVHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZGlyZWN0aXZlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURpcmVjdGl2ZURlZmluaXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoa2V5d29yZFRva2VuKTtcbiAgfTtcblxuICBfcHJvdG8ucGVla0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24gcGVla0Rlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlZWsoVG9rZW5LaW5kLlNUUklORykgfHwgdGhpcy5wZWVrKFRva2VuS2luZC5CTE9DS19TVFJJTkcpO1xuICB9XG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiA6IFN0cmluZ1ZhbHVlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiBwYXJzZURlc2NyaXB0aW9uKCkge1xuICAgIGlmICh0aGlzLnBlZWtEZXNjcmlwdGlvbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVN0cmluZ0xpdGVyYWwoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNjaGVtYURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gc2NoZW1hIERpcmVjdGl2ZXNbQ29uc3RdPyB7IE9wZXJhdGlvblR5cGVEZWZpbml0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2NoZW1hRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlU2NoZW1hRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3NjaGVtYScpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIG9wZXJhdGlvblR5cGVzID0gdGhpcy5tYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TQ0hFTUFfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBvcGVyYXRpb25UeXBlczogb3BlcmF0aW9uVHlwZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uIDogT3BlcmF0aW9uVHlwZSA6IE5hbWVkVHlwZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9wZXJhdGlvblR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VPcGVyYXRpb25UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgb3BlcmF0aW9uID0gdGhpcy5wYXJzZU9wZXJhdGlvblR5cGUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgdmFyIHR5cGUgPSB0aGlzLnBhcnNlTmFtZWRUeXBlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT1BFUkFUSU9OX1RZUEVfREVGSU5JVElPTixcbiAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2NhbGFyVHlwZURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gc2NhbGFyIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2NhbGFyVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZVNjYWxhclR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnc2NhbGFyJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0NBTEFSX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBPYmplY3RUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgRGVzY3JpcHRpb24/XG4gICAqICAgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XT8gRmllbGRzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RUeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCd0eXBlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5PQkpFQ1RfVFlQRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGludGVyZmFjZXM6IGludGVyZmFjZXMsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEltcGxlbWVudHNJbnRlcmZhY2VzIDpcbiAgICogICAtIGltcGxlbWVudHMgYCZgPyBOYW1lZFR5cGVcbiAgICogICAtIEltcGxlbWVudHNJbnRlcmZhY2VzICYgTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW1wbGVtZW50c0ludGVyZmFjZXMgPSBmdW5jdGlvbiBwYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCkge1xuICAgIHZhciB0eXBlcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuZXhwZWN0T3B0aW9uYWxLZXl3b3JkKCdpbXBsZW1lbnRzJykpIHtcbiAgICAgIC8vIE9wdGlvbmFsIGxlYWRpbmcgYW1wZXJzYW5kXG4gICAgICB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkFNUCk7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgdmFyIF90aGlzJF9vcHRpb25zMjtcblxuICAgICAgICB0eXBlcy5wdXNoKHRoaXMucGFyc2VOYW1lZFR5cGUoKSk7XG4gICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkFNUCkgfHwgLy8gTGVnYWN5IHN1cHBvcnQgZm9yIHRoZSBTREw/XG4gICAgICAoKF90aGlzJF9vcHRpb25zMiA9IHRoaXMuX29wdGlvbnMpID09PSBudWxsIHx8IF90aGlzJF9vcHRpb25zMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkX29wdGlvbnMyLmFsbG93TGVnYWN5U0RMSW1wbGVtZW50c0ludGVyZmFjZXMpID09PSB0cnVlICYmIHRoaXMucGVlayhUb2tlbktpbmQuTkFNRSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuICAvKipcbiAgICogRmllbGRzRGVmaW5pdGlvbiA6IHsgRmllbGREZWZpbml0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRmllbGRzRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRmllbGRzRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgX3RoaXMkX29wdGlvbnMzO1xuXG4gICAgLy8gTGVnYWN5IHN1cHBvcnQgZm9yIHRoZSBTREw/XG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnMzID0gdGhpcy5fb3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkX29wdGlvbnMzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9uczMuYWxsb3dMZWdhY3lTRExFbXB0eUZpZWxkcykgPT09IHRydWUgJiYgdGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSAmJiB0aGlzLl9sZXhlci5sb29rYWhlYWQoKS5raW5kID09PSBUb2tlbktpbmQuQlJBQ0VfUikge1xuICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VGaWVsZERlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcbiAgfVxuICAvKipcbiAgICogRmllbGREZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBOYW1lIEFyZ3VtZW50c0RlZmluaXRpb24/IDogVHlwZSBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGaWVsZERlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUZpZWxkRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnREZWZzKCk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQ09MT04pO1xuICAgIHZhciB0eXBlID0gdGhpcy5wYXJzZVR5cGVSZWZlcmVuY2UoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkZJRUxEX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiBhcmdzLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEFyZ3VtZW50c0RlZmluaXRpb24gOiAoIElucHV0VmFsdWVEZWZpbml0aW9uKyApXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlQXJndW1lbnREZWZzID0gZnVuY3Rpb24gcGFyc2VBcmd1bWVudERlZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5QQVJFTl9MLCB0aGlzLnBhcnNlSW5wdXRWYWx1ZURlZiwgVG9rZW5LaW5kLlBBUkVOX1IpO1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dFZhbHVlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gTmFtZSA6IFR5cGUgRGVmYXVsdFZhbHVlPyBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dFZhbHVlRGVmID0gZnVuY3Rpb24gcGFyc2VJbnB1dFZhbHVlRGVmKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgdmFyIHR5cGUgPSB0aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICAgIHZhciBkZWZhdWx0VmFsdWU7XG5cbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5FUVVBTFMpKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKHRydWUpO1xuICAgIH1cblxuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuSU5QVVRfVkFMVUVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gaW50ZXJmYWNlIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IEZpZWxkc0RlZmluaXRpb24/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW50ZXJmYWNlVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUludGVyZmFjZVR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW50ZXJmYWNlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlRFUkZBQ0VfVFlQRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGludGVyZmFjZXM6IGludGVyZmFjZXMsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFVuaW9uVHlwZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IHVuaW9uIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IFVuaW9uTWVtYmVyVHlwZXM/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25UeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlVW5pb25UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3VuaW9uJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHR5cGVzID0gdGhpcy5wYXJzZVVuaW9uTWVtYmVyVHlwZXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5VTklPTl9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHR5cGVzOiB0eXBlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVW5pb25NZW1iZXJUeXBlcyA6XG4gICAqICAgLSA9IGB8YD8gTmFtZWRUeXBlXG4gICAqICAgLSBVbmlvbk1lbWJlclR5cGVzIHwgTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25NZW1iZXJUeXBlcyA9IGZ1bmN0aW9uIHBhcnNlVW5pb25NZW1iZXJUeXBlcygpIHtcbiAgICB2YXIgdHlwZXMgPSBbXTtcblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkVRVUFMUykpIHtcbiAgICAgIC8vIE9wdGlvbmFsIGxlYWRpbmcgcGlwZVxuICAgICAgdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5QSVBFKTtcblxuICAgICAgZG8ge1xuICAgICAgICB0eXBlcy5wdXNoKHRoaXMucGFyc2VOYW1lZFR5cGUoKSk7XG4gICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLlBJUEUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cbiAgLyoqXG4gICAqIEVudW1UeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gZW51bSBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBFbnVtVmFsdWVzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VFbnVtVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUVudW1UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2VudW0nKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5wYXJzZUVudW1WYWx1ZXNEZWZpbml0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRU5VTV9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVmFsdWVzRGVmaW5pdGlvbiA6IHsgRW51bVZhbHVlRGVmaW5pdGlvbisgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUVudW1WYWx1ZXNEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VFbnVtVmFsdWVEZWZpbml0aW9uLCBUb2tlbktpbmQuQlJBQ0VfUik7XG4gIH1cbiAgLyoqXG4gICAqIEVudW1WYWx1ZURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gRW51bVZhbHVlIERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKlxuICAgKiBFbnVtVmFsdWUgOiBOYW1lXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRW51bVZhbHVlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRW51bVZhbHVlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5FTlVNX1ZBTFVFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gaW5wdXQgTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gSW5wdXRGaWVsZHNEZWZpbml0aW9uP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUlucHV0T2JqZWN0VHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0T2JqZWN0VHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdpbnB1dCcpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnBhcnNlSW5wdXRGaWVsZHNEZWZpbml0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuSU5QVVRfT0JKRUNUX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIElucHV0RmllbGRzRGVmaW5pdGlvbiA6IHsgSW5wdXRWYWx1ZURlZmluaXRpb24rIH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0RmllbGRzRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VJbnB1dFZhbHVlRGVmLCBUb2tlbktpbmQuQlJBQ0VfUik7XG4gIH1cbiAgLyoqXG4gICAqIFR5cGVTeXN0ZW1FeHRlbnNpb24gOlxuICAgKiAgIC0gU2NoZW1hRXh0ZW5zaW9uXG4gICAqICAgLSBUeXBlRXh0ZW5zaW9uXG4gICAqXG4gICAqIFR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gU2NhbGFyVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gT2JqZWN0VHlwZUV4dGVuc2lvblxuICAgKiAgIC0gSW50ZXJmYWNlVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gVW5pb25UeXBlRXh0ZW5zaW9uXG4gICAqICAgLSBFbnVtVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24oKSB7XG4gICAgdmFyIGtleXdvcmRUb2tlbiA9IHRoaXMuX2xleGVyLmxvb2thaGVhZCgpO1xuXG4gICAgaWYgKGtleXdvcmRUb2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSkge1xuICAgICAgc3dpdGNoIChrZXl3b3JkVG9rZW4udmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc2NoZW1hJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVNjaGVtYUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ3NjYWxhcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTY2FsYXJUeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAndHlwZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW50ZXJmYWNlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUludGVyZmFjZVR5cGVFeHRlbnNpb24oKTtcblxuICAgICAgICBjYXNlICd1bmlvbic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VVbmlvblR5cGVFeHRlbnNpb24oKTtcblxuICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVudW1UeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKGtleXdvcmRUb2tlbik7XG4gIH1cbiAgLyoqXG4gICAqIFNjaGVtYUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCBzY2hlbWEgRGlyZWN0aXZlc1tDb25zdF0/IHsgT3BlcmF0aW9uVHlwZURlZmluaXRpb24rIH1cbiAgICogIC0gZXh0ZW5kIHNjaGVtYSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjaGVtYUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlU2NoZW1hRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdzY2hlbWEnKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBvcGVyYXRpb25UeXBlcyA9IHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBvcGVyYXRpb25UeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNDSEVNQV9FWFRFTlNJT04sXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgb3BlcmF0aW9uVHlwZXM6IG9wZXJhdGlvblR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTY2FsYXJUeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCBzY2FsYXIgTmFtZSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjYWxhclR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZVNjYWxhclR5cGVFeHRlbnNpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdleHRlbmQnKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3NjYWxhcicpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TQ0FMQVJfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0VHlwZUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXM/IERpcmVjdGl2ZXNbQ29uc3RdPyBGaWVsZHNEZWZpbml0aW9uXG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXM/IERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCd0eXBlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChpbnRlcmZhY2VzLmxlbmd0aCA9PT0gMCAmJiBkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5PQkpFQ1RfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgaW50ZXJmYWNlczogaW50ZXJmYWNlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW50ZXJmYWNlVHlwZUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCBpbnRlcmZhY2UgTmFtZSBJbXBsZW1lbnRzSW50ZXJmYWNlcz8gRGlyZWN0aXZlc1tDb25zdF0/IEZpZWxkc0RlZmluaXRpb25cbiAgICogIC0gZXh0ZW5kIGludGVyZmFjZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKiAgLSBleHRlbmQgaW50ZXJmYWNlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdpbnRlcmZhY2UnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGludGVyZmFjZXMgPSB0aGlzLnBhcnNlSW1wbGVtZW50c0ludGVyZmFjZXMoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnBhcnNlRmllbGRzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGludGVyZmFjZXMubGVuZ3RoID09PSAwICYmIGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIGZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOVEVSRkFDRV9UWVBFX0VYVEVOU0lPTixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBpbnRlcmZhY2VzOiBpbnRlcmZhY2VzLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBVbmlvblR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gZXh0ZW5kIHVuaW9uIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IFVuaW9uTWVtYmVyVHlwZXNcbiAgICogICAtIGV4dGVuZCB1bmlvbiBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25UeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VVbmlvblR5cGVFeHRlbnNpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdleHRlbmQnKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3VuaW9uJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHR5cGVzID0gdGhpcy5wYXJzZVVuaW9uTWVtYmVyVHlwZXMoKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiB0eXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlVOSU9OX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICB0eXBlczogdHlwZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEVudW1UeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCBlbnVtIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IEVudW1WYWx1ZXNEZWZpbml0aW9uXG4gICAqICAgLSBleHRlbmQgZW51bSBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRW51bVR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZUVudW1UeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdlbnVtJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMucGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkVOVU1fVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gZXh0ZW5kIGlucHV0IE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IElucHV0RmllbGRzRGVmaW5pdGlvblxuICAgKiAgIC0gZXh0ZW5kIGlucHV0IE5hbWUgRGlyZWN0aXZlc1tDb25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0T2JqZWN0VHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW5wdXQnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUlucHV0RmllbGRzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIGZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOUFVUX09CSkVDVF9UWVBFX0VYVEVOU0lPTixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpcmVjdGl2ZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IGRpcmVjdGl2ZSBAIE5hbWUgQXJndW1lbnRzRGVmaW5pdGlvbj8gYHJlcGVhdGFibGVgPyBvbiBEaXJlY3RpdmVMb2NhdGlvbnNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZGlyZWN0aXZlJyk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQVQpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgYXJncyA9IHRoaXMucGFyc2VBcmd1bWVudERlZnMoKTtcbiAgICB2YXIgcmVwZWF0YWJsZSA9IHRoaXMuZXhwZWN0T3B0aW9uYWxLZXl3b3JkKCdyZXBlYXRhYmxlJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdvbicpO1xuICAgIHZhciBsb2NhdGlvbnMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlTG9jYXRpb25zKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRElSRUNUSVZFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiBhcmdzLFxuICAgICAgcmVwZWF0YWJsZTogcmVwZWF0YWJsZSxcbiAgICAgIGxvY2F0aW9uczogbG9jYXRpb25zLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXJlY3RpdmVMb2NhdGlvbnMgOlxuICAgKiAgIC0gYHxgPyBEaXJlY3RpdmVMb2NhdGlvblxuICAgKiAgIC0gRGlyZWN0aXZlTG9jYXRpb25zIHwgRGlyZWN0aXZlTG9jYXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVMb2NhdGlvbnMgPSBmdW5jdGlvbiBwYXJzZURpcmVjdGl2ZUxvY2F0aW9ucygpIHtcbiAgICAvLyBPcHRpb25hbCBsZWFkaW5nIHBpcGVcbiAgICB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLlBJUEUpO1xuICAgIHZhciBsb2NhdGlvbnMgPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIGxvY2F0aW9ucy5wdXNoKHRoaXMucGFyc2VEaXJlY3RpdmVMb2NhdGlvbigpKTtcbiAgICB9IHdoaWxlICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLlBJUEUpKTtcblxuICAgIHJldHVybiBsb2NhdGlvbnM7XG4gIH1cbiAgLypcbiAgICogRGlyZWN0aXZlTG9jYXRpb24gOlxuICAgKiAgIC0gRXhlY3V0YWJsZURpcmVjdGl2ZUxvY2F0aW9uXG4gICAqICAgLSBUeXBlU3lzdGVtRGlyZWN0aXZlTG9jYXRpb25cbiAgICpcbiAgICogRXhlY3V0YWJsZURpcmVjdGl2ZUxvY2F0aW9uIDogb25lIG9mXG4gICAqICAgYFFVRVJZYFxuICAgKiAgIGBNVVRBVElPTmBcbiAgICogICBgU1VCU0NSSVBUSU9OYFxuICAgKiAgIGBGSUVMRGBcbiAgICogICBgRlJBR01FTlRfREVGSU5JVElPTmBcbiAgICogICBgRlJBR01FTlRfU1BSRUFEYFxuICAgKiAgIGBJTkxJTkVfRlJBR01FTlRgXG4gICAqXG4gICAqIFR5cGVTeXN0ZW1EaXJlY3RpdmVMb2NhdGlvbiA6IG9uZSBvZlxuICAgKiAgIGBTQ0hFTUFgXG4gICAqICAgYFNDQUxBUmBcbiAgICogICBgT0JKRUNUYFxuICAgKiAgIGBGSUVMRF9ERUZJTklUSU9OYFxuICAgKiAgIGBBUkdVTUVOVF9ERUZJTklUSU9OYFxuICAgKiAgIGBJTlRFUkZBQ0VgXG4gICAqICAgYFVOSU9OYFxuICAgKiAgIGBFTlVNYFxuICAgKiAgIGBFTlVNX1ZBTFVFYFxuICAgKiAgIGBJTlBVVF9PQkpFQ1RgXG4gICAqICAgYElOUFVUX0ZJRUxEX0RFRklOSVRJT05gXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlTG9jYXRpb24gPSBmdW5jdGlvbiBwYXJzZURpcmVjdGl2ZUxvY2F0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcblxuICAgIGlmIChEaXJlY3RpdmVMb2NhdGlvbltuYW1lLnZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoc3RhcnQpO1xuICB9IC8vIENvcmUgcGFyc2luZyB1dGlsaXR5IGZ1bmN0aW9uc1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9jYXRpb24gb2JqZWN0LCB1c2VkIHRvIGlkZW50aWZ5IHRoZSBwbGFjZSBpblxuICAgKiB0aGUgc291cmNlIHRoYXQgY3JlYXRlZCBhIGdpdmVuIHBhcnNlZCBvYmplY3QuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmxvYyA9IGZ1bmN0aW9uIGxvYyhzdGFydFRva2VuKSB7XG4gICAgdmFyIF90aGlzJF9vcHRpb25zNDtcblxuICAgIGlmICgoKF90aGlzJF9vcHRpb25zNCA9IHRoaXMuX29wdGlvbnMpID09PSBudWxsIHx8IF90aGlzJF9vcHRpb25zNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkX29wdGlvbnM0Lm5vTG9jYXRpb24pICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbmV3IExvY2F0aW9uKHN0YXJ0VG9rZW4sIHRoaXMuX2xleGVyLmxhc3RUb2tlbiwgdGhpcy5fbGV4ZXIuc291cmNlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIG5leHQgdG9rZW4gaXMgb2YgYSBnaXZlbiBraW5kXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBlZWsgPSBmdW5jdGlvbiBwZWVrKGtpbmQpIHtcbiAgICByZXR1cm4gdGhpcy5fbGV4ZXIudG9rZW4ua2luZCA9PT0ga2luZDtcbiAgfVxuICAvKipcbiAgICogSWYgdGhlIG5leHQgdG9rZW4gaXMgb2YgdGhlIGdpdmVuIGtpbmQsIHJldHVybiB0aGF0IHRva2VuIGFmdGVyIGFkdmFuY2luZ1xuICAgKiB0aGUgbGV4ZXIuIE90aGVyd2lzZSwgZG8gbm90IGNoYW5nZSB0aGUgcGFyc2VyIHN0YXRlIGFuZCB0aHJvdyBhbiBlcnJvci5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXhwZWN0VG9rZW4gPSBmdW5jdGlvbiBleHBlY3RUb2tlbihraW5kKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCA9PT0ga2luZCkge1xuICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuXG4gICAgdGhyb3cgc3ludGF4RXJyb3IodGhpcy5fbGV4ZXIuc291cmNlLCB0b2tlbi5zdGFydCwgXCJFeHBlY3RlZCBcIi5jb25jYXQoZ2V0VG9rZW5LaW5kRGVzYyhraW5kKSwgXCIsIGZvdW5kIFwiKS5jb25jYXQoZ2V0VG9rZW5EZXNjKHRva2VuKSwgXCIuXCIpKTtcbiAgfVxuICAvKipcbiAgICogSWYgdGhlIG5leHQgdG9rZW4gaXMgb2YgdGhlIGdpdmVuIGtpbmQsIHJldHVybiB0aGF0IHRva2VuIGFmdGVyIGFkdmFuY2luZ1xuICAgKiB0aGUgbGV4ZXIuIE90aGVyd2lzZSwgZG8gbm90IGNoYW5nZSB0aGUgcGFyc2VyIHN0YXRlIGFuZCByZXR1cm4gdW5kZWZpbmVkLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5leHBlY3RPcHRpb25hbFRva2VuID0gZnVuY3Rpb24gZXhwZWN0T3B0aW9uYWxUb2tlbihraW5kKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCA9PT0ga2luZCkge1xuICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICAvKipcbiAgICogSWYgdGhlIG5leHQgdG9rZW4gaXMgYSBnaXZlbiBrZXl3b3JkLCBhZHZhbmNlIHRoZSBsZXhlci5cbiAgICogT3RoZXJ3aXNlLCBkbyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUgYW5kIHRocm93IGFuIGVycm9yLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5leHBlY3RLZXl3b3JkID0gZnVuY3Rpb24gZXhwZWN0S2V5d29yZCh2YWx1ZSkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgaWYgKHRva2VuLmtpbmQgPT09IFRva2VuS2luZC5OQU1FICYmIHRva2VuLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcih0aGlzLl9sZXhlci5zb3VyY2UsIHRva2VuLnN0YXJ0LCBcIkV4cGVjdGVkIFxcXCJcIi5jb25jYXQodmFsdWUsIFwiXFxcIiwgZm91bmQgXCIpLmNvbmNhdChnZXRUb2tlbkRlc2ModG9rZW4pLCBcIi5cIikpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSWYgdGhlIG5leHQgdG9rZW4gaXMgYSBnaXZlbiBrZXl3b3JkLCByZXR1cm4gXCJ0cnVlXCIgYWZ0ZXIgYWR2YW5jaW5nXG4gICAqIHRoZSBsZXhlci4gT3RoZXJ3aXNlLCBkbyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUgYW5kIHJldHVybiBcImZhbHNlXCIuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmV4cGVjdE9wdGlvbmFsS2V5d29yZCA9IGZ1bmN0aW9uIGV4cGVjdE9wdGlvbmFsS2V5d29yZCh2YWx1ZSkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgaWYgKHRva2VuLmtpbmQgPT09IFRva2VuS2luZC5OQU1FICYmIHRva2VuLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYW4gZXJyb3Igd2hlbiBhbiB1bmV4cGVjdGVkIGxleGVkIHRva2VuXG4gICAqIGlzIGVuY291bnRlcmVkLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51bmV4cGVjdGVkID0gZnVuY3Rpb24gdW5leHBlY3RlZChhdFRva2VuKSB7XG4gICAgdmFyIHRva2VuID0gYXRUb2tlbiAhPT0gbnVsbCAmJiBhdFRva2VuICE9PSB2b2lkIDAgPyBhdFRva2VuIDogdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHN5bnRheEVycm9yKHRoaXMuX2xleGVyLnNvdXJjZSwgdG9rZW4uc3RhcnQsIFwiVW5leHBlY3RlZCBcIi5jb25jYXQoZ2V0VG9rZW5EZXNjKHRva2VuKSwgXCIuXCIpKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHBvc3NpYmx5IGVtcHR5IGxpc3Qgb2YgcGFyc2Ugbm9kZXMsIGRldGVybWluZWQgYnlcbiAgICogdGhlIHBhcnNlRm4uIFRoaXMgbGlzdCBiZWdpbnMgd2l0aCBhIGxleCB0b2tlbiBvZiBvcGVuS2luZFxuICAgKiBhbmQgZW5kcyB3aXRoIGEgbGV4IHRva2VuIG9mIGNsb3NlS2luZC4gQWR2YW5jZXMgdGhlIHBhcnNlclxuICAgKiB0byB0aGUgbmV4dCBsZXggdG9rZW4gYWZ0ZXIgdGhlIGNsb3NpbmcgdG9rZW4uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFueSA9IGZ1bmN0aW9uIGFueShvcGVuS2luZCwgcGFyc2VGbiwgY2xvc2VLaW5kKSB7XG4gICAgdGhpcy5leHBlY3RUb2tlbihvcGVuS2luZCk7XG4gICAgdmFyIG5vZGVzID0gW107XG5cbiAgICB3aGlsZSAoIXRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihjbG9zZUtpbmQpKSB7XG4gICAgICBub2Rlcy5wdXNoKHBhcnNlRm4uY2FsbCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBwYXJzZSBub2RlcywgZGV0ZXJtaW5lZCBieSB0aGUgcGFyc2VGbi5cbiAgICogSXQgY2FuIGJlIGVtcHR5IG9ubHkgaWYgb3BlbiB0b2tlbiBpcyBtaXNzaW5nIG90aGVyd2lzZSBpdCB3aWxsIGFsd2F5c1xuICAgKiByZXR1cm4gbm9uLWVtcHR5IGxpc3QgdGhhdCBiZWdpbnMgd2l0aCBhIGxleCB0b2tlbiBvZiBvcGVuS2luZCBhbmQgZW5kc1xuICAgKiB3aXRoIGEgbGV4IHRva2VuIG9mIGNsb3NlS2luZC4gQWR2YW5jZXMgdGhlIHBhcnNlciB0byB0aGUgbmV4dCBsZXggdG9rZW5cbiAgICogYWZ0ZXIgdGhlIGNsb3NpbmcgdG9rZW4uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9wdGlvbmFsTWFueSA9IGZ1bmN0aW9uIG9wdGlvbmFsTWFueShvcGVuS2luZCwgcGFyc2VGbiwgY2xvc2VLaW5kKSB7XG4gICAgaWYgKHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihvcGVuS2luZCkpIHtcbiAgICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgICBkbyB7XG4gICAgICAgIG5vZGVzLnB1c2gocGFyc2VGbi5jYWxsKHRoaXMpKTtcbiAgICAgIH0gd2hpbGUgKCF0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oY2xvc2VLaW5kKSk7XG5cbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBub24tZW1wdHkgbGlzdCBvZiBwYXJzZSBub2RlcywgZGV0ZXJtaW5lZCBieVxuICAgKiB0aGUgcGFyc2VGbi4gVGhpcyBsaXN0IGJlZ2lucyB3aXRoIGEgbGV4IHRva2VuIG9mIG9wZW5LaW5kXG4gICAqIGFuZCBlbmRzIHdpdGggYSBsZXggdG9rZW4gb2YgY2xvc2VLaW5kLiBBZHZhbmNlcyB0aGUgcGFyc2VyXG4gICAqIHRvIHRoZSBuZXh0IGxleCB0b2tlbiBhZnRlciB0aGUgY2xvc2luZyB0b2tlbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubWFueSA9IGZ1bmN0aW9uIG1hbnkob3BlbktpbmQsIHBhcnNlRm4sIGNsb3NlS2luZCkge1xuICAgIHRoaXMuZXhwZWN0VG9rZW4ob3BlbktpbmQpO1xuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgZG8ge1xuICAgICAgbm9kZXMucHVzaChwYXJzZUZuLmNhbGwodGhpcykpO1xuICAgIH0gd2hpbGUgKCF0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oY2xvc2VLaW5kKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH07XG5cbiAgcmV0dXJuIFBhcnNlcjtcbn0oKTtcbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gZGVzY3JpYmUgYSB0b2tlbiBhcyBhIHN0cmluZyBmb3IgZGVidWdnaW5nXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUb2tlbkRlc2ModG9rZW4pIHtcbiAgdmFyIHZhbHVlID0gdG9rZW4udmFsdWU7XG4gIHJldHVybiBnZXRUb2tlbktpbmREZXNjKHRva2VuLmtpbmQpICsgKHZhbHVlICE9IG51bGwgPyBcIiBcXFwiXCIuY29uY2F0KHZhbHVlLCBcIlxcXCJcIikgOiAnJyk7XG59XG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGRlc2NyaWJlIGEgdG9rZW4ga2luZCBhcyBhIHN0cmluZyBmb3IgZGVidWdnaW5nXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUb2tlbktpbmREZXNjKGtpbmQpIHtcbiAgcmV0dXJuIGlzUHVuY3R1YXRvclRva2VuS2luZChraW5kKSA/IFwiXFxcIlwiLmNvbmNhdChraW5kLCBcIlxcXCJcIikgOiBraW5kO1xufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi9sb2NhdGlvbi5tanNcIjtcbi8qKlxuICogUmVuZGVyIGEgaGVscGZ1bCBkZXNjcmlwdGlvbiBvZiB0aGUgbG9jYXRpb24gaW4gdGhlIEdyYXBoUUwgU291cmNlIGRvY3VtZW50LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIHJldHVybiBwcmludFNvdXJjZUxvY2F0aW9uKGxvY2F0aW9uLnNvdXJjZSwgZ2V0TG9jYXRpb24obG9jYXRpb24uc291cmNlLCBsb2NhdGlvbi5zdGFydCkpO1xufVxuLyoqXG4gKiBSZW5kZXIgYSBoZWxwZnVsIGRlc2NyaXB0aW9uIG9mIHRoZSBsb2NhdGlvbiBpbiB0aGUgR3JhcGhRTCBTb3VyY2UgZG9jdW1lbnQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50U291cmNlTG9jYXRpb24oc291cmNlLCBzb3VyY2VMb2NhdGlvbikge1xuICB2YXIgZmlyc3RMaW5lQ29sdW1uT2Zmc2V0ID0gc291cmNlLmxvY2F0aW9uT2Zmc2V0LmNvbHVtbiAtIDE7XG4gIHZhciBib2R5ID0gd2hpdGVzcGFjZShmaXJzdExpbmVDb2x1bW5PZmZzZXQpICsgc291cmNlLmJvZHk7XG4gIHZhciBsaW5lSW5kZXggPSBzb3VyY2VMb2NhdGlvbi5saW5lIC0gMTtcbiAgdmFyIGxpbmVPZmZzZXQgPSBzb3VyY2UubG9jYXRpb25PZmZzZXQubGluZSAtIDE7XG4gIHZhciBsaW5lTnVtID0gc291cmNlTG9jYXRpb24ubGluZSArIGxpbmVPZmZzZXQ7XG4gIHZhciBjb2x1bW5PZmZzZXQgPSBzb3VyY2VMb2NhdGlvbi5saW5lID09PSAxID8gZmlyc3RMaW5lQ29sdW1uT2Zmc2V0IDogMDtcbiAgdmFyIGNvbHVtbk51bSA9IHNvdXJjZUxvY2F0aW9uLmNvbHVtbiArIGNvbHVtbk9mZnNldDtcbiAgdmFyIGxvY2F0aW9uU3RyID0gXCJcIi5jb25jYXQoc291cmNlLm5hbWUsIFwiOlwiKS5jb25jYXQobGluZU51bSwgXCI6XCIpLmNvbmNhdChjb2x1bW5OdW0sIFwiXFxuXCIpO1xuICB2YXIgbGluZXMgPSBib2R5LnNwbGl0KC9cXHJcXG58W1xcblxccl0vZyk7XG4gIHZhciBsb2NhdGlvbkxpbmUgPSBsaW5lc1tsaW5lSW5kZXhdOyAvLyBTcGVjaWFsIGNhc2UgZm9yIG1pbmlmaWVkIGRvY3VtZW50c1xuXG4gIGlmIChsb2NhdGlvbkxpbmUubGVuZ3RoID4gMTIwKSB7XG4gICAgdmFyIHN1YkxpbmVJbmRleCA9IE1hdGguZmxvb3IoY29sdW1uTnVtIC8gODApO1xuICAgIHZhciBzdWJMaW5lQ29sdW1uTnVtID0gY29sdW1uTnVtICUgODA7XG4gICAgdmFyIHN1YkxpbmVzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0aW9uTGluZS5sZW5ndGg7IGkgKz0gODApIHtcbiAgICAgIHN1YkxpbmVzLnB1c2gobG9jYXRpb25MaW5lLnNsaWNlKGksIGkgKyA4MCkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvblN0ciArIHByaW50UHJlZml4ZWRMaW5lcyhbW1wiXCIuY29uY2F0KGxpbmVOdW0pLCBzdWJMaW5lc1swXV1dLmNvbmNhdChzdWJMaW5lcy5zbGljZSgxLCBzdWJMaW5lSW5kZXggKyAxKS5tYXAoZnVuY3Rpb24gKHN1YkxpbmUpIHtcbiAgICAgIHJldHVybiBbJycsIHN1YkxpbmVdO1xuICAgIH0pLCBbWycgJywgd2hpdGVzcGFjZShzdWJMaW5lQ29sdW1uTnVtIC0gMSkgKyAnXiddLCBbJycsIHN1YkxpbmVzW3N1YkxpbmVJbmRleCArIDFdXV0pKTtcbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvblN0ciArIHByaW50UHJlZml4ZWRMaW5lcyhbLy8gTGluZXMgc3BlY2lmaWVkIGxpa2UgdGhpczogW1wicHJlZml4XCIsIFwic3RyaW5nXCJdLFxuICBbXCJcIi5jb25jYXQobGluZU51bSAtIDEpLCBsaW5lc1tsaW5lSW5kZXggLSAxXV0sIFtcIlwiLmNvbmNhdChsaW5lTnVtKSwgbG9jYXRpb25MaW5lXSwgWycnLCB3aGl0ZXNwYWNlKGNvbHVtbk51bSAtIDEpICsgJ14nXSwgW1wiXCIuY29uY2F0KGxpbmVOdW0gKyAxKSwgbGluZXNbbGluZUluZGV4ICsgMV1dXSk7XG59XG5cbmZ1bmN0aW9uIHByaW50UHJlZml4ZWRMaW5lcyhsaW5lcykge1xuICB2YXIgZXhpc3RpbmdMaW5lcyA9IGxpbmVzLmZpbHRlcihmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfID0gX3JlZlswXSxcbiAgICAgICAgbGluZSA9IF9yZWZbMV07XG4gICAgcmV0dXJuIGxpbmUgIT09IHVuZGVmaW5lZDtcbiAgfSk7XG4gIHZhciBwYWRMZW4gPSBNYXRoLm1heC5hcHBseShNYXRoLCBleGlzdGluZ0xpbmVzLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgcHJlZml4ID0gX3JlZjJbMF07XG4gICAgcmV0dXJuIHByZWZpeC5sZW5ndGg7XG4gIH0pKTtcbiAgcmV0dXJuIGV4aXN0aW5nTGluZXMubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgIHZhciBwcmVmaXggPSBfcmVmM1swXSxcbiAgICAgICAgbGluZSA9IF9yZWYzWzFdO1xuICAgIHJldHVybiBsZWZ0UGFkKHBhZExlbiwgcHJlZml4KSArIChsaW5lID8gJyB8ICcgKyBsaW5lIDogJyB8Jyk7XG4gIH0pLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlKGxlbikge1xuICByZXR1cm4gQXJyYXkobGVuICsgMSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBsZWZ0UGFkKGxlbiwgc3RyKSB7XG4gIHJldHVybiB3aGl0ZXNwYWNlKGxlbiAtIHN0ci5sZW5ndGgpICsgc3RyO1xufVxuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgeyBTWU1CT0xfVE9fU1RSSU5HX1RBRyB9IGZyb20gXCIuLi9wb2x5ZmlsbHMvc3ltYm9scy5tanNcIjtcbmltcG9ydCBkZXZBc3NlcnQgZnJvbSBcIi4uL2pzdXRpbHMvZGV2QXNzZXJ0Lm1qc1wiO1xuXG4vKipcbiAqIEEgcmVwcmVzZW50YXRpb24gb2Ygc291cmNlIGlucHV0IHRvIEdyYXBoUUwuIFRoZSBgbmFtZWAgYW5kIGBsb2NhdGlvbk9mZnNldGAgcGFyYW1ldGVycyBhcmVcbiAqIG9wdGlvbmFsLCBidXQgdGhleSBhcmUgdXNlZnVsIGZvciBjbGllbnRzIHdobyBzdG9yZSBHcmFwaFFMIGRvY3VtZW50cyBpbiBzb3VyY2UgZmlsZXMuXG4gKiBGb3IgZXhhbXBsZSwgaWYgdGhlIEdyYXBoUUwgaW5wdXQgc3RhcnRzIGF0IGxpbmUgNDAgaW4gYSBmaWxlIG5hbWVkIGBGb28uZ3JhcGhxbGAsIGl0IG1pZ2h0XG4gKiBiZSB1c2VmdWwgZm9yIGBuYW1lYCB0byBiZSBgXCJGb28uZ3JhcGhxbFwiYCBhbmQgbG9jYXRpb24gdG8gYmUgYHsgbGluZTogNDAsIGNvbHVtbjogMSB9YC5cbiAqIFRoZSBgbGluZWAgYW5kIGBjb2x1bW5gIHByb3BlcnRpZXMgaW4gYGxvY2F0aW9uT2Zmc2V0YCBhcmUgMS1pbmRleGVkLlxuICovXG5leHBvcnQgdmFyIFNvdXJjZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNvdXJjZShib2R5KSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdHcmFwaFFMIHJlcXVlc3QnO1xuICAgIHZhciBsb2NhdGlvbk9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge1xuICAgICAgbGluZTogMSxcbiAgICAgIGNvbHVtbjogMVxuICAgIH07XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubG9jYXRpb25PZmZzZXQgPSBsb2NhdGlvbk9mZnNldDtcbiAgICB0aGlzLmxvY2F0aW9uT2Zmc2V0LmxpbmUgPiAwIHx8IGRldkFzc2VydCgwLCAnbGluZSBpbiBsb2NhdGlvbk9mZnNldCBpcyAxLWluZGV4ZWQgYW5kIG11c3QgYmUgcG9zaXRpdmUuJyk7XG4gICAgdGhpcy5sb2NhdGlvbk9mZnNldC5jb2x1bW4gPiAwIHx8IGRldkFzc2VydCgwLCAnY29sdW1uIGluIGxvY2F0aW9uT2Zmc2V0IGlzIDEtaW5kZXhlZCBhbmQgbXVzdCBiZSBwb3NpdGl2ZS4nKTtcbiAgfSAvLyAkRmxvd0ZpeE1lIEZsb3cgZG9lc24ndCBzdXBwb3J0IGNvbXB1dGVkIHByb3BlcnRpZXMgeWV0XG5cblxuICBfY3JlYXRlQ2xhc3MoU291cmNlLCBbe1xuICAgIGtleTogU1lNQk9MX1RPX1NUUklOR19UQUcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gJ1NvdXJjZSc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvdXJjZTtcbn0oKTtcbiIsIi8qKlxuICogQW4gZXhwb3J0ZWQgZW51bSBkZXNjcmliaW5nIHRoZSBkaWZmZXJlbnQga2luZHMgb2YgdG9rZW5zIHRoYXQgdGhlXG4gKiBsZXhlciBlbWl0cy5cbiAqL1xuZXhwb3J0IHZhciBUb2tlbktpbmQgPSBPYmplY3QuZnJlZXplKHtcbiAgU09GOiAnPFNPRj4nLFxuICBFT0Y6ICc8RU9GPicsXG4gIEJBTkc6ICchJyxcbiAgRE9MTEFSOiAnJCcsXG4gIEFNUDogJyYnLFxuICBQQVJFTl9MOiAnKCcsXG4gIFBBUkVOX1I6ICcpJyxcbiAgU1BSRUFEOiAnLi4uJyxcbiAgQ09MT046ICc6JyxcbiAgRVFVQUxTOiAnPScsXG4gIEFUOiAnQCcsXG4gIEJSQUNLRVRfTDogJ1snLFxuICBCUkFDS0VUX1I6ICddJyxcbiAgQlJBQ0VfTDogJ3snLFxuICBQSVBFOiAnfCcsXG4gIEJSQUNFX1I6ICd9JyxcbiAgTkFNRTogJ05hbWUnLFxuICBJTlQ6ICdJbnQnLFxuICBGTE9BVDogJ0Zsb2F0JyxcbiAgU1RSSU5HOiAnU3RyaW5nJyxcbiAgQkxPQ0tfU1RSSU5HOiAnQmxvY2tTdHJpbmcnLFxuICBDT01NRU5UOiAnQ29tbWVudCdcbn0pO1xuLyoqXG4gKiBUaGUgZW51bSB0eXBlIHJlcHJlc2VudGluZyB0aGUgdG9rZW4ga2luZHMgdmFsdWVzLlxuICovXG4iLCJpbXBvcnQgaW5zcGVjdCBmcm9tIFwiLi4vanN1dGlscy9pbnNwZWN0Lm1qc1wiO1xuaW1wb3J0IHsgaXNOb2RlIH0gZnJvbSBcIi4vYXN0Lm1qc1wiO1xuLyoqXG4gKiBBIHZpc2l0b3IgaXMgcHJvdmlkZWQgdG8gdmlzaXQsIGl0IGNvbnRhaW5zIHRoZSBjb2xsZWN0aW9uIG9mXG4gKiByZWxldmFudCBmdW5jdGlvbnMgdG8gYmUgY2FsbGVkIGR1cmluZyB0aGUgdmlzaXRvcidzIHRyYXZlcnNhbC5cbiAqL1xuXG5leHBvcnQgdmFyIFF1ZXJ5RG9jdW1lbnRLZXlzID0ge1xuICBOYW1lOiBbXSxcbiAgRG9jdW1lbnQ6IFsnZGVmaW5pdGlvbnMnXSxcbiAgT3BlcmF0aW9uRGVmaW5pdGlvbjogWyduYW1lJywgJ3ZhcmlhYmxlRGVmaW5pdGlvbnMnLCAnZGlyZWN0aXZlcycsICdzZWxlY3Rpb25TZXQnXSxcbiAgVmFyaWFibGVEZWZpbml0aW9uOiBbJ3ZhcmlhYmxlJywgJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJywgJ2RpcmVjdGl2ZXMnXSxcbiAgVmFyaWFibGU6IFsnbmFtZSddLFxuICBTZWxlY3Rpb25TZXQ6IFsnc2VsZWN0aW9ucyddLFxuICBGaWVsZDogWydhbGlhcycsICduYW1lJywgJ2FyZ3VtZW50cycsICdkaXJlY3RpdmVzJywgJ3NlbGVjdGlvblNldCddLFxuICBBcmd1bWVudDogWyduYW1lJywgJ3ZhbHVlJ10sXG4gIEZyYWdtZW50U3ByZWFkOiBbJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBJbmxpbmVGcmFnbWVudDogWyd0eXBlQ29uZGl0aW9uJywgJ2RpcmVjdGl2ZXMnLCAnc2VsZWN0aW9uU2V0J10sXG4gIEZyYWdtZW50RGVmaW5pdGlvbjogWyduYW1lJywgLy8gTm90ZTogZnJhZ21lbnQgdmFyaWFibGUgZGVmaW5pdGlvbnMgYXJlIGV4cGVyaW1lbnRhbCBhbmQgbWF5IGJlIGNoYW5nZWRcbiAgLy8gb3IgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAndmFyaWFibGVEZWZpbml0aW9ucycsICd0eXBlQ29uZGl0aW9uJywgJ2RpcmVjdGl2ZXMnLCAnc2VsZWN0aW9uU2V0J10sXG4gIEludFZhbHVlOiBbXSxcbiAgRmxvYXRWYWx1ZTogW10sXG4gIFN0cmluZ1ZhbHVlOiBbXSxcbiAgQm9vbGVhblZhbHVlOiBbXSxcbiAgTnVsbFZhbHVlOiBbXSxcbiAgRW51bVZhbHVlOiBbXSxcbiAgTGlzdFZhbHVlOiBbJ3ZhbHVlcyddLFxuICBPYmplY3RWYWx1ZTogWydmaWVsZHMnXSxcbiAgT2JqZWN0RmllbGQ6IFsnbmFtZScsICd2YWx1ZSddLFxuICBEaXJlY3RpdmU6IFsnbmFtZScsICdhcmd1bWVudHMnXSxcbiAgTmFtZWRUeXBlOiBbJ25hbWUnXSxcbiAgTGlzdFR5cGU6IFsndHlwZSddLFxuICBOb25OdWxsVHlwZTogWyd0eXBlJ10sXG4gIFNjaGVtYURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnZGlyZWN0aXZlcycsICdvcGVyYXRpb25UeXBlcyddLFxuICBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbjogWyd0eXBlJ10sXG4gIFNjYWxhclR5cGVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBPYmplY3RUeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2ludGVyZmFjZXMnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXSxcbiAgRmllbGREZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ3R5cGUnLCAnZGlyZWN0aXZlcyddLFxuICBJbnB1dFZhbHVlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJywgJ2RpcmVjdGl2ZXMnXSxcbiAgSW50ZXJmYWNlVHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdpbnRlcmZhY2VzJywgJ2RpcmVjdGl2ZXMnLCAnZmllbGRzJ10sXG4gIFVuaW9uVHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJywgJ3R5cGVzJ10sXG4gIEVudW1UeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2RpcmVjdGl2ZXMnLCAndmFsdWVzJ10sXG4gIEVudW1WYWx1ZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJ10sXG4gIElucHV0T2JqZWN0VHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBEaXJlY3RpdmVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ2xvY2F0aW9ucyddLFxuICBTY2hlbWFFeHRlbnNpb246IFsnZGlyZWN0aXZlcycsICdvcGVyYXRpb25UeXBlcyddLFxuICBTY2FsYXJUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBPYmplY3RUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnaW50ZXJmYWNlcycsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnaW50ZXJmYWNlcycsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBVbmlvblR5cGVFeHRlbnNpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJywgJ3R5cGVzJ10sXG4gIEVudW1UeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcycsICd2YWx1ZXMnXSxcbiAgSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXVxufTtcbmV4cG9ydCB2YXIgQlJFQUsgPSBPYmplY3QuZnJlZXplKHt9KTtcbi8qKlxuICogdmlzaXQoKSB3aWxsIHdhbGsgdGhyb3VnaCBhbiBBU1QgdXNpbmcgYSBkZXB0aC1maXJzdCB0cmF2ZXJzYWwsIGNhbGxpbmdcbiAqIHRoZSB2aXNpdG9yJ3MgZW50ZXIgZnVuY3Rpb24gYXQgZWFjaCBub2RlIGluIHRoZSB0cmF2ZXJzYWwsIGFuZCBjYWxsaW5nIHRoZVxuICogbGVhdmUgZnVuY3Rpb24gYWZ0ZXIgdmlzaXRpbmcgdGhhdCBub2RlIGFuZCBhbGwgb2YgaXRzIGNoaWxkIG5vZGVzLlxuICpcbiAqIEJ5IHJldHVybmluZyBkaWZmZXJlbnQgdmFsdWVzIGZyb20gdGhlIGVudGVyIGFuZCBsZWF2ZSBmdW5jdGlvbnMsIHRoZVxuICogYmVoYXZpb3Igb2YgdGhlIHZpc2l0b3IgY2FuIGJlIGFsdGVyZWQsIGluY2x1ZGluZyBza2lwcGluZyBvdmVyIGEgc3ViLXRyZWUgb2ZcbiAqIHRoZSBBU1QgKGJ5IHJldHVybmluZyBmYWxzZSksIGVkaXRpbmcgdGhlIEFTVCBieSByZXR1cm5pbmcgYSB2YWx1ZSBvciBudWxsXG4gKiB0byByZW1vdmUgdGhlIHZhbHVlLCBvciB0byBzdG9wIHRoZSB3aG9sZSB0cmF2ZXJzYWwgYnkgcmV0dXJuaW5nIEJSRUFLLlxuICpcbiAqIFdoZW4gdXNpbmcgdmlzaXQoKSB0byBlZGl0IGFuIEFTVCwgdGhlIG9yaWdpbmFsIEFTVCB3aWxsIG5vdCBiZSBtb2RpZmllZCwgYW5kXG4gKiBhIG5ldyB2ZXJzaW9uIG9mIHRoZSBBU1Qgd2l0aCB0aGUgY2hhbmdlcyBhcHBsaWVkIHdpbGwgYmUgcmV0dXJuZWQgZnJvbSB0aGVcbiAqIHZpc2l0IGZ1bmN0aW9uLlxuICpcbiAqICAgICBjb25zdCBlZGl0ZWRBU1QgPSB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMpIHtcbiAqICAgICAgICAgLy8gQHJldHVyblxuICogICAgICAgICAvLyAgIHVuZGVmaW5lZDogbm8gYWN0aW9uXG4gKiAgICAgICAgIC8vICAgZmFsc2U6IHNraXAgdmlzaXRpbmcgdGhpcyBub2RlXG4gKiAgICAgICAgIC8vICAgdmlzaXRvci5CUkVBSzogc3RvcCB2aXNpdGluZyBhbHRvZ2V0aGVyXG4gKiAgICAgICAgIC8vICAgbnVsbDogZGVsZXRlIHRoaXMgbm9kZVxuICogICAgICAgICAvLyAgIGFueSB2YWx1ZTogcmVwbGFjZSB0aGlzIG5vZGUgd2l0aCB0aGUgcmV0dXJuZWQgdmFsdWVcbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZShub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzKSB7XG4gKiAgICAgICAgIC8vIEByZXR1cm5cbiAqICAgICAgICAgLy8gICB1bmRlZmluZWQ6IG5vIGFjdGlvblxuICogICAgICAgICAvLyAgIGZhbHNlOiBubyBhY3Rpb25cbiAqICAgICAgICAgLy8gICB2aXNpdG9yLkJSRUFLOiBzdG9wIHZpc2l0aW5nIGFsdG9nZXRoZXJcbiAqICAgICAgICAgLy8gICBudWxsOiBkZWxldGUgdGhpcyBub2RlXG4gKiAgICAgICAgIC8vICAgYW55IHZhbHVlOiByZXBsYWNlIHRoaXMgbm9kZSB3aXRoIHRoZSByZXR1cm5lZCB2YWx1ZVxuICogICAgICAgfVxuICogICAgIH0pO1xuICpcbiAqIEFsdGVybmF0aXZlbHkgdG8gcHJvdmlkaW5nIGVudGVyKCkgYW5kIGxlYXZlKCkgZnVuY3Rpb25zLCBhIHZpc2l0b3IgY2FuXG4gKiBpbnN0ZWFkIHByb3ZpZGUgZnVuY3Rpb25zIG5hbWVkIHRoZSBzYW1lIGFzIHRoZSBraW5kcyBvZiBBU1Qgbm9kZXMsIG9yXG4gKiBlbnRlci9sZWF2ZSB2aXNpdG9ycyBhdCBhIG5hbWVkIGtleSwgbGVhZGluZyB0byBmb3VyIHBlcm11dGF0aW9ucyBvZiB0aGVcbiAqIHZpc2l0b3IgQVBJOlxuICpcbiAqIDEpIE5hbWVkIHZpc2l0b3JzIHRyaWdnZXJlZCB3aGVuIGVudGVyaW5nIGEgbm9kZSBvZiBhIHNwZWNpZmljIGtpbmQuXG4gKlxuICogICAgIHZpc2l0KGFzdCwge1xuICogICAgICAgS2luZChub2RlKSB7XG4gKiAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiAyKSBOYW1lZCB2aXNpdG9ycyB0aGF0IHRyaWdnZXIgdXBvbiBlbnRlcmluZyBhbmQgbGVhdmluZyBhIG5vZGUgb2ZcbiAqICAgIGEgc3BlY2lmaWMga2luZC5cbiAqXG4gKiAgICAgdmlzaXQoYXN0LCB7XG4gKiAgICAgICBLaW5kOiB7XG4gKiAgICAgICAgIGVudGVyKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBlbnRlciB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICAgIGxlYXZlKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBsZWF2ZSB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiAzKSBHZW5lcmljIHZpc2l0b3JzIHRoYXQgdHJpZ2dlciB1cG9uIGVudGVyaW5nIGFuZCBsZWF2aW5nIGFueSBub2RlLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyKG5vZGUpIHtcbiAqICAgICAgICAgLy8gZW50ZXIgYW55IG5vZGVcbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZShub2RlKSB7XG4gKiAgICAgICAgIC8vIGxlYXZlIGFueSBub2RlXG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiA0KSBQYXJhbGxlbCB2aXNpdG9ycyBmb3IgZW50ZXJpbmcgYW5kIGxlYXZpbmcgbm9kZXMgb2YgYSBzcGVjaWZpYyBraW5kLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyOiB7XG4gKiAgICAgICAgIEtpbmQobm9kZSkge1xuICogICAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZToge1xuICogICAgICAgICBLaW5kKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBsZWF2ZSB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXQocm9vdCwgdmlzaXRvcikge1xuICB2YXIgdmlzaXRvcktleXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFF1ZXJ5RG9jdW1lbnRLZXlzO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmLWluaXQgKi9cbiAgdmFyIHN0YWNrID0gdW5kZWZpbmVkO1xuICB2YXIgaW5BcnJheSA9IEFycmF5LmlzQXJyYXkocm9vdCk7XG4gIHZhciBrZXlzID0gW3Jvb3RdO1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGVkaXRzID0gW107XG4gIHZhciBub2RlID0gdW5kZWZpbmVkO1xuICB2YXIga2V5ID0gdW5kZWZpbmVkO1xuICB2YXIgcGFyZW50ID0gdW5kZWZpbmVkO1xuICB2YXIgcGF0aCA9IFtdO1xuICB2YXIgYW5jZXN0b3JzID0gW107XG4gIHZhciBuZXdSb290ID0gcm9vdDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZi1pbml0ICovXG5cbiAgZG8ge1xuICAgIGluZGV4Kys7XG4gICAgdmFyIGlzTGVhdmluZyA9IGluZGV4ID09PSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaXNFZGl0ZWQgPSBpc0xlYXZpbmcgJiYgZWRpdHMubGVuZ3RoICE9PSAwO1xuXG4gICAgaWYgKGlzTGVhdmluZykge1xuICAgICAga2V5ID0gYW5jZXN0b3JzLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBhbmNlc3RvcnMucG9wKCk7XG5cbiAgICAgIGlmIChpc0VkaXRlZCkge1xuICAgICAgICBpZiAoaW5BcnJheSkge1xuICAgICAgICAgIG5vZGUgPSBub2RlLnNsaWNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGNsb25lID0ge307XG5cbiAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMobm9kZSk7IF9pMiA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgdmFyIGsgPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgICAgICAgICBjbG9uZVtrXSA9IG5vZGVba107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbm9kZSA9IGNsb25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVkaXRPZmZzZXQgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBlZGl0cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICB2YXIgZWRpdEtleSA9IGVkaXRzW2lpXVswXTtcbiAgICAgICAgICB2YXIgZWRpdFZhbHVlID0gZWRpdHNbaWldWzFdO1xuXG4gICAgICAgICAgaWYgKGluQXJyYXkpIHtcbiAgICAgICAgICAgIGVkaXRLZXkgLT0gZWRpdE9mZnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5BcnJheSAmJiBlZGl0VmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuc3BsaWNlKGVkaXRLZXksIDEpO1xuICAgICAgICAgICAgZWRpdE9mZnNldCsrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlW2VkaXRLZXldID0gZWRpdFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbmRleCA9IHN0YWNrLmluZGV4O1xuICAgICAga2V5cyA9IHN0YWNrLmtleXM7XG4gICAgICBlZGl0cyA9IHN0YWNrLmVkaXRzO1xuICAgICAgaW5BcnJheSA9IHN0YWNrLmluQXJyYXk7XG4gICAgICBzdGFjayA9IHN0YWNrLnByZXY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSA9IHBhcmVudCA/IGluQXJyYXkgPyBpbmRleCA6IGtleXNbaW5kZXhdIDogdW5kZWZpbmVkO1xuICAgICAgbm9kZSA9IHBhcmVudCA/IHBhcmVudFtrZXldIDogbmV3Um9vdDtcblxuICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGlmICghaXNOb2RlKG5vZGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQVNUIE5vZGU6IFwiLmNvbmNhdChpbnNwZWN0KG5vZGUpLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlzaXRGbiA9IGdldFZpc2l0Rm4odmlzaXRvciwgbm9kZS5raW5kLCBpc0xlYXZpbmcpO1xuXG4gICAgICBpZiAodmlzaXRGbikge1xuICAgICAgICByZXN1bHQgPSB2aXNpdEZuLmNhbGwodmlzaXRvciwgbm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gQlJFQUspIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKCFpc0xlYXZpbmcpIHtcbiAgICAgICAgICAgIHBhdGgucG9wKCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlZGl0cy5wdXNoKFtrZXksIHJlc3VsdF0pO1xuXG4gICAgICAgICAgaWYgKCFpc0xlYXZpbmcpIHtcbiAgICAgICAgICAgIGlmIChpc05vZGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICBub2RlID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkICYmIGlzRWRpdGVkKSB7XG4gICAgICBlZGl0cy5wdXNoKFtrZXksIG5vZGVdKTtcbiAgICB9XG5cbiAgICBpZiAoaXNMZWF2aW5nKSB7XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3Zpc2l0b3JLZXlzJG5vZGUka2luO1xuXG4gICAgICBzdGFjayA9IHtcbiAgICAgICAgaW5BcnJheTogaW5BcnJheSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBrZXlzOiBrZXlzLFxuICAgICAgICBlZGl0czogZWRpdHMsXG4gICAgICAgIHByZXY6IHN0YWNrXG4gICAgICB9O1xuICAgICAgaW5BcnJheSA9IEFycmF5LmlzQXJyYXkobm9kZSk7XG4gICAgICBrZXlzID0gaW5BcnJheSA/IG5vZGUgOiAoX3Zpc2l0b3JLZXlzJG5vZGUka2luID0gdmlzaXRvcktleXNbbm9kZS5raW5kXSkgIT09IG51bGwgJiYgX3Zpc2l0b3JLZXlzJG5vZGUka2luICE9PSB2b2lkIDAgPyBfdmlzaXRvcktleXMkbm9kZSRraW4gOiBbXTtcbiAgICAgIGluZGV4ID0gLTE7XG4gICAgICBlZGl0cyA9IFtdO1xuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGFuY2VzdG9ycy5wdXNoKHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudCA9IG5vZGU7XG4gICAgfVxuICB9IHdoaWxlIChzdGFjayAhPT0gdW5kZWZpbmVkKTtcblxuICBpZiAoZWRpdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgbmV3Um9vdCA9IGVkaXRzW2VkaXRzLmxlbmd0aCAtIDFdWzFdO1xuICB9XG5cbiAgcmV0dXJuIG5ld1Jvb3Q7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmlzaXRvciBpbnN0YW5jZSB3aGljaCBkZWxlZ2F0ZXMgdG8gbWFueSB2aXNpdG9ycyB0byBydW4gaW5cbiAqIHBhcmFsbGVsLiBFYWNoIHZpc2l0b3Igd2lsbCBiZSB2aXNpdGVkIGZvciBlYWNoIG5vZGUgYmVmb3JlIG1vdmluZyBvbi5cbiAqXG4gKiBJZiBhIHByaW9yIHZpc2l0b3IgZWRpdHMgYSBub2RlLCBubyBmb2xsb3dpbmcgdmlzaXRvcnMgd2lsbCBzZWUgdGhhdCBub2RlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEluUGFyYWxsZWwodmlzaXRvcnMpIHtcbiAgdmFyIHNraXBwaW5nID0gbmV3IEFycmF5KHZpc2l0b3JzLmxlbmd0aCk7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlzaXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNraXBwaW5nW2ldID09IG51bGwpIHtcbiAgICAgICAgICB2YXIgZm4gPSBnZXRWaXNpdEZuKHZpc2l0b3JzW2ldLCBub2RlLmtpbmQsXG4gICAgICAgICAgLyogaXNMZWF2aW5nICovXG4gICAgICAgICAgZmFsc2UpO1xuXG4gICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkodmlzaXRvcnNbaV0sIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHNraXBwaW5nW2ldID0gbm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBCUkVBSykge1xuICAgICAgICAgICAgICBza2lwcGluZ1tpXSA9IEJSRUFLO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGVhdmU6IGZ1bmN0aW9uIGxlYXZlKG5vZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlzaXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNraXBwaW5nW2ldID09IG51bGwpIHtcbiAgICAgICAgICB2YXIgZm4gPSBnZXRWaXNpdEZuKHZpc2l0b3JzW2ldLCBub2RlLmtpbmQsXG4gICAgICAgICAgLyogaXNMZWF2aW5nICovXG4gICAgICAgICAgdHJ1ZSk7XG5cbiAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh2aXNpdG9yc1tpXSwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gQlJFQUspIHtcbiAgICAgICAgICAgICAgc2tpcHBpbmdbaV0gPSBCUkVBSztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChza2lwcGluZ1tpXSA9PT0gbm9kZSkge1xuICAgICAgICAgIHNraXBwaW5nW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbi8qKlxuICogR2l2ZW4gYSB2aXNpdG9yIGluc3RhbmNlLCBpZiBpdCBpcyBsZWF2aW5nIG9yIG5vdCwgYW5kIGEgbm9kZSBraW5kLCByZXR1cm5cbiAqIHRoZSBmdW5jdGlvbiB0aGUgdmlzaXRvciBydW50aW1lIHNob3VsZCBjYWxsLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaXNpdEZuKHZpc2l0b3IsIGtpbmQsIGlzTGVhdmluZykge1xuICB2YXIga2luZFZpc2l0b3IgPSB2aXNpdG9yW2tpbmRdO1xuXG4gIGlmIChraW5kVmlzaXRvcikge1xuICAgIGlmICghaXNMZWF2aW5nICYmIHR5cGVvZiBraW5kVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8geyBLaW5kKCkge30gfVxuICAgICAgcmV0dXJuIGtpbmRWaXNpdG9yO1xuICAgIH1cblxuICAgIHZhciBraW5kU3BlY2lmaWNWaXNpdG9yID0gaXNMZWF2aW5nID8ga2luZFZpc2l0b3IubGVhdmUgOiBraW5kVmlzaXRvci5lbnRlcjtcblxuICAgIGlmICh0eXBlb2Yga2luZFNwZWNpZmljVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8geyBLaW5kOiB7IGVudGVyKCkge30sIGxlYXZlKCkge30gfSB9XG4gICAgICByZXR1cm4ga2luZFNwZWNpZmljVmlzaXRvcjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNwZWNpZmljVmlzaXRvciA9IGlzTGVhdmluZyA/IHZpc2l0b3IubGVhdmUgOiB2aXNpdG9yLmVudGVyO1xuXG4gICAgaWYgKHNwZWNpZmljVmlzaXRvcikge1xuICAgICAgaWYgKHR5cGVvZiBzcGVjaWZpY1Zpc2l0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8geyBlbnRlcigpIHt9LCBsZWF2ZSgpIHt9IH1cbiAgICAgICAgcmV0dXJuIHNwZWNpZmljVmlzaXRvcjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNwZWNpZmljS2luZFZpc2l0b3IgPSBzcGVjaWZpY1Zpc2l0b3Jba2luZF07XG5cbiAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWNLaW5kVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyB7IGVudGVyOiB7IEtpbmQoKSB7fSB9LCBsZWF2ZTogeyBLaW5kKCkge30gfSB9XG4gICAgICAgIHJldHVybiBzcGVjaWZpY0tpbmRWaXNpdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gSW4gRVMyMDE1IChvciBhIHBvbHlmaWxsZWQpIGVudmlyb25tZW50LCB0aGlzIHdpbGwgYmUgU3ltYm9sLml0ZXJhdG9yXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5leHBvcnQgdmFyIFNZTUJPTF9JVEVSQVRPUiA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgPyBTeW1ib2wuaXRlcmF0b3IgOiAnQEBpdGVyYXRvcic7IC8vIEluIEVTMjAxNyAob3IgYSBwb2x5ZmlsbGVkKSBlbnZpcm9ubWVudCwgdGhpcyB3aWxsIGJlIFN5bWJvbC5hc3luY0l0ZXJhdG9yXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5cbmV4cG9ydCB2YXIgU1lNQk9MX0FTWU5DX0lURVJBVE9SID0gLy8gJEZsb3dGaXhNZSBGbG93IGRvZXNuJ3QgZGVmaW5lIGBTeW1ib2wuYXN5bmNJdGVyYXRvcmAgeWV0XG50eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nID8gU3ltYm9sLmFzeW5jSXRlcmF0b3IgOiAnQEBhc3luY0l0ZXJhdG9yJzsgLy8gaXN0YW5idWwgaWdub3JlIG5leHQgKFNlZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMvaXNzdWVzLzIzMTcnKVxuXG5leHBvcnQgdmFyIFNZTUJPTF9UT19TVFJJTkdfVEFHID0gLy8gJEZsb3dGaXhNZSBGbG93IGRvZXNuJ3QgZGVmaW5lIGBTeW1ib2wudG9TdHJpbmdUYWdgIHlldFxudHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/IFN5bWJvbC50b1N0cmluZ1RhZyA6ICdAQHRvU3RyaW5nVGFnJztcbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvc2NyaXB0LXBhZ2VcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxnaG9yaVxcXFxEZXNrdG9wXFxcXFNob3BpZnkgQXBwXFxcXHNob3BpZnktc3RhcnQtYXBwXFxcXHBhZ2VzXFxcXHNjcmlwdC1wYWdlLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKTsiLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgcG9ueWZpbGwgZnJvbSAnLi9wb255ZmlsbC5qcyc7XG5cbnZhciByb290O1xuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSBwb255ZmlsbChyb290KTtcbmV4cG9ydCBkZWZhdWx0IHJlc3VsdDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChTeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0U3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tICd0c2xpYic7XG5cbnZhciBnZW5lcmljTWVzc2FnZSA9IFwiSW52YXJpYW50IFZpb2xhdGlvblwiO1xyXG52YXIgX2EgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YsIHNldFByb3RvdHlwZU9mID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChvYmosIHByb3RvKSB7XHJcbiAgICBvYmouX19wcm90b19fID0gcHJvdG87XHJcbiAgICByZXR1cm4gb2JqO1xyXG59IDogX2E7XHJcbnZhciBJbnZhcmlhbnRFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhJbnZhcmlhbnRFcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEludmFyaWFudEVycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAobWVzc2FnZSA9PT0gdm9pZCAwKSB7IG1lc3NhZ2UgPSBnZW5lcmljTWVzc2FnZTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHR5cGVvZiBtZXNzYWdlID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgID8gZ2VuZXJpY01lc3NhZ2UgKyBcIjogXCIgKyBtZXNzYWdlICsgXCIgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vYXBvbGxvZ3JhcGhxbC9pbnZhcmlhbnQtcGFja2FnZXMpXCJcclxuICAgICAgICAgICAgOiBtZXNzYWdlKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmZyYW1lc1RvUG9wID0gMTtcclxuICAgICAgICBfdGhpcy5uYW1lID0gZ2VuZXJpY01lc3NhZ2U7XHJcbiAgICAgICAgc2V0UHJvdG90eXBlT2YoX3RoaXMsIEludmFyaWFudEVycm9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEludmFyaWFudEVycm9yO1xyXG59KEVycm9yKSk7XHJcbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcclxuICAgIGlmICghY29uZGl0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEludmFyaWFudEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHdyYXBDb25zb2xlTWV0aG9kKG1ldGhvZCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZVttZXRob2RdLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59XHJcbihmdW5jdGlvbiAoaW52YXJpYW50KSB7XHJcbiAgICBpbnZhcmlhbnQud2FybiA9IHdyYXBDb25zb2xlTWV0aG9kKFwid2FyblwiKTtcclxuICAgIGludmFyaWFudC5lcnJvciA9IHdyYXBDb25zb2xlTWV0aG9kKFwiZXJyb3JcIik7XHJcbn0pKGludmFyaWFudCB8fCAoaW52YXJpYW50ID0ge30pKTtcclxuLy8gQ29kZSB0aGF0IHVzZXMgdHMtaW52YXJpYW50IHdpdGggcm9sbHVwLXBsdWdpbi1pbnZhcmlhbnQgbWF5IHdhbnQgdG9cclxuLy8gaW1wb3J0IHRoaXMgcHJvY2VzcyBzdHViIHRvIGF2b2lkIGVycm9ycyBldmFsdWF0aW5nIHByb2Nlc3MuZW52Lk5PREVfRU5WLlxyXG4vLyBIb3dldmVyLCBiZWNhdXNlIG1vc3QgRVNNLXRvLUNKUyBjb21waWxlcnMgd2lsbCByZXdyaXRlIHRoZSBwcm9jZXNzIGltcG9ydFxyXG4vLyBhcyB0c0ludmFyaWFudC5wcm9jZXNzLCB3aGljaCBwcmV2ZW50cyBwcm9wZXIgcmVwbGFjZW1lbnQgYnkgbWluaWZpZXJzLCB3ZVxyXG4vLyBhbHNvIGF0dGVtcHQgdG8gZGVmaW5lIHRoZSBzdHViIGdsb2JhbGx5IHdoZW4gaXQgaXMgbm90IGFscmVhZHkgZGVmaW5lZC5cclxudmFyIHByb2Nlc3NTdHViID0geyBlbnY6IHt9IH07XHJcbmlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgcHJvY2Vzc1N0dWIgPSBwcm9jZXNzO1xyXG59XHJcbmVsc2VcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVXNpbmcgRnVuY3Rpb24gdG8gZXZhbHVhdGUgdGhpcyBhc3NpZ25tZW50IGluIGdsb2JhbCBzY29wZSBhbHNvIGVzY2FwZXNcclxuICAgICAgICAvLyB0aGUgc3RyaWN0IG1vZGUgb2YgdGhlIGN1cnJlbnQgbW9kdWxlLCB0aGVyZWJ5IGFsbG93aW5nIHRoZSBhc3NpZ25tZW50LlxyXG4gICAgICAgIC8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9wdWxsLzM2OS5cclxuICAgICAgICBGdW5jdGlvbihcInN0dWJcIiwgXCJwcm9jZXNzID0gc3R1YlwiKShwcm9jZXNzU3R1Yik7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoYXRMZWFzdFdlVHJpZWQpIHtcclxuICAgICAgICAvLyBUaGUgYXNzaWdubWVudCBjYW4gZmFpbCBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGhlYXZ5LWhhbmRlZGx5XHJcbiAgICAgICAgLy8gZm9yYmlkcyBGdW5jdGlvbiB1c2FnZS4gSW4gdGhvc2UgZW52aXJvbm1lbnRzLCBkZXZlbG9wZXJzIHNob3VsZCB0YWtlXHJcbiAgICAgICAgLy8gZXh0cmEgY2FyZSB0byByZXBsYWNlIHByb2Nlc3MuZW52Lk5PREVfRU5WIGluIHRoZWlyIHByb2R1Y3Rpb24gYnVpbGRzLFxyXG4gICAgICAgIC8vIG9yIGRlZmluZSBhbiBhcHByb3ByaWF0ZSBnbG9iYWwucHJvY2VzcyBwb2x5ZmlsbC5cclxuICAgIH1cclxudmFyIGludmFyaWFudCQxID0gaW52YXJpYW50O1xuXG5leHBvcnQgZGVmYXVsdCBpbnZhcmlhbnQkMTtcbmV4cG9ydCB7IEludmFyaWFudEVycm9yLCBpbnZhcmlhbnQsIHByb2Nlc3NTdHViIGFzIHByb2Nlc3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludmFyaWFudC5lc20uanMubWFwXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHplbk9ic2VydmFibGUgZnJvbSAnemVuLW9ic2VydmFibGUnO1xuXG52YXIgT2JzZXJ2YWJsZSA9IHplbk9ic2VydmFibGU7XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGU7XG5leHBvcnQgeyBPYnNlcnZhYmxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idW5kbGUuZXNtLmpzLm1hcFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9PYnNlcnZhYmxlLmpzJykuT2JzZXJ2YWJsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5PYnNlcnZhYmxlID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8vID09PSBTeW1ib2wgU3VwcG9ydCA9PT1cbnZhciBoYXNTeW1ib2xzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbnZhciBoYXNTeW1ib2wgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gaGFzU3ltYm9scygpICYmIEJvb2xlYW4oU3ltYm9sW25hbWVdKTtcbn07XG5cbnZhciBnZXRTeW1ib2wgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gaGFzU3ltYm9sKG5hbWUpID8gU3ltYm9sW25hbWVdIDogJ0BAJyArIG5hbWU7XG59O1xuXG5pZiAoaGFzU3ltYm9scygpICYmICFoYXNTeW1ib2woJ29ic2VydmFibGUnKSkge1xuICBTeW1ib2wub2JzZXJ2YWJsZSA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xufVxuXG52YXIgU3ltYm9sSXRlcmF0b3IgPSBnZXRTeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU3ltYm9sT2JzZXJ2YWJsZSA9IGdldFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xudmFyIFN5bWJvbFNwZWNpZXMgPSBnZXRTeW1ib2woJ3NwZWNpZXMnKTsgLy8gPT09IEFic3RyYWN0IE9wZXJhdGlvbnMgPT09XG5cbmZ1bmN0aW9uIGdldE1ldGhvZChvYmosIGtleSkge1xuICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IodmFsdWUgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0U3BlY2llcyhvYmopIHtcbiAgdmFyIGN0b3IgPSBvYmouY29uc3RydWN0b3I7XG5cbiAgaWYgKGN0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgIGN0b3IgPSBjdG9yW1N5bWJvbFNwZWNpZXNdO1xuXG4gICAgaWYgKGN0b3IgPT09IG51bGwpIHtcbiAgICAgIGN0b3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGN0b3IgIT09IHVuZGVmaW5lZCA/IGN0b3IgOiBPYnNlcnZhYmxlO1xufVxuXG5mdW5jdGlvbiBpc09ic2VydmFibGUoeCkge1xuICByZXR1cm4geCBpbnN0YW5jZW9mIE9ic2VydmFibGU7IC8vIFNQRUM6IEJyYW5kIGNoZWNrXG59XG5cbmZ1bmN0aW9uIGhvc3RSZXBvcnRFcnJvcihlKSB7XG4gIGlmIChob3N0UmVwb3J0RXJyb3IubG9nKSB7XG4gICAgaG9zdFJlcG9ydEVycm9yLmxvZyhlKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5xdWV1ZShmbikge1xuICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgZm4oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBob3N0UmVwb3J0RXJyb3IoZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgdmFyIGNsZWFudXAgPSBzdWJzY3JpcHRpb24uX2NsZWFudXA7XG4gIGlmIChjbGVhbnVwID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgc3Vic2NyaXB0aW9uLl9jbGVhbnVwID0gdW5kZWZpbmVkO1xuXG4gIGlmICghY2xlYW51cCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBjbGVhbnVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1bnN1YnNjcmliZSA9IGdldE1ldGhvZChjbGVhbnVwLCAndW5zdWJzY3JpYmUnKTtcblxuICAgICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHVuc3Vic2NyaWJlLmNhbGwoY2xlYW51cCk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaG9zdFJlcG9ydEVycm9yKGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICBzdWJzY3JpcHRpb24uX29ic2VydmVyID0gdW5kZWZpbmVkO1xuICBzdWJzY3JpcHRpb24uX3F1ZXVlID0gdW5kZWZpbmVkO1xuICBzdWJzY3JpcHRpb24uX3N0YXRlID0gJ2Nsb3NlZCc7XG59XG5cbmZ1bmN0aW9uIGZsdXNoU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICB2YXIgcXVldWUgPSBzdWJzY3JpcHRpb24uX3F1ZXVlO1xuXG4gIGlmICghcXVldWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdWJzY3JpcHRpb24uX3F1ZXVlID0gdW5kZWZpbmVkO1xuICBzdWJzY3JpcHRpb24uX3N0YXRlID0gJ3JlYWR5JztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgbm90aWZ5U3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbiwgcXVldWVbaV0udHlwZSwgcXVldWVbaV0udmFsdWUpO1xuICAgIGlmIChzdWJzY3JpcHRpb24uX3N0YXRlID09PSAnY2xvc2VkJykgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5U3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbiwgdHlwZSwgdmFsdWUpIHtcbiAgc3Vic2NyaXB0aW9uLl9zdGF0ZSA9ICdydW5uaW5nJztcbiAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vYnNlcnZlcjtcblxuICB0cnkge1xuICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLCB0eXBlKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgIGlmIChtKSBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgY2xvc2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgaWYgKG0pIG0uY2FsbChvYnNlcnZlciwgdmFsdWUpO2Vsc2UgdGhyb3cgdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjb21wbGV0ZSc6XG4gICAgICAgIGNsb3NlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIGlmIChtKSBtLmNhbGwob2JzZXJ2ZXIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBob3N0UmVwb3J0RXJyb3IoZSk7XG4gIH1cblxuICBpZiAoc3Vic2NyaXB0aW9uLl9zdGF0ZSA9PT0gJ2Nsb3NlZCcpIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtlbHNlIGlmIChzdWJzY3JpcHRpb24uX3N0YXRlID09PSAncnVubmluZycpIHN1YnNjcmlwdGlvbi5fc3RhdGUgPSAncmVhZHknO1xufVxuXG5mdW5jdGlvbiBvbk5vdGlmeShzdWJzY3JpcHRpb24sIHR5cGUsIHZhbHVlKSB7XG4gIGlmIChzdWJzY3JpcHRpb24uX3N0YXRlID09PSAnY2xvc2VkJykgcmV0dXJuO1xuXG4gIGlmIChzdWJzY3JpcHRpb24uX3N0YXRlID09PSAnYnVmZmVyaW5nJykge1xuICAgIHN1YnNjcmlwdGlvbi5fcXVldWUucHVzaCh7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3Vic2NyaXB0aW9uLl9zdGF0ZSAhPT0gJ3JlYWR5Jykge1xuICAgIHN1YnNjcmlwdGlvbi5fc3RhdGUgPSAnYnVmZmVyaW5nJztcbiAgICBzdWJzY3JpcHRpb24uX3F1ZXVlID0gW3tcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9XTtcbiAgICBlbnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbHVzaFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG5vdGlmeVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIHR5cGUsIHZhbHVlKTtcbn1cblxudmFyIFN1YnNjcmlwdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbihvYnNlcnZlciwgc3Vic2NyaWJlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdWJzY3JpcHRpb24pO1xuXG4gICAgLy8gQVNTRVJUOiBvYnNlcnZlciBpcyBhbiBvYmplY3RcbiAgICAvLyBBU1NFUlQ6IHN1YnNjcmliZXIgaXMgY2FsbGFibGVcbiAgICB0aGlzLl9jbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX29ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgdGhpcy5fcXVldWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc3RhdGUgPSAnaW5pdGlhbGl6aW5nJztcbiAgICB2YXIgc3Vic2NyaXB0aW9uT2JzZXJ2ZXIgPSBuZXcgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIodGhpcyk7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5fY2xlYW51cCA9IHN1YnNjcmliZXIuY2FsbCh1bmRlZmluZWQsIHN1YnNjcmlwdGlvbk9ic2VydmVyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzdWJzY3JpcHRpb25PYnNlcnZlci5lcnJvcihlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgPT09ICdpbml0aWFsaXppbmcnKSB0aGlzLl9zdGF0ZSA9ICdyZWFkeSc7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3Vic2NyaXB0aW9uLCBbe1xuICAgIGtleTogXCJ1bnN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgY2xvc2VTdWJzY3JpcHRpb24odGhpcyk7XG4gICAgICAgIGNsZWFudXBTdWJzY3JpcHRpb24odGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsb3NlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlID09PSAnY2xvc2VkJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpO1xuXG52YXIgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdWJzY3JpcHRpb25PYnNlcnZlcihzdWJzY3JpcHRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIpO1xuXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN1YnNjcmlwdGlvbk9ic2VydmVyLCBbe1xuICAgIGtleTogXCJuZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQodmFsdWUpIHtcbiAgICAgIG9uTm90aWZ5KHRoaXMuX3N1YnNjcmlwdGlvbiwgJ25leHQnLCB2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVycm9yKHZhbHVlKSB7XG4gICAgICBvbk5vdGlmeSh0aGlzLl9zdWJzY3JpcHRpb24sICdlcnJvcicsIHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcGxldGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBvbk5vdGlmeSh0aGlzLl9zdWJzY3JpcHRpb24sICdjb21wbGV0ZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbG9zZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb24uX3N0YXRlID09PSAnY2xvc2VkJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3Vic2NyaXB0aW9uT2JzZXJ2ZXI7XG59KCk7XG5cbnZhciBPYnNlcnZhYmxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gT2JzZXJ2YWJsZShzdWJzY3JpYmVyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9ic2VydmFibGUpO1xuXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYnNlcnZhYmxlIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbicpO1xuICAgIGlmICh0eXBlb2Ygc3Vic2NyaWJlciAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JzZXJ2YWJsZSBpbml0aWFsaXplciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVyID0gc3Vic2NyaWJlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhPYnNlcnZhYmxlLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0JyB8fCBvYnNlcnZlciA9PT0gbnVsbCkge1xuICAgICAgICBvYnNlcnZlciA9IHtcbiAgICAgICAgICBuZXh0OiBvYnNlcnZlcixcbiAgICAgICAgICBlcnJvcjogYXJndW1lbnRzWzFdLFxuICAgICAgICAgIGNvbXBsZXRlOiBhcmd1bWVudHNbMl1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24ob2JzZXJ2ZXIsIHRoaXMuX3N1YnNjcmliZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JFYWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcihmbiArICcgaXMgbm90IGEgZnVuY3Rpb24nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gX3RoaXMuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZuKHZhbHVlLCBkb25lKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgICAgY29tcGxldGU6IHJlc29sdmVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWFwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hcChmbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoZm4gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB2YXIgQyA9IGdldFNwZWNpZXModGhpcyk7XG4gICAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gZm4odmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlsdGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlcihmbikge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoZm4gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB2YXIgQyA9IGdldFNwZWNpZXModGhpcyk7XG4gICAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmICghZm4odmFsdWUpKSByZXR1cm47XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWR1Y2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVkdWNlKGZuKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcihmbiArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgIHZhciBDID0gZ2V0U3BlY2llcyh0aGlzKTtcbiAgICAgIHZhciBoYXNTZWVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDE7XG4gICAgICB2YXIgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgIHZhciBzZWVkID0gYXJndW1lbnRzWzFdO1xuICAgICAgdmFyIGFjYyA9IHNlZWQ7XG4gICAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdCA9ICFoYXNWYWx1ZTtcbiAgICAgICAgICAgIGhhc1ZhbHVlID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCFmaXJzdCB8fCBoYXNTZWVkKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYWNjID0gZm4oYWNjLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjYyA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1ZhbHVlICYmICFoYXNTZWVkKSByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IobmV3IFR5cGVFcnJvcignQ2Fubm90IHJlZHVjZSBhbiBlbXB0eSBzZXF1ZW5jZScpKTtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoYWNjKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb25jYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29uY2F0KCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzb3VyY2VzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBzb3VyY2VzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgQyA9IGdldFNwZWNpZXModGhpcyk7XG4gICAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb247XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnROZXh0KG5leHQpIHtcbiAgICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXh0LnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHYpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IHNvdXJjZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnROZXh0KEMuZnJvbShzb3VyY2VzW2luZGV4KytdKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0TmV4dChfdGhpczUpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmbGF0TWFwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZsYXRNYXAoZm4pIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKGZuICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgdmFyIEMgPSBnZXRTcGVjaWVzKHRoaXMpO1xuICAgICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAgIHZhciBvdXRlciA9IF90aGlzNi5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBmbih2YWx1ZSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGlubmVyID0gQy5mcm9tKHZhbHVlKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBzdWJzY3JpcHRpb25zLmluZGV4T2YoaW5uZXIpO1xuICAgICAgICAgICAgICAgIGlmIChpID49IDApIHN1YnNjcmlwdGlvbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlSWZEb25lKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5wdXNoKGlubmVyKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29tcGxldGVJZkRvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNvbXBsZXRlSWZEb25lKCkge1xuICAgICAgICAgIGlmIChvdXRlci5jbG9zZWQgJiYgc3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDApIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIHMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvdXRlci51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBTeW1ib2xPYnNlcnZhYmxlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJmcm9tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZyb20oeCkge1xuICAgICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBPYnNlcnZhYmxlO1xuICAgICAgaWYgKHggPT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcih4ICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gICAgICB2YXIgbWV0aG9kID0gZ2V0TWV0aG9kKHgsIFN5bWJvbE9ic2VydmFibGUpO1xuXG4gICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbWV0aG9kLmNhbGwoeCk7XG4gICAgICAgIGlmIChPYmplY3Qob2JzZXJ2YWJsZSkgIT09IG9ic2VydmFibGUpIHRocm93IG5ldyBUeXBlRXJyb3Iob2JzZXJ2YWJsZSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlKG9ic2VydmFibGUpICYmIG9ic2VydmFibGUuY29uc3RydWN0b3IgPT09IEMpIHJldHVybiBvYnNlcnZhYmxlO1xuICAgICAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNTeW1ib2woJ2l0ZXJhdG9yJykpIHtcbiAgICAgICAgbWV0aG9kID0gZ2V0TWV0aG9kKHgsIFN5bWJvbEl0ZXJhdG9yKTtcblxuICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgZW5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChvYnNlcnZlci5jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gbWV0aG9kLmNhbGwoeClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgX2l0ZW0gPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoX2l0ZW0pO1xuICAgICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyLmNsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgICAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgZW5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIuY2xvc2VkKSByZXR1cm47XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHhbaV0pO1xuICAgICAgICAgICAgICBpZiAob2JzZXJ2ZXIuY2xvc2VkKSByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHggKyAnIGlzIG5vdCBvYnNlcnZhYmxlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9mXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBpdGVtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09PSAnZnVuY3Rpb24nID8gdGhpcyA6IE9ic2VydmFibGU7XG4gICAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIGVucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5jbG9zZWQpIHJldHVybjtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXRlbXNbaV0pO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyLmNsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBTeW1ib2xTcGVjaWVzLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9ic2VydmFibGU7XG59KCk7XG5cbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU7XG5cbmlmIChoYXNTeW1ib2xzKCkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGUsIFN5bWJvbCgnZXh0ZW5zaW9ucycpLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHN5bWJvbDogU3ltYm9sT2JzZXJ2YWJsZSxcbiAgICAgIGhvc3RSZXBvcnRFcnJvcjogaG9zdFJlcG9ydEVycm9yXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xyXG5pbXBvcnQge3VzZVF1ZXJ5LHVzZU11dGF0aW9ufSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5cclxuY29uc3QgQ1JFQVRFX1NDUklQVF9UQUcgPSBncWxgXHJcbm11dGF0aW9uIHNjcmlwdFRhZ0NyZWF0ZSgkaW5wdXQ6IFNjcmlwdFRhZ0lucHV0ISkge1xyXG4gICAgc2NyaXB0VGFnQ3JlYXRlKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgc2NyaXB0VGFnIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgIGZpZWxkXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFF1ZXJ5X1NDUklQVElORyA9IGdxbGBcclxucXVlcnl7XHJcbiAgc2NyaXB0VGFncyhmaXJzdDo1KXtcclxuICAgIGVkZ2Vze1xyXG4gICAgICBub2RlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNyY1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmBcclxuXHJcbmNvbnN0IFNjcmlwdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qge2xvYWRpbmcsZXJyb3IsZGF0YX0gPSB1c2VRdWVyeShRdWVyeV9TQ1JJUFRJTkcpXHJcbiAgaWYobG9hZGluZykgcmV0dXJuIDxkaXY+bG9hZGluZy4uLi48L2Rpdj5cclxuICBpZihlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgSGVsbG8gZnJvbSBTY3JpcHQgUGFnZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRQYWdlXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1OyJdLCJzb3VyY2VSb290IjoiIn0=