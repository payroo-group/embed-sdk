import { Embed, Events, type EventSchemaMap, type Options } from '@payroo-group/embed-sdk'
import React from 'react'

interface EmbedContainerProps {
  id: string
  url: string
  options?: Options
  className?: string,
  onEvent?: <K extends Events>(event: K, data: EventSchemaMap[K]) => void
}

export const EmbedContainer: React.FC<EmbedContainerProps> = ({
  id,
  url,
  options,
  className,
  onEvent,
}) => {
  const frameRef = React.useRef<null | HTMLDivElement>(null)
  const embedRef = React.useRef<null | Embed>(null)
  //const [embed, setEmbed] = React.useState<null | Embed>(null);

  React.useEffect(() => {
    // Check if the embed reference is set and if we already have an embed instance.
    if (frameRef.current === null || embedRef.current !== null) {
      return
    }
    if (embedRef.current === null) {
      // Create the embed with the reference to the dom node and the URL
      embedRef.current = new Embed(url, options)
      console.log('Mounting embed frame', frameRef.current)
      embedRef.current.mount(frameRef.current)
    }

    if (onEvent) {
      // Listen for all events and call the onEvent callback
      Object.values(Events).forEach((event) => {
        embedRef.current?.on(event, (data) => {
          onEvent(event, data)
        })
      })
    }

    // When the component is unloaded, call the teardown function which will
    // automatically remove the event listeners we bound in the code above
    return () => {
      console.log('Unmounting embed frame')
      // Unmount also removes all event listeners
      embedRef.current?.unmount()
      embedRef.current = null
    }
  }, [url, options, onEvent])

  return (
    <div
      className={`embed-container ${className ?? ''}`}
      id={id}
      ref={frameRef}
    ></div>
  )
}
