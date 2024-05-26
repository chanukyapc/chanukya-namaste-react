/**
 * <div id="parent">
 * <div id="child">
 * <h1>im an h1 tag</h1>
 * <h2>im an h2 tag </h2>
 * </div>
 * </div>
 * * <div id="paren2">
 * <div id="chil2">
 * <h1>im an h1 tag</h1>
 * <h2>im an h2 tag </h2>
 * </div>
 * </div>
 */

const parent = React.createElement('div', { id: "parent" }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', {}, "hi im an h1 tag"),
        React.createElement('h2', {}, 'hey im an h2 tag')
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h2', {}, 'hey im child h1'),
        React.createElement('h2', {}, 'hey im child h2')
    ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

