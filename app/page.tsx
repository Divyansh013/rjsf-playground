'use client'
import { useState } from 'react';
import Form from '@rjsf/core';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import './globals.css';
import customTheme from '../components/customTheme';

export default function Home() {
  const [jsonSchema, setJsonSchema] = useState('{}');
  const [uiSchema, setUiSchema] = useState('{}');

  const handleJsonSchemaChange = (value) => {
    setJsonSchema(value);
  };

  const handleUiSchemaChange = (value) => {
    setUiSchema(value);
  };

  let parsedJsonSchema;
  let parsedUiSchema;
  try {
    parsedJsonSchema = JSON.parse(jsonSchema);
  } catch (e) {
    parsedJsonSchema = {};
  }
  try {
    parsedUiSchema = JSON.parse(uiSchema);
  } catch (e) {
    parsedUiSchema = {};
  }

  console.log(parsedJsonSchema);
  console.log(parsedUiSchema);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">JSON Schema</h2>
        <CodeMirror
          value={jsonSchema}
          height="45%"
          extensions={[json()]}
          onChange={(value) => handleJsonSchemaChange(value)}
        />
        <h2 className="text-xl font-bold mt-4 mb-4">UI Schema</h2>
        <CodeMirror
          value={uiSchema}
          height="45%"
          extensions={[json()]}
          onChange={(value) => handleUiSchemaChange(value)}
        />
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Rendered Form</h2>
        <Form schema={parsedJsonSchema} uiSchema={parsedUiSchema} validator={validator} {...customTheme}/>
      </div>
    </div>
  );
}
