import React, { useEffect } from 'react'
import { Components, } from '@payroo-group/embed-sdk'
import { EmbedContainer } from './EmbedContainer'
import type { ComponentProps } from './types'

interface FilePayrunProps extends ComponentProps<Components.FILE_PAYRUN> { }

export const FilePayrun: React.FC<FilePayrunProps> = ({
  getEmbedUrl,
  options,
  ...params
}) => {
  const [url, setUrl] = React.useState<string | null>(null)

  useEffect(() => {
    getEmbedUrl(Components.FILE_PAYRUN, params)
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
          id="payroo-embed-file-payrun"
        />
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  )
}
