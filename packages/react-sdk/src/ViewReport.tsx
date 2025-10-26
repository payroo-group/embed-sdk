import React, { useEffect } from 'react'
import { Components, } from '@payroo-group/embed-sdk'
import { EmbedContainer } from './EmbedContainer'
import type { ComponentProps } from './types'

interface ViewReportProps extends ComponentProps<Components.VIEW_REPORT> { }

export const ViewReport: React.FC<ViewReportProps> = ({
  getEmbedUrl,
  options,
  ...params
}) => {
  const [url, setUrl] = React.useState<string | null>(null)

  useEffect(() => {
    getEmbedUrl(Components.VIEW_REPORT, params)
      .then((embedUrl) => {
        setUrl(embedUrl)
      })
      .catch((error) => {
        console.error('Error fetching embed URL:', error)
        setUrl(null)
      })
  }, [getEmbedUrl])

  return (
    <>
      {url ? (
        <EmbedContainer
          url={url}
          options={options}
          className="embed-container"
          id="payroo-embed-view-report"
        />
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  )
}
