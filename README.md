# yos
> lists your installed yeoman generators and subgenerators

## Install

```sh
$ npm install --global yos
```

## Usage

```sh
$ yos --help

  Usage: yos [options] [generator-name ...]

  Options:

    -h, --help    show usage help

```

## Examples

_show all available generators:_
```sh
$ yos
Available Generators:

  generator
    subgenerator

  nm

  backbone
    all
    collection
    model
    router
    view

  node
    boilerplate
    cli
    editorconfig
    eslint
    git
    gulp
    readme
```

_filtered:_
```sh
$ yos node nm
Available Generators:

  nm

  node
    boilerplate
    cli
    editorconfig
    eslint
    git
    gulp
    readme
```


## License

ISC © [Buster Collings](http://about.me/buster)
