use Rack::Static,
  :urls => ["/assets/js", "/assets/styles", "/assets/fonts", "/assets/images"],
  :root => "lib"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'src, max-age=86400'
    },
    File.open('lib/index.html', File::RDONLY)
  ]
}
