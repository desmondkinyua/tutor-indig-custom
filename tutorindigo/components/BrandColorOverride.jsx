const BrandColorOverride = () => {
  useEffect(() => {
    const styleId = 'indigo-brand-color-override';
    if (document.getElementById(styleId)) {
      return;
    }
    const style = document.createElement('style');
    style.id = styleId;
    // Overrides Paragon's design tokens so branded components (buttons, links,
    // badges, etc.) pick up the custom primary color without rebuilding @edx/brand.
    style.textContent = `
      :root {
        --pgn-color-primary-base: #1E5F73FF;
        --pgn-color-primary-100: #FAFBFCFF;
        --pgn-color-primary-200: #D2DADDFF;
        --pgn-color-primary-300: #9BAEB4FF;
        --pgn-color-primary-400: #608591FF;
        --pgn-color-primary-600: #1B5769FF;
        --pgn-color-primary-700: #194E5EFF;
        --pgn-color-primary-800: #184959FF;
        --pgn-color-primary-900: #164654FF;
        --pgn-color-primary-light: #FCFDFDFF;

        --pgn-color-action-default-primary-base: #1E5F73FF;
        --pgn-color-action-default-primary-100: #FAFBFCFF;
        --pgn-color-action-default-primary-200: #D2DADDFF;
        --pgn-color-action-default-primary-300: #9BAEB4FF;
        --pgn-color-action-default-primary-400: #608591FF;
        --pgn-color-action-default-primary-500: #1E5F73FF;
        --pgn-color-action-default-primary-600: #1C5768FF;
        --pgn-color-action-default-primary-700: #194D5EFF;
        --pgn-color-action-default-primary-800: #184A59FF;
        --pgn-color-action-default-primary-900: #174553FF;

        --pgn-color-badge-focus-bg-primary: #1E5F73FF;
        --pgn-color-badge-focus-box-shadow-primary: #1E5F730D;
      }

      html[data-paragon-theme-variant='dark'] {
        --pgn-color-primary-base: #AEE5F6FF;
        --pgn-color-primary-100: #8EB3BFFF;
        --pgn-color-primary-500: #748B92FF;
        --pgn-color-primary-700: #5A6F78FF;
        --pgn-color-primary-border: #778292FF;
        --pgn-color-primary-light: #292B2CFF;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return null;
};
