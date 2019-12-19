import React from 'react';

export default function toHtmlDashCase(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}


