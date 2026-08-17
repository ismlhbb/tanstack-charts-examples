// Auto-generated catalog from TanStack/charts conformance cases
import { lazy, type ComponentType } from 'react'

export interface CatalogEntry {
  id: string
  title: string
  family: string
  intent: string
  Component: ComponentType
}

const Case_01_line_gaps = lazy(() => import('./cases/01-line-gaps/example'))

const Case_02_multi_line_end_labels = lazy(() => import('./cases/02-multi-line-end-labels/example'))

const Case_19_moving_average_line = lazy(() => import('./cases/19-moving-average-line/example'))

const Case_03_temperature_range_band = lazy(() => import('./cases/03-temperature-range-band/example'))

const Case_04_stacked_time_area = lazy(() => import('./cases/04-stacked-time-area/example'))

const Case_62_ridgeline_density = lazy(() => import('./cases/62-ridgeline-density/example'))

const Case_70_composed_chart = lazy(() => import('./cases/70-composed-chart/example'))

const Case_bar_vertical_sorted = lazy(() => import('./cases/bar-vertical-sorted/example'))

const Case_bar_horizontal_ranking = lazy(() => import('./cases/bar-horizontal-ranking/example'))

const Case_bar_grouped = lazy(() => import('./cases/bar-grouped/example'))

const Case_bar_stacked = lazy(() => import('./cases/bar-stacked/example'))

const Case_29_waterfall = lazy(() => import('./cases/29-waterfall/example'))

const Case_95_rounded_donut = lazy(() => import('./cases/95-rounded-donut/example'))

const Case_93_labeled_pie = lazy(() => import('./cases/93-labeled-pie/example'))

const Case_100_radial_bars = lazy(() => import('./cases/100-radial-bars/example'))

const Case_101_sunburst = lazy(() => import('./cases/101-sunburst/example'))

const Case_102_world_choropleth = lazy(() => import('./cases/102-world-choropleth/example'))

const Case_103_bubble_map = lazy(() => import('./cases/103-bubble-map/example'))

const Case_104_orthographic_globe = lazy(() => import('./cases/104-orthographic-globe/example'))

const Case_108_country_choropleth = lazy(() => import('./cases/108-country-choropleth/example'))

const Case_scatter_bubble = lazy(() => import('./cases/scatter-bubble/example'))

const Case_114_spring_line_motion = lazy(() => import('./cases/114-spring-line-motion/example'))

const Case_115_definition_motion = lazy(() => import('./cases/115-definition-motion/example'))

const Case_111_basic_sankey = lazy(() => import('./cases/111-basic-sankey/example'))

export const catalog: CatalogEntry[] = [
  { id: '01-line-gaps', title: 'Apple stock line with seasonal gaps', family: 'trend', intent: 'Render Apple closing prices while exposing first-quarter missing values as visible gaps through the y channel, matching Observable Plot\'s AAPL example without reshaping the source rows.', Component: Case_01_line_gaps },
  { id: '02-multi-line-end-labels', title: 'Industry unemployment with end labels', family: 'trend', intent: 'Compare monthly unemployment in manufacturing, construction, and finance and label each industry\'s newest dated observation directly, independent of input order.', Component: Case_02_multi_line_end_labels },
  { id: '19-moving-average-line', title: 'San Francisco temperature moving averages', family: 'trend', intent: 'Smooth the daily high and low fields from Plot\'s San Francisco temperature fixture with trailing fourteen-day means.', Component: Case_19_moving_average_line },
  { id: '03-temperature-range-band', title: 'San Francisco temperature range band', family: 'range', intent: 'Show San Francisco\'s daily low-to-high temperature interval from Plot\'s pinned fixture using its original date, low, and high fields.', Component: Case_03_temperature_range_band },
  { id: '04-stacked-time-area', title: 'Industry unemployment stacked area', family: 'composition', intent: 'Stack every industry in the unemployment dataset over a shared UTC axis from the original observations.', Component: Case_04_stacked_time_area },
  { id: '62-ridgeline-density', title: 'Ridgeline density comparison', family: 'distribution', intent: 'Compare the distribution of real Simpsons episode IMDb ratings across three seasons in compact vertically offset layers.', Component: Case_62_ridgeline_density },
  { id: '70-composed-chart', title: 'Layered Seattle weather chart', family: 'composition', intent: 'Compare daily maximum temperature, precipitation, minimum temperature, and wind using an area, bars, a line, and points.', Component: Case_70_composed_chart },
  { id: 'bar-vertical-sorted', title: 'Sorted vertical bars', family: 'bar', intent: 'Compare English letter frequencies with the most frequent letter first.', Component: Case_bar_vertical_sorted },
  { id: 'bar-horizontal-ranking', title: 'Horizontal ranking with long labels', family: 'bar', intent: 'Rank metropolitan populations while keeping the source\'s long Metro labels visible.', Component: Case_bar_horizontal_ranking },
  { id: 'bar-grouped', title: 'Grouped bars', family: 'bar', intent: 'Compare female and male penguin counts side by side within each species.', Component: Case_bar_grouped },
  { id: 'bar-stacked', title: 'Stacked bars', family: 'bar', intent: 'Compare monthly Crimean War deaths while preserving disease, wounds, and other causes.', Component: Case_bar_stacked },
  { id: '29-waterfall', title: 'Annual gasoline-price waterfall', family: 'composition', intent: 'Show how annual changes bridge from the 2004 U.S. gasoline price to the net change in 2010.', Component: Case_29_waterfall },
  { id: '95-rounded-donut', title: 'Rounded letter frequency donut', family: 'polar', intent: 'Separate five English letter frequencies with deliberate angular gaps and rounded arc ends.', Component: Case_95_rounded_donut },
  { id: '93-labeled-pie', title: 'Letter frequency pie with labels', family: 'polar', intent: 'Identify each selected English letter around a frequency pie without relying on a separate legend.', Component: Case_93_labeled_pie },
  { id: '100-radial-bars', title: 'Concentric letter frequency bars', family: 'polar', intent: 'Compare four English letter frequencies through concentric rounded radial bars on one shared angular scale.', Component: Case_100_radial_bars },
  { id: '101-sunburst', title: 'Flare analytics sunburst', family: 'hierarchy', intent: 'Show Flare analytics class sizes across two visible hierarchy depths using nested annular sectors.', Component: Case_101_sunburst },
  { id: '102-world-choropleth', title: 'World learning-poverty choropleth', family: 'geography', intent: 'Compare measured learning poverty across countries with an equal-area projection.', Component: Case_102_world_choropleth },
  { id: '103-bubble-map', title: 'World population bubble map', family: 'geography', intent: 'Compare published country populations with area-scaled circles at geographic centroids.', Component: Case_103_bubble_map },
  { id: '104-orthographic-globe', title: 'Orthographic globe with graticule', family: 'geography', intent: 'Show projected land on a clipped globe with a geographic coordinate grid.', Component: Case_104_orthographic_globe },
  { id: '108-country-choropleth', title: 'World population-density choropleth', family: 'geography', intent: 'Compare published population density across real country boundaries.', Component: Case_108_country_choropleth },
  { id: 'scatter-bubble', title: 'Bubble scatterplot', family: 'relationship', intent: 'Compare penguin bill length and depth while encoding body mass by area and species by color.', Component: Case_scatter_bubble },
  { id: '114-spring-line-motion', title: 'Spring line updates', family: 'motion', intent: 'Show a basic two-series line chart with tween or physical spring updates and momentum-preserving interruption.', Component: Case_114_spring_line_motion },
  { id: '115-definition-motion', title: 'Definition-owned motion', family: 'motion', intent: 'Exercise inherited chart motion with mark, datum, axis, tick, and label overrides authored beside their definitions.', Component: Case_115_definition_motion },
  { id: '111-basic-sankey', title: 'Basic Sankey', family: 'network', intent: 'Show one input splitting into two paths and recombining into one output, with link width proportional to value.', Component: Case_111_basic_sankey },
]
