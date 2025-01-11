"use client";

const ToursErrorPage = ({ error }: { error: Error }) => {
  return (
    <div>{error.name}: {error.message}</div>
  )
}

export default ToursErrorPage