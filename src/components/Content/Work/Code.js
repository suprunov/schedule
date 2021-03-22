import CodeMirror from '@uiw/react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/javascript/javascript.js');
export const Code = props => {
    const {config} = props;
    const code = JSON.stringify(config, null, 2);
    return (<CodeMirror
        value={code}
        options={{
            theme: 'material',
            mode: 'javascript',
            readOnly: true,
        }}
    />);
}
