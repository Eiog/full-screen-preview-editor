import { ChartsWidget } from './Charts'
import { CommonWidget } from './Common'
import { MediaWidget } from './Media'
import { ToolsWidget } from './Tools'
export const WidgetList = {
    ...ChartsWidget,
    ...CommonWidget,
    ...MediaWidget,
    ...ToolsWidget
}