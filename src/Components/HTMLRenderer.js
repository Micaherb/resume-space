import React, { useRef, useEffect, useMemo } from 'react';

function HTMLRenderer({ htmlString }) {
  const contentRef = useRef();

  const fragment = useMemo(() => {
    return document.createRange().createContextualFragment(
      `<div>${htmlString}</div>`
    );
  }, [htmlString]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.appendChild(fragment);
    } else {
      return;
    }
  }, [fragment]);

  return <div ref={contentRef} />;
}

export default HTMLRenderer;