import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import CarouselDefault from 'components/CodeSandbox/React/SandboxFilesSrc/Default/EmblaCarousel'
import { createSandboxVanilla } from 'components/CodeSandbox/Vanilla/createSandboxVanilla'
import { createSandboxReact } from 'components/CodeSandbox/React/createSandboxReact'
import { createSandboxFunctionsWithLabels } from 'components/CodeSandbox/createSandboxFunctionsWithLabels'
import { ID, SLIDES, OPTIONS, STYLES } from 'components/Examples/Basic/YAxis'
import {
  SelectCodeSandbox,
  PropType as SelectCodeSandboxPropType,
} from 'components/CodeSandbox/SelectCodeSandbox'

const SHARED_CONFIG = {
  slides: SLIDES,
  options: OPTIONS,
  styles: STYLES,
  id: ID,
}

const sandboxVanillaJavaScript = async (): Promise<string> => {
  const carousel = await import(
    '!!raw-loader!components/CodeSandbox/Vanilla/SandboxFilesDist/Default/EmblaCarousel.js'
  )
  return createSandboxVanilla({
    ...SHARED_CONFIG,
    carouselScript: carousel.default,
    carouselHtml: ReactDOMServer.renderToStaticMarkup(
      <CarouselDefault options={OPTIONS} slides={SLIDES} />,
    ),
    language: 'javascript',
  })
}

const sandboxVanillaTypeScript = async (): Promise<string> => {
  const carousel = await import(
    '!!raw-loader!components/CodeSandbox/Vanilla/SandboxFilesDist/Default/EmblaCarousel.ts'
  )
  return createSandboxVanilla({
    ...SHARED_CONFIG,
    carouselScript: carousel.default,
    carouselHtml: ReactDOMServer.renderToStaticMarkup(
      <CarouselDefault options={OPTIONS} slides={SLIDES} />,
    ),
    language: 'typescript',
  })
}

const sandboxReactJavaScript = async (): Promise<string> => {
  const carousel = await import(
    `!!raw-loader!components/CodeSandbox/React/SandboxFilesDist/Default/EmblaCarousel.jsx`
  )
  return createSandboxReact({
    ...SHARED_CONFIG,
    carouselScript: carousel.default,
    language: 'javascript',
  })
}

const sandboxReactTypeScript = async (): Promise<string> => {
  const carousel = await import(
    `!!raw-loader!components/CodeSandbox/React/SandboxFilesDist/Default/EmblaCarousel.tsx`
  )
  return createSandboxReact({
    ...SHARED_CONFIG,
    carouselScript: carousel.default,
    language: 'typescript',
  })
}

const SANDBOXES: SelectCodeSandboxPropType['sandboxes'] =
  createSandboxFunctionsWithLabels({
    VANILLA_JS: sandboxVanillaJavaScript,
    VANILLA_TS: sandboxVanillaTypeScript,
    REACT_JS: sandboxReactJavaScript,
    REACT_TS: sandboxReactTypeScript,
  })

export const ExampleCarouselYAxisSandboxes = () => {
  return <SelectCodeSandbox sandboxes={SANDBOXES} />
}
