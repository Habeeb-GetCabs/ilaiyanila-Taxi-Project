/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-semibold text-lg">
          &lt;/&gt;
        </div>
        <h1 className="text-xl font-semibold text-slate-900">Website Editor Assistant</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Ready to manage your static HTML, CSS, and JS website files with zero unintended edits and 100% exact formatting preservation.
        </p>
        <div className="pt-2 text-xs text-slate-400 font-mono">
          Waiting for file contents and first task...
        </div>
      </div>
    </div>
  );
}
