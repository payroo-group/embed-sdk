import React, { useCallback, useEffect } from 'react'
import { Components, Events, type CreateEmployeeOptions, type EventSchemaMap, } from '@payroo-group/embed-sdk'
import { EmbedContainer } from './EmbedContainer'
import type { ComponentProps } from './types'

interface CreateEmployeeProps extends ComponentProps<Components.CREATE_EMPLOYEE> {
  onSuccess?: (data: EventSchemaMap[Events.EMPLOYEE_CREATED]) => void
}

export const CreateEmployee: React.FC<CreateEmployeeProps> = ({
  getEmbedUrl,
  options,
  onSuccess,
  ...params
}) => {
  const [url, setUrl] = React.useState<string | null>(null)

  useEffect(() => {
    getEmbedUrl(Components.CREATE_EMPLOYEE, params as CreateEmployeeOptions)
      .then((embedUrl) => {
        setUrl(embedUrl)
      })
      .catch((error) => {
        console.error('Error fetching embed URL:', error)
        setUrl(null)
      })
  }, [getEmbedUrl])

  const handleEvent = useCallback(<T extends Events>(event: T, data: EventSchemaMap[T]) => {
    switch (event) {
      case Events.EMPLOYEE_CREATED:
        if (onSuccess) {
          onSuccess(data as EventSchemaMap[Events.EMPLOYEE_CREATED])
        }
        break
      default:
        break
    }
  }, [onSuccess])

  return (
    <>
      {url ? (
        <EmbedContainer
          url={url}
          options={options}
          className="embed-container"
          id="payroo-embed-create-employee"
          onEvent={handleEvent}
        />
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  )
}
