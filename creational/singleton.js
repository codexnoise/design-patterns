/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */

class Singleton{
    static instance = undefined;

    /**
   * Constructor method, not private for syntax reasons, to be called
   * for static method
   * @param version value that represents the version of the instance
   */
    constructor (version){
        this.version = version;
    }

    /**
   * Static method that returns unique created instance or create it
   * @param version used only to help us to differentiate the instances
   * @returns {Singleton} unique Singleton instance
   */
    static getInstance(version){
        if(!Singleton.instance) Singleton.instance = new Singleton(version);
        return Singleton.instance;
    }
}

/**
 * Main function
 */
function appSingleton(){
    const singleton1 =  Singleton.getInstance("v1");
    const singleton2 =  Singleton.getInstance("v2");
    const singleton3 =  Singleton.getInstance("v3");

    console.log(`singleton1 and singleton2 are equal? ${
            singleton1 === singleton2 ? 'yes' : 'no'
        }`
    );
    console.log(`singleton2 and singleton3 are equal? ${
            singleton2 === singleton3 ? 'yes' : 'no'
        }`
    );
}

appSingleton();