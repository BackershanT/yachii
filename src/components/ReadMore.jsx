import React, { useState } from 'react';

const ReadMore = ({ children, maxCharacterCount = 500 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTextFromChildren = (children) => {
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) {
      return children.map(child => (typeof child === 'string' ? child : getTextFromChildren(child.props?.children))).join('');
    }
    if (typeof children === 'object' && children?.props?.children) {
      return getTextFromChildren(children.props.children);
    }
    return '';
  };

  const textContent = getTextFromChildren(children);

  const shouldTruncate = textContent.length > maxCharacterCount;

  return (
    <div>
      {isExpanded || !shouldTruncate ? children : (
        <div>
          <p className="text-muted">{textContent.slice(0, maxCharacterCount)}...</p>
        </div>
      )}

      {shouldTruncate && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ color: '#1bac91', cursor: 'pointer' }}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
      )}
    </div>
  );
};

export default ReadMore;
