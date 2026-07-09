import { Fragment } from 'react'
import { IconCheck, IconClose } from './Icons'

function Cell({ value }) {
  if (value === 'yes') {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange/15 mx-auto">
        <IconCheck className="w-4 h-4 text-brand-orange" />
      </span>
    )
  }
  if (value === 'partial') {
    return (
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-blue/15 mx-auto text-brand-blueLight text-xs font-bold"
        title="Partially included"
      >
        ~
      </span>
    )
  }
  if (value === 'no') {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 mx-auto">
        <IconClose className="w-3.5 h-3.5 text-slate-600" />
      </span>
    )
  }
  return <span className="text-sm text-slate-300 font-medium">{value}</span>
}

export default function FeatureComparisonTable({ groups, planNames }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="bg-navy-700/60">
            <th className="sticky left-0 bg-navy-700/60 px-6 py-4 text-sm font-bold uppercase tracking-wide text-slate-300">
              Feature
            </th>
            {planNames.map((name) => (
              <th key={name} className="px-4 py-4 text-sm font-bold text-white text-center min-w-[110px]">
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <Fragment key={group.category}>
              <tr className="bg-brand-orange/5">
                <td colSpan={planNames.length + 1} className="px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-brand-orange">
                  {group.category}
                </td>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.label} className="border-t border-white/5 hover:bg-white/[0.03] transition-colors">
                  <td className="sticky left-0 bg-navy-900 px-6 py-3.5 text-sm text-slate-300">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="px-4 py-3.5 text-center">
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
