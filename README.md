# ts-presenters

View presenters helps you to keep that bit of logic that needs to be performed before some data is printed in the view out of your model but also out of your view.

## Install
Pull this package through npm

```
npm install @dellamina/ts-presenter 
``` 

## Usage
First you need to create your Presenter, it is just a simple class that extends `Presenter`.
You have full access to the model you are applying the `Presentable` decorator in the `entity` variable.

```ts
import { Presenter } from "@dellamina/ts-presenter";

export class UserPresenter extends Presenter {

    fullName = () => {
        return this.entity.name + ' ' + this.entity.surname;
    }

}
```

Then we need to add the `Presentable` decorator to our model by passing in the `Presenter` we are going to use, this way every time we gonna have an instance of our model the `Presenter` will be inject to allow us to take advantage of it.

```ts
import { Presentable } from "@dellamina/ts-presenter";
import { UserPresenter } from "./UserPresenter";

export class User {

    @Presentable(UserPresenter) presenter: UserPresenter;

    name: string;
    surname: string;

    constructor(user: { name: string, surname: string }) {
        this.name = user.name;
        this.surname = user.surname;
    }
}
```

That's it! You can start using it like so:
```html
<h1>Hello, {{ user.presenter.fullName() }}</h1>
```

Heavily inspired by [laracasts/Presenter](https://github.com/laracasts/Presenter) from Jeffrey Way