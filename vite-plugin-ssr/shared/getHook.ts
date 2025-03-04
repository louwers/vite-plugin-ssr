export { getHook }
export { assertHook }

import { PageContextExports } from './getPageFiles'
import { assert, assertUsage, isCallable } from './utils'

function getHook(
  pageContext: PageContextExports,
  hookName: 'render' | 'onBeforeRender' | 'onBeforePrerender' | 'onBeforeRoute'
): null | { hook: Function; filePath: string } {
  if (!(hookName in pageContext.exports)) {
    return null
  }
  const hook = pageContext.exports[hookName]
  const file = pageContext.exportsAll[hookName]![0]!
  assert(file.exportValue === hook)
  const filePath = file._filePath
  assert(filePath)
  assert(!hookName.endsWith(')'))
  assertUsage(isCallable(hook), `\`export { ${hookName} }\` of ${filePath} should be a function`)
  return { hook, filePath }
}

function assertHook<PC extends PageContextExports, HookName extends PropertyKey>(
  pageContext: PC,
  hookName: HookName
): asserts pageContext is PC & { exports: Record<HookName, Function | undefined> } {
  getHook(pageContext, hookName as any)
}
