const MixcloudPreview = ({ value }) => {
  if (!value.url) {
    return <div>Missing Mixcloud URL</div>;
  }

  const embedUrl = `https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=${encodeURIComponent(value.url)}`;

  return (
    <iframe
      title="Mixcloud Preview"
      width="100%"
      height="120"
      src={embedUrl}
      frameBorder="0"
      allow="autoplay"
    />
  );
};

export default {
  name: 'mixcloud',
  type: 'object',
  title: 'Mixcloud Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: MixcloudPreview,
  },
};
