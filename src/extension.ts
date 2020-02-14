// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

const CHARSET =
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// A function to generate a random hash value
const generateRandomHash = (length: number = 6) => {
  return Array.from({ length }).reduce((soFar: string): string => {
    const choice = Math.round(Math.random() * (CHARSET.length - 1));
    const newChar = CHARSET[choice];
    return `${soFar}${newChar}`;
  }, "#");
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerTextEditorCommand(
    "extension.insertHashtag",
    (textEditor, edit) => {
      textEditor.edit(editBuilder => {
        editBuilder.insert(textEditor.selection.active, generateRandomHash());
      });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
