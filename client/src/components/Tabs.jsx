import React, {useState, useContext} from 'react'

const Tabs = ({ defaultValue, ...props }) => {
    const [activeTab, setActiveTab] = useState(defaultValue)
    return <div {...props} data-active-tab={activeTab} />
}

const TabsList = ({ className, ...props }) => (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`} {...props} />
)

const TabsTrigger = ({ value, className, ...props }) => {
    const isActive = React.useContext(TabsContext) === value
    return (
        <button
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`}
            {...props}
        />
    )
}

const TabsContent = ({ value, className, ...props }) => {
    const activeTab = React.useContext(TabsContext)
    if (activeTab !== value) return null
    return <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`} {...props} />
}

const TabsContext = React.createContext(null)

export default {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    TabsContext
}