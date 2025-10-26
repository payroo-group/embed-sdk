import React, { useEffect } from 'react'
import { Components, } from '@payroo-group/embed-sdk'
import { EmbedContainer } from './EmbedContainer'
import type { ComponentProps } from './types'

interface PayrollSettingsProps extends ComponentProps<Components.PAYROLL_SETTINGS> { }

export const PayrollSettings: React.FC<PayrollSettingsProps> = ({
  getEmbedUrl,
  options,
  ...params
}) => {
  const [url, setUrl] = React.useState<string | null>(null)

  useEffect(() => {
    getEmbedUrl(Components.PAYROLL_SETTINGS, params)
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
          id="payroo-embed-payroll-settings"
        />
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  )
}
