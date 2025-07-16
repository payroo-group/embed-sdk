import React, { useEffect } from 'react'
import { Components, } from '@payroo-group/embed-sdk'
import { EmbedContainer } from './EmbedContainer'
import type { ComponentProps } from './types'

interface PayrunListProps extends ComponentProps<Components.PAYRUN_LIST> { }

export const PayrunList: React.FC<PayrunListProps> = ({
  getEmbedUrl,
  options,
  ...params
}) => {
  const [url, setUrl] = React.useState<string | null>(null)

  useEffect(() => {
    getEmbedUrl(Components.PAYRUN_LIST, params)
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
          id="payroo-embed-payrun-list"
        />
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  )
}
