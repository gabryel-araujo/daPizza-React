module.exports = {
    // Restante das configurações do webpack...
  
    module: {
      rules: [
        // Regra para arquivos de fonte do Font Awesome
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset/resource',
        },
      ],
    },
  };
  