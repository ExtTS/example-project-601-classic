declare namespace Ext.grid.feature {
	/** 
	 * [Ext.grid.feature.AbstractSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.AbstractSummary.html)
	 * A small abstract class that contains the shared behaviour for any summary
	 * calculations to be used in the grid.
	 */
	class AbstractSummary extends Ext.grid.feature.Feature {
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
		 * for a detailed comparison
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            alert(this.self.speciesName); // dependent on 'this'
		 *        },
		 *    
		 *        clone: function() {
		 *            return new this.self();
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *        statics: {
		 *            speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                     // alerts 'Cat'
		 *    var snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'
		 * 
		 * @property
		 * @protected (property)
		 * @default Ext.Base
		 * @type {Ext.grid.feature.AbstractSummary.Statics}
		 */
		self?: Ext.grid.feature.AbstractSummary.Statics | Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		readDataOptions?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default Ext.baseCSSPrefix + 'grid-row-summary'
		 * @type {string}
		 */
		summaryRowCls?: string;
		/** 
		 * High priority rowTpl interceptor which sees summary rows early, and renders them correctly and then aborts the row rendering chain.
		 * This will only see action when summary rows are being updated and Table.onUpdate->Table.bufferRender renders the individual updated sumary row.
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		summaryRowTpl?: object;
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                      members    The members to add to this class.
		 * @param   {boolean}                                                                                                     [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                     [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.AbstractSummary;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                      members
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.feature.AbstractSummary;
		static addStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addStatics? (members: object): typeof Ext.util.Observable;
		static addStatics? (members: object): typeof Ext.mixin.Observable;
		static addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		static create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		static createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		static getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		static override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		static addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                      members
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.AbstractSummary;
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addInheritableStatics? (members: object): typeof Ext.util.Observable;
		static addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                      name
		 * @param   {object}                                                                                                      member
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.feature.AbstractSummary;
		static addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		static addMember? (name: object, member: object): typeof Ext.util.Observable;
		static addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		static addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		static borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		static extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		static getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		static mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                      fn
		 * @param   {object}                                                                                                      scope
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.AbstractSummary;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		static onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addBeforeListener? (): void;
		/** 
		 * The addManagedListener method is used when some object (call it "A") is listening
		 * to an event on another observable object ("B") and you want to remove that listener
		 * from "B" when "A" is destroyed. This is not an issue when "B" is destroyed because
		 * all of its listeners will be removed at that time.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Foo', {
		 *        extend: 'Ext.Component',
		 *    
		 *        initComponent: function () {
		 *            this.addManagedListener(MyApp.SomeGlobalSharedMenu, 'show', this.doSomething);
		 *            this.callParent();
		 *        }
		 *    });
		 * 
		 * As you can see, when an instance of Foo is destroyed, it ensures that the 'show'
		 * listener on the menu (`MyApp.SomeGlobalSharedMenu`) is also removed.
		 * 
		 * As of version 5.1 it is no longer necessary to use this method in most cases because
		 * listeners are automatically managed if the scope object provided to
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) is an Observable instance.
		 * However, if the observable instance and scope are not the same object you
		 * still need to use `mon` or `addManagedListener` if you want the listener to be
		 * managed.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		addManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Removes all listeners for this object including the managed listeners
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearListeners? (): void;
		/** 
		 * Removes all managed listeners for this object.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearManagedListeners? (): void;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Disables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Enables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		enable? (): void;
		/** 
		 * Enables events fired by this Observable to bubble up an owner hierarchy by calling `this.getBubbleTarget()` if
		 * present. There is no implementation in the Observable base class.
		 * 
		 * This is commonly used by Ext.Components to bubble events to owner Containers.
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) returns the
		 * Component's immediate owner. But if a known target is required, this can be overridden to access the
		 * required target more quickly.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Ext.overrides.form.field.Base', {
		 *        override: 'Ext.form.field.Base',
		 *    
		 *        //  Add functionality to Field's initComponent to enable the change event to bubble
		 *        initComponent: function () {
		 *            this.callParent();
		 *            this.enableBubble('change');
		 *        }
		 *    });
		 *    
		 *    var myForm = Ext.create('Ext.form.Panel', {
		 *        title: 'User Details',
		 *        items: [{
		 *            ...
		 *        }],
		 *        listeners: {
		 *            change: function() {
		 *                // Title goes red if form has been modified.
		 *                myForm.header.setStyle('color', 'red');
		 *            }
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {string|string[]} eventNames The event name to bubble, or an Array of event names.
		 * @returns {void}                       
		 */
		enableBubble? (eventNames: string | string[]): void;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)), but before any other
		 * handlers are fired.  This gives the "before" handlers an opportunity to
		 * cancel the event by returning `false`, and prevent the action function from
		 * being called.
		 * 
		 * The action can also be configured to run after normal handlers, but before any "after"
		 * handlers (as specified using the `order` event option) by passing `'after'`
		 * as the `order` parameter.  This configuration gives any event handlers except
		 * for "after" handlers the opportunity to cancel the event and prevent the action
		 * function from being called.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {any[]}    args      Arguments to pass to handlers and to the action function.
		 * @param   {Function} fn        The action function.
		 * @param   {object}   [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {object}   [options]
		 * Event options for the action function.  Accepts any
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}    eventName The name of the event to fire.
		 * @param   {...object} args      Variable number of parameters are passed to handlers.
		 * @returns {boolean}             returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string, ...args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameter list.
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {object[]} args      An array of parameters which are passed to handlers.
		 * @returns {boolean}            returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEventArgs? (eventName: string, args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * Evented Actions will automatically dispatch a 'before' event passing. This event will
		 * be given a special controller that allows for pausing/resuming of the event flow.
		 * 
		 * By pausing the controller the updater and events will not run until resumed. Pausing,
		 * however, will not stop the processing of any other before events.
		 * @method
		 * @public (method)
		 * @param   {string}          eventName The name of the event to fire.
		 * @param   {any[]}           args      Arguments to pass to handlers and to the action function.
		 * @param   {Function|string} fn        The action function.
		 * @param   {object}          [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {any[]|boolean}   [fnArgs]
		 * Optional arguments for the action `fn`. If not
		 * given, the normal `args` will be used to call `fn`. If `false` is passed, the
		 * `args` are used but if the first argument is this instance it will be removed
		 * from the args passed to the action function.
		 * @returns {void}                      
		 */
		fireEventedAction? (eventName: string, args: any[], fn: ExtGlobalFunction | string, scope?: object, fnArgs?: any[] | boolean): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Abstract method to be overriden when a feature should add additional
		 * arguments to its event signature. By default the event will fire:
		 * 
		 * - view - The underlying [Ext.view.Table](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)
		 * - featureTarget - The matched element by the defined [eventSelector](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#property-eventSelector)
		 * 
		 * The method must also return the eventName as the first index of the array
		 * to be passed to fireEvent.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} eventName
		 * @param   {object} view
		 * @param   {object} featureTarget
		 * @param   {object} e
		 * @returns {void}                 
		 */
		getFireEventArgs? (eventName: object, view: object, featureTarget: object, e: object): void;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-addManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		mon? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		mun? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Appends an after-event handler.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Appends a before-event handler.  Returning `false` from the handler will stop the event.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Relays selected events from the specified Observable as if the events were fired by `this`.
		 * 
		 * For example if you are extending Grid, you might decide to forward some events from store.
		 * So you can do this inside your initComponent:
		 * 
		 *    this.relayEvents(this.getStore(), ['load']);
		 * 
		 * The grid instance will then have an observable 'load' event which will be passed
		 * the parameters of the store's load event and any function fired with the grid's
		 * load event would have access to the grid using the this keyword (unless the event
		 * is handled by a controller's control/listen event listener in which case 'this'
		 * will be the controller rather than the grid).
		 * @method
		 * @public (method)
		 * @param   {object}          origin   The Observable whose events this object is to relay.
		 * @param   {string[]|object} events
		 * Array of event names to relay or an Object with key/value
		 * pairs translating to ActualEventName/NewEventName respectively. For example:
		 *     this.relayEvents(this, {add:'push', remove:'pop'});
		 * 
		 * Would now redispatch the add event of this as a push event and the remove event as a pop event.
		 * @param   {string}          [prefix]
		 * A common prefix to prepend to the event names. For example:
		 * 
		 *    this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Now the grid will forward 'load' and 'clear' events of store as 'storeload' and 'storeclear'.
		 * @returns {object}          
		 * A `Destroyable` object. An object which implements the `destroy` method which, when destroyed, removes all relayers. For example:
		 * 
		 *    this.storeRelayers = this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Can be undone by calling
		 * 
		 *    Ext.destroy(this.storeRelayers);
		 * 
		 * or
		 *     this.store.relayers.destroy();
		 */
		relayEvents? (origin: object, events: string[] | object, prefix?: string): object;
		/** 
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeBeforeListener? (): void;
		/** 
		 * Removes an event handler.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		removeListener? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-mon) method.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		removeManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeEvent? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                                               name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                                                      [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.AbstractSummary;
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Feature;
		setConfig? (name: string | object, value?: object): Ext.util.Observable;
		setConfig? (name: string | object, value?: object): Ext.mixin.Observable;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendEvent? (): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Toggle whether or not to show the summary row.
		 * @method
		 * @public (method)
		 * @param   {boolean} visible True to show the summary row
		 * @returns {void}            
		 */
		toggleSummaryRow? (visible: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		un? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                                                                                                      config
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.feature.AbstractSummary;
		initConfig? (config: object): Ext.grid.feature.Feature;
		initConfig? (config: object): Ext.util.Observable;
		initConfig? (config: object): Ext.mixin.Observable;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Gets the default scope for firing late bound events (string names with
		 * no scope attached) at runtime.
		 * @method
		 * @protected (method)
		 * @param   {object} [defaultScope] The default scope to return if none is found.
		 * @returns {object}                The default event scope
		 */
		resolveListenerScope? (defaultScope?: object): object;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.AbstractSummary.Statics|Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.feature.AbstractSummary.Statics;
		statics? (): Ext.grid.feature.Feature.Statics;
		statics? (): Ext.util.Observable.Statics;
		statics? (): Ext.mixin.Observable.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * Adds declarative listeners as nested arrays of listener objects.
		 * @method
		 * @private (method)
		 * @param   {any[]}   listeners
		 * @returns {boolean}           `true` if any listeners were added
		 */
		_addDeclaredListeners? (listeners: any[]): boolean;
		/** 
		 * This method applies a versioned, deprecation declaration to this class. This
		 * is typically called by the `deprecated` config.
		 * @method
		 * @private (method)
		 * @param   {object} deprecations
		 * @returns {void}                
		 */
		addDeprecations? (deprecations: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @param   {object} store
		 * @returns {void}         
		 */
		bindStore? (grid: object, store: object): void;
		/** 
		 * @mixed
		 * @private (method+property)
		 * @param   {object} o
		 * @param   {object} fn
		 * @param   {object} scope
		 * @returns {void}         
		 * @type {object}
		 */
		captureArgs?: ((o: object, fn: object, scope: object) => void) | object | any;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clone? (): void;
		/** 
		 * Creates an event handling function which re-fires the event from this object as the passed event name.
		 * @method
		 * @private (method)
		 * @param   {string}   newName    The name under which to re-fire the passed parameters.
		 * @param   {any[]}    [beginEnd] The caller can specify on which indices to slice.
		 * @returns {Function}            
		 */
		createRelayer? (newName: string, beginEnd?: any[]): ExtGlobalFunction;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} column
		 * @param   {object} record
		 * @returns {void}          
		 */
		createRenderer? (column: object, record: object): void;
		/** 
		 * Continue to fire event.
		 * @method
		 * @private (method)
		 * @param   {string}  eventName
		 * @param   {any[]}   args
		 * @param   {boolean} bubbles
		 * @returns {void}              
		 */
		doFireEvent? (eventName: string, args: any[], bubbles: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} groupField
		 * @returns {void}              
		 */
		generateSummaryData? (groupField: object): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getRawData? (): void;
		/** 
		 * Get the summary data for a field.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.Store}       store The store to get the data from
		 * @param   {Function|string}      type
		 * The type of aggregation. If a function is specified it will
		 * be passed to the stores aggregate function.
		 * @param   {string}               field The field to aggregate on
		 * @param   {boolean}              group True to aggregate in grouped mode
		 * @returns {number|string|object} 
		 * See the return type for the store functions.
		 * if the group parameter is `true` An object is returned with a property named for each group who's
		 * value is the summary value.
		 */
		getSummary? (store: Ext.data.Store, type: ExtGlobalFunction | string, field: string, group: boolean): number | string | object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} data
		 * @returns {void}        
		 */
		onReaderRawData? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} summaryRecord
		 * @param   {object} contextValues
		 * @param   {object} out
		 * @returns {void}                 
		 */
		outputSummaryRecord? (summaryRecord: object, contextValues: object, out: object): void;
		/** 
		 * Prepares a given class for observable instances. This method is called when a
		 * class derives from this class or uses this class as a mixin.
		 * @method
		 * @private (method)
		 * @param   {Function}            T     The class constructor to prepare.
		 * @param   {Ext.util.Observable} mixin The mixin if being used as a mixin.
		 * @param   {object}              data  The raw class creation data if this is an extend.
		 * @returns {void}                      
		 */
		prepareClass? (T: ExtGlobalFunction, mixin: Ext.util.Observable, data: object): void;
		/** 
		 * Remove a single managed listener item
		 * @method
		 * @private (method)
		 * @param   {boolean} isClear         True if this is being called during a clear
		 * @param   {object}  managedListener
		 * The managed listener item
		 * See removeManagedListener for other args
		 * @returns {void}                    
		 */
		removeManagedListenerItem? (isClear: boolean, managedListener: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @param   {object} colId
		 * @param   {object} summaryValue
		 * @param   {object} groupName
		 * @returns {void}                
		 */
		setSummaryData? (record: object, colId: object, summaryValue: object, groupName: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                                                    names The names of the linked objects to destroy.
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.feature.AbstractSummary;
		unlink? (names: string[]): Ext.grid.feature.Feature;
		unlink? (names: string[]): Ext.util.Observable;
		unlink? (names: string[]): Ext.mixin.Observable;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		vetoEvent? (): void;
	}
	/** 
	 * [Ext.grid.feature.Feature](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html)
	 * A feature is a type of plugin that is specific to the [Ext.grid.Panel](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html). It provides several
	 * hooks that allows the developer to inject additional functionality at certain points throughout the
	 * grid creation cycle. This class provides the base template methods that are available to the developer,
	 * it should be extended.
	 * 
	 * There are several built in features that extend this class, for example:
	 * 
	 * - [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html) - Shows grid rows in groups as specified by the [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
	 * - [Ext.grid.feature.RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html) - Adds a body section for each grid row that can contain markup.
	 * - [Ext.grid.feature.Summary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Summary.html) - Adds a summary row at the bottom of the grid with aggregate totals for a column.
	 * 
	 * ## Using Features
	 * 
	 * A feature is added to the grid by specifying it an array of features in the configuration:
	 * 
	 *    var groupingFeature = Ext.create('Ext.grid.feature.Grouping');
	 *    Ext.create('Ext.grid.Panel', {
	 *        // other options
	 *        features: [groupingFeature]
	 *    });
	 * 
	 * ## Writing Features
	 * 
	 * A Feature may add new DOM structure within the structure of a grid.
	 * 
	 * A grid is essentially a `&lt;table&gt;` element. A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) instance uses four [XTemplates](https://docs.sencha.com/extjs/6.0.1/classic/Ext.XTemplate.html)
	 * to render the grid, `tpl`, `itemTpl`, `rowTpl`, `cellTpl`.
	 * 
	 * A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `tpl` to emit the item encapsulating HTML tags into its output stream.
	 * To render the rows, it invokes [Ext.view.Table.renderRows](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-renderRows) passing the `rows` member of its data object and the `columns` member of its data object.
	 * 
	 * The `tpl`'s data object Looks like this:
	 * 
	 *      {
	 *          view: owningTableView,
	 *          rows: recordsToRender,
	 *          viewStartIndex: indexOfFirstRecordInStore,
	 *          tableStyle: styleString
	 *      }
	 * 
	 * - A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `rowTpl` to emit a `&lt;tr&gt;` HTML tag to its output stream. To render cells,
	 *   it invokes [Ext.view.Table.renderCell](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-renderCell) passing the `rows` member of its data object.
	 * 
	 *  
	 *  
	 *  
	 *  
	 *  The `itemTpl` and `rowTpl`'s data object looks like this:
	 * 
	 *    {
	 *        view:        owningTableView,
	 *        record:      recordToRender,
	 *        recordIndex: indexOfRecordInStore,
	 *        rowIndex:    indexOfRowInView,
	 *        columns:     arrayOfColumnDefinitions,
	 *        itemClasses: arrayOfClassNames, // For outermost row in case of wrapping
	 *        rowClasses:  arrayOfClassNames,  // For internal data bearing row in case of wrapping
	 *        rowStyle:    styleString
	 *    }
	 * 
	 * - A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `cellTpl` to emit a `&lt;td&gt;` HTML tag to its output stream.
	 * 
	 * The `cellTpl's` data object looks like this:
	 * 
	 *    {
	 *        record: recordToRender
	 *        column: columnToRender;
	 *        recordIndex: indexOfRecordInStore,
	 *        rowIndex:    indexOfRowInView,
	 *        columnIndex: columnIndex,
	 *        align: columnAlign,
	 *        tdCls: classForCell
	 *    }
	 * 
	 * A Feature may inject its own tpl or rowTpl or cellTpl into the [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)'s rendering by
	 * calling [Ext.view.Table.addTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addTpl) or [Ext.view.Table.addRowTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addRowTpl) or [Ext.view.Table.addCellTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addCellTpl).
	 * 
	 * The passed XTemplate is added _upstream_ of the default template for the table element in a link list of XTemplates which contribute
	 * to the element's HTML. It may emit appropriate HTML strings into the output stream _around_ a call to
	 * 
	 *    this.nextTpl.apply(values, out, parent);
	 * 
	 * This passes the current value context, output stream and the parent value context to the next XTemplate in the list.
	 */
	class Feature extends Ext.util.Observable {
		/** 
		 * True when feature is disabled.
		 * @property
		 * @public (property)
		 * @default false
		 * @type {boolean}
		 */
		disabled?: boolean;
		/** 
		 * Prefix to use when firing events on the view.
		 * For example a prefix of group would expose "groupclick", "groupcontextmenu", "groupdblclick".
		 * @property
		 * @public (property)
		 * @type {string}
		 */
		eventPrefix?: string;
		/** 
		 * Selector used to determine when to fire the event with the eventPrefix.
		 * @property
		 * @public (property)
		 * @type {string}
		 */
		eventSelector?: string;
		/** 
		 * Reference to the grid panel
		 * @property
		 * @public (property)
		 * @type {Ext.grid.Panel}
		 */
		grid?: Ext.grid.Panel;
		/** 
		 * Most features will expose additional events, some may not and will
		 * need to change this to false.
		 * @property
		 * @public (property)
		 * @default true
		 * @type {boolean}
		 */
		hasFeatureEvent?: boolean;
		/** 
		 * `true` in this class to identify an object as an instantiated Feature, or subclass thereof.
		 * @property
		 * @public (property)
		 * @default true
		 * @type {boolean}
		 */
		isFeature?: boolean;
		/** 
		 * Reference to the TableView.
		 * @property
		 * @public (property)
		 * @type {Ext.view.Table}
		 */
		view?: Ext.view.Table;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
		 * for a detailed comparison
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            alert(this.self.speciesName); // dependent on 'this'
		 *        },
		 *    
		 *        clone: function() {
		 *            return new this.self();
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *        statics: {
		 *            speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                     // alerts 'Cat'
		 *    var snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'
		 * 
		 * @property
		 * @protected (property)
		 * @default Ext.Base
		 * @type {Ext.grid.feature.Feature.Statics}
		 */
		self?: Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		wrapsItem?: boolean;
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     members    The members to add to this class.
		 * @param   {boolean}                                                                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     members
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addStatics? (members: object): typeof Ext.util.Observable;
		static addStatics? (members: object): typeof Ext.mixin.Observable;
		static addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		static create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		static createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		static getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		static override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		static addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     members
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addInheritableStatics? (members: object): typeof Ext.util.Observable;
		static addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     name
		 * @param   {object}                                                                     member
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		static addMember? (name: object, member: object): typeof Ext.util.Observable;
		static addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		static addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		static borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		static extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		static getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		static mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     fn
		 * @param   {object}                                                                     scope
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		static onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addBeforeListener? (): void;
		/** 
		 * The addManagedListener method is used when some object (call it "A") is listening
		 * to an event on another observable object ("B") and you want to remove that listener
		 * from "B" when "A" is destroyed. This is not an issue when "B" is destroyed because
		 * all of its listeners will be removed at that time.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Foo', {
		 *        extend: 'Ext.Component',
		 *    
		 *        initComponent: function () {
		 *            this.addManagedListener(MyApp.SomeGlobalSharedMenu, 'show', this.doSomething);
		 *            this.callParent();
		 *        }
		 *    });
		 * 
		 * As you can see, when an instance of Foo is destroyed, it ensures that the 'show'
		 * listener on the menu (`MyApp.SomeGlobalSharedMenu`) is also removed.
		 * 
		 * As of version 5.1 it is no longer necessary to use this method in most cases because
		 * listeners are automatically managed if the scope object provided to
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) is an Observable instance.
		 * However, if the observable instance and scope are not the same object you
		 * still need to use `mon` or `addManagedListener` if you want the listener to be
		 * managed.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		addManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Removes all listeners for this object including the managed listeners
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearListeners? (): void;
		/** 
		 * Removes all managed listeners for this object.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearManagedListeners? (): void;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Disables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Enables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		enable? (): void;
		/** 
		 * Enables events fired by this Observable to bubble up an owner hierarchy by calling `this.getBubbleTarget()` if
		 * present. There is no implementation in the Observable base class.
		 * 
		 * This is commonly used by Ext.Components to bubble events to owner Containers.
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) returns the
		 * Component's immediate owner. But if a known target is required, this can be overridden to access the
		 * required target more quickly.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Ext.overrides.form.field.Base', {
		 *        override: 'Ext.form.field.Base',
		 *    
		 *        //  Add functionality to Field's initComponent to enable the change event to bubble
		 *        initComponent: function () {
		 *            this.callParent();
		 *            this.enableBubble('change');
		 *        }
		 *    });
		 *    
		 *    var myForm = Ext.create('Ext.form.Panel', {
		 *        title: 'User Details',
		 *        items: [{
		 *            ...
		 *        }],
		 *        listeners: {
		 *            change: function() {
		 *                // Title goes red if form has been modified.
		 *                myForm.header.setStyle('color', 'red');
		 *            }
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {string|string[]} eventNames The event name to bubble, or an Array of event names.
		 * @returns {void}                       
		 */
		enableBubble? (eventNames: string | string[]): void;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)), but before any other
		 * handlers are fired.  This gives the "before" handlers an opportunity to
		 * cancel the event by returning `false`, and prevent the action function from
		 * being called.
		 * 
		 * The action can also be configured to run after normal handlers, but before any "after"
		 * handlers (as specified using the `order` event option) by passing `'after'`
		 * as the `order` parameter.  This configuration gives any event handlers except
		 * for "after" handlers the opportunity to cancel the event and prevent the action
		 * function from being called.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {any[]}    args      Arguments to pass to handlers and to the action function.
		 * @param   {Function} fn        The action function.
		 * @param   {object}   [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {object}   [options]
		 * Event options for the action function.  Accepts any
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}    eventName The name of the event to fire.
		 * @param   {...object} args      Variable number of parameters are passed to handlers.
		 * @returns {boolean}             returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string, ...args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameter list.
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {object[]} args      An array of parameters which are passed to handlers.
		 * @returns {boolean}            returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEventArgs? (eventName: string, args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * Evented Actions will automatically dispatch a 'before' event passing. This event will
		 * be given a special controller that allows for pausing/resuming of the event flow.
		 * 
		 * By pausing the controller the updater and events will not run until resumed. Pausing,
		 * however, will not stop the processing of any other before events.
		 * @method
		 * @public (method)
		 * @param   {string}          eventName The name of the event to fire.
		 * @param   {any[]}           args      Arguments to pass to handlers and to the action function.
		 * @param   {Function|string} fn        The action function.
		 * @param   {object}          [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {any[]|boolean}   [fnArgs]
		 * Optional arguments for the action `fn`. If not
		 * given, the normal `args` will be used to call `fn`. If `false` is passed, the
		 * `args` are used but if the first argument is this instance it will be removed
		 * from the args passed to the action function.
		 * @returns {void}                      
		 */
		fireEventedAction? (eventName: string, args: any[], fn: ExtGlobalFunction | string, scope?: object, fnArgs?: any[] | boolean): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Abstract method to be overriden when a feature should add additional
		 * arguments to its event signature. By default the event will fire:
		 * 
		 * - view - The underlying [Ext.view.Table](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)
		 * - featureTarget - The matched element by the defined [eventSelector](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#property-eventSelector)
		 * 
		 * The method must also return the eventName as the first index of the array
		 * to be passed to fireEvent.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} eventName
		 * @param   {object} view
		 * @param   {object} featureTarget
		 * @param   {object} e
		 * @returns {void}                 
		 */
		getFireEventArgs? (eventName: object, view: object, featureTarget: object, e: object): void;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-addManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		mon? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		mun? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Appends an after-event handler.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Appends a before-event handler.  Returning `false` from the handler will stop the event.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Relays selected events from the specified Observable as if the events were fired by `this`.
		 * 
		 * For example if you are extending Grid, you might decide to forward some events from store.
		 * So you can do this inside your initComponent:
		 * 
		 *    this.relayEvents(this.getStore(), ['load']);
		 * 
		 * The grid instance will then have an observable 'load' event which will be passed
		 * the parameters of the store's load event and any function fired with the grid's
		 * load event would have access to the grid using the this keyword (unless the event
		 * is handled by a controller's control/listen event listener in which case 'this'
		 * will be the controller rather than the grid).
		 * @method
		 * @public (method)
		 * @param   {object}          origin   The Observable whose events this object is to relay.
		 * @param   {string[]|object} events
		 * Array of event names to relay or an Object with key/value
		 * pairs translating to ActualEventName/NewEventName respectively. For example:
		 *     this.relayEvents(this, {add:'push', remove:'pop'});
		 * 
		 * Would now redispatch the add event of this as a push event and the remove event as a pop event.
		 * @param   {string}          [prefix]
		 * A common prefix to prepend to the event names. For example:
		 * 
		 *    this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Now the grid will forward 'load' and 'clear' events of store as 'storeload' and 'storeclear'.
		 * @returns {object}          
		 * A `Destroyable` object. An object which implements the `destroy` method which, when destroyed, removes all relayers. For example:
		 * 
		 *    this.storeRelayers = this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Can be undone by calling
		 * 
		 *    Ext.destroy(this.storeRelayers);
		 * 
		 * or
		 *     this.store.relayers.destroy();
		 */
		relayEvents? (origin: object, events: string[] | object, prefix?: string): object;
		/** 
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeBeforeListener? (): void;
		/** 
		 * Removes an event handler.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		removeListener? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-mon) method.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		removeManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeEvent? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                              name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                     [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Feature;
		setConfig? (name: string | object, value?: object): Ext.util.Observable;
		setConfig? (name: string | object, value?: object): Ext.mixin.Observable;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendEvent? (): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		un? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * Protected method called during [View](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) construction.  The
		 * owning [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) is passed as a param.
		 * @method
		 * @protected (method)
		 * @param   {Ext.grid.Panel} grid
		 * The View's owning Grid.  **Note** that in a
		 * [locking Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html#cfg-enableLocking) the passed grid will be
		 * either the normal grid or the locked grid, which is the view's direct owner.
		 * @returns {void}                
		 */
		init? (grid: Ext.grid.Panel): void;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                                                                     config
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.feature.Feature;
		initConfig? (config: object): Ext.util.Observable;
		initConfig? (config: object): Ext.mixin.Observable;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Gets the default scope for firing late bound events (string names with
		 * no scope attached) at runtime.
		 * @method
		 * @protected (method)
		 * @param   {object} [defaultScope] The default scope to return if none is found.
		 * @returns {object}                The default event scope
		 */
		resolveListenerScope? (defaultScope?: object): object;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.feature.Feature.Statics;
		statics? (): Ext.util.Observable.Statics;
		statics? (): Ext.mixin.Observable.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * Adds declarative listeners as nested arrays of listener objects.
		 * @method
		 * @private (method)
		 * @param   {any[]}   listeners
		 * @returns {boolean}           `true` if any listeners were added
		 */
		_addDeclaredListeners? (listeners: any[]): boolean;
		/** 
		 * This method applies a versioned, deprecation declaration to this class. This
		 * is typically called by the `deprecated` config.
		 * @method
		 * @private (method)
		 * @param   {object} deprecations
		 * @returns {void}                
		 */
		addDeprecations? (deprecations: object): void;
		/** 
		 * @mixed
		 * @private (method+property)
		 * @param   {object} o
		 * @param   {object} fn
		 * @param   {object} scope
		 * @returns {void}         
		 * @type {object}
		 */
		captureArgs?: ((o: object, fn: object, scope: object) => void) | object | any;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clone? (): void;
		/** 
		 * Creates an event handling function which re-fires the event from this object as the passed event name.
		 * @method
		 * @private (method)
		 * @param   {string}   newName    The name under which to re-fire the passed parameters.
		 * @param   {any[]}    [beginEnd] The caller can specify on which indices to slice.
		 * @returns {Function}            
		 */
		createRelayer? (newName: string, beginEnd?: any[]): ExtGlobalFunction;
		/** 
		 * Continue to fire event.
		 * @method
		 * @private (method)
		 * @param   {string}  eventName
		 * @param   {any[]}   args
		 * @param   {boolean} bubbles
		 * @returns {void}              
		 */
		doFireEvent? (eventName: string, args: any[], bubbles: boolean): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Prepares a given class for observable instances. This method is called when a
		 * class derives from this class or uses this class as a mixin.
		 * @method
		 * @private (method)
		 * @param   {Function}            T     The class constructor to prepare.
		 * @param   {Ext.util.Observable} mixin The mixin if being used as a mixin.
		 * @param   {object}              data  The raw class creation data if this is an extend.
		 * @returns {void}                      
		 */
		prepareClass? (T: ExtGlobalFunction, mixin: Ext.util.Observable, data: object): void;
		/** 
		 * Remove a single managed listener item
		 * @method
		 * @private (method)
		 * @param   {boolean} isClear         True if this is being called during a clear
		 * @param   {object}  managedListener
		 * The managed listener item
		 * See removeManagedListener for other args
		 * @returns {void}                    
		 */
		removeManagedListenerItem? (isClear: boolean, managedListener: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                   names The names of the linked objects to destroy.
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.feature.Feature;
		unlink? (names: string[]): Ext.util.Observable;
		unlink? (names: string[]): Ext.mixin.Observable;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		vetoEvent? (): void;
	}
	/** 
	 * [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html)
	 * This feature allows to display the grid rows aggregated into groups as specified by the [grouper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-grouper)
	 * 
	 * underneath. The groups can also be expanded and collapsed.
	 * 
	 * ## Extra Events
	 * 
	 * This feature adds several extra events that will be fired on the grid to interact with the groups:
	 * 
	 * - [groupclick](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupclick)
	 * - [groupdblclick](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupdblclick)
	 * - [groupcontextmenu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupcontextmenu)
	 * - [groupexpand](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupexpand)
	 * - [groupcollapse](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupcollapse)
	 * 
	 * ## Menu Augmentation
	 * 
	 * This feature adds extra options to the grid column menu to provide the user with functionality to modify the grouping.
	 * This can be disabled by setting the [enableGroupingMenu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-enableGroupingMenu) option. The option to disallow grouping from being turned off
	 * by the user is [enableNoGroups](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-enableNoGroups).
	 * 
	 * ## Controlling Group Text
	 * 
	 * The [groupHeaderTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-groupHeaderTpl) is used to control the rendered title for each group. It can modified to customized
	 * the default display.
	 * 
	 * ## Groupers
	 * 
	 * By default, this feature expects that the data field that is mapped to by the
	 * [Ext.data.AbstractStore.groupField](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.AbstractStore.html#cfg-groupField) config is a simple data type such as a
	 * String or a Boolean. However, if you intend to group by a data field that is a
	 * complex data type such as an Object or Array, it is necessary to define one or more
	 * [groupers](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Grouper.html) on the feature that it can then use to lookup
	 * internal group information when grouping by different fields.
	 * 
	 *    var feature = Ext.create('Ext.grid.feature.Grouping', {
	 *        startCollapsed: true,
	 *        groupers: [{
	 *            property: 'asset',
	 *            groupFn: function (val) {
	 *                return val.data.name;
	 *            }
	 *        }]
	 *    });
	 * 
	 * ## Example Usage
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        fields: ['name', 'seniority', 'department'],
	 *        groupField: 'department',
	 *        data: [
	 *            { name: 'Michael Scott', seniority: 7, department: 'Management' },
	 *            { name: 'Dwight Schrute', seniority: 2, department: 'Sales' },
	 *            { name: 'Jim Halpert', seniority: 3, department: 'Sales' },
	 *            { name: 'Kevin Malone', seniority: 4, department: 'Accounting' },
	 *            { name: 'Angela Martin', seniority: 5, department: 'Accounting' }
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        title: 'Employees',
	 *        store: store,
	 *        columns: [
	 *            { text: 'Name', dataIndex: 'name' },
	 *            { text: 'Seniority', dataIndex: 'seniority' }
	 *        ],
	 *        features: [{ftype:'grouping'}],
	 *        width: 200,
	 *        height: 275,
	 *        renderTo: Ext.getBody()
	 *    });
	 * 
	 * **Note:** To use grouping with a grid that has [locked columns](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.column.Column.html#cfg-locked), you need to supply
	 * the grouping feature as a config object - so the grid can create two instances of the grouping feature.
	 */
	class Grouping extends Ext.grid.feature.Feature {
		/** 
		 * Prefix to use when firing events on the view.
		 * For example a prefix of group would expose "groupclick", "groupcontextmenu", "groupdblclick".
		 * @property
		 * @public (property)
		 * @default 'group'
		 * @type {string}
		 */
		eventPrefix?: string;
		/** 
		 * Selector used to determine when to fire the event with the eventPrefix.
		 * @property
		 * @public (property)
		 * @default '.' + Ext.baseCSSPrefix + 'grid-group-hd'
		 * @type {string}
		 */
		eventSelector?: string;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
		 * for a detailed comparison
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            alert(this.self.speciesName); // dependent on 'this'
		 *        },
		 *    
		 *        clone: function() {
		 *            return new this.self();
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *        statics: {
		 *            speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                     // alerts 'Cat'
		 *    var snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'
		 * 
		 * @property
		 * @protected (property)
		 * @default Ext.Base
		 * @type {Ext.grid.feature.Grouping.Statics}
		 */
		self?: Ext.grid.feature.Grouping.Statics | Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics;
		/** 
		 * <locale></locale>
		 * @property
		 * @private (property)
		 * @default 'Click to collapse. CTRL/click collapses all others'
		 * @type {string}
		 */
		collapseTip?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default Ext.baseCSSPrefix + 'grid-group-collapsed'
		 * @type {string}
		 */
		collapsedCls?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default Ext.baseCSSPrefix + 'grid-group-hd-collapsible'
		 * @type {string}
		 */
		collapsibleCls?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default Ext.baseCSSPrefix + 'group-hd-container'
		 * @type {string}
		 */
		ctCls?: string;
		/** 
		 * <locale></locale>
		 * @property
		 * @private (property)
		 * @default 'Click to expand. CTRL key collapses all others'
		 * @type {string}
		 */
		expandTip?: string;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		groupRowTpl?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default Ext.baseCSSPrefix + 'grid-group-hd-collapsed'
		 * @type {string}
		 */
		hdCollapsedCls?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default Ext.baseCSSPrefix + 'grid-group-hd-not-collapsible'
		 * @type {string}
		 */
		hdNotCollapsibleCls?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default ['{%', 'if (!(this.groupingFeature.disabled || values.rows.length === 1 && values.rows[0].isSummary)) {', 'this.groupingFeature.setup(values.rows, values.view.rowValues);', '}', 'this.nextTpl.applyOut(values, out, parent);', 'if (!(this.groupingFeature.disabled || values.rows.length === 1 && values.rows[0].isSummary)) {', 'this.groupingFeature.cleanup(values.rows, values.view.rowValues);', '}', '%}', {priority: 200}]
		 * @type {any[]}
		 */
		outerTpl?: any[];
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		readDataOptions?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default {}
		 * @type {object}
		 */
		refreshData?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default Ext.baseCSSPrefix + 'grid-row-summary'
		 * @type {string}
		 */
		summaryRowCls?: string;
		/** 
		 * High priority rowTpl interceptor which sees summary rows early, and renders them correctly and then aborts the row rendering chain.
		 * This will only see action when summary rows are being updated and Table.onUpdate->Table.bufferRender renders the individual updated sumary row.
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		summaryRowTpl?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		wrapsItem?: boolean;
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               members    The members to add to this class.
		 * @param   {boolean}                                                                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Grouping;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               members
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.feature.Grouping;
		static addStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addStatics? (members: object): typeof Ext.util.Observable;
		static addStatics? (members: object): typeof Ext.mixin.Observable;
		static addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		static create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		static createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		static getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		static override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		static addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               members
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.Grouping;
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addInheritableStatics? (members: object): typeof Ext.util.Observable;
		static addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               name
		 * @param   {object}                                                                                               member
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.feature.Grouping;
		static addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		static addMember? (name: object, member: object): typeof Ext.util.Observable;
		static addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		static addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		static borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		static extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		static getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		static mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               fn
		 * @param   {object}                                                                                               scope
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Grouping;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		static onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addBeforeListener? (): void;
		/** 
		 * The addManagedListener method is used when some object (call it "A") is listening
		 * to an event on another observable object ("B") and you want to remove that listener
		 * from "B" when "A" is destroyed. This is not an issue when "B" is destroyed because
		 * all of its listeners will be removed at that time.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Foo', {
		 *        extend: 'Ext.Component',
		 *    
		 *        initComponent: function () {
		 *            this.addManagedListener(MyApp.SomeGlobalSharedMenu, 'show', this.doSomething);
		 *            this.callParent();
		 *        }
		 *    });
		 * 
		 * As you can see, when an instance of Foo is destroyed, it ensures that the 'show'
		 * listener on the menu (`MyApp.SomeGlobalSharedMenu`) is also removed.
		 * 
		 * As of version 5.1 it is no longer necessary to use this method in most cases because
		 * listeners are automatically managed if the scope object provided to
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) is an Observable instance.
		 * However, if the observable instance and scope are not the same object you
		 * still need to use `mon` or `addManagedListener` if you want the listener to be
		 * managed.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		addManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Removes all listeners for this object including the managed listeners
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearListeners? (): void;
		/** 
		 * Removes all managed listeners for this object.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearManagedListeners? (): void;
		/** 
		 * Collapse a group
		 * @method
		 * @public (method)
		 * @param   {string}  groupName The group name
		 * @param   {boolean} focus     Pass `true` to focus the group after expand.
		 * @returns {void}              
		 */
		collapse? (groupName: string, focus: boolean): void;
		/** 
		 * Collapse all groups
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		collapseAll? (): void;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Disables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Enables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		enable? (): void;
		/** 
		 * Enables events fired by this Observable to bubble up an owner hierarchy by calling `this.getBubbleTarget()` if
		 * present. There is no implementation in the Observable base class.
		 * 
		 * This is commonly used by Ext.Components to bubble events to owner Containers.
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) returns the
		 * Component's immediate owner. But if a known target is required, this can be overridden to access the
		 * required target more quickly.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Ext.overrides.form.field.Base', {
		 *        override: 'Ext.form.field.Base',
		 *    
		 *        //  Add functionality to Field's initComponent to enable the change event to bubble
		 *        initComponent: function () {
		 *            this.callParent();
		 *            this.enableBubble('change');
		 *        }
		 *    });
		 *    
		 *    var myForm = Ext.create('Ext.form.Panel', {
		 *        title: 'User Details',
		 *        items: [{
		 *            ...
		 *        }],
		 *        listeners: {
		 *            change: function() {
		 *                // Title goes red if form has been modified.
		 *                myForm.header.setStyle('color', 'red');
		 *            }
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {string|string[]} eventNames The event name to bubble, or an Array of event names.
		 * @returns {void}                       
		 */
		enableBubble? (eventNames: string | string[]): void;
		/** 
		 * Expand a group
		 * @method
		 * @public (method)
		 * @param   {string}  groupName The group name
		 * @param   {boolean} focus     Pass `true` to focus the group after expand.
		 * @returns {void}              
		 */
		expand? (groupName: string, focus: boolean): void;
		/** 
		 * Expand all groups
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		expandAll? (): void;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)), but before any other
		 * handlers are fired.  This gives the "before" handlers an opportunity to
		 * cancel the event by returning `false`, and prevent the action function from
		 * being called.
		 * 
		 * The action can also be configured to run after normal handlers, but before any "after"
		 * handlers (as specified using the `order` event option) by passing `'after'`
		 * as the `order` parameter.  This configuration gives any event handlers except
		 * for "after" handlers the opportunity to cancel the event and prevent the action
		 * function from being called.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {any[]}    args      Arguments to pass to handlers and to the action function.
		 * @param   {Function} fn        The action function.
		 * @param   {object}   [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {object}   [options]
		 * Event options for the action function.  Accepts any
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}    eventName The name of the event to fire.
		 * @param   {...object} args      Variable number of parameters are passed to handlers.
		 * @returns {boolean}             returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string, ...args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameter list.
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {object[]} args      An array of parameters which are passed to handlers.
		 * @returns {boolean}            returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEventArgs? (eventName: string, args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * Evented Actions will automatically dispatch a 'before' event passing. This event will
		 * be given a special controller that allows for pausing/resuming of the event flow.
		 * 
		 * By pausing the controller the updater and events will not run until resumed. Pausing,
		 * however, will not stop the processing of any other before events.
		 * @method
		 * @public (method)
		 * @param   {string}          eventName The name of the event to fire.
		 * @param   {any[]}           args      Arguments to pass to handlers and to the action function.
		 * @param   {Function|string} fn        The action function.
		 * @param   {object}          [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {any[]|boolean}   [fnArgs]
		 * Optional arguments for the action `fn`. If not
		 * given, the normal `args` will be used to call `fn`. If `false` is passed, the
		 * `args` are used but if the first argument is this instance it will be removed
		 * from the args passed to the action function.
		 * @returns {void}                      
		 */
		fireEventedAction? (eventName: string, args: any[], fn: ExtGlobalFunction | string, scope?: object, fnArgs?: any[] | boolean): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Returns the group data object for the group to which the passed record belongs **if the Store is grouped**.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model} record The record for which to return group information.
		 * @returns {object}         
		 * A single group data block as returned from [Store.getGroups](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-getGroups). Returns
		 * `undefined` if the Store is not grouped.
		 */
		getRecordGroup? (record: Ext.data.Model): object;
		/** 
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
		/** 
		 * Returns `true` if the named group is expanded.
		 * @method
		 * @public (method)
		 * @param   {string}  groupName
		 * The group name. This is the value of
		 * the [groupField](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-groupField).
		 * @returns {boolean}           `true` if the group defined by that value is expanded.
		 */
		isExpanded? (groupName: string): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-addManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		mon? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		mun? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Appends an after-event handler.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Appends a before-event handler.  Returning `false` from the handler will stop the event.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Relays selected events from the specified Observable as if the events were fired by `this`.
		 * 
		 * For example if you are extending Grid, you might decide to forward some events from store.
		 * So you can do this inside your initComponent:
		 * 
		 *    this.relayEvents(this.getStore(), ['load']);
		 * 
		 * The grid instance will then have an observable 'load' event which will be passed
		 * the parameters of the store's load event and any function fired with the grid's
		 * load event would have access to the grid using the this keyword (unless the event
		 * is handled by a controller's control/listen event listener in which case 'this'
		 * will be the controller rather than the grid).
		 * @method
		 * @public (method)
		 * @param   {object}          origin   The Observable whose events this object is to relay.
		 * @param   {string[]|object} events
		 * Array of event names to relay or an Object with key/value
		 * pairs translating to ActualEventName/NewEventName respectively. For example:
		 *     this.relayEvents(this, {add:'push', remove:'pop'});
		 * 
		 * Would now redispatch the add event of this as a push event and the remove event as a pop event.
		 * @param   {string}          [prefix]
		 * A common prefix to prepend to the event names. For example:
		 * 
		 *    this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Now the grid will forward 'load' and 'clear' events of store as 'storeload' and 'storeclear'.
		 * @returns {object}          
		 * A `Destroyable` object. An object which implements the `destroy` method which, when destroyed, removes all relayers. For example:
		 * 
		 *    this.storeRelayers = this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Can be undone by calling
		 * 
		 *    Ext.destroy(this.storeRelayers);
		 * 
		 * or
		 *     this.store.relayers.destroy();
		 */
		relayEvents? (origin: object, events: string[] | object, prefix?: string): object;
		/** 
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeBeforeListener? (): void;
		/** 
		 * Removes an event handler.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		removeListener? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-mon) method.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		removeManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeEvent? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                                               [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Grouping;
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Feature;
		setConfig? (name: string | object, value?: object): Ext.util.Observable;
		setConfig? (name: string | object, value?: object): Ext.mixin.Observable;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendEvent? (): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Toggle whether or not to show the summary row.
		 * @method
		 * @public (method)
		 * @param   {boolean} visible True to show the summary row
		 * @returns {void}            
		 */
		toggleSummaryRow? (visible: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		un? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * Listen for store updates. Eg, from an Editor.
		 * @method
		 * @protected (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		init? (grid: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.feature.Feature.init](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#method-init).
		 * Protected method called during [View](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) construction.  The
		 * owning [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) is passed as a param.
		 * @method
		 * @protected (method)
		 * @param   {Ext.grid.Panel} grid
		 * The View's owning Grid.  **Note** that in a
		 * [locking Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html#cfg-enableLocking) the passed grid will be
		 * either the normal grid or the locked grid, which is the view's direct owner.
		 * @returns {void}                
		 */
		init? (grid: Ext.grid.Panel): void;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                                                                                               config
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.feature.Grouping;
		initConfig? (config: object): Ext.grid.feature.Feature;
		initConfig? (config: object): Ext.util.Observable;
		initConfig? (config: object): Ext.mixin.Observable;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Gets the default scope for firing late bound events (string names with
		 * no scope attached) at runtime.
		 * @method
		 * @protected (method)
		 * @param   {object} [defaultScope] The default scope to return if none is found.
		 * @returns {object}                The default event scope
		 */
		resolveListenerScope? (defaultScope?: object): object;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.Grouping.Statics|Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.feature.Grouping.Statics;
		statics? (): Ext.grid.feature.Feature.Statics;
		statics? (): Ext.util.Observable.Statics;
		statics? (): Ext.mixin.Observable.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * Adds declarative listeners as nested arrays of listener objects.
		 * @method
		 * @private (method)
		 * @param   {any[]}   listeners
		 * @returns {boolean}           `true` if any listeners were added
		 */
		_addDeclaredListeners? (listeners: any[]): boolean;
		/** 
		 * This method applies a versioned, deprecation declaration to this class. This
		 * is typically called by the `deprecated` config.
		 * @method
		 * @private (method)
		 * @param   {object} deprecations
		 * @returns {void}                
		 */
		addDeprecations? (deprecations: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} collapsed
		 * @param   {object} groupName
		 * @param   {object} focus
		 * @returns {void}             
		 */
		afterCollapseExpand? (collapsed: object, groupName: object, focus: object): void;
		/** 
		 * Attach events to view
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterViewRender? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @param   {object} store
		 * @param   {object} columns
		 * @param   {object} oldStore
		 * @param   {object} oldColumns
		 * @returns {void}              
		 */
		beforeReconfigure? (grid: object, store: object, columns: object, oldStore: object, oldColumns: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @param   {object} store
		 * @returns {void}         
		 */
		bindStore? (grid: object, store: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fromPartner
		 * @returns {void}               
		 */
		block? (fromPartner: object): void;
		/** 
		 * @mixed
		 * @private (method+property)
		 * @param   {object} o
		 * @param   {object} fn
		 * @param   {object} scope
		 * @returns {void}         
		 * @type {object}
		 */
		captureArgs?: ((o: object, fn: object, scope: object) => void) | object | any;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rows
		 * @param   {object} rowValues
		 * @returns {void}             
		 */
		cleanup? (rows: object, rowValues: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clone? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		createCache? (): void;
		/** 
		 * Creates an event handling function which re-fires the event from this object as the passed event name.
		 * @method
		 * @private (method)
		 * @param   {string}   newName    The name under which to re-fire the passed parameters.
		 * @param   {any[]}    [beginEnd] The caller can specify on which indices to slice.
		 * @returns {Function}            
		 */
		createRelayer? (newName: string, beginEnd?: any[]): ExtGlobalFunction;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} column
		 * @param   {object} record
		 * @returns {void}          
		 */
		createRenderer? (column: object, record: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} collapsed
		 * @param   {object} groupName
		 * @param   {object} focus
		 * @returns {void}             
		 */
		doCollapseExpand? (collapsed: object, groupName: object, focus: object): void;
		/** 
		 * Continue to fire event.
		 * @method
		 * @private (method)
		 * @param   {string}  eventName
		 * @param   {any[]}   args
		 * @param   {boolean} bubbles
		 * @returns {void}              
		 */
		doFireEvent? (eventName: string, args: any[], bubbles: boolean): void;
		/** 
		 * Used by the Grouping Feature when [showSummaryRow](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-showSummaryRow) is `true`.
		 * 
		 * Generates group summary data for the whole store.
		 * @method
		 * @private (method)
		 * @returns {object}  An object hash keyed by group name containing summary records.
		 */
		generateSummaryData? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} metaGroup
		 * @param   {object} forceNew
		 * @returns {void}             
		 */
		getAggregateRecord? (metaGroup: object, forceNew: object): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCache? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGridStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} name
		 * @returns {void}        
		 */
		getGroup? (name: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGroupField? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} element
		 * @returns {void}           
		 */
		getGroupName? (element: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} groupField
		 * @returns {void}              
		 */
		getGroupedHeader? (groupField: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} dataIndex
		 * @returns {void}             
		 */
		getGrouper? (dataIndex: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} groupName
		 * @returns {void}             
		 */
		getHeaderNode? (groupName: object): void;
		/** 
		 * Gets the related menu item for a dataIndex
		 * @method
		 * @private (method)
		 * @param   {object}                    dataIndex
		 * @returns {Ext.grid.header.Container}           The header
		 */
		getMenuItem? (dataIndex: object): Ext.grid.header.Container;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getMenuItems? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} group
		 * @returns {void}         
		 */
		getMetaGroup? (group: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getRawData? (): void;
		/** 
		 * Get the summary data for a field.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.Store}       store The store to get the data from
		 * @param   {Function|string}      type
		 * The type of aggregation. If a function is specified it will
		 * be passed to the stores aggregate function.
		 * @param   {string}               field The field to aggregate on
		 * @param   {boolean}              group True to aggregate in grouped mode
		 * @returns {number|string|object} 
		 * See the return type for the store functions.
		 * if the group parameter is `true` An object is returned with a property named for each group who's
		 * value is the summary value.
		 */
		getSummary? (store: Ext.data.Store, type: ExtGlobalFunction | string, field: string, group: boolean): number | string | object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @returns {void}          
		 */
		indexOf? (record: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @returns {void}          
		 */
		indexOfPlaceholder? (record: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		injectGroupingMenu? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		invalidateCache? (): void;
		/** 
		 * Returns true if all groups are collapsed
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		isAllCollapsed? (): boolean;
		/** 
		 * Returns true if all groups are expanded
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		isAllExpanded? (): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @returns {void}          
		 */
		isInCollapsedGroup? (record: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} headerOwnerCt
		 * @param   {object} header
		 * @returns {void}                 
		 */
		onColumnHideShow? (headerOwnerCt: object, header: object): void;
		/** 
		 * Update first and last records in groups when column moves
		 * Because of the RowWrap template, this will update the groups' headers and footers
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onColumnMove? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} store
		 * @param   {object} grouper
		 * @returns {void}           
		 */
		onGroupChange? (store: object, grouper: object): void;
		/** 
		 * Toggle between expanded/collapsed state when clicking on
		 * the group.
		 * @method
		 * @private (method)
		 * @param   {object} view
		 * @param   {object} rowElement
		 * @param   {object} groupName
		 * @param   {object} e
		 * @returns {void}              
		 */
		onGroupClick? (view: object, rowElement: object, groupName: object, e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} keyCode
		 * @param   {object} event
		 * @returns {void}           
		 */
		onGroupKey? (keyCode: object, event: object): void;
		/** 
		 * Group by the header the user has clicked on.
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @param   {object} e
		 * @returns {void}            
		 */
		onGroupMenuItemClick? (menuItem: object, e: object): void;
		/** 
		 * Turn on and off grouping via the menu
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @param   {object} checked
		 * @returns {void}            
		 */
		onGroupToggleMenuItemClick? (menuItem: object, checked: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} data
		 * @returns {void}        
		 */
		onReaderRawData? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} summaryRecord
		 * @param   {object} contextValues
		 * @param   {object} out
		 * @returns {void}                 
		 */
		outputSummaryRecord? (summaryRecord: object, contextValues: object, out: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} group
		 * @param   {object} metaGroup
		 * @param   {object} remoteData
		 * @returns {void}              
		 */
		populateRecord? (group: object, metaGroup: object, remoteData: object): void;
		/** 
		 * Prepares a given class for observable instances. This method is called when a
		 * class derives from this class or uses this class as a mixin.
		 * @method
		 * @private (method)
		 * @param   {Function}            T     The class constructor to prepare.
		 * @param   {Ext.util.Observable} mixin The mixin if being used as a mixin.
		 * @param   {object}              data  The raw class creation data if this is an extend.
		 * @returns {void}                      
		 */
		prepareClass? (T: ExtGlobalFunction, mixin: Ext.util.Observable, data: object): void;
		/** 
		 * Prunes the grouped header from the header container
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		pruneGroupedHeader? (): void;
		/** 
		 * Remove a single managed listener item
		 * @method
		 * @private (method)
		 * @param   {boolean} isClear         True if this is being called during a clear
		 * @param   {object}  managedListener
		 * The managed listener item
		 * See removeManagedListener for other args
		 * @returns {void}                    
		 */
		removeManagedListenerItem? (isClear: boolean, managedListener: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @param   {object} colId
		 * @param   {object} summaryValue
		 * @param   {object} groupName
		 * @returns {void}                
		 */
		setSummaryData? (record: object, colId: object, summaryValue: object, groupName: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rows
		 * @param   {object} rowValues
		 * @returns {void}             
		 */
		setup? (rows: object, rowValues: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @param   {object} idx
		 * @param   {object} rowValues
		 * @returns {void}             
		 */
		setupRowData? (record: object, idx: object, rowValues: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} clickEvent
		 * @param   {object} t
		 * @param   {object} header
		 * @returns {void}              
		 */
		showMenuBy? (clickEvent: object, t: object, header: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fromPartner
		 * @returns {void}               
		 */
		unblock? (fromPartner: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                                             names The names of the linked objects to destroy.
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.feature.Grouping;
		unlink? (names: string[]): Ext.grid.feature.Feature;
		unlink? (names: string[]): Ext.util.Observable;
		unlink? (names: string[]): Ext.mixin.Observable;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @param   {object} row
		 * @param   {object} rowIndex
		 * @param   {object} e
		 * @returns {void}            
		 */
		vetoEvent? (record: object, row: object, rowIndex: object, e: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.feature.Feature.vetoEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#method-vetoEvent).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		vetoEvent? (): void;
	}
	/** 
	 * [Ext.grid.feature.GroupingSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupingSummary.html)
	 * This feature adds an aggregate summary row at the bottom of each group that is provided
	 * by the [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html) feature. There are two aspects to the summary:
	 * 
	 * ## Calculation
	 * 
	 * The summary value needs to be calculated for each column in the grid. This is controlled
	 * by the summaryType option specified on the column. There are several built in summary types,
	 * which can be specified as a string on the column configuration. These call underlying methods
	 * on the store:
	 * 
	 * - [count](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-count)
	 * - [sum](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-sum)
	 * - [min](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-min)
	 * - [max](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-max)
	 * - [average](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-average)
	 * 
	 * Alternatively, the summaryType can be a function definition. If this is the case,
	 * the function is called with two parameters: an array of records, and an array of field values
	 * to calculate the summary value.
	 * 
	 * ## Rendering
	 * 
	 * Similar to a column, the summary also supports a summaryRenderer function. This
	 * summaryRenderer is called before displaying a value. The function is optional, if
	 * not specified the default calculated value is shown. The summaryRenderer is called with:
	 * 
	 * - value {Object} - The calculated value.
	 * - summaryData {Object} - Contains all raw summary values for the row.
	 * - field {String} - The name of the field we are calculating
	 * - metaData {Object} - A collection of metadata about the current cell; can be used or modified by the renderer.
	 * 
	 * ## Example Usage
	 * 
	 *    Ext.define('TestResult', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['student', 'subject', {
	 *            name: 'mark',
	 *            type: 'int'
	 *        }]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 200,
	 *        height: 240,
	 *        renderTo: document.body,
	 *        features: [{
	 *            groupHeaderTpl: 'Subject: {name}',
	 *            ftype: 'groupingsummary'
	 *        }],
	 *        store: {
	 *            model: 'TestResult',
	 *            groupField: 'subject',
	 *            data: [{
	 *                student: 'Student 1',
	 *                subject: 'Math',
	 *                mark: 84
	 *            },{
	 *                student: 'Student 1',
	 *                subject: 'Science',
	 *                mark: 72
	 *            },{
	 *                student: 'Student 2',
	 *                subject: 'Math',
	 *                mark: 96
	 *            },{
	 *                student: 'Student 2',
	 *                subject: 'Science',
	 *                mark: 68
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'student',
	 *            text: 'Name',
	 *            summaryType: 'count',
	 *            summaryRenderer: function(value){
	 *                return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
	 *            }
	 *        }, {
	 *            dataIndex: 'mark',
	 *            text: 'Mark',
	 *            summaryType: 'average'
	 *        }]
	 *    });
	 * 
	 */
	class GroupingSummary extends Ext.grid.feature.Grouping {
		/** 
		 * Prefix to use when firing events on the view.
		 * For example a prefix of group would expose "groupclick", "groupcontextmenu", "groupdblclick".
		 * @property
		 * @public (property)
		 * @default 'group'
		 * @type {string}
		 */
		eventPrefix?: string;
		/** 
		 * Selector used to determine when to fire the event with the eventPrefix.
		 * @property
		 * @public (property)
		 * @default '.' + Ext.baseCSSPrefix + 'grid-group-hd'
		 * @type {string}
		 */
		eventSelector?: string;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
		 * for a detailed comparison
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            alert(this.self.speciesName); // dependent on 'this'
		 *        },
		 *    
		 *        clone: function() {
		 *            return new this.self();
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *        statics: {
		 *            speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                     // alerts 'Cat'
		 *    var snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'
		 * 
		 * @property
		 * @protected (property)
		 * @default Ext.Base
		 * @type {Ext.grid.feature.GroupingSummary.Statics}
		 */
		self?: Ext.grid.feature.GroupingSummary.Statics | Ext.grid.feature.Grouping.Statics | Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		wrapsItem?: boolean;
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                                members    The members to add to this class.
		 * @param   {boolean}                                                                                                                               [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                                               [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.GroupingSummary;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Grouping;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                                members
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.feature.GroupingSummary;
		static addStatics? (members: object): typeof Ext.grid.feature.Grouping;
		static addStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addStatics? (members: object): typeof Ext.util.Observable;
		static addStatics? (members: object): typeof Ext.mixin.Observable;
		static addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		static create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		static createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		static getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		static override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		static addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                                members
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.GroupingSummary;
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.Grouping;
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addInheritableStatics? (members: object): typeof Ext.util.Observable;
		static addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                                name
		 * @param   {object}                                                                                                                                member
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.feature.GroupingSummary;
		static addMember? (name: object, member: object): typeof Ext.grid.feature.Grouping;
		static addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		static addMember? (name: object, member: object): typeof Ext.util.Observable;
		static addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		static addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		static borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		static extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		static getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		static mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                                fn
		 * @param   {object}                                                                                                                                scope
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.GroupingSummary;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Grouping;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		static onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addBeforeListener? (): void;
		/** 
		 * The addManagedListener method is used when some object (call it "A") is listening
		 * to an event on another observable object ("B") and you want to remove that listener
		 * from "B" when "A" is destroyed. This is not an issue when "B" is destroyed because
		 * all of its listeners will be removed at that time.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Foo', {
		 *        extend: 'Ext.Component',
		 *    
		 *        initComponent: function () {
		 *            this.addManagedListener(MyApp.SomeGlobalSharedMenu, 'show', this.doSomething);
		 *            this.callParent();
		 *        }
		 *    });
		 * 
		 * As you can see, when an instance of Foo is destroyed, it ensures that the 'show'
		 * listener on the menu (`MyApp.SomeGlobalSharedMenu`) is also removed.
		 * 
		 * As of version 5.1 it is no longer necessary to use this method in most cases because
		 * listeners are automatically managed if the scope object provided to
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) is an Observable instance.
		 * However, if the observable instance and scope are not the same object you
		 * still need to use `mon` or `addManagedListener` if you want the listener to be
		 * managed.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		addManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Removes all listeners for this object including the managed listeners
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearListeners? (): void;
		/** 
		 * Removes all managed listeners for this object.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearManagedListeners? (): void;
		/** 
		 * Collapse a group
		 * @method
		 * @public (method)
		 * @param   {string}  groupName The group name
		 * @param   {boolean} focus     Pass `true` to focus the group after expand.
		 * @returns {void}              
		 */
		collapse? (groupName: string, focus: boolean): void;
		/** 
		 * Collapse all groups
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		collapseAll? (): void;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Disables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Enables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		enable? (): void;
		/** 
		 * Enables events fired by this Observable to bubble up an owner hierarchy by calling `this.getBubbleTarget()` if
		 * present. There is no implementation in the Observable base class.
		 * 
		 * This is commonly used by Ext.Components to bubble events to owner Containers.
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) returns the
		 * Component's immediate owner. But if a known target is required, this can be overridden to access the
		 * required target more quickly.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Ext.overrides.form.field.Base', {
		 *        override: 'Ext.form.field.Base',
		 *    
		 *        //  Add functionality to Field's initComponent to enable the change event to bubble
		 *        initComponent: function () {
		 *            this.callParent();
		 *            this.enableBubble('change');
		 *        }
		 *    });
		 *    
		 *    var myForm = Ext.create('Ext.form.Panel', {
		 *        title: 'User Details',
		 *        items: [{
		 *            ...
		 *        }],
		 *        listeners: {
		 *            change: function() {
		 *                // Title goes red if form has been modified.
		 *                myForm.header.setStyle('color', 'red');
		 *            }
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {string|string[]} eventNames The event name to bubble, or an Array of event names.
		 * @returns {void}                       
		 */
		enableBubble? (eventNames: string | string[]): void;
		/** 
		 * Expand a group
		 * @method
		 * @public (method)
		 * @param   {string}  groupName The group name
		 * @param   {boolean} focus     Pass `true` to focus the group after expand.
		 * @returns {void}              
		 */
		expand? (groupName: string, focus: boolean): void;
		/** 
		 * Expand all groups
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		expandAll? (): void;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)), but before any other
		 * handlers are fired.  This gives the "before" handlers an opportunity to
		 * cancel the event by returning `false`, and prevent the action function from
		 * being called.
		 * 
		 * The action can also be configured to run after normal handlers, but before any "after"
		 * handlers (as specified using the `order` event option) by passing `'after'`
		 * as the `order` parameter.  This configuration gives any event handlers except
		 * for "after" handlers the opportunity to cancel the event and prevent the action
		 * function from being called.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {any[]}    args      Arguments to pass to handlers and to the action function.
		 * @param   {Function} fn        The action function.
		 * @param   {object}   [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {object}   [options]
		 * Event options for the action function.  Accepts any
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}    eventName The name of the event to fire.
		 * @param   {...object} args      Variable number of parameters are passed to handlers.
		 * @returns {boolean}             returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string, ...args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameter list.
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {object[]} args      An array of parameters which are passed to handlers.
		 * @returns {boolean}            returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEventArgs? (eventName: string, args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * Evented Actions will automatically dispatch a 'before' event passing. This event will
		 * be given a special controller that allows for pausing/resuming of the event flow.
		 * 
		 * By pausing the controller the updater and events will not run until resumed. Pausing,
		 * however, will not stop the processing of any other before events.
		 * @method
		 * @public (method)
		 * @param   {string}          eventName The name of the event to fire.
		 * @param   {any[]}           args      Arguments to pass to handlers and to the action function.
		 * @param   {Function|string} fn        The action function.
		 * @param   {object}          [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {any[]|boolean}   [fnArgs]
		 * Optional arguments for the action `fn`. If not
		 * given, the normal `args` will be used to call `fn`. If `false` is passed, the
		 * `args` are used but if the first argument is this instance it will be removed
		 * from the args passed to the action function.
		 * @returns {void}                      
		 */
		fireEventedAction? (eventName: string, args: any[], fn: ExtGlobalFunction | string, scope?: object, fnArgs?: any[] | boolean): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Abstract method to be overriden when a feature should add additional
		 * arguments to its event signature. By default the event will fire:
		 * 
		 * - view - The underlying [Ext.view.Table](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)
		 * - featureTarget - The matched element by the defined [eventSelector](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#property-eventSelector)
		 * 
		 * The method must also return the eventName as the first index of the array
		 * to be passed to fireEvent.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} type
		 * @param   {object} view
		 * @param   {object} targetEl
		 * @param   {object} e
		 * @returns {void}            
		 */
		getFireEventArgs? (type: object, view: object, targetEl: object, e: object): void;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Returns the group data object for the group to which the passed record belongs **if the Store is grouped**.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model} record The record for which to return group information.
		 * @returns {object}         
		 * A single group data block as returned from [Store.getGroups](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-getGroups). Returns
		 * `undefined` if the Store is not grouped.
		 */
		getRecordGroup? (record: Ext.data.Model): object;
		/** 
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
		/** 
		 * Returns `true` if the named group is expanded.
		 * @method
		 * @public (method)
		 * @param   {string}  groupName
		 * The group name. This is the value of
		 * the [groupField](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-groupField).
		 * @returns {boolean}           `true` if the group defined by that value is expanded.
		 */
		isExpanded? (groupName: string): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-addManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		mon? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		mun? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Appends an after-event handler.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Appends a before-event handler.  Returning `false` from the handler will stop the event.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Relays selected events from the specified Observable as if the events were fired by `this`.
		 * 
		 * For example if you are extending Grid, you might decide to forward some events from store.
		 * So you can do this inside your initComponent:
		 * 
		 *    this.relayEvents(this.getStore(), ['load']);
		 * 
		 * The grid instance will then have an observable 'load' event which will be passed
		 * the parameters of the store's load event and any function fired with the grid's
		 * load event would have access to the grid using the this keyword (unless the event
		 * is handled by a controller's control/listen event listener in which case 'this'
		 * will be the controller rather than the grid).
		 * @method
		 * @public (method)
		 * @param   {object}          origin   The Observable whose events this object is to relay.
		 * @param   {string[]|object} events
		 * Array of event names to relay or an Object with key/value
		 * pairs translating to ActualEventName/NewEventName respectively. For example:
		 *     this.relayEvents(this, {add:'push', remove:'pop'});
		 * 
		 * Would now redispatch the add event of this as a push event and the remove event as a pop event.
		 * @param   {string}          [prefix]
		 * A common prefix to prepend to the event names. For example:
		 * 
		 *    this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Now the grid will forward 'load' and 'clear' events of store as 'storeload' and 'storeclear'.
		 * @returns {object}          
		 * A `Destroyable` object. An object which implements the `destroy` method which, when destroyed, removes all relayers. For example:
		 * 
		 *    this.storeRelayers = this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Can be undone by calling
		 * 
		 *    Ext.destroy(this.storeRelayers);
		 * 
		 * or
		 *     this.store.relayers.destroy();
		 */
		relayEvents? (origin: object, events: string[] | object, prefix?: string): object;
		/** 
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeBeforeListener? (): void;
		/** 
		 * Removes an event handler.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		removeListener? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-mon) method.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		removeManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeEvent? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                                                                         name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                                                                                [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.GroupingSummary;
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Grouping;
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Feature;
		setConfig? (name: string | object, value?: object): Ext.util.Observable;
		setConfig? (name: string | object, value?: object): Ext.mixin.Observable;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendEvent? (): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Toggle whether or not to show the summary row.
		 * @method
		 * @public (method)
		 * @param   {boolean} visible True to show the summary row
		 * @returns {void}            
		 */
		toggleSummaryRow? (visible: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		un? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * Listen for store updates. Eg, from an Editor.
		 * @method
		 * @protected (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		init? (grid: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.feature.Feature.init](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#method-init).
		 * Protected method called during [View](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) construction.  The
		 * owning [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) is passed as a param.
		 * @method
		 * @protected (method)
		 * @param   {Ext.grid.Panel} grid
		 * The View's owning Grid.  **Note** that in a
		 * [locking Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html#cfg-enableLocking) the passed grid will be
		 * either the normal grid or the locked grid, which is the view's direct owner.
		 * @returns {void}                
		 */
		init? (grid: Ext.grid.Panel): void;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                                                                                                                                config
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.feature.GroupingSummary;
		initConfig? (config: object): Ext.grid.feature.Grouping;
		initConfig? (config: object): Ext.grid.feature.Feature;
		initConfig? (config: object): Ext.util.Observable;
		initConfig? (config: object): Ext.mixin.Observable;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Gets the default scope for firing late bound events (string names with
		 * no scope attached) at runtime.
		 * @method
		 * @protected (method)
		 * @param   {object} [defaultScope] The default scope to return if none is found.
		 * @returns {object}                The default event scope
		 */
		resolveListenerScope? (defaultScope?: object): object;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.GroupingSummary.Statics|Ext.grid.feature.Grouping.Statics|Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.feature.GroupingSummary.Statics;
		statics? (): Ext.grid.feature.Grouping.Statics;
		statics? (): Ext.grid.feature.Feature.Statics;
		statics? (): Ext.util.Observable.Statics;
		statics? (): Ext.mixin.Observable.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * Adds declarative listeners as nested arrays of listener objects.
		 * @method
		 * @private (method)
		 * @param   {any[]}   listeners
		 * @returns {boolean}           `true` if any listeners were added
		 */
		_addDeclaredListeners? (listeners: any[]): boolean;
		/** 
		 * This method applies a versioned, deprecation declaration to this class. This
		 * is typically called by the `deprecated` config.
		 * @method
		 * @private (method)
		 * @param   {object} deprecations
		 * @returns {void}                
		 */
		addDeprecations? (deprecations: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} collapsed
		 * @param   {object} groupName
		 * @param   {object} focus
		 * @returns {void}             
		 */
		afterCollapseExpand? (collapsed: object, groupName: object, focus: object): void;
		/** 
		 * Attach events to view
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterViewRender? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @param   {object} store
		 * @param   {object} columns
		 * @param   {object} oldStore
		 * @param   {object} oldColumns
		 * @returns {void}              
		 */
		beforeReconfigure? (grid: object, store: object, columns: object, oldStore: object, oldColumns: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @param   {object} store
		 * @returns {void}         
		 */
		bindStore? (grid: object, store: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fromPartner
		 * @returns {void}               
		 */
		block? (fromPartner: object): void;
		/** 
		 * @mixed
		 * @private (method+property)
		 * @param   {object} o
		 * @param   {object} fn
		 * @param   {object} scope
		 * @returns {void}         
		 * @type {object}
		 */
		captureArgs?: ((o: object, fn: object, scope: object) => void) | object | any;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rows
		 * @param   {object} rowValues
		 * @returns {void}             
		 */
		cleanup? (rows: object, rowValues: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clone? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		createCache? (): void;
		/** 
		 * Creates an event handling function which re-fires the event from this object as the passed event name.
		 * @method
		 * @private (method)
		 * @param   {string}   newName    The name under which to re-fire the passed parameters.
		 * @param   {any[]}    [beginEnd] The caller can specify on which indices to slice.
		 * @returns {Function}            
		 */
		createRelayer? (newName: string, beginEnd?: any[]): ExtGlobalFunction;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} column
		 * @param   {object} record
		 * @returns {void}          
		 */
		createRenderer? (column: object, record: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} collapsed
		 * @param   {object} groupName
		 * @param   {object} focus
		 * @returns {void}             
		 */
		doCollapseExpand? (collapsed: object, groupName: object, focus: object): void;
		/** 
		 * Continue to fire event.
		 * @method
		 * @private (method)
		 * @param   {string}  eventName
		 * @param   {any[]}   args
		 * @param   {boolean} bubbles
		 * @returns {void}              
		 */
		doFireEvent? (eventName: string, args: any[], bubbles: boolean): void;
		/** 
		 * Used by the Grouping Feature when [showSummaryRow](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-showSummaryRow) is `true`.
		 * 
		 * Generates group summary data for the whole store.
		 * @method
		 * @private (method)
		 * @returns {object}  An object hash keyed by group name containing summary records.
		 */
		generateSummaryData? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} metaGroup
		 * @param   {object} forceNew
		 * @returns {void}             
		 */
		getAggregateRecord? (metaGroup: object, forceNew: object): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCache? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGridStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} name
		 * @returns {void}        
		 */
		getGroup? (name: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGroupField? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} element
		 * @returns {void}           
		 */
		getGroupName? (element: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} groupField
		 * @returns {void}              
		 */
		getGroupedHeader? (groupField: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} dataIndex
		 * @returns {void}             
		 */
		getGrouper? (dataIndex: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} groupName
		 * @returns {void}             
		 */
		getHeaderNode? (groupName: object): void;
		/** 
		 * Gets the related menu item for a dataIndex
		 * @method
		 * @private (method)
		 * @param   {object}                    dataIndex
		 * @returns {Ext.grid.header.Container}           The header
		 */
		getMenuItem? (dataIndex: object): Ext.grid.header.Container;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getMenuItems? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} group
		 * @returns {void}         
		 */
		getMetaGroup? (group: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getRawData? (): void;
		/** 
		 * Get the summary data for a field.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.Store}       store The store to get the data from
		 * @param   {Function|string}      type
		 * The type of aggregation. If a function is specified it will
		 * be passed to the stores aggregate function.
		 * @param   {string}               field The field to aggregate on
		 * @param   {boolean}              group True to aggregate in grouped mode
		 * @returns {number|string|object} 
		 * See the return type for the store functions.
		 * if the group parameter is `true` An object is returned with a property named for each group who's
		 * value is the summary value.
		 */
		getSummary? (store: Ext.data.Store, type: ExtGlobalFunction | string, field: string, group: boolean): number | string | object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @returns {void}          
		 */
		indexOf? (record: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @returns {void}          
		 */
		indexOfPlaceholder? (record: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		injectGroupingMenu? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		invalidateCache? (): void;
		/** 
		 * Returns true if all groups are collapsed
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		isAllCollapsed? (): boolean;
		/** 
		 * Returns true if all groups are expanded
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		isAllExpanded? (): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @returns {void}          
		 */
		isInCollapsedGroup? (record: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} headerOwnerCt
		 * @param   {object} header
		 * @returns {void}                 
		 */
		onColumnHideShow? (headerOwnerCt: object, header: object): void;
		/** 
		 * Update first and last records in groups when column moves
		 * Because of the RowWrap template, this will update the groups' headers and footers
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onColumnMove? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} store
		 * @param   {object} grouper
		 * @returns {void}           
		 */
		onGroupChange? (store: object, grouper: object): void;
		/** 
		 * Toggle between expanded/collapsed state when clicking on
		 * the group.
		 * @method
		 * @private (method)
		 * @param   {object} view
		 * @param   {object} rowElement
		 * @param   {object} groupName
		 * @param   {object} e
		 * @returns {void}              
		 */
		onGroupClick? (view: object, rowElement: object, groupName: object, e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} keyCode
		 * @param   {object} event
		 * @returns {void}           
		 */
		onGroupKey? (keyCode: object, event: object): void;
		/** 
		 * Group by the header the user has clicked on.
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @param   {object} e
		 * @returns {void}            
		 */
		onGroupMenuItemClick? (menuItem: object, e: object): void;
		/** 
		 * Turn on and off grouping via the menu
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @param   {object} checked
		 * @returns {void}            
		 */
		onGroupToggleMenuItemClick? (menuItem: object, checked: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} data
		 * @returns {void}        
		 */
		onReaderRawData? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} summaryRecord
		 * @param   {object} contextValues
		 * @param   {object} out
		 * @returns {void}                 
		 */
		outputSummaryRecord? (summaryRecord: object, contextValues: object, out: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} group
		 * @param   {object} metaGroup
		 * @param   {object} remoteData
		 * @returns {void}              
		 */
		populateRecord? (group: object, metaGroup: object, remoteData: object): void;
		/** 
		 * Prepares a given class for observable instances. This method is called when a
		 * class derives from this class or uses this class as a mixin.
		 * @method
		 * @private (method)
		 * @param   {Function}            T     The class constructor to prepare.
		 * @param   {Ext.util.Observable} mixin The mixin if being used as a mixin.
		 * @param   {object}              data  The raw class creation data if this is an extend.
		 * @returns {void}                      
		 */
		prepareClass? (T: ExtGlobalFunction, mixin: Ext.util.Observable, data: object): void;
		/** 
		 * Prunes the grouped header from the header container
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		pruneGroupedHeader? (): void;
		/** 
		 * Remove a single managed listener item
		 * @method
		 * @private (method)
		 * @param   {boolean} isClear         True if this is being called during a clear
		 * @param   {object}  managedListener
		 * The managed listener item
		 * See removeManagedListener for other args
		 * @returns {void}                    
		 */
		removeManagedListenerItem? (isClear: boolean, managedListener: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @param   {object} colId
		 * @param   {object} summaryValue
		 * @param   {object} groupName
		 * @returns {void}                
		 */
		setSummaryData? (record: object, colId: object, summaryValue: object, groupName: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rows
		 * @param   {object} rowValues
		 * @returns {void}             
		 */
		setup? (rows: object, rowValues: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @param   {object} idx
		 * @param   {object} rowValues
		 * @returns {void}             
		 */
		setupRowData? (record: object, idx: object, rowValues: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} clickEvent
		 * @param   {object} t
		 * @param   {object} header
		 * @returns {void}              
		 */
		showMenuBy? (clickEvent: object, t: object, header: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fromPartner
		 * @returns {void}               
		 */
		unblock? (fromPartner: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                                                                              names The names of the linked objects to destroy.
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.feature.GroupingSummary;
		unlink? (names: string[]): Ext.grid.feature.Grouping;
		unlink? (names: string[]): Ext.grid.feature.Feature;
		unlink? (names: string[]): Ext.util.Observable;
		unlink? (names: string[]): Ext.mixin.Observable;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @param   {object} row
		 * @param   {object} rowIndex
		 * @param   {object} e
		 * @returns {void}            
		 */
		vetoEvent? (record: object, row: object, rowIndex: object, e: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.feature.Feature.vetoEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#method-vetoEvent).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		vetoEvent? (): void;
	}
	/** 
	 * Private record store class which takes the place of the view's data store to provide a grouped
	 * view of the data when the Grouping feature is used.
	 * 
	 * Relays granular mutation events from the underlying store as refresh events to the view.
	 * 
	 * On mutation events from the underlying store, updates the summary rows by firing update events on the corresponding
	 * summary records.
	 * @private (class)
	 */
	class GroupStore extends Ext.util.Observable {}
	/** 
	 * [Ext.grid.feature.RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html)
	 * The rowbody feature enhances the grid's markup to have an additional
	 * tr -> td -> div which spans the entire width of the original row.
	 * 
	 * This is useful to to associate additional information with a particular
	 * record in an Ext.grid.Grid.
	 * 
	 * Rowbodies are initially hidden unless you override [getAdditionalData](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html#method-getAdditionalData).
	 * 
	 * The events fired by RowBody are relayed to the owning
	 * [grid view](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) (and subsequently the owning grid).
	 * 
	 * # Example
	 * 
	 *    Ext.define('Animal', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['name', 'latin', 'desc', 'lifespan']
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 400,
	 *        height: 300,
	 *        renderTo: Ext.getBody(),
	 *        store: {
	 *            model: 'Animal',
	 *            data: [{
	 *                name: 'Tiger',
	 *                latin: 'Panthera tigris',
	 *                desc: 'The largest cat species, weighing up to 306 kg (670 lb).',
	 *                lifespan: '20 - 26 years (in captivity)'
	 *            }, {
	 *                name: 'Roman snail',
	 *                latin: 'Helix pomatia',
	 *                desc: 'A species of large, edible, air-breathing land snail.',
	 *                lifespan: '20 - 35 years'
	 *            }, {
	 *                name: 'Yellow-winged darter',
	 *                latin: 'Sympetrum flaveolum',
	 *                desc: 'A dragonfly found in Europe and mid and Northern China.',
	 *                lifespan: '4 - 6 weeks'
	 *            }, {
	 *                name: 'Superb Fairy-wren',
	 *                latin: 'Malurus cyaneus',
	 *                desc: 'Common and familiar across south-eastern Australia.',
	 *                lifespan: '5 - 6 years'
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'name',
	 *            text: 'Common name',
	 *            width: 125
	 *        }, {
	 *            dataIndex: 'latin',
	 *            text: 'Scientific name',
	 *            flex: 1
	 *        }],
	 *        features: [{
	 *            ftype: 'rowbody',
	 *            getAdditionalData: function (data, idx, record, orig) {
	 *                // Usually you would style the my-body-class in a CSS file
	 *                return {
	 *                    rowBody: '&lt;div style="padding: 1em"&gt;' + record.get("desc") + '&lt;/div&gt;',
	 *                    rowBodyCls: "my-body-class"
	 *                };
	 *            }
	 *        }],
	 *        listeners: {
	 *            rowbodyclick: function(view, rowEl, e, eOpts) {
	 *                var itemEl = Ext.get(rowEl).up(view.itemSelector),
	 *                    rec = view.getRecord(itemEl);
	 *    
	 *                Ext.Msg.alert(rec.get('name') + ' life span', rec.get('lifespan'));
	 *            }
	 *        }
	 *    });
	 * 
	 * # Cell Editing and Cell Selection Model
	 * 
	 * Note that if [cell editing](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.plugin.CellEditing.html) or the [cell selection model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.selection.CellModel.html) are going
	 * to be used, then the [RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html) feature, or [RowExpander](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.plugin.RowExpander.html) plugin MUST
	 * be used for intra-cell navigation to be correct.
	 */
	class RowBody extends Ext.grid.feature.Feature {
		/** 
		 * Prefix to use when firing events on the view.
		 * For example a prefix of group would expose "groupclick", "groupcontextmenu", "groupdblclick".
		 * @property
		 * @public (property)
		 * @default 'rowbody'
		 * @type {string}
		 */
		eventPrefix?: string;
		/** 
		 * Selector used to determine when to fire the event with the eventPrefix.
		 * @property
		 * @public (property)
		 * @default 'tr.' + Ext.baseCSSPrefix + 'grid-rowbody-tr'
		 * @type {string}
		 */
		eventSelector?: string;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
		 * for a detailed comparison
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            alert(this.self.speciesName); // dependent on 'this'
		 *        },
		 *    
		 *        clone: function() {
		 *            return new this.self();
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *        statics: {
		 *            speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                     // alerts 'Cat'
		 *    var snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'
		 * 
		 * @property
		 * @protected (property)
		 * @default Ext.Base
		 * @type {Ext.grid.feature.RowBody.Statics}
		 */
		self?: Ext.grid.feature.RowBody.Statics | Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics;
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                              members    The members to add to this class.
		 * @param   {boolean}                                                                                             [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                             [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.RowBody;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                              members
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.feature.RowBody;
		static addStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addStatics? (members: object): typeof Ext.util.Observable;
		static addStatics? (members: object): typeof Ext.mixin.Observable;
		static addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		static create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		static createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		static getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		static override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		static addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                              members
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.RowBody;
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addInheritableStatics? (members: object): typeof Ext.util.Observable;
		static addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                              name
		 * @param   {object}                                                                                              member
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.feature.RowBody;
		static addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		static addMember? (name: object, member: object): typeof Ext.util.Observable;
		static addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		static addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		static borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		static extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		static getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		static mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                              fn
		 * @param   {object}                                                                                              scope
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.RowBody;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		static onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addBeforeListener? (): void;
		/** 
		 * The addManagedListener method is used when some object (call it "A") is listening
		 * to an event on another observable object ("B") and you want to remove that listener
		 * from "B" when "A" is destroyed. This is not an issue when "B" is destroyed because
		 * all of its listeners will be removed at that time.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Foo', {
		 *        extend: 'Ext.Component',
		 *    
		 *        initComponent: function () {
		 *            this.addManagedListener(MyApp.SomeGlobalSharedMenu, 'show', this.doSomething);
		 *            this.callParent();
		 *        }
		 *    });
		 * 
		 * As you can see, when an instance of Foo is destroyed, it ensures that the 'show'
		 * listener on the menu (`MyApp.SomeGlobalSharedMenu`) is also removed.
		 * 
		 * As of version 5.1 it is no longer necessary to use this method in most cases because
		 * listeners are automatically managed if the scope object provided to
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) is an Observable instance.
		 * However, if the observable instance and scope are not the same object you
		 * still need to use `mon` or `addManagedListener` if you want the listener to be
		 * managed.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		addManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Removes all listeners for this object including the managed listeners
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearListeners? (): void;
		/** 
		 * Removes all managed listeners for this object.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearManagedListeners? (): void;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Disables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Enables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		enable? (): void;
		/** 
		 * Enables events fired by this Observable to bubble up an owner hierarchy by calling `this.getBubbleTarget()` if
		 * present. There is no implementation in the Observable base class.
		 * 
		 * This is commonly used by Ext.Components to bubble events to owner Containers.
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) returns the
		 * Component's immediate owner. But if a known target is required, this can be overridden to access the
		 * required target more quickly.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Ext.overrides.form.field.Base', {
		 *        override: 'Ext.form.field.Base',
		 *    
		 *        //  Add functionality to Field's initComponent to enable the change event to bubble
		 *        initComponent: function () {
		 *            this.callParent();
		 *            this.enableBubble('change');
		 *        }
		 *    });
		 *    
		 *    var myForm = Ext.create('Ext.form.Panel', {
		 *        title: 'User Details',
		 *        items: [{
		 *            ...
		 *        }],
		 *        listeners: {
		 *            change: function() {
		 *                // Title goes red if form has been modified.
		 *                myForm.header.setStyle('color', 'red');
		 *            }
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {string|string[]} eventNames The event name to bubble, or an Array of event names.
		 * @returns {void}                       
		 */
		enableBubble? (eventNames: string | string[]): void;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)), but before any other
		 * handlers are fired.  This gives the "before" handlers an opportunity to
		 * cancel the event by returning `false`, and prevent the action function from
		 * being called.
		 * 
		 * The action can also be configured to run after normal handlers, but before any "after"
		 * handlers (as specified using the `order` event option) by passing `'after'`
		 * as the `order` parameter.  This configuration gives any event handlers except
		 * for "after" handlers the opportunity to cancel the event and prevent the action
		 * function from being called.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {any[]}    args      Arguments to pass to handlers and to the action function.
		 * @param   {Function} fn        The action function.
		 * @param   {object}   [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {object}   [options]
		 * Event options for the action function.  Accepts any
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}    eventName The name of the event to fire.
		 * @param   {...object} args      Variable number of parameters are passed to handlers.
		 * @returns {boolean}             returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string, ...args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameter list.
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {object[]} args      An array of parameters which are passed to handlers.
		 * @returns {boolean}            returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEventArgs? (eventName: string, args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * Evented Actions will automatically dispatch a 'before' event passing. This event will
		 * be given a special controller that allows for pausing/resuming of the event flow.
		 * 
		 * By pausing the controller the updater and events will not run until resumed. Pausing,
		 * however, will not stop the processing of any other before events.
		 * @method
		 * @public (method)
		 * @param   {string}          eventName The name of the event to fire.
		 * @param   {any[]}           args      Arguments to pass to handlers and to the action function.
		 * @param   {Function|string} fn        The action function.
		 * @param   {object}          [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {any[]|boolean}   [fnArgs]
		 * Optional arguments for the action `fn`. If not
		 * given, the normal `args` will be used to call `fn`. If `false` is passed, the
		 * `args` are used but if the first argument is this instance it will be removed
		 * from the args passed to the action function.
		 * @returns {void}                      
		 */
		fireEventedAction? (eventName: string, args: any[], fn: ExtGlobalFunction | string, scope?: object, fnArgs?: any[] | boolean): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Abstract method to be overriden when a feature should add additional
		 * arguments to its event signature. By default the event will fire:
		 * 
		 * - view - The underlying [Ext.view.Table](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)
		 * - featureTarget - The matched element by the defined [eventSelector](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#property-eventSelector)
		 * 
		 * The method must also return the eventName as the first index of the array
		 * to be passed to fireEvent.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} eventName
		 * @param   {object} view
		 * @param   {object} featureTarget
		 * @param   {object} e
		 * @returns {void}                 
		 */
		getFireEventArgs? (eventName: object, view: object, featureTarget: object, e: object): void;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-addManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		mon? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		mun? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Appends an after-event handler.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Appends a before-event handler.  Returning `false` from the handler will stop the event.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Relays selected events from the specified Observable as if the events were fired by `this`.
		 * 
		 * For example if you are extending Grid, you might decide to forward some events from store.
		 * So you can do this inside your initComponent:
		 * 
		 *    this.relayEvents(this.getStore(), ['load']);
		 * 
		 * The grid instance will then have an observable 'load' event which will be passed
		 * the parameters of the store's load event and any function fired with the grid's
		 * load event would have access to the grid using the this keyword (unless the event
		 * is handled by a controller's control/listen event listener in which case 'this'
		 * will be the controller rather than the grid).
		 * @method
		 * @public (method)
		 * @param   {object}          origin   The Observable whose events this object is to relay.
		 * @param   {string[]|object} events
		 * Array of event names to relay or an Object with key/value
		 * pairs translating to ActualEventName/NewEventName respectively. For example:
		 *     this.relayEvents(this, {add:'push', remove:'pop'});
		 * 
		 * Would now redispatch the add event of this as a push event and the remove event as a pop event.
		 * @param   {string}          [prefix]
		 * A common prefix to prepend to the event names. For example:
		 * 
		 *    this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Now the grid will forward 'load' and 'clear' events of store as 'storeload' and 'storeclear'.
		 * @returns {object}          
		 * A `Destroyable` object. An object which implements the `destroy` method which, when destroyed, removes all relayers. For example:
		 * 
		 *    this.storeRelayers = this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Can be undone by calling
		 * 
		 *    Ext.destroy(this.storeRelayers);
		 * 
		 * or
		 *     this.store.relayers.destroy();
		 */
		relayEvents? (origin: object, events: string[] | object, prefix?: string): object;
		/** 
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeBeforeListener? (): void;
		/** 
		 * Removes an event handler.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		removeListener? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-mon) method.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		removeManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeEvent? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                                       name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                                              [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.RowBody;
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Feature;
		setConfig? (name: string | object, value?: object): Ext.util.Observable;
		setConfig? (name: string | object, value?: object): Ext.mixin.Observable;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendEvent? (): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		un? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * Provides additional data to the prepareData call within the grid view.
		 * The rowbody feature adds 3 additional variables into the grid view's template.
		 * These are `rowBody`, `rowBodyCls`, and `rowBodyColspan`.
		 * 
		 * - **rowBody:** _{String}_ The HTML to display in the row body element.  Defaults
		 *   to _undefined_.
		 * - **rowBodyCls:** _{String}_ An optional CSS class (or multiple classes
		 *   separated by spaces) to apply to the row body element.  Defaults to
		 *   [rowBodyCls](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html#property-rowBodyCls).
		 * - **rowBodyColspan:** _{Number}_ The number of columns that the row body element
		 *   should span.  Defaults to the number of visible columns.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}         data   The data for this particular record.
		 * @param   {number}         idx    The row index for this record.
		 * @param   {Ext.data.Model} record The record instance
		 * @param   {object}         orig   The original result from the prepareData call to massage.
		 * @returns {object}         
		 * An object containing additional variables for use in the grid
		 * view's template
		 */
		getAdditionalData? (data: object, idx: number, record: Ext.data.Model, orig: object): object;
		/** 
		 * Protected method called during [View](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) construction.  The
		 * owning [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) is passed as a param.
		 * @method
		 * @protected (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		init? (grid: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.feature.Feature.init](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#method-init).
		 * Protected method called during [View](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) construction.  The
		 * owning [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) is passed as a param.
		 * @method
		 * @protected (method)
		 * @param   {Ext.grid.Panel} grid
		 * The View's owning Grid.  **Note** that in a
		 * [locking Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html#cfg-enableLocking) the passed grid will be
		 * either the normal grid or the locked grid, which is the view's direct owner.
		 * @returns {void}                
		 */
		init? (grid: Ext.grid.Panel): void;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                                                                                              config
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.feature.RowBody;
		initConfig? (config: object): Ext.grid.feature.Feature;
		initConfig? (config: object): Ext.util.Observable;
		initConfig? (config: object): Ext.mixin.Observable;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Gets the default scope for firing late bound events (string names with
		 * no scope attached) at runtime.
		 * @method
		 * @protected (method)
		 * @param   {object} [defaultScope] The default scope to return if none is found.
		 * @returns {object}                The default event scope
		 */
		resolveListenerScope? (defaultScope?: object): object;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.RowBody.Statics|Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.feature.RowBody.Statics;
		statics? (): Ext.grid.feature.Feature.Statics;
		statics? (): Ext.util.Observable.Statics;
		statics? (): Ext.mixin.Observable.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * Adds declarative listeners as nested arrays of listener objects.
		 * @method
		 * @private (method)
		 * @param   {any[]}   listeners
		 * @returns {boolean}           `true` if any listeners were added
		 */
		_addDeclaredListeners? (listeners: any[]): boolean;
		/** 
		 * This method applies a versioned, deprecation declaration to this class. This
		 * is typically called by the `deprecated` config.
		 * @method
		 * @private (method)
		 * @param   {object} deprecations
		 * @returns {void}                
		 */
		addDeprecations? (deprecations: object): void;
		/** 
		 * @mixed
		 * @private (method+property)
		 * @param   {object} o
		 * @param   {object} fn
		 * @param   {object} scope
		 * @returns {void}         
		 * @type {object}
		 */
		captureArgs?: ((o: object, fn: object, scope: object) => void) | object | any;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clone? (): void;
		/** 
		 * Creates an event handling function which re-fires the event from this object as the passed event name.
		 * @method
		 * @private (method)
		 * @param   {string}   newName    The name under which to re-fire the passed parameters.
		 * @param   {any[]}    [beginEnd] The caller can specify on which indices to slice.
		 * @returns {Function}            
		 */
		createRelayer? (newName: string, beginEnd?: any[]): ExtGlobalFunction;
		/** 
		 * Continue to fire event.
		 * @method
		 * @private (method)
		 * @param   {string}  eventName
		 * @param   {any[]}   args
		 * @param   {boolean} bubbles
		 * @returns {void}              
		 */
		doFireEvent? (eventName: string, args: any[], bubbles: boolean): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Prepares a given class for observable instances. This method is called when a
		 * class derives from this class or uses this class as a mixin.
		 * @method
		 * @private (method)
		 * @param   {Function}            T     The class constructor to prepare.
		 * @param   {Ext.util.Observable} mixin The mixin if being used as a mixin.
		 * @param   {object}              data  The raw class creation data if this is an extend.
		 * @returns {void}                      
		 */
		prepareClass? (T: ExtGlobalFunction, mixin: Ext.util.Observable, data: object): void;
		/** 
		 * Remove a single managed listener item
		 * @method
		 * @private (method)
		 * @param   {boolean} isClear         True if this is being called during a clear
		 * @param   {object}  managedListener
		 * The managed listener item
		 * See removeManagedListener for other args
		 * @returns {void}                    
		 */
		removeManagedListenerItem? (isClear: boolean, managedListener: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                                            names The names of the linked objects to destroy.
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.feature.RowBody;
		unlink? (names: string[]): Ext.grid.feature.Feature;
		unlink? (names: string[]): Ext.util.Observable;
		unlink? (names: string[]): Ext.mixin.Observable;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		vetoEvent? (): void;
	}
	/** 
	 * [Ext.grid.feature.Summary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Summary.html)
	 * This feature is used to place a summary row at the bottom of the grid. If using a grouping,
	 * see [Ext.grid.feature.GroupingSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupingSummary.html). There are 2 aspects to calculating the summaries,
	 * calculation and rendering.
	 * 
	 * ## Calculation
	 * 
	 * The summary value needs to be calculated for each column in the grid. This is controlled
	 * by the summaryType option specified on the column. There are several built in summary types,
	 * which can be specified as a string on the column configuration. These call underlying methods
	 * on the store:
	 * 
	 * - [count](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-count)
	 * - [sum](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-sum)
	 * - [min](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-min)
	 * - [max](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-max)
	 * - [average](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-average)
	 * 
	 * Alternatively, the summaryType can be a function definition. If this is the case,
	 * the function is called with an array of records to calculate the summary value.
	 * 
	 * ## Rendering
	 * 
	 * Similar to a column, the summary also supports a summaryRenderer function. This
	 * summaryRenderer is called before displaying a value. The function is optional, if
	 * not specified the default calculated value is shown. The summaryRenderer is called with:
	 * 
	 * - value {Object} - The calculated value.
	 * - summaryData {Object} - Contains all raw summary values for the row.
	 * - field {String} - The name of the field we are calculating
	 * - metaData {Object} - A collection of metadata about the current cell; can be used or modified by the renderer.
	 * 
	 * ## Example Usage
	 * 
	 *    Ext.define('TestResult', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['student', {
	 *            name: 'mark',
	 *            type: 'int'
	 *        }]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 400,
	 *        height: 200,
	 *        title: 'Summary Test',
	 *        style: 'padding: 20px',
	 *        renderTo: document.body,
	 *        features: [{
	 *            ftype: 'summary'
	 *        }],
	 *        store: {
	 *            model: 'TestResult',
	 *            data: [{
	 *                student: 'Student 1',
	 *                mark: 84
	 *            },{
	 *                student: 'Student 2',
	 *                mark: 72
	 *            },{
	 *                student: 'Student 3',
	 *                mark: 96
	 *            },{
	 *                student: 'Student 4',
	 *                mark: 68
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'student',
	 *            text: 'Name',
	 *            summaryType: 'count',
	 *            summaryRenderer: function(value, summaryData, dataIndex) {
	 *                return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
	 *            }
	 *        }, {
	 *            dataIndex: 'mark',
	 *            text: 'Mark',
	 *            summaryType: 'average'
	 *        }]
	 *    });
	 * 
	 */
	class Summary extends Ext.grid.feature.AbstractSummary {
		/** 
		 * turn off feature events.
		 * @property
		 * @public (property)
		 * @default false
		 * @type {boolean}
		 */
		hasFeatureEvent?: boolean;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
		 * for a detailed comparison
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            alert(this.self.speciesName); // dependent on 'this'
		 *        },
		 *    
		 *        clone: function() {
		 *            return new this.self();
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *        statics: {
		 *            speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                     // alerts 'Cat'
		 *    var snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'
		 * 
		 * @property
		 * @protected (property)
		 * @default Ext.Base
		 * @type {Ext.grid.feature.Summary.Statics}
		 */
		self?: Ext.grid.feature.Summary.Statics | Ext.grid.feature.AbstractSummary.Statics | Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics;
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                               members    The members to add to this class.
		 * @param   {boolean}                                                                                                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Summary;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.AbstractSummary;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                               members
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.feature.Summary;
		static addStatics? (members: object): typeof Ext.grid.feature.AbstractSummary;
		static addStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addStatics? (members: object): typeof Ext.util.Observable;
		static addStatics? (members: object): typeof Ext.mixin.Observable;
		static addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		static create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		static createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		static getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		static override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		static addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                               members
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.Summary;
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.AbstractSummary;
		static addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		static addInheritableStatics? (members: object): typeof Ext.util.Observable;
		static addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                               name
		 * @param   {object}                                                                                                                               member
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.feature.Summary;
		static addMember? (name: object, member: object): typeof Ext.grid.feature.AbstractSummary;
		static addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		static addMember? (name: object, member: object): typeof Ext.util.Observable;
		static addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		static addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		static borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		static extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		static getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		static mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                               fn
		 * @param   {object}                                                                                                                               scope
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Summary;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.AbstractSummary;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		static onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-onBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addBeforeListener? (): void;
		/** 
		 * The addManagedListener method is used when some object (call it "A") is listening
		 * to an event on another observable object ("B") and you want to remove that listener
		 * from "B" when "A" is destroyed. This is not an issue when "B" is destroyed because
		 * all of its listeners will be removed at that time.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Foo', {
		 *        extend: 'Ext.Component',
		 *    
		 *        initComponent: function () {
		 *            this.addManagedListener(MyApp.SomeGlobalSharedMenu, 'show', this.doSomething);
		 *            this.callParent();
		 *        }
		 *    });
		 * 
		 * As you can see, when an instance of Foo is destroyed, it ensures that the 'show'
		 * listener on the menu (`MyApp.SomeGlobalSharedMenu`) is also removed.
		 * 
		 * As of version 5.1 it is no longer necessary to use this method in most cases because
		 * listeners are automatically managed if the scope object provided to
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) is an Observable instance.
		 * However, if the observable instance and scope are not the same object you
		 * still need to use `mon` or `addManagedListener` if you want the listener to be
		 * managed.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		addManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Removes all listeners for this object including the managed listeners
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearListeners? (): void;
		/** 
		 * Removes all managed listeners for this object.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearManagedListeners? (): void;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Disables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Enables the feature.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		enable? (): void;
		/** 
		 * Enables events fired by this Observable to bubble up an owner hierarchy by calling `this.getBubbleTarget()` if
		 * present. There is no implementation in the Observable base class.
		 * 
		 * This is commonly used by Ext.Components to bubble events to owner Containers.
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) returns the
		 * Component's immediate owner. But if a known target is required, this can be overridden to access the
		 * required target more quickly.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Ext.overrides.form.field.Base', {
		 *        override: 'Ext.form.field.Base',
		 *    
		 *        //  Add functionality to Field's initComponent to enable the change event to bubble
		 *        initComponent: function () {
		 *            this.callParent();
		 *            this.enableBubble('change');
		 *        }
		 *    });
		 *    
		 *    var myForm = Ext.create('Ext.form.Panel', {
		 *        title: 'User Details',
		 *        items: [{
		 *            ...
		 *        }],
		 *        listeners: {
		 *            change: function() {
		 *                // Title goes red if form has been modified.
		 *                myForm.header.setStyle('color', 'red');
		 *            }
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {string|string[]} eventNames The event name to bubble, or an Array of event names.
		 * @returns {void}                       
		 */
		enableBubble? (eventNames: string | string[]): void;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)), but before any other
		 * handlers are fired.  This gives the "before" handlers an opportunity to
		 * cancel the event by returning `false`, and prevent the action function from
		 * being called.
		 * 
		 * The action can also be configured to run after normal handlers, but before any "after"
		 * handlers (as specified using the `order` event option) by passing `'after'`
		 * as the `order` parameter.  This configuration gives any event handlers except
		 * for "after" handlers the opportunity to cancel the event and prevent the action
		 * function from being called.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {any[]}    args      Arguments to pass to handlers and to the action function.
		 * @param   {Function} fn        The action function.
		 * @param   {object}   [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {object}   [options]
		 * Event options for the action function.  Accepts any
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}    eventName The name of the event to fire.
		 * @param   {...object} args      Variable number of parameters are passed to handlers.
		 * @returns {boolean}             returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string, ...args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameter list.
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {object[]} args      An array of parameters which are passed to handlers.
		 * @returns {boolean}            returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEventArgs? (eventName: string, args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * Evented Actions will automatically dispatch a 'before' event passing. This event will
		 * be given a special controller that allows for pausing/resuming of the event flow.
		 * 
		 * By pausing the controller the updater and events will not run until resumed. Pausing,
		 * however, will not stop the processing of any other before events.
		 * @method
		 * @public (method)
		 * @param   {string}          eventName The name of the event to fire.
		 * @param   {any[]}           args      Arguments to pass to handlers and to the action function.
		 * @param   {Function|string} fn        The action function.
		 * @param   {object}          [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {any[]|boolean}   [fnArgs]
		 * Optional arguments for the action `fn`. If not
		 * given, the normal `args` will be used to call `fn`. If `false` is passed, the
		 * `args` are used but if the first argument is this instance it will be removed
		 * from the args passed to the action function.
		 * @returns {void}                      
		 */
		fireEventedAction? (eventName: string, args: any[], fn: ExtGlobalFunction | string, scope?: object, fnArgs?: any[] | boolean): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Abstract method to be overriden when a feature should add additional
		 * arguments to its event signature. By default the event will fire:
		 * 
		 * - view - The underlying [Ext.view.Table](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)
		 * - featureTarget - The matched element by the defined [eventSelector](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#property-eventSelector)
		 * 
		 * The method must also return the eventName as the first index of the array
		 * to be passed to fireEvent.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} eventName
		 * @param   {object} view
		 * @param   {object} featureTarget
		 * @param   {object} e
		 * @returns {void}                 
		 */
		getFireEventArgs? (eventName: object, view: object, featureTarget: object, e: object): void;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-addManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		mon? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		mun? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Appends an after-event handler.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Appends a before-event handler.  Returning `false` from the handler will stop the event.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Relays selected events from the specified Observable as if the events were fired by `this`.
		 * 
		 * For example if you are extending Grid, you might decide to forward some events from store.
		 * So you can do this inside your initComponent:
		 * 
		 *    this.relayEvents(this.getStore(), ['load']);
		 * 
		 * The grid instance will then have an observable 'load' event which will be passed
		 * the parameters of the store's load event and any function fired with the grid's
		 * load event would have access to the grid using the this keyword (unless the event
		 * is handled by a controller's control/listen event listener in which case 'this'
		 * will be the controller rather than the grid).
		 * @method
		 * @public (method)
		 * @param   {object}          origin   The Observable whose events this object is to relay.
		 * @param   {string[]|object} events
		 * Array of event names to relay or an Object with key/value
		 * pairs translating to ActualEventName/NewEventName respectively. For example:
		 *     this.relayEvents(this, {add:'push', remove:'pop'});
		 * 
		 * Would now redispatch the add event of this as a push event and the remove event as a pop event.
		 * @param   {string}          [prefix]
		 * A common prefix to prepend to the event names. For example:
		 * 
		 *    this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Now the grid will forward 'load' and 'clear' events of store as 'storeload' and 'storeclear'.
		 * @returns {object}          
		 * A `Destroyable` object. An object which implements the `destroy` method which, when destroyed, removes all relayers. For example:
		 * 
		 *    this.storeRelayers = this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Can be undone by calling
		 * 
		 *    Ext.destroy(this.storeRelayers);
		 * 
		 * or
		 *     this.store.relayers.destroy();
		 */
		relayEvents? (origin: object, events: string[] | object, prefix?: string): object;
		/** 
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-unBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeBeforeListener? (): void;
		/** 
		 * Removes an event handler.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		removeListener? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-mon) method.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		removeManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeEvent? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                                                                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                                                                               [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Summary;
		setConfig? (name: string | object, value?: object): Ext.grid.feature.AbstractSummary;
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Feature;
		setConfig? (name: string | object, value?: object): Ext.util.Observable;
		setConfig? (name: string | object, value?: object): Ext.mixin.Observable;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendEvent? (): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Toggle whether or not to show the summary row.
		 * @method
		 * @public (method)
		 * @param   {object} visible
		 * @param   {object} fromLockingPartner
		 * @returns {void}                      
		 */
		toggleSummaryRow? (visible: object, fromLockingPartner: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.feature.AbstractSummary.toggleSummaryRow](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.AbstractSummary.html#method-toggleSummaryRow).
		 * Toggle whether or not to show the summary row.
		 * @method
		 * @public (method)
		 * @param   {boolean} visible True to show the summary row
		 * @returns {void}            
		 */
		toggleSummaryRow? (visible: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		un? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * Listen for store updates. Eg, from an Editor.
		 * @method
		 * @protected (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		init? (grid: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.feature.AbstractSummary.init](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.AbstractSummary.html#method-init).
		 * Listen for store updates. Eg, from an Editor.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		init? (): void;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                                                                                                                               config
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.feature.Summary;
		initConfig? (config: object): Ext.grid.feature.AbstractSummary;
		initConfig? (config: object): Ext.grid.feature.Feature;
		initConfig? (config: object): Ext.util.Observable;
		initConfig? (config: object): Ext.mixin.Observable;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Gets the default scope for firing late bound events (string names with
		 * no scope attached) at runtime.
		 * @method
		 * @protected (method)
		 * @param   {object} [defaultScope] The default scope to return if none is found.
		 * @returns {object}                The default event scope
		 */
		resolveListenerScope? (defaultScope?: object): object;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.Summary.Statics|Ext.grid.feature.AbstractSummary.Statics|Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.feature.Summary.Statics;
		statics? (): Ext.grid.feature.AbstractSummary.Statics;
		statics? (): Ext.grid.feature.Feature.Statics;
		statics? (): Ext.util.Observable.Statics;
		statics? (): Ext.mixin.Observable.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * Adds declarative listeners as nested arrays of listener objects.
		 * @method
		 * @private (method)
		 * @param   {any[]}   listeners
		 * @returns {boolean}           `true` if any listeners were added
		 */
		_addDeclaredListeners? (listeners: any[]): boolean;
		/** 
		 * This method applies a versioned, deprecation declaration to this class. This
		 * is typically called by the `deprecated` config.
		 * @method
		 * @private (method)
		 * @param   {object} deprecations
		 * @returns {void}                
		 */
		addDeprecations? (deprecations: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @param   {object} store
		 * @returns {void}         
		 */
		bindStore? (grid: object, store: object): void;
		/** 
		 * @mixed
		 * @private (method+property)
		 * @param   {object} o
		 * @param   {object} fn
		 * @param   {object} scope
		 * @returns {void}         
		 * @type {object}
		 */
		captureArgs?: ((o: object, fn: object, scope: object) => void) | object | any;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clone? (): void;
		/** 
		 * Creates an event handling function which re-fires the event from this object as the passed event name.
		 * @method
		 * @private (method)
		 * @param   {string}   newName    The name under which to re-fire the passed parameters.
		 * @param   {any[]}    [beginEnd] The caller can specify on which indices to slice.
		 * @returns {Function}            
		 */
		createRelayer? (newName: string, beginEnd?: any[]): ExtGlobalFunction;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} column
		 * @param   {object} record
		 * @returns {void}          
		 */
		createRenderer? (column: object, record: object): void;
		/** 
		 * Continue to fire event.
		 * @method
		 * @private (method)
		 * @param   {string}  eventName
		 * @param   {any[]}   args
		 * @param   {boolean} bubbles
		 * @returns {void}              
		 */
		doFireEvent? (eventName: string, args: any[], bubbles: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} groupField
		 * @returns {void}              
		 */
		generateSummaryData? (groupField: object): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getRawData? (): void;
		/** 
		 * Get the summary data for a field.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.Store}       store The store to get the data from
		 * @param   {Function|string}      type
		 * The type of aggregation. If a function is specified it will
		 * be passed to the stores aggregate function.
		 * @param   {string}               field The field to aggregate on
		 * @param   {boolean}              group True to aggregate in grouped mode
		 * @returns {number|string|object} 
		 * See the return type for the store functions.
		 * if the group parameter is `true` An object is returned with a property named for each group who's
		 * value is the summary value.
		 */
		getSummary? (store: Ext.data.Store, type: ExtGlobalFunction | string, field: string, group: boolean): number | string | object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} data
		 * @returns {void}        
		 */
		onReaderRawData? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} summaryRecord
		 * @param   {object} contextValues
		 * @param   {object} out
		 * @returns {void}                 
		 */
		outputSummaryRecord? (summaryRecord: object, contextValues: object, out: object): void;
		/** 
		 * Prepares a given class for observable instances. This method is called when a
		 * class derives from this class or uses this class as a mixin.
		 * @method
		 * @private (method)
		 * @param   {Function}            T     The class constructor to prepare.
		 * @param   {Ext.util.Observable} mixin The mixin if being used as a mixin.
		 * @param   {object}              data  The raw class creation data if this is an extend.
		 * @returns {void}                      
		 */
		prepareClass? (T: ExtGlobalFunction, mixin: Ext.util.Observable, data: object): void;
		/** 
		 * Remove a single managed listener item
		 * @method
		 * @private (method)
		 * @param   {boolean} isClear         True if this is being called during a clear
		 * @param   {object}  managedListener
		 * The managed listener item
		 * See removeManagedListener for other args
		 * @returns {void}                    
		 */
		removeManagedListenerItem? (isClear: boolean, managedListener: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @param   {object} colId
		 * @param   {object} summaryValue
		 * @param   {object} groupName
		 * @returns {void}                
		 */
		setSummaryData? (record: object, colId: object, summaryValue: object, groupName: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                                                                             names The names of the linked objects to destroy.
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.feature.Summary;
		unlink? (names: string[]): Ext.grid.feature.AbstractSummary;
		unlink? (names: string[]): Ext.grid.feature.Feature;
		unlink? (names: string[]): Ext.util.Observable;
		unlink? (names: string[]): Ext.mixin.Observable;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} record
		 * @param   {object} row
		 * @param   {object} rowIndex
		 * @param   {object} e
		 * @returns {void}            
		 */
		vetoEvent? (record: object, row: object, rowIndex: object, e: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.feature.Feature.vetoEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#method-vetoEvent).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		vetoEvent? (): void;
	}
}
declare namespace Ext.grid.feature.AbstractSummary {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.feature.AbstractSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.AbstractSummary.html)
	 * A small abstract class that contains the shared behaviour for any summary
	 * calculations to be used in the grid.
	 */
	interface Def extends Ext.grid.feature.AbstractSummary {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {Ext.grid.feature.AbstractSummary.Cfg}
		 */
		config?: Ext.grid.feature.AbstractSummary.Cfg;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * The `privates` config is a list of methods intended to be used internally by the
		 * framework.  Methods are placed in a `privates` block to prevent developers from
		 * accidentally overriding framework methods in custom classes.
		 * 
		 *    Ext.define('Computer', {
		 *        privates: {
		 *            runFactory: function(brand) {
		 *                // internal only processing of brand passed to factory
		 *                this.factory(brand);
		 *            }
		 *        },
		 *    
		 *        factory: function (brand) {}
		 *    });
		 * 
		 * In order to override a method from a `privates` block, the overridden method must
		 * also be placed in a `privates` block within the override class.
		 * 
		 *    Ext.define('Override.Computer', {
		 *        override: 'Computer',
		 *        privates: {
		 *            runFactory: function() {
		 *                // overriding logic
		 *            }
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
		 * 
		 * This property provides a shorter alternative to creating objects than using a full
		 * class name. Using `xtype` is the most common way to define component instances,
		 * especially in a container. For example, the items in a form containing text fields
		 * could be created explicitly like so:
		 * 
		 *     items: [
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Foo'
		 *         }),
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Bar'
		 *         }),
		 *         Ext.create('Ext.form.field.Number', {
		 *             fieldLabel: 'Num'
		 *         })
		 *     ]
		 * 
		 * But by using `xtype`, the above becomes:
		 * 
		 *     items: [
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Foo'
		 *         },
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Bar'
		 *         },
		 *         {
		 *             xtype: 'numberfield',
		 *             fieldLabel: 'Num'
		 *         }
		 *     ]
		 * 
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
		 * is another way to specify the `xtype` for all items that don't have an explicit `xtype`:
		 * 
		 *     defaultType: 'textfield',
		 *     items: [
		 *         { fieldLabel: 'Foo' },
		 *         { fieldLabel: 'Bar' },
		 *         { fieldLabel: 'Num', xtype: 'numberfield' }
		 *     ]
		 * 
		 * Each member of the `items` array is now just a "configuration object". These objects
		 * are used to create and configure component instances. A configuration object can be
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
		 * 
		 *     var text1 = Ext.create('Ext.form.field.Text', {
		 *         fieldLabel: 'Foo'
		 *     });
		 *    
		 *     // or alternatively:
		 *    
		 *     var text1 = Ext.widget({
		 *         xtype: 'textfield',
		 *         fieldLabel: 'Foo'
		 *     });
		 * 
		 * This conversion of configuration objects into instantiated components is done when
		 * a container is created as part of its {Ext.container.AbstractContainer#initComponent}
		 * process. As part of the same process, the `items` array is converted from its raw
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
		 * 
		 *    Ext.define('MyApp.PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Care should be taken when naming an `xtype` in a custom component because there is
		 * a single, shared scope for all xtypes. Third part components should consider using
		 * a prefix to avoid collisions.
		 * 
		 *    Ext.define('Foo.form.CoolButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'ux-coolbutton',
		 *        text: 'Cool!'
		 *    });
		 * 
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.grid.feature.AbstractSummary.Statics|Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.feature.AbstractSummary.Statics}
		 */
		statics?: (() => Ext.grid.feature.AbstractSummary.Statics | Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics) | Ext.grid.feature.AbstractSummary.Statics | any;
	}
}
declare namespace Ext.grid.feature.Feature {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.feature.Feature](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html)
	 * A feature is a type of plugin that is specific to the [Ext.grid.Panel](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html). It provides several
	 * hooks that allows the developer to inject additional functionality at certain points throughout the
	 * grid creation cycle. This class provides the base template methods that are available to the developer,
	 * it should be extended.
	 * 
	 * There are several built in features that extend this class, for example:
	 * 
	 * - [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html) - Shows grid rows in groups as specified by the [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
	 * - [Ext.grid.feature.RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html) - Adds a body section for each grid row that can contain markup.
	 * - [Ext.grid.feature.Summary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Summary.html) - Adds a summary row at the bottom of the grid with aggregate totals for a column.
	 * 
	 * ## Using Features
	 * 
	 * A feature is added to the grid by specifying it an array of features in the configuration:
	 * 
	 *    var groupingFeature = Ext.create('Ext.grid.feature.Grouping');
	 *    Ext.create('Ext.grid.Panel', {
	 *        // other options
	 *        features: [groupingFeature]
	 *    });
	 * 
	 * ## Writing Features
	 * 
	 * A Feature may add new DOM structure within the structure of a grid.
	 * 
	 * A grid is essentially a `&lt;table&gt;` element. A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) instance uses four [XTemplates](https://docs.sencha.com/extjs/6.0.1/classic/Ext.XTemplate.html)
	 * to render the grid, `tpl`, `itemTpl`, `rowTpl`, `cellTpl`.
	 * 
	 * A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `tpl` to emit the item encapsulating HTML tags into its output stream.
	 * To render the rows, it invokes [Ext.view.Table.renderRows](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-renderRows) passing the `rows` member of its data object and the `columns` member of its data object.
	 * 
	 * The `tpl`'s data object Looks like this:
	 * 
	 *      {
	 *          view: owningTableView,
	 *          rows: recordsToRender,
	 *          viewStartIndex: indexOfFirstRecordInStore,
	 *          tableStyle: styleString
	 *      }
	 * 
	 * - A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `rowTpl` to emit a `&lt;tr&gt;` HTML tag to its output stream. To render cells,
	 *   it invokes [Ext.view.Table.renderCell](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-renderCell) passing the `rows` member of its data object.
	 * 
	 *  
	 *  
	 *  
	 *  
	 *  The `itemTpl` and `rowTpl`'s data object looks like this:
	 * 
	 *    {
	 *        view:        owningTableView,
	 *        record:      recordToRender,
	 *        recordIndex: indexOfRecordInStore,
	 *        rowIndex:    indexOfRowInView,
	 *        columns:     arrayOfColumnDefinitions,
	 *        itemClasses: arrayOfClassNames, // For outermost row in case of wrapping
	 *        rowClasses:  arrayOfClassNames,  // For internal data bearing row in case of wrapping
	 *        rowStyle:    styleString
	 *    }
	 * 
	 * - A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `cellTpl` to emit a `&lt;td&gt;` HTML tag to its output stream.
	 * 
	 * The `cellTpl's` data object looks like this:
	 * 
	 *    {
	 *        record: recordToRender
	 *        column: columnToRender;
	 *        recordIndex: indexOfRecordInStore,
	 *        rowIndex:    indexOfRowInView,
	 *        columnIndex: columnIndex,
	 *        align: columnAlign,
	 *        tdCls: classForCell
	 *    }
	 * 
	 * A Feature may inject its own tpl or rowTpl or cellTpl into the [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)'s rendering by
	 * calling [Ext.view.Table.addTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addTpl) or [Ext.view.Table.addRowTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addRowTpl) or [Ext.view.Table.addCellTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addCellTpl).
	 * 
	 * The passed XTemplate is added _upstream_ of the default template for the table element in a link list of XTemplates which contribute
	 * to the element's HTML. It may emit appropriate HTML strings into the output stream _around_ a call to
	 * 
	 *    this.nextTpl.apply(values, out, parent);
	 * 
	 * This passes the current value context, output stream and the parent value context to the next XTemplate in the list.
	 */
	interface Def extends Ext.grid.feature.Feature {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {Ext.grid.feature.Feature.Cfg}
		 */
		config?: Ext.grid.feature.Feature.Cfg;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * The `privates` config is a list of methods intended to be used internally by the
		 * framework.  Methods are placed in a `privates` block to prevent developers from
		 * accidentally overriding framework methods in custom classes.
		 * 
		 *    Ext.define('Computer', {
		 *        privates: {
		 *            runFactory: function(brand) {
		 *                // internal only processing of brand passed to factory
		 *                this.factory(brand);
		 *            }
		 *        },
		 *    
		 *        factory: function (brand) {}
		 *    });
		 * 
		 * In order to override a method from a `privates` block, the overridden method must
		 * also be placed in a `privates` block within the override class.
		 * 
		 *    Ext.define('Override.Computer', {
		 *        override: 'Computer',
		 *        privates: {
		 *            runFactory: function() {
		 *                // overriding logic
		 *            }
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
		 * 
		 * This property provides a shorter alternative to creating objects than using a full
		 * class name. Using `xtype` is the most common way to define component instances,
		 * especially in a container. For example, the items in a form containing text fields
		 * could be created explicitly like so:
		 * 
		 *     items: [
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Foo'
		 *         }),
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Bar'
		 *         }),
		 *         Ext.create('Ext.form.field.Number', {
		 *             fieldLabel: 'Num'
		 *         })
		 *     ]
		 * 
		 * But by using `xtype`, the above becomes:
		 * 
		 *     items: [
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Foo'
		 *         },
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Bar'
		 *         },
		 *         {
		 *             xtype: 'numberfield',
		 *             fieldLabel: 'Num'
		 *         }
		 *     ]
		 * 
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
		 * is another way to specify the `xtype` for all items that don't have an explicit `xtype`:
		 * 
		 *     defaultType: 'textfield',
		 *     items: [
		 *         { fieldLabel: 'Foo' },
		 *         { fieldLabel: 'Bar' },
		 *         { fieldLabel: 'Num', xtype: 'numberfield' }
		 *     ]
		 * 
		 * Each member of the `items` array is now just a "configuration object". These objects
		 * are used to create and configure component instances. A configuration object can be
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
		 * 
		 *     var text1 = Ext.create('Ext.form.field.Text', {
		 *         fieldLabel: 'Foo'
		 *     });
		 *    
		 *     // or alternatively:
		 *    
		 *     var text1 = Ext.widget({
		 *         xtype: 'textfield',
		 *         fieldLabel: 'Foo'
		 *     });
		 * 
		 * This conversion of configuration objects into instantiated components is done when
		 * a container is created as part of its {Ext.container.AbstractContainer#initComponent}
		 * process. As part of the same process, the `items` array is converted from its raw
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
		 * 
		 *    Ext.define('MyApp.PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Care should be taken when naming an `xtype` in a custom component because there is
		 * a single, shared scope for all xtypes. Third part components should consider using
		 * a prefix to avoid collisions.
		 * 
		 *    Ext.define('Foo.form.CoolButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'ux-coolbutton',
		 *        text: 'Cool!'
		 *    });
		 * 
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.feature.Feature.Statics}
		 */
		statics?: (() => Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics) | Ext.grid.feature.Feature.Statics | any;
	}
}
declare namespace Ext.grid.feature.Grouping {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html)
	 * This feature allows to display the grid rows aggregated into groups as specified by the [grouper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-grouper)
	 * 
	 * underneath. The groups can also be expanded and collapsed.
	 * 
	 * ## Extra Events
	 * 
	 * This feature adds several extra events that will be fired on the grid to interact with the groups:
	 * 
	 * - [groupclick](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupclick)
	 * - [groupdblclick](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupdblclick)
	 * - [groupcontextmenu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupcontextmenu)
	 * - [groupexpand](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupexpand)
	 * - [groupcollapse](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupcollapse)
	 * 
	 * ## Menu Augmentation
	 * 
	 * This feature adds extra options to the grid column menu to provide the user with functionality to modify the grouping.
	 * This can be disabled by setting the [enableGroupingMenu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-enableGroupingMenu) option. The option to disallow grouping from being turned off
	 * by the user is [enableNoGroups](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-enableNoGroups).
	 * 
	 * ## Controlling Group Text
	 * 
	 * The [groupHeaderTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-groupHeaderTpl) is used to control the rendered title for each group. It can modified to customized
	 * the default display.
	 * 
	 * ## Groupers
	 * 
	 * By default, this feature expects that the data field that is mapped to by the
	 * [Ext.data.AbstractStore.groupField](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.AbstractStore.html#cfg-groupField) config is a simple data type such as a
	 * String or a Boolean. However, if you intend to group by a data field that is a
	 * complex data type such as an Object or Array, it is necessary to define one or more
	 * [groupers](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Grouper.html) on the feature that it can then use to lookup
	 * internal group information when grouping by different fields.
	 * 
	 *    var feature = Ext.create('Ext.grid.feature.Grouping', {
	 *        startCollapsed: true,
	 *        groupers: [{
	 *            property: 'asset',
	 *            groupFn: function (val) {
	 *                return val.data.name;
	 *            }
	 *        }]
	 *    });
	 * 
	 * ## Example Usage
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        fields: ['name', 'seniority', 'department'],
	 *        groupField: 'department',
	 *        data: [
	 *            { name: 'Michael Scott', seniority: 7, department: 'Management' },
	 *            { name: 'Dwight Schrute', seniority: 2, department: 'Sales' },
	 *            { name: 'Jim Halpert', seniority: 3, department: 'Sales' },
	 *            { name: 'Kevin Malone', seniority: 4, department: 'Accounting' },
	 *            { name: 'Angela Martin', seniority: 5, department: 'Accounting' }
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        title: 'Employees',
	 *        store: store,
	 *        columns: [
	 *            { text: 'Name', dataIndex: 'name' },
	 *            { text: 'Seniority', dataIndex: 'seniority' }
	 *        ],
	 *        features: [{ftype:'grouping'}],
	 *        width: 200,
	 *        height: 275,
	 *        renderTo: Ext.getBody()
	 *    });
	 * 
	 * **Note:** To use grouping with a grid that has [locked columns](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.column.Column.html#cfg-locked), you need to supply
	 * the grouping feature as a config object - so the grid can create two instances of the grouping feature.
	 */
	interface Def extends Ext.grid.feature.Grouping {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {Ext.grid.feature.Grouping.Cfg}
		 */
		config?: Ext.grid.feature.Grouping.Cfg;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
		 * 
		 * This property provides a shorter alternative to creating objects than using a full
		 * class name. Using `xtype` is the most common way to define component instances,
		 * especially in a container. For example, the items in a form containing text fields
		 * could be created explicitly like so:
		 * 
		 *     items: [
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Foo'
		 *         }),
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Bar'
		 *         }),
		 *         Ext.create('Ext.form.field.Number', {
		 *             fieldLabel: 'Num'
		 *         })
		 *     ]
		 * 
		 * But by using `xtype`, the above becomes:
		 * 
		 *     items: [
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Foo'
		 *         },
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Bar'
		 *         },
		 *         {
		 *             xtype: 'numberfield',
		 *             fieldLabel: 'Num'
		 *         }
		 *     ]
		 * 
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
		 * is another way to specify the `xtype` for all items that don't have an explicit `xtype`:
		 * 
		 *     defaultType: 'textfield',
		 *     items: [
		 *         { fieldLabel: 'Foo' },
		 *         { fieldLabel: 'Bar' },
		 *         { fieldLabel: 'Num', xtype: 'numberfield' }
		 *     ]
		 * 
		 * Each member of the `items` array is now just a "configuration object". These objects
		 * are used to create and configure component instances. A configuration object can be
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
		 * 
		 *     var text1 = Ext.create('Ext.form.field.Text', {
		 *         fieldLabel: 'Foo'
		 *     });
		 *    
		 *     // or alternatively:
		 *    
		 *     var text1 = Ext.widget({
		 *         xtype: 'textfield',
		 *         fieldLabel: 'Foo'
		 *     });
		 * 
		 * This conversion of configuration objects into instantiated components is done when
		 * a container is created as part of its {Ext.container.AbstractContainer#initComponent}
		 * process. As part of the same process, the `items` array is converted from its raw
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
		 * 
		 *    Ext.define('MyApp.PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Care should be taken when naming an `xtype` in a custom component because there is
		 * a single, shared scope for all xtypes. Third part components should consider using
		 * a prefix to avoid collisions.
		 * 
		 *    Ext.define('Foo.form.CoolButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'ux-coolbutton',
		 *        text: 'Cool!'
		 *    });
		 * 
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.grid.feature.Grouping.Statics|Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.feature.Grouping.Statics}
		 */
		statics?: (() => Ext.grid.feature.Grouping.Statics | Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics) | Ext.grid.feature.Grouping.Statics | any;
	}
}
declare namespace Ext.grid.feature.GroupingSummary {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.feature.GroupingSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupingSummary.html)
	 * This feature adds an aggregate summary row at the bottom of each group that is provided
	 * by the [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html) feature. There are two aspects to the summary:
	 * 
	 * ## Calculation
	 * 
	 * The summary value needs to be calculated for each column in the grid. This is controlled
	 * by the summaryType option specified on the column. There are several built in summary types,
	 * which can be specified as a string on the column configuration. These call underlying methods
	 * on the store:
	 * 
	 * - [count](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-count)
	 * - [sum](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-sum)
	 * - [min](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-min)
	 * - [max](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-max)
	 * - [average](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-average)
	 * 
	 * Alternatively, the summaryType can be a function definition. If this is the case,
	 * the function is called with two parameters: an array of records, and an array of field values
	 * to calculate the summary value.
	 * 
	 * ## Rendering
	 * 
	 * Similar to a column, the summary also supports a summaryRenderer function. This
	 * summaryRenderer is called before displaying a value. The function is optional, if
	 * not specified the default calculated value is shown. The summaryRenderer is called with:
	 * 
	 * - value {Object} - The calculated value.
	 * - summaryData {Object} - Contains all raw summary values for the row.
	 * - field {String} - The name of the field we are calculating
	 * - metaData {Object} - A collection of metadata about the current cell; can be used or modified by the renderer.
	 * 
	 * ## Example Usage
	 * 
	 *    Ext.define('TestResult', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['student', 'subject', {
	 *            name: 'mark',
	 *            type: 'int'
	 *        }]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 200,
	 *        height: 240,
	 *        renderTo: document.body,
	 *        features: [{
	 *            groupHeaderTpl: 'Subject: {name}',
	 *            ftype: 'groupingsummary'
	 *        }],
	 *        store: {
	 *            model: 'TestResult',
	 *            groupField: 'subject',
	 *            data: [{
	 *                student: 'Student 1',
	 *                subject: 'Math',
	 *                mark: 84
	 *            },{
	 *                student: 'Student 1',
	 *                subject: 'Science',
	 *                mark: 72
	 *            },{
	 *                student: 'Student 2',
	 *                subject: 'Math',
	 *                mark: 96
	 *            },{
	 *                student: 'Student 2',
	 *                subject: 'Science',
	 *                mark: 68
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'student',
	 *            text: 'Name',
	 *            summaryType: 'count',
	 *            summaryRenderer: function(value){
	 *                return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
	 *            }
	 *        }, {
	 *            dataIndex: 'mark',
	 *            text: 'Mark',
	 *            summaryType: 'average'
	 *        }]
	 *    });
	 * 
	 */
	interface Def extends Ext.grid.feature.GroupingSummary {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {Ext.grid.feature.GroupingSummary.Cfg}
		 */
		config?: Ext.grid.feature.GroupingSummary.Cfg;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
		 * 
		 * This property provides a shorter alternative to creating objects than using a full
		 * class name. Using `xtype` is the most common way to define component instances,
		 * especially in a container. For example, the items in a form containing text fields
		 * could be created explicitly like so:
		 * 
		 *     items: [
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Foo'
		 *         }),
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Bar'
		 *         }),
		 *         Ext.create('Ext.form.field.Number', {
		 *             fieldLabel: 'Num'
		 *         })
		 *     ]
		 * 
		 * But by using `xtype`, the above becomes:
		 * 
		 *     items: [
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Foo'
		 *         },
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Bar'
		 *         },
		 *         {
		 *             xtype: 'numberfield',
		 *             fieldLabel: 'Num'
		 *         }
		 *     ]
		 * 
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
		 * is another way to specify the `xtype` for all items that don't have an explicit `xtype`:
		 * 
		 *     defaultType: 'textfield',
		 *     items: [
		 *         { fieldLabel: 'Foo' },
		 *         { fieldLabel: 'Bar' },
		 *         { fieldLabel: 'Num', xtype: 'numberfield' }
		 *     ]
		 * 
		 * Each member of the `items` array is now just a "configuration object". These objects
		 * are used to create and configure component instances. A configuration object can be
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
		 * 
		 *     var text1 = Ext.create('Ext.form.field.Text', {
		 *         fieldLabel: 'Foo'
		 *     });
		 *    
		 *     // or alternatively:
		 *    
		 *     var text1 = Ext.widget({
		 *         xtype: 'textfield',
		 *         fieldLabel: 'Foo'
		 *     });
		 * 
		 * This conversion of configuration objects into instantiated components is done when
		 * a container is created as part of its {Ext.container.AbstractContainer#initComponent}
		 * process. As part of the same process, the `items` array is converted from its raw
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
		 * 
		 *    Ext.define('MyApp.PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Care should be taken when naming an `xtype` in a custom component because there is
		 * a single, shared scope for all xtypes. Third part components should consider using
		 * a prefix to avoid collisions.
		 * 
		 *    Ext.define('Foo.form.CoolButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'ux-coolbutton',
		 *        text: 'Cool!'
		 *    });
		 * 
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.grid.feature.GroupingSummary.Statics|Ext.grid.feature.Grouping.Statics|Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.feature.GroupingSummary.Statics}
		 */
		statics?: (() => Ext.grid.feature.GroupingSummary.Statics | Ext.grid.feature.Grouping.Statics | Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics) | Ext.grid.feature.GroupingSummary.Statics | any;
	}
}
declare namespace Ext.grid.feature.RowBody {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.feature.RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html)
	 * The rowbody feature enhances the grid's markup to have an additional
	 * tr -> td -> div which spans the entire width of the original row.
	 * 
	 * This is useful to to associate additional information with a particular
	 * record in an Ext.grid.Grid.
	 * 
	 * Rowbodies are initially hidden unless you override [getAdditionalData](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html#method-getAdditionalData).
	 * 
	 * The events fired by RowBody are relayed to the owning
	 * [grid view](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) (and subsequently the owning grid).
	 * 
	 * # Example
	 * 
	 *    Ext.define('Animal', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['name', 'latin', 'desc', 'lifespan']
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 400,
	 *        height: 300,
	 *        renderTo: Ext.getBody(),
	 *        store: {
	 *            model: 'Animal',
	 *            data: [{
	 *                name: 'Tiger',
	 *                latin: 'Panthera tigris',
	 *                desc: 'The largest cat species, weighing up to 306 kg (670 lb).',
	 *                lifespan: '20 - 26 years (in captivity)'
	 *            }, {
	 *                name: 'Roman snail',
	 *                latin: 'Helix pomatia',
	 *                desc: 'A species of large, edible, air-breathing land snail.',
	 *                lifespan: '20 - 35 years'
	 *            }, {
	 *                name: 'Yellow-winged darter',
	 *                latin: 'Sympetrum flaveolum',
	 *                desc: 'A dragonfly found in Europe and mid and Northern China.',
	 *                lifespan: '4 - 6 weeks'
	 *            }, {
	 *                name: 'Superb Fairy-wren',
	 *                latin: 'Malurus cyaneus',
	 *                desc: 'Common and familiar across south-eastern Australia.',
	 *                lifespan: '5 - 6 years'
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'name',
	 *            text: 'Common name',
	 *            width: 125
	 *        }, {
	 *            dataIndex: 'latin',
	 *            text: 'Scientific name',
	 *            flex: 1
	 *        }],
	 *        features: [{
	 *            ftype: 'rowbody',
	 *            getAdditionalData: function (data, idx, record, orig) {
	 *                // Usually you would style the my-body-class in a CSS file
	 *                return {
	 *                    rowBody: '&lt;div style="padding: 1em"&gt;' + record.get("desc") + '&lt;/div&gt;',
	 *                    rowBodyCls: "my-body-class"
	 *                };
	 *            }
	 *        }],
	 *        listeners: {
	 *            rowbodyclick: function(view, rowEl, e, eOpts) {
	 *                var itemEl = Ext.get(rowEl).up(view.itemSelector),
	 *                    rec = view.getRecord(itemEl);
	 *    
	 *                Ext.Msg.alert(rec.get('name') + ' life span', rec.get('lifespan'));
	 *            }
	 *        }
	 *    });
	 * 
	 * # Cell Editing and Cell Selection Model
	 * 
	 * Note that if [cell editing](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.plugin.CellEditing.html) or the [cell selection model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.selection.CellModel.html) are going
	 * to be used, then the [RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html) feature, or [RowExpander](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.plugin.RowExpander.html) plugin MUST
	 * be used for intra-cell navigation to be correct.
	 */
	interface Def extends Ext.grid.feature.RowBody {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {Ext.grid.feature.RowBody.Cfg}
		 */
		config?: Ext.grid.feature.RowBody.Cfg;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * The `privates` config is a list of methods intended to be used internally by the
		 * framework.  Methods are placed in a `privates` block to prevent developers from
		 * accidentally overriding framework methods in custom classes.
		 * 
		 *    Ext.define('Computer', {
		 *        privates: {
		 *            runFactory: function(brand) {
		 *                // internal only processing of brand passed to factory
		 *                this.factory(brand);
		 *            }
		 *        },
		 *    
		 *        factory: function (brand) {}
		 *    });
		 * 
		 * In order to override a method from a `privates` block, the overridden method must
		 * also be placed in a `privates` block within the override class.
		 * 
		 *    Ext.define('Override.Computer', {
		 *        override: 'Computer',
		 *        privates: {
		 *            runFactory: function() {
		 *                // overriding logic
		 *            }
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
		 * 
		 * This property provides a shorter alternative to creating objects than using a full
		 * class name. Using `xtype` is the most common way to define component instances,
		 * especially in a container. For example, the items in a form containing text fields
		 * could be created explicitly like so:
		 * 
		 *     items: [
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Foo'
		 *         }),
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Bar'
		 *         }),
		 *         Ext.create('Ext.form.field.Number', {
		 *             fieldLabel: 'Num'
		 *         })
		 *     ]
		 * 
		 * But by using `xtype`, the above becomes:
		 * 
		 *     items: [
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Foo'
		 *         },
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Bar'
		 *         },
		 *         {
		 *             xtype: 'numberfield',
		 *             fieldLabel: 'Num'
		 *         }
		 *     ]
		 * 
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
		 * is another way to specify the `xtype` for all items that don't have an explicit `xtype`:
		 * 
		 *     defaultType: 'textfield',
		 *     items: [
		 *         { fieldLabel: 'Foo' },
		 *         { fieldLabel: 'Bar' },
		 *         { fieldLabel: 'Num', xtype: 'numberfield' }
		 *     ]
		 * 
		 * Each member of the `items` array is now just a "configuration object". These objects
		 * are used to create and configure component instances. A configuration object can be
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
		 * 
		 *     var text1 = Ext.create('Ext.form.field.Text', {
		 *         fieldLabel: 'Foo'
		 *     });
		 *    
		 *     // or alternatively:
		 *    
		 *     var text1 = Ext.widget({
		 *         xtype: 'textfield',
		 *         fieldLabel: 'Foo'
		 *     });
		 * 
		 * This conversion of configuration objects into instantiated components is done when
		 * a container is created as part of its {Ext.container.AbstractContainer#initComponent}
		 * process. As part of the same process, the `items` array is converted from its raw
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
		 * 
		 *    Ext.define('MyApp.PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Care should be taken when naming an `xtype` in a custom component because there is
		 * a single, shared scope for all xtypes. Third part components should consider using
		 * a prefix to avoid collisions.
		 * 
		 *    Ext.define('Foo.form.CoolButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'ux-coolbutton',
		 *        text: 'Cool!'
		 *    });
		 * 
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.grid.feature.RowBody.Statics|Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.feature.RowBody.Statics}
		 */
		statics?: (() => Ext.grid.feature.RowBody.Statics | Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics) | Ext.grid.feature.RowBody.Statics | any;
	}
}
declare namespace Ext.grid.feature.Summary {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.feature.Summary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Summary.html)
	 * This feature is used to place a summary row at the bottom of the grid. If using a grouping,
	 * see [Ext.grid.feature.GroupingSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupingSummary.html). There are 2 aspects to calculating the summaries,
	 * calculation and rendering.
	 * 
	 * ## Calculation
	 * 
	 * The summary value needs to be calculated for each column in the grid. This is controlled
	 * by the summaryType option specified on the column. There are several built in summary types,
	 * which can be specified as a string on the column configuration. These call underlying methods
	 * on the store:
	 * 
	 * - [count](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-count)
	 * - [sum](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-sum)
	 * - [min](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-min)
	 * - [max](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-max)
	 * - [average](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-average)
	 * 
	 * Alternatively, the summaryType can be a function definition. If this is the case,
	 * the function is called with an array of records to calculate the summary value.
	 * 
	 * ## Rendering
	 * 
	 * Similar to a column, the summary also supports a summaryRenderer function. This
	 * summaryRenderer is called before displaying a value. The function is optional, if
	 * not specified the default calculated value is shown. The summaryRenderer is called with:
	 * 
	 * - value {Object} - The calculated value.
	 * - summaryData {Object} - Contains all raw summary values for the row.
	 * - field {String} - The name of the field we are calculating
	 * - metaData {Object} - A collection of metadata about the current cell; can be used or modified by the renderer.
	 * 
	 * ## Example Usage
	 * 
	 *    Ext.define('TestResult', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['student', {
	 *            name: 'mark',
	 *            type: 'int'
	 *        }]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 400,
	 *        height: 200,
	 *        title: 'Summary Test',
	 *        style: 'padding: 20px',
	 *        renderTo: document.body,
	 *        features: [{
	 *            ftype: 'summary'
	 *        }],
	 *        store: {
	 *            model: 'TestResult',
	 *            data: [{
	 *                student: 'Student 1',
	 *                mark: 84
	 *            },{
	 *                student: 'Student 2',
	 *                mark: 72
	 *            },{
	 *                student: 'Student 3',
	 *                mark: 96
	 *            },{
	 *                student: 'Student 4',
	 *                mark: 68
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'student',
	 *            text: 'Name',
	 *            summaryType: 'count',
	 *            summaryRenderer: function(value, summaryData, dataIndex) {
	 *                return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
	 *            }
	 *        }, {
	 *            dataIndex: 'mark',
	 *            text: 'Mark',
	 *            summaryType: 'average'
	 *        }]
	 *    });
	 * 
	 */
	interface Def extends Ext.grid.feature.Summary {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {Ext.grid.feature.Summary.Cfg}
		 */
		config?: Ext.grid.feature.Summary.Cfg;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * The `privates` config is a list of methods intended to be used internally by the
		 * framework.  Methods are placed in a `privates` block to prevent developers from
		 * accidentally overriding framework methods in custom classes.
		 * 
		 *    Ext.define('Computer', {
		 *        privates: {
		 *            runFactory: function(brand) {
		 *                // internal only processing of brand passed to factory
		 *                this.factory(brand);
		 *            }
		 *        },
		 *    
		 *        factory: function (brand) {}
		 *    });
		 * 
		 * In order to override a method from a `privates` block, the overridden method must
		 * also be placed in a `privates` block within the override class.
		 * 
		 *    Ext.define('Override.Computer', {
		 *        override: 'Computer',
		 *        privates: {
		 *            runFactory: function() {
		 *                // overriding logic
		 *            }
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
		 * 
		 * This property provides a shorter alternative to creating objects than using a full
		 * class name. Using `xtype` is the most common way to define component instances,
		 * especially in a container. For example, the items in a form containing text fields
		 * could be created explicitly like so:
		 * 
		 *     items: [
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Foo'
		 *         }),
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Bar'
		 *         }),
		 *         Ext.create('Ext.form.field.Number', {
		 *             fieldLabel: 'Num'
		 *         })
		 *     ]
		 * 
		 * But by using `xtype`, the above becomes:
		 * 
		 *     items: [
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Foo'
		 *         },
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Bar'
		 *         },
		 *         {
		 *             xtype: 'numberfield',
		 *             fieldLabel: 'Num'
		 *         }
		 *     ]
		 * 
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
		 * is another way to specify the `xtype` for all items that don't have an explicit `xtype`:
		 * 
		 *     defaultType: 'textfield',
		 *     items: [
		 *         { fieldLabel: 'Foo' },
		 *         { fieldLabel: 'Bar' },
		 *         { fieldLabel: 'Num', xtype: 'numberfield' }
		 *     ]
		 * 
		 * Each member of the `items` array is now just a "configuration object". These objects
		 * are used to create and configure component instances. A configuration object can be
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
		 * 
		 *     var text1 = Ext.create('Ext.form.field.Text', {
		 *         fieldLabel: 'Foo'
		 *     });
		 *    
		 *     // or alternatively:
		 *    
		 *     var text1 = Ext.widget({
		 *         xtype: 'textfield',
		 *         fieldLabel: 'Foo'
		 *     });
		 * 
		 * This conversion of configuration objects into instantiated components is done when
		 * a container is created as part of its {Ext.container.AbstractContainer#initComponent}
		 * process. As part of the same process, the `items` array is converted from its raw
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
		 * 
		 *    Ext.define('MyApp.PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Care should be taken when naming an `xtype` in a custom component because there is
		 * a single, shared scope for all xtypes. Third part components should consider using
		 * a prefix to avoid collisions.
		 * 
		 *    Ext.define('Foo.form.CoolButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'ux-coolbutton',
		 *        text: 'Cool!'
		 *    });
		 * 
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.grid.feature.Summary.Statics|Ext.grid.feature.AbstractSummary.Statics|Ext.grid.feature.Feature.Statics|Ext.util.Observable.Statics|Ext.mixin.Observable.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.feature.Summary.Statics}
		 */
		statics?: (() => Ext.grid.feature.Summary.Statics | Ext.grid.feature.AbstractSummary.Statics | Ext.grid.feature.Feature.Statics | Ext.util.Observable.Statics | Ext.mixin.Observable.Statics | Ext.Base.Statics) | Ext.grid.feature.Summary.Statics | any;
	}
}
declare namespace Ext.grid.feature.AbstractSummary {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.feature.AbstractSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.AbstractSummary.html)
	 * A small abstract class that contains the shared behaviour for any summary
	 * calculations to be used in the grid.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                      members    The members to add to this class.
		 * @param   {boolean}                                                                                                     [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                     [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.AbstractSummary;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                      members
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.feature.AbstractSummary;
		addStatics? (members: object): typeof Ext.grid.feature.Feature;
		addStatics? (members: object): typeof Ext.util.Observable;
		addStatics? (members: object): typeof Ext.mixin.Observable;
		addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                      members
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.feature.AbstractSummary;
		addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		addInheritableStatics? (members: object): typeof Ext.util.Observable;
		addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                      name
		 * @param   {object}                                                                                                      member
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.feature.AbstractSummary;
		addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		addMember? (name: object, member: object): typeof Ext.util.Observable;
		addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                      fn
		 * @param   {object}                                                                                                      scope
		 * @returns {Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.AbstractSummary;
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		triggerExtended? (): void;
	}
}
declare namespace Ext.grid.feature.Feature {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.feature.Feature](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html)
	 * A feature is a type of plugin that is specific to the [Ext.grid.Panel](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html). It provides several
	 * hooks that allows the developer to inject additional functionality at certain points throughout the
	 * grid creation cycle. This class provides the base template methods that are available to the developer,
	 * it should be extended.
	 * 
	 * There are several built in features that extend this class, for example:
	 * 
	 * - [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html) - Shows grid rows in groups as specified by the [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
	 * - [Ext.grid.feature.RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html) - Adds a body section for each grid row that can contain markup.
	 * - [Ext.grid.feature.Summary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Summary.html) - Adds a summary row at the bottom of the grid with aggregate totals for a column.
	 * 
	 * ## Using Features
	 * 
	 * A feature is added to the grid by specifying it an array of features in the configuration:
	 * 
	 *    var groupingFeature = Ext.create('Ext.grid.feature.Grouping');
	 *    Ext.create('Ext.grid.Panel', {
	 *        // other options
	 *        features: [groupingFeature]
	 *    });
	 * 
	 * ## Writing Features
	 * 
	 * A Feature may add new DOM structure within the structure of a grid.
	 * 
	 * A grid is essentially a `&lt;table&gt;` element. A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) instance uses four [XTemplates](https://docs.sencha.com/extjs/6.0.1/classic/Ext.XTemplate.html)
	 * to render the grid, `tpl`, `itemTpl`, `rowTpl`, `cellTpl`.
	 * 
	 * A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `tpl` to emit the item encapsulating HTML tags into its output stream.
	 * To render the rows, it invokes [Ext.view.Table.renderRows](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-renderRows) passing the `rows` member of its data object and the `columns` member of its data object.
	 * 
	 * The `tpl`'s data object Looks like this:
	 * 
	 *      {
	 *          view: owningTableView,
	 *          rows: recordsToRender,
	 *          viewStartIndex: indexOfFirstRecordInStore,
	 *          tableStyle: styleString
	 *      }
	 * 
	 * - A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `rowTpl` to emit a `&lt;tr&gt;` HTML tag to its output stream. To render cells,
	 *   it invokes [Ext.view.Table.renderCell](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-renderCell) passing the `rows` member of its data object.
	 * 
	 *  
	 *  
	 *  
	 *  
	 *  The `itemTpl` and `rowTpl`'s data object looks like this:
	 * 
	 *    {
	 *        view:        owningTableView,
	 *        record:      recordToRender,
	 *        recordIndex: indexOfRecordInStore,
	 *        rowIndex:    indexOfRowInView,
	 *        columns:     arrayOfColumnDefinitions,
	 *        itemClasses: arrayOfClassNames, // For outermost row in case of wrapping
	 *        rowClasses:  arrayOfClassNames,  // For internal data bearing row in case of wrapping
	 *        rowStyle:    styleString
	 *    }
	 * 
	 * - A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `cellTpl` to emit a `&lt;td&gt;` HTML tag to its output stream.
	 * 
	 * The `cellTpl's` data object looks like this:
	 * 
	 *    {
	 *        record: recordToRender
	 *        column: columnToRender;
	 *        recordIndex: indexOfRecordInStore,
	 *        rowIndex:    indexOfRowInView,
	 *        columnIndex: columnIndex,
	 *        align: columnAlign,
	 *        tdCls: classForCell
	 *    }
	 * 
	 * A Feature may inject its own tpl or rowTpl or cellTpl into the [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)'s rendering by
	 * calling [Ext.view.Table.addTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addTpl) or [Ext.view.Table.addRowTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addRowTpl) or [Ext.view.Table.addCellTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addCellTpl).
	 * 
	 * The passed XTemplate is added _upstream_ of the default template for the table element in a link list of XTemplates which contribute
	 * to the element's HTML. It may emit appropriate HTML strings into the output stream _around_ a call to
	 * 
	 *    this.nextTpl.apply(values, out, parent);
	 * 
	 * This passes the current value context, output stream and the parent value context to the next XTemplate in the list.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     members    The members to add to this class.
		 * @param   {boolean}                                                                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     members
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.feature.Feature;
		addStatics? (members: object): typeof Ext.util.Observable;
		addStatics? (members: object): typeof Ext.mixin.Observable;
		addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     members
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		addInheritableStatics? (members: object): typeof Ext.util.Observable;
		addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     name
		 * @param   {object}                                                                     member
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		addMember? (name: object, member: object): typeof Ext.util.Observable;
		addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     fn
		 * @param   {object}                                                                     scope
		 * @returns {Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		triggerExtended? (): void;
	}
}
declare namespace Ext.grid.feature.Grouping {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html)
	 * This feature allows to display the grid rows aggregated into groups as specified by the [grouper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-grouper)
	 * 
	 * underneath. The groups can also be expanded and collapsed.
	 * 
	 * ## Extra Events
	 * 
	 * This feature adds several extra events that will be fired on the grid to interact with the groups:
	 * 
	 * - [groupclick](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupclick)
	 * - [groupdblclick](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupdblclick)
	 * - [groupcontextmenu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupcontextmenu)
	 * - [groupexpand](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupexpand)
	 * - [groupcollapse](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupcollapse)
	 * 
	 * ## Menu Augmentation
	 * 
	 * This feature adds extra options to the grid column menu to provide the user with functionality to modify the grouping.
	 * This can be disabled by setting the [enableGroupingMenu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-enableGroupingMenu) option. The option to disallow grouping from being turned off
	 * by the user is [enableNoGroups](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-enableNoGroups).
	 * 
	 * ## Controlling Group Text
	 * 
	 * The [groupHeaderTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-groupHeaderTpl) is used to control the rendered title for each group. It can modified to customized
	 * the default display.
	 * 
	 * ## Groupers
	 * 
	 * By default, this feature expects that the data field that is mapped to by the
	 * [Ext.data.AbstractStore.groupField](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.AbstractStore.html#cfg-groupField) config is a simple data type such as a
	 * String or a Boolean. However, if you intend to group by a data field that is a
	 * complex data type such as an Object or Array, it is necessary to define one or more
	 * [groupers](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Grouper.html) on the feature that it can then use to lookup
	 * internal group information when grouping by different fields.
	 * 
	 *    var feature = Ext.create('Ext.grid.feature.Grouping', {
	 *        startCollapsed: true,
	 *        groupers: [{
	 *            property: 'asset',
	 *            groupFn: function (val) {
	 *                return val.data.name;
	 *            }
	 *        }]
	 *    });
	 * 
	 * ## Example Usage
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        fields: ['name', 'seniority', 'department'],
	 *        groupField: 'department',
	 *        data: [
	 *            { name: 'Michael Scott', seniority: 7, department: 'Management' },
	 *            { name: 'Dwight Schrute', seniority: 2, department: 'Sales' },
	 *            { name: 'Jim Halpert', seniority: 3, department: 'Sales' },
	 *            { name: 'Kevin Malone', seniority: 4, department: 'Accounting' },
	 *            { name: 'Angela Martin', seniority: 5, department: 'Accounting' }
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        title: 'Employees',
	 *        store: store,
	 *        columns: [
	 *            { text: 'Name', dataIndex: 'name' },
	 *            { text: 'Seniority', dataIndex: 'seniority' }
	 *        ],
	 *        features: [{ftype:'grouping'}],
	 *        width: 200,
	 *        height: 275,
	 *        renderTo: Ext.getBody()
	 *    });
	 * 
	 * **Note:** To use grouping with a grid that has [locked columns](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.column.Column.html#cfg-locked), you need to supply
	 * the grouping feature as a config object - so the grid can create two instances of the grouping feature.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               members    The members to add to this class.
		 * @param   {boolean}                                                                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Grouping;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               members
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.feature.Grouping;
		addStatics? (members: object): typeof Ext.grid.feature.Feature;
		addStatics? (members: object): typeof Ext.util.Observable;
		addStatics? (members: object): typeof Ext.mixin.Observable;
		addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               members
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.feature.Grouping;
		addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		addInheritableStatics? (members: object): typeof Ext.util.Observable;
		addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               name
		 * @param   {object}                                                                                               member
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.feature.Grouping;
		addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		addMember? (name: object, member: object): typeof Ext.util.Observable;
		addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               fn
		 * @param   {object}                                                                                               scope
		 * @returns {Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Grouping;
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		triggerExtended? (): void;
	}
}
declare namespace Ext.grid.feature.GroupingSummary {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.feature.GroupingSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupingSummary.html)
	 * This feature adds an aggregate summary row at the bottom of each group that is provided
	 * by the [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html) feature. There are two aspects to the summary:
	 * 
	 * ## Calculation
	 * 
	 * The summary value needs to be calculated for each column in the grid. This is controlled
	 * by the summaryType option specified on the column. There are several built in summary types,
	 * which can be specified as a string on the column configuration. These call underlying methods
	 * on the store:
	 * 
	 * - [count](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-count)
	 * - [sum](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-sum)
	 * - [min](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-min)
	 * - [max](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-max)
	 * - [average](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-average)
	 * 
	 * Alternatively, the summaryType can be a function definition. If this is the case,
	 * the function is called with two parameters: an array of records, and an array of field values
	 * to calculate the summary value.
	 * 
	 * ## Rendering
	 * 
	 * Similar to a column, the summary also supports a summaryRenderer function. This
	 * summaryRenderer is called before displaying a value. The function is optional, if
	 * not specified the default calculated value is shown. The summaryRenderer is called with:
	 * 
	 * - value {Object} - The calculated value.
	 * - summaryData {Object} - Contains all raw summary values for the row.
	 * - field {String} - The name of the field we are calculating
	 * - metaData {Object} - A collection of metadata about the current cell; can be used or modified by the renderer.
	 * 
	 * ## Example Usage
	 * 
	 *    Ext.define('TestResult', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['student', 'subject', {
	 *            name: 'mark',
	 *            type: 'int'
	 *        }]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 200,
	 *        height: 240,
	 *        renderTo: document.body,
	 *        features: [{
	 *            groupHeaderTpl: 'Subject: {name}',
	 *            ftype: 'groupingsummary'
	 *        }],
	 *        store: {
	 *            model: 'TestResult',
	 *            groupField: 'subject',
	 *            data: [{
	 *                student: 'Student 1',
	 *                subject: 'Math',
	 *                mark: 84
	 *            },{
	 *                student: 'Student 1',
	 *                subject: 'Science',
	 *                mark: 72
	 *            },{
	 *                student: 'Student 2',
	 *                subject: 'Math',
	 *                mark: 96
	 *            },{
	 *                student: 'Student 2',
	 *                subject: 'Science',
	 *                mark: 68
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'student',
	 *            text: 'Name',
	 *            summaryType: 'count',
	 *            summaryRenderer: function(value){
	 *                return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
	 *            }
	 *        }, {
	 *            dataIndex: 'mark',
	 *            text: 'Mark',
	 *            summaryType: 'average'
	 *        }]
	 *    });
	 * 
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                                members    The members to add to this class.
		 * @param   {boolean}                                                                                                                               [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                                               [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.GroupingSummary;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Grouping;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                                members
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.feature.GroupingSummary;
		addStatics? (members: object): typeof Ext.grid.feature.Grouping;
		addStatics? (members: object): typeof Ext.grid.feature.Feature;
		addStatics? (members: object): typeof Ext.util.Observable;
		addStatics? (members: object): typeof Ext.mixin.Observable;
		addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                                members
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.feature.GroupingSummary;
		addInheritableStatics? (members: object): typeof Ext.grid.feature.Grouping;
		addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		addInheritableStatics? (members: object): typeof Ext.util.Observable;
		addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                                name
		 * @param   {object}                                                                                                                                member
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.feature.GroupingSummary;
		addMember? (name: object, member: object): typeof Ext.grid.feature.Grouping;
		addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		addMember? (name: object, member: object): typeof Ext.util.Observable;
		addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                                fn
		 * @param   {object}                                                                                                                                scope
		 * @returns {Ext.grid.feature.GroupingSummary|Ext.grid.feature.Grouping|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.GroupingSummary;
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Grouping;
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		triggerExtended? (): void;
	}
}
declare namespace Ext.grid.feature.GroupStore {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.feature.GroupStore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupStore.html)
	 * Private record store class which takes the place of the view's data store to provide a grouped
	 * view of the data when the Grouping feature is used.
	 * 
	 * Relays granular mutation events from the underlying store as refresh events to the view.
	 * 
	 * On mutation events from the underlying store, updates the summary rows by firing update events on the corresponding
	 * summary records.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                        members    The members to add to this class.
		 * @param   {boolean}                                                                       [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                       [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.GroupStore|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.GroupStore;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                        members
		 * @returns {Ext.grid.feature.GroupStore|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.feature.GroupStore;
		addStatics? (members: object): typeof Ext.util.Observable;
		addStatics? (members: object): typeof Ext.mixin.Observable;
		addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                        members
		 * @returns {Ext.grid.feature.GroupStore|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.feature.GroupStore;
		addInheritableStatics? (members: object): typeof Ext.util.Observable;
		addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                        name
		 * @param   {object}                                                                        member
		 * @returns {Ext.grid.feature.GroupStore|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.feature.GroupStore;
		addMember? (name: object, member: object): typeof Ext.util.Observable;
		addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                        fn
		 * @param   {object}                                                                        scope
		 * @returns {Ext.grid.feature.GroupStore|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.GroupStore;
		onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		triggerExtended? (): void;
	}
}
declare namespace Ext.grid.feature.RowBody {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.feature.RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html)
	 * The rowbody feature enhances the grid's markup to have an additional
	 * tr -> td -> div which spans the entire width of the original row.
	 * 
	 * This is useful to to associate additional information with a particular
	 * record in an Ext.grid.Grid.
	 * 
	 * Rowbodies are initially hidden unless you override [getAdditionalData](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html#method-getAdditionalData).
	 * 
	 * The events fired by RowBody are relayed to the owning
	 * [grid view](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) (and subsequently the owning grid).
	 * 
	 * # Example
	 * 
	 *    Ext.define('Animal', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['name', 'latin', 'desc', 'lifespan']
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 400,
	 *        height: 300,
	 *        renderTo: Ext.getBody(),
	 *        store: {
	 *            model: 'Animal',
	 *            data: [{
	 *                name: 'Tiger',
	 *                latin: 'Panthera tigris',
	 *                desc: 'The largest cat species, weighing up to 306 kg (670 lb).',
	 *                lifespan: '20 - 26 years (in captivity)'
	 *            }, {
	 *                name: 'Roman snail',
	 *                latin: 'Helix pomatia',
	 *                desc: 'A species of large, edible, air-breathing land snail.',
	 *                lifespan: '20 - 35 years'
	 *            }, {
	 *                name: 'Yellow-winged darter',
	 *                latin: 'Sympetrum flaveolum',
	 *                desc: 'A dragonfly found in Europe and mid and Northern China.',
	 *                lifespan: '4 - 6 weeks'
	 *            }, {
	 *                name: 'Superb Fairy-wren',
	 *                latin: 'Malurus cyaneus',
	 *                desc: 'Common and familiar across south-eastern Australia.',
	 *                lifespan: '5 - 6 years'
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'name',
	 *            text: 'Common name',
	 *            width: 125
	 *        }, {
	 *            dataIndex: 'latin',
	 *            text: 'Scientific name',
	 *            flex: 1
	 *        }],
	 *        features: [{
	 *            ftype: 'rowbody',
	 *            getAdditionalData: function (data, idx, record, orig) {
	 *                // Usually you would style the my-body-class in a CSS file
	 *                return {
	 *                    rowBody: '&lt;div style="padding: 1em"&gt;' + record.get("desc") + '&lt;/div&gt;',
	 *                    rowBodyCls: "my-body-class"
	 *                };
	 *            }
	 *        }],
	 *        listeners: {
	 *            rowbodyclick: function(view, rowEl, e, eOpts) {
	 *                var itemEl = Ext.get(rowEl).up(view.itemSelector),
	 *                    rec = view.getRecord(itemEl);
	 *    
	 *                Ext.Msg.alert(rec.get('name') + ' life span', rec.get('lifespan'));
	 *            }
	 *        }
	 *    });
	 * 
	 * # Cell Editing and Cell Selection Model
	 * 
	 * Note that if [cell editing](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.plugin.CellEditing.html) or the [cell selection model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.selection.CellModel.html) are going
	 * to be used, then the [RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html) feature, or [RowExpander](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.plugin.RowExpander.html) plugin MUST
	 * be used for intra-cell navigation to be correct.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                              members    The members to add to this class.
		 * @param   {boolean}                                                                                             [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                             [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.RowBody;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                              members
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.feature.RowBody;
		addStatics? (members: object): typeof Ext.grid.feature.Feature;
		addStatics? (members: object): typeof Ext.util.Observable;
		addStatics? (members: object): typeof Ext.mixin.Observable;
		addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                              members
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.feature.RowBody;
		addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		addInheritableStatics? (members: object): typeof Ext.util.Observable;
		addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                              name
		 * @param   {object}                                                                                              member
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.feature.RowBody;
		addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		addMember? (name: object, member: object): typeof Ext.util.Observable;
		addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                              fn
		 * @param   {object}                                                                                              scope
		 * @returns {Ext.grid.feature.RowBody|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.RowBody;
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		triggerExtended? (): void;
	}
}
declare namespace Ext.grid.feature.Summary {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.feature.Summary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Summary.html)
	 * This feature is used to place a summary row at the bottom of the grid. If using a grouping,
	 * see [Ext.grid.feature.GroupingSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupingSummary.html). There are 2 aspects to calculating the summaries,
	 * calculation and rendering.
	 * 
	 * ## Calculation
	 * 
	 * The summary value needs to be calculated for each column in the grid. This is controlled
	 * by the summaryType option specified on the column. There are several built in summary types,
	 * which can be specified as a string on the column configuration. These call underlying methods
	 * on the store:
	 * 
	 * - [count](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-count)
	 * - [sum](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-sum)
	 * - [min](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-min)
	 * - [max](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-max)
	 * - [average](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-average)
	 * 
	 * Alternatively, the summaryType can be a function definition. If this is the case,
	 * the function is called with an array of records to calculate the summary value.
	 * 
	 * ## Rendering
	 * 
	 * Similar to a column, the summary also supports a summaryRenderer function. This
	 * summaryRenderer is called before displaying a value. The function is optional, if
	 * not specified the default calculated value is shown. The summaryRenderer is called with:
	 * 
	 * - value {Object} - The calculated value.
	 * - summaryData {Object} - Contains all raw summary values for the row.
	 * - field {String} - The name of the field we are calculating
	 * - metaData {Object} - A collection of metadata about the current cell; can be used or modified by the renderer.
	 * 
	 * ## Example Usage
	 * 
	 *    Ext.define('TestResult', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['student', {
	 *            name: 'mark',
	 *            type: 'int'
	 *        }]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 400,
	 *        height: 200,
	 *        title: 'Summary Test',
	 *        style: 'padding: 20px',
	 *        renderTo: document.body,
	 *        features: [{
	 *            ftype: 'summary'
	 *        }],
	 *        store: {
	 *            model: 'TestResult',
	 *            data: [{
	 *                student: 'Student 1',
	 *                mark: 84
	 *            },{
	 *                student: 'Student 2',
	 *                mark: 72
	 *            },{
	 *                student: 'Student 3',
	 *                mark: 96
	 *            },{
	 *                student: 'Student 4',
	 *                mark: 68
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'student',
	 *            text: 'Name',
	 *            summaryType: 'count',
	 *            summaryRenderer: function(value, summaryData, dataIndex) {
	 *                return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
	 *            }
	 *        }, {
	 *            dataIndex: 'mark',
	 *            text: 'Mark',
	 *            summaryType: 'average'
	 *        }]
	 *    });
	 * 
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                               members    The members to add to this class.
		 * @param   {boolean}                                                                                                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Summary;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.AbstractSummary;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.feature.Feature;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Observable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                               members
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.feature.Summary;
		addStatics? (members: object): typeof Ext.grid.feature.AbstractSummary;
		addStatics? (members: object): typeof Ext.grid.feature.Feature;
		addStatics? (members: object): typeof Ext.util.Observable;
		addStatics? (members: object): typeof Ext.mixin.Observable;
		addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                               members
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.feature.Summary;
		addInheritableStatics? (members: object): typeof Ext.grid.feature.AbstractSummary;
		addInheritableStatics? (members: object): typeof Ext.grid.feature.Feature;
		addInheritableStatics? (members: object): typeof Ext.util.Observable;
		addInheritableStatics? (members: object): typeof Ext.mixin.Observable;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                               name
		 * @param   {object}                                                                                                                               member
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.feature.Summary;
		addMember? (name: object, member: object): typeof Ext.grid.feature.AbstractSummary;
		addMember? (name: object, member: object): typeof Ext.grid.feature.Feature;
		addMember? (name: object, member: object): typeof Ext.util.Observable;
		addMember? (name: object, member: object): typeof Ext.mixin.Observable;
		addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                                               fn
		 * @param   {object}                                                                                                                               scope
		 * @returns {Ext.grid.feature.Summary|Ext.grid.feature.AbstractSummary|Ext.grid.feature.Feature|Ext.util.Observable|Ext.mixin.Observable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Summary;
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.AbstractSummary;
		onExtended? (fn: object, scope: object): typeof Ext.grid.feature.Feature;
		onExtended? (fn: object, scope: object): typeof Ext.util.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.mixin.Observable;
		onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		triggerExtended? (): void;
	}
}
declare namespace Ext.grid.feature.AbstractSummary.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.AbstractSummary.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.AbstractSummary.html#method-addListener)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.AbstractSummary.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.AbstractSummary.on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.AbstractSummary.html#method-on)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.Feature.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.Feature.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#method-addListener)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.Feature.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.Feature.on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#method-on)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.Grouping.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.Grouping.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#method-addListener)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.Grouping.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.Grouping.on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#method-on)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.GroupingSummary.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.GroupingSummary.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupingSummary.html#method-addListener)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.GroupingSummary.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.GroupingSummary.on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupingSummary.html#method-on)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.GroupStore.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.GroupStore.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupStore.html#method-addListener)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.GroupStore.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.GroupStore.on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupStore.html#method-on)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.RowBody.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.RowBody.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html#method-addListener)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.RowBody.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.RowBody.on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html#method-on)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.Summary.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.Summary.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Summary.html#method-addListener)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.Summary.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.feature.Summary.on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Summary.html#method-on)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.grid.feature.AbstractSummary {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.feature.AbstractSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.AbstractSummary.html)
	 * A small abstract class that contains the shared behaviour for any summary
	 * calculations to be used in the grid.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the [DataView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html)'s **[`itemclick`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html#event-itemclick)** event passing the node clicked on. To access DOM events directly from a
		 * child element of a Component, we need to specify the `element` option to identify the Component property to add a
		 * DOM listener to:
		 * 
		 *    new Ext.panel.Panel({
		 *        width: 400,
		 *        height: 200,
		 *        dockedItems: [{
		 *            xtype: 'toolbar'
		 *        }],
		 *        listeners: {
		 *            click: {
		 *                element: 'el', //bind to the underlying el property on the panel
		 *                fn: function(){ console.log('click el'); }
		 *            },
		 *            dblclick: {
		 *                element: 'body', //bind to the underlying body property on the panel
		 *                fn: function(){ console.log('dblclick body'); }
		 *            }
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		listeners?: object;
		/** 
		 * True to show the summary row.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		showSummaryRow?: boolean;
		/** 
		 * Abstract method to be overriden when a feature should add additional
		 * arguments to its event signature. By default the event will fire:
		 * 
		 * - view - The underlying [Ext.view.Table](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)
		 * - featureTarget - The matched element by the defined [eventSelector](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#property-eventSelector)
		 * 
		 * The method must also return the eventName as the first index of the array
		 * to be passed to fireEvent.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} eventName
		 * @param   {object} view
		 * @param   {object} featureTarget
		 * @param   {object} e
		 * @returns {void}                 
		 */
		getFireEventArgs? (eventName: object, view: object, featureTarget: object, e: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                                   config
		 * @returns {Ext.grid.feature.AbstractSummary.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.feature.AbstractSummary.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                            name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                   [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.AbstractSummary.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.AbstractSummary.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.AbstractSummary.Statics}  
		 */
		statics? (): Ext.grid.feature.AbstractSummary.Statics;
	}
}
declare namespace Ext.grid.feature.Feature {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.feature.Feature](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html)
	 * A feature is a type of plugin that is specific to the [Ext.grid.Panel](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html). It provides several
	 * hooks that allows the developer to inject additional functionality at certain points throughout the
	 * grid creation cycle. This class provides the base template methods that are available to the developer,
	 * it should be extended.
	 * 
	 * There are several built in features that extend this class, for example:
	 * 
	 * - [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html) - Shows grid rows in groups as specified by the [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
	 * - [Ext.grid.feature.RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html) - Adds a body section for each grid row that can contain markup.
	 * - [Ext.grid.feature.Summary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Summary.html) - Adds a summary row at the bottom of the grid with aggregate totals for a column.
	 * 
	 * ## Using Features
	 * 
	 * A feature is added to the grid by specifying it an array of features in the configuration:
	 * 
	 *    var groupingFeature = Ext.create('Ext.grid.feature.Grouping');
	 *    Ext.create('Ext.grid.Panel', {
	 *        // other options
	 *        features: [groupingFeature]
	 *    });
	 * 
	 * ## Writing Features
	 * 
	 * A Feature may add new DOM structure within the structure of a grid.
	 * 
	 * A grid is essentially a `&lt;table&gt;` element. A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) instance uses four [XTemplates](https://docs.sencha.com/extjs/6.0.1/classic/Ext.XTemplate.html)
	 * to render the grid, `tpl`, `itemTpl`, `rowTpl`, `cellTpl`.
	 * 
	 * A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `tpl` to emit the item encapsulating HTML tags into its output stream.
	 * To render the rows, it invokes [Ext.view.Table.renderRows](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-renderRows) passing the `rows` member of its data object and the `columns` member of its data object.
	 * 
	 * The `tpl`'s data object Looks like this:
	 * 
	 *      {
	 *          view: owningTableView,
	 *          rows: recordsToRender,
	 *          viewStartIndex: indexOfFirstRecordInStore,
	 *          tableStyle: styleString
	 *      }
	 * 
	 * - A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `rowTpl` to emit a `&lt;tr&gt;` HTML tag to its output stream. To render cells,
	 *   it invokes [Ext.view.Table.renderCell](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-renderCell) passing the `rows` member of its data object.
	 * 
	 *  
	 *  
	 *  
	 *  
	 *  The `itemTpl` and `rowTpl`'s data object looks like this:
	 * 
	 *    {
	 *        view:        owningTableView,
	 *        record:      recordToRender,
	 *        recordIndex: indexOfRecordInStore,
	 *        rowIndex:    indexOfRowInView,
	 *        columns:     arrayOfColumnDefinitions,
	 *        itemClasses: arrayOfClassNames, // For outermost row in case of wrapping
	 *        rowClasses:  arrayOfClassNames,  // For internal data bearing row in case of wrapping
	 *        rowStyle:    styleString
	 *    }
	 * 
	 * - A [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) uses its `cellTpl` to emit a `&lt;td&gt;` HTML tag to its output stream.
	 * 
	 * The `cellTpl's` data object looks like this:
	 * 
	 *    {
	 *        record: recordToRender
	 *        column: columnToRender;
	 *        recordIndex: indexOfRecordInStore,
	 *        rowIndex:    indexOfRowInView,
	 *        columnIndex: columnIndex,
	 *        align: columnAlign,
	 *        tdCls: classForCell
	 *    }
	 * 
	 * A Feature may inject its own tpl or rowTpl or cellTpl into the [TableView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)'s rendering by
	 * calling [Ext.view.Table.addTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addTpl) or [Ext.view.Table.addRowTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addRowTpl) or [Ext.view.Table.addCellTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html#method-addCellTpl).
	 * 
	 * The passed XTemplate is added _upstream_ of the default template for the table element in a link list of XTemplates which contribute
	 * to the element's HTML. It may emit appropriate HTML strings into the output stream _around_ a call to
	 * 
	 *    this.nextTpl.apply(values, out, parent);
	 * 
	 * This passes the current value context, output stream and the parent value context to the next XTemplate in the list.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the [DataView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html)'s **[`itemclick`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html#event-itemclick)** event passing the node clicked on. To access DOM events directly from a
		 * child element of a Component, we need to specify the `element` option to identify the Component property to add a
		 * DOM listener to:
		 * 
		 *    new Ext.panel.Panel({
		 *        width: 400,
		 *        height: 200,
		 *        dockedItems: [{
		 *            xtype: 'toolbar'
		 *        }],
		 *        listeners: {
		 *            click: {
		 *                element: 'el', //bind to the underlying el property on the panel
		 *                fn: function(){ console.log('click el'); }
		 *            },
		 *            dblclick: {
		 *                element: 'body', //bind to the underlying body property on the panel
		 *                fn: function(){ console.log('dblclick body'); }
		 *            }
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		listeners?: object;
		/** 
		 * Abstract method to be overriden when a feature should add additional
		 * arguments to its event signature. By default the event will fire:
		 * 
		 * - view - The underlying [Ext.view.Table](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)
		 * - featureTarget - The matched element by the defined [eventSelector](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#property-eventSelector)
		 * 
		 * The method must also return the eventName as the first index of the array
		 * to be passed to fireEvent.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} eventName
		 * @param   {object} view
		 * @param   {object} featureTarget
		 * @param   {object} e
		 * @returns {void}                 
		 */
		getFireEventArgs? (eventName: object, view: object, featureTarget: object, e: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                           config
		 * @returns {Ext.grid.feature.Feature.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.feature.Feature.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                    name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                           [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.Feature.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Feature.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.Feature.Statics}  
		 */
		statics? (): Ext.grid.feature.Feature.Statics;
	}
}
declare namespace Ext.grid.feature.Grouping {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html)
	 * This feature allows to display the grid rows aggregated into groups as specified by the [grouper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-grouper)
	 * 
	 * underneath. The groups can also be expanded and collapsed.
	 * 
	 * ## Extra Events
	 * 
	 * This feature adds several extra events that will be fired on the grid to interact with the groups:
	 * 
	 * - [groupclick](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupclick)
	 * - [groupdblclick](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupdblclick)
	 * - [groupcontextmenu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupcontextmenu)
	 * - [groupexpand](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupexpand)
	 * - [groupcollapse](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupcollapse)
	 * 
	 * ## Menu Augmentation
	 * 
	 * This feature adds extra options to the grid column menu to provide the user with functionality to modify the grouping.
	 * This can be disabled by setting the [enableGroupingMenu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-enableGroupingMenu) option. The option to disallow grouping from being turned off
	 * by the user is [enableNoGroups](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-enableNoGroups).
	 * 
	 * ## Controlling Group Text
	 * 
	 * The [groupHeaderTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-groupHeaderTpl) is used to control the rendered title for each group. It can modified to customized
	 * the default display.
	 * 
	 * ## Groupers
	 * 
	 * By default, this feature expects that the data field that is mapped to by the
	 * [Ext.data.AbstractStore.groupField](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.AbstractStore.html#cfg-groupField) config is a simple data type such as a
	 * String or a Boolean. However, if you intend to group by a data field that is a
	 * complex data type such as an Object or Array, it is necessary to define one or more
	 * [groupers](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Grouper.html) on the feature that it can then use to lookup
	 * internal group information when grouping by different fields.
	 * 
	 *    var feature = Ext.create('Ext.grid.feature.Grouping', {
	 *        startCollapsed: true,
	 *        groupers: [{
	 *            property: 'asset',
	 *            groupFn: function (val) {
	 *                return val.data.name;
	 *            }
	 *        }]
	 *    });
	 * 
	 * ## Example Usage
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        fields: ['name', 'seniority', 'department'],
	 *        groupField: 'department',
	 *        data: [
	 *            { name: 'Michael Scott', seniority: 7, department: 'Management' },
	 *            { name: 'Dwight Schrute', seniority: 2, department: 'Sales' },
	 *            { name: 'Jim Halpert', seniority: 3, department: 'Sales' },
	 *            { name: 'Kevin Malone', seniority: 4, department: 'Accounting' },
	 *            { name: 'Angela Martin', seniority: 5, department: 'Accounting' }
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        title: 'Employees',
	 *        store: store,
	 *        columns: [
	 *            { text: 'Name', dataIndex: 'name' },
	 *            { text: 'Seniority', dataIndex: 'seniority' }
	 *        ],
	 *        features: [{ftype:'grouping'}],
	 *        width: 200,
	 *        height: 275,
	 *        renderTo: Ext.getBody()
	 *    });
	 * 
	 * **Note:** To use grouping with a grid that has [locked columns](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.column.Column.html#cfg-locked), you need to supply
	 * the grouping feature as a config object - so the grid can create two instances of the grouping feature.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Set to `false` to disable collapsing groups from the UI.
		 * 
		 * This is set to `false` when the associated [store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) is
		 * a [BufferedStore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.BufferedStore.html).
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		collapsible?: boolean;
		/** 
		 * Number of pixels to indent per grouping level
		 * @configuration
		 * @optional
		 * @default 17
		 * @type {number}
		 */
		depthToIndent?: number;
		/** 
		 * True to enable the grouping control in the header menu.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		enableGroupingMenu?: boolean;
		/** 
		 * True to allow the user to turn off grouping.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		enableNoGroups?: boolean;
		/** 
		 * Text displayed in the grid header menu for grouping by header.
		 * @configuration
		 * @optional
		 * @default "Group by this field"
		 * @type {string}
		 */
		groupByText?: string;
		/** 
		 * A string Template snippet, an array of strings (optionally followed by an object containing Template methods) to be used to construct a Template, or a Template instance.
		 * 
		 * <ul>
		 * <li>
		 * 
		 * Example 1 (Template snippet):
		 * 
		 *    groupHeaderTpl: 'Group: {name}'
		 * 
		 * </li>
		 * <li>
		 * 
		 * Example 2 (Array):
		 * 
		 *    groupHeaderTpl: [
		 *        'Group: ',
		 *        '&lt;div&gt;{name:this.formatName}&lt;/div&gt;',
		 *        {
		 *            formatName: function(name) {
		 *                return Ext.String.trim(name);
		 *            }
		 *        }
		 *    ]
		 * 
		 * </li>
		 * <li>
		 * 
		 * Example 3 (Template Instance):
		 * 
		 *    groupHeaderTpl: Ext.create('Ext.XTemplate',
		 *        'Group: ',
		 *        '&lt;div&gt;{name:this.formatName}&lt;/div&gt;',
		 *        {
		 *            formatName: function(name) {
		 *                return Ext.String.trim(name);
		 *            }
		 *        }
		 *    )
		 * 
		 * </li>
		 * </ul>
		 * @configuration
		 * @optional
		 * @default '{columnName}: {name}'
		 * @type {string|any[]|Ext.Template}
		 */
		groupHeaderTpl?: string | any[] | Ext.Template;
		/** 
		 * These are grouper objects defined for the feature. If the group names are derived
		 * from complex data types, it is necessary to convert them as a store would.
		 * 
		 * However, since only one grouper can be defined on the store at a time and
		 * this feature clears the current grouper when a new one is added, it is
		 * necessary to define a cache of groupers that the feature can lookup as needed.
		 * 
		 * Expected grouper object properties are `property` and `groupFn`.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {any[]}
		 */
		groupers?: any[];
		/** 
		 * True to hide the header that is currently grouped.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hideGroupedHeader?: boolean;
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the [DataView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html)'s **[`itemclick`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html#event-itemclick)** event passing the node clicked on. To access DOM events directly from a
		 * child element of a Component, we need to specify the `element` option to identify the Component property to add a
		 * DOM listener to:
		 * 
		 *    new Ext.panel.Panel({
		 *        width: 400,
		 *        height: 200,
		 *        dockedItems: [{
		 *            xtype: 'toolbar'
		 *        }],
		 *        listeners: {
		 *            click: {
		 *                element: 'el', //bind to the underlying el property on the panel
		 *                fn: function(){ console.log('click el'); }
		 *            },
		 *            dblclick: {
		 *                element: 'body', //bind to the underlying body property on the panel
		 *                fn: function(){ console.log('dblclick body'); }
		 *            }
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		listeners?: object;
		/** 
		 * The name of the property which contains the Array of summary objects.
		 * It allows to use server-side calculated summaries.
		 * @configuration
		 * @optional
		 * @default undefined
		 * @type {string}
		 */
		remoteRoot?: string;
		/** 
		 * Text displayed in the grid header for enabling/disabling grouping.
		 * @configuration
		 * @optional
		 * @default "Show in groups"
		 * @type {string}
		 */
		showGroupsText?: string;
		/** 
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		showSummaryRow?: boolean;
		/** 
		 * True to start all groups collapsed.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		startCollapsed?: boolean;
		/** 
		 * Abstract method to be overriden when a feature should add additional
		 * arguments to its event signature. By default the event will fire:
		 * 
		 * - view - The underlying [Ext.view.Table](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)
		 * - featureTarget - The matched element by the defined [eventSelector](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#property-eventSelector)
		 * 
		 * The method must also return the eventName as the first index of the array
		 * to be passed to fireEvent.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} type
		 * @param   {object} view
		 * @param   {object} targetEl
		 * @param   {object} e
		 * @returns {void}            
		 */
		getFireEventArgs? (type: object, view: object, targetEl: object, e: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                            config
		 * @returns {Ext.grid.feature.Grouping.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.feature.Grouping.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                     name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                            [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.Grouping.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Grouping.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.Grouping.Statics}  
		 */
		statics? (): Ext.grid.feature.Grouping.Statics;
	}
}
declare namespace Ext.grid.feature.GroupingSummary {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.feature.GroupingSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupingSummary.html)
	 * This feature adds an aggregate summary row at the bottom of each group that is provided
	 * by the [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html) feature. There are two aspects to the summary:
	 * 
	 * ## Calculation
	 * 
	 * The summary value needs to be calculated for each column in the grid. This is controlled
	 * by the summaryType option specified on the column. There are several built in summary types,
	 * which can be specified as a string on the column configuration. These call underlying methods
	 * on the store:
	 * 
	 * - [count](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-count)
	 * - [sum](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-sum)
	 * - [min](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-min)
	 * - [max](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-max)
	 * - [average](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-average)
	 * 
	 * Alternatively, the summaryType can be a function definition. If this is the case,
	 * the function is called with two parameters: an array of records, and an array of field values
	 * to calculate the summary value.
	 * 
	 * ## Rendering
	 * 
	 * Similar to a column, the summary also supports a summaryRenderer function. This
	 * summaryRenderer is called before displaying a value. The function is optional, if
	 * not specified the default calculated value is shown. The summaryRenderer is called with:
	 * 
	 * - value {Object} - The calculated value.
	 * - summaryData {Object} - Contains all raw summary values for the row.
	 * - field {String} - The name of the field we are calculating
	 * - metaData {Object} - A collection of metadata about the current cell; can be used or modified by the renderer.
	 * 
	 * ## Example Usage
	 * 
	 *    Ext.define('TestResult', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['student', 'subject', {
	 *            name: 'mark',
	 *            type: 'int'
	 *        }]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 200,
	 *        height: 240,
	 *        renderTo: document.body,
	 *        features: [{
	 *            groupHeaderTpl: 'Subject: {name}',
	 *            ftype: 'groupingsummary'
	 *        }],
	 *        store: {
	 *            model: 'TestResult',
	 *            groupField: 'subject',
	 *            data: [{
	 *                student: 'Student 1',
	 *                subject: 'Math',
	 *                mark: 84
	 *            },{
	 *                student: 'Student 1',
	 *                subject: 'Science',
	 *                mark: 72
	 *            },{
	 *                student: 'Student 2',
	 *                subject: 'Math',
	 *                mark: 96
	 *            },{
	 *                student: 'Student 2',
	 *                subject: 'Science',
	 *                mark: 68
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'student',
	 *            text: 'Name',
	 *            summaryType: 'count',
	 *            summaryRenderer: function(value){
	 *                return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
	 *            }
	 *        }, {
	 *            dataIndex: 'mark',
	 *            text: 'Mark',
	 *            summaryType: 'average'
	 *        }]
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Set to `false` to disable collapsing groups from the UI.
		 * 
		 * This is set to `false` when the associated [store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) is
		 * a [BufferedStore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.BufferedStore.html).
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		collapsible?: boolean;
		/** 
		 * Number of pixels to indent per grouping level
		 * @configuration
		 * @optional
		 * @default 17
		 * @type {number}
		 */
		depthToIndent?: number;
		/** 
		 * True to enable the grouping control in the header menu.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		enableGroupingMenu?: boolean;
		/** 
		 * True to allow the user to turn off grouping.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		enableNoGroups?: boolean;
		/** 
		 * Text displayed in the grid header menu for grouping by header.
		 * @configuration
		 * @optional
		 * @default "Group by this field"
		 * @type {string}
		 */
		groupByText?: string;
		/** 
		 * A string Template snippet, an array of strings (optionally followed by an object containing Template methods) to be used to construct a Template, or a Template instance.
		 * 
		 * <ul>
		 * <li>
		 * 
		 * Example 1 (Template snippet):
		 * 
		 *    groupHeaderTpl: 'Group: {name}'
		 * 
		 * </li>
		 * <li>
		 * 
		 * Example 2 (Array):
		 * 
		 *    groupHeaderTpl: [
		 *        'Group: ',
		 *        '&lt;div&gt;{name:this.formatName}&lt;/div&gt;',
		 *        {
		 *            formatName: function(name) {
		 *                return Ext.String.trim(name);
		 *            }
		 *        }
		 *    ]
		 * 
		 * </li>
		 * <li>
		 * 
		 * Example 3 (Template Instance):
		 * 
		 *    groupHeaderTpl: Ext.create('Ext.XTemplate',
		 *        'Group: ',
		 *        '&lt;div&gt;{name:this.formatName}&lt;/div&gt;',
		 *        {
		 *            formatName: function(name) {
		 *                return Ext.String.trim(name);
		 *            }
		 *        }
		 *    )
		 * 
		 * </li>
		 * </ul>
		 * @configuration
		 * @optional
		 * @default '{columnName}: {name}'
		 * @type {string|any[]|Ext.Template}
		 */
		groupHeaderTpl?: string | any[] | Ext.Template;
		/** 
		 * These are grouper objects defined for the feature. If the group names are derived
		 * from complex data types, it is necessary to convert them as a store would.
		 * 
		 * However, since only one grouper can be defined on the store at a time and
		 * this feature clears the current grouper when a new one is added, it is
		 * necessary to define a cache of groupers that the feature can lookup as needed.
		 * 
		 * Expected grouper object properties are `property` and `groupFn`.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {any[]}
		 */
		groupers?: any[];
		/** 
		 * True to hide the header that is currently grouped.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hideGroupedHeader?: boolean;
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the [DataView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html)'s **[`itemclick`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html#event-itemclick)** event passing the node clicked on. To access DOM events directly from a
		 * child element of a Component, we need to specify the `element` option to identify the Component property to add a
		 * DOM listener to:
		 * 
		 *    new Ext.panel.Panel({
		 *        width: 400,
		 *        height: 200,
		 *        dockedItems: [{
		 *            xtype: 'toolbar'
		 *        }],
		 *        listeners: {
		 *            click: {
		 *                element: 'el', //bind to the underlying el property on the panel
		 *                fn: function(){ console.log('click el'); }
		 *            },
		 *            dblclick: {
		 *                element: 'body', //bind to the underlying body property on the panel
		 *                fn: function(){ console.log('dblclick body'); }
		 *            }
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		listeners?: object;
		/** 
		 * The name of the property which contains the Array of summary objects.
		 * It allows to use server-side calculated summaries.
		 * @configuration
		 * @optional
		 * @default undefined
		 * @type {string}
		 */
		remoteRoot?: string;
		/** 
		 * Text displayed in the grid header for enabling/disabling grouping.
		 * @configuration
		 * @optional
		 * @default "Show in groups"
		 * @type {string}
		 */
		showGroupsText?: string;
		/** 
		 * True to show the summary row.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		showSummaryRow?: boolean;
		/** 
		 * True to start all groups collapsed.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		startCollapsed?: boolean;
		/** 
		 * Abstract method to be overriden when a feature should add additional
		 * arguments to its event signature. By default the event will fire:
		 * 
		 * - view - The underlying [Ext.view.Table](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)
		 * - featureTarget - The matched element by the defined [eventSelector](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#property-eventSelector)
		 * 
		 * The method must also return the eventName as the first index of the array
		 * to be passed to fireEvent.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} type
		 * @param   {object} view
		 * @param   {object} targetEl
		 * @param   {object} e
		 * @returns {void}            
		 */
		getFireEventArgs? (type: object, view: object, targetEl: object, e: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                                   config
		 * @returns {Ext.grid.feature.GroupingSummary.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.feature.GroupingSummary.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                            name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                   [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.GroupingSummary.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.GroupingSummary.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.GroupingSummary.Statics}  
		 */
		statics? (): Ext.grid.feature.GroupingSummary.Statics;
	}
}
declare namespace Ext.grid.feature.GroupStore {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.feature.GroupStore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupStore.html)
	 * Private record store class which takes the place of the view's data store to provide a grouped
	 * view of the data when the Grouping feature is used.
	 * 
	 * Relays granular mutation events from the underlying store as refresh events to the view.
	 * 
	 * On mutation events from the underlying store, updates the summary rows by firing update events on the corresponding
	 * summary records.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the [DataView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html)'s **[`itemclick`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html#event-itemclick)** event passing the node clicked on. To access DOM events directly from a
		 * child element of a Component, we need to specify the `element` option to identify the Component property to add a
		 * DOM listener to:
		 * 
		 *    new Ext.panel.Panel({
		 *        width: 400,
		 *        height: 200,
		 *        dockedItems: [{
		 *            xtype: 'toolbar'
		 *        }],
		 *        listeners: {
		 *            click: {
		 *                element: 'el', //bind to the underlying el property on the panel
		 *                fn: function(){ console.log('click el'); }
		 *            },
		 *            dblclick: {
		 *                element: 'body', //bind to the underlying body property on the panel
		 *                fn: function(){ console.log('dblclick body'); }
		 *            }
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		listeners?: object;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                              config
		 * @returns {Ext.grid.feature.GroupStore.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.feature.GroupStore.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                       name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                              [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.GroupStore.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.GroupStore.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.GroupStore.Statics}  
		 */
		statics? (): Ext.grid.feature.GroupStore.Statics;
	}
}
declare namespace Ext.grid.feature.RowBody {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.feature.RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html)
	 * The rowbody feature enhances the grid's markup to have an additional
	 * tr -> td -> div which spans the entire width of the original row.
	 * 
	 * This is useful to to associate additional information with a particular
	 * record in an Ext.grid.Grid.
	 * 
	 * Rowbodies are initially hidden unless you override [getAdditionalData](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html#method-getAdditionalData).
	 * 
	 * The events fired by RowBody are relayed to the owning
	 * [grid view](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html) (and subsequently the owning grid).
	 * 
	 * # Example
	 * 
	 *    Ext.define('Animal', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['name', 'latin', 'desc', 'lifespan']
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 400,
	 *        height: 300,
	 *        renderTo: Ext.getBody(),
	 *        store: {
	 *            model: 'Animal',
	 *            data: [{
	 *                name: 'Tiger',
	 *                latin: 'Panthera tigris',
	 *                desc: 'The largest cat species, weighing up to 306 kg (670 lb).',
	 *                lifespan: '20 - 26 years (in captivity)'
	 *            }, {
	 *                name: 'Roman snail',
	 *                latin: 'Helix pomatia',
	 *                desc: 'A species of large, edible, air-breathing land snail.',
	 *                lifespan: '20 - 35 years'
	 *            }, {
	 *                name: 'Yellow-winged darter',
	 *                latin: 'Sympetrum flaveolum',
	 *                desc: 'A dragonfly found in Europe and mid and Northern China.',
	 *                lifespan: '4 - 6 weeks'
	 *            }, {
	 *                name: 'Superb Fairy-wren',
	 *                latin: 'Malurus cyaneus',
	 *                desc: 'Common and familiar across south-eastern Australia.',
	 *                lifespan: '5 - 6 years'
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'name',
	 *            text: 'Common name',
	 *            width: 125
	 *        }, {
	 *            dataIndex: 'latin',
	 *            text: 'Scientific name',
	 *            flex: 1
	 *        }],
	 *        features: [{
	 *            ftype: 'rowbody',
	 *            getAdditionalData: function (data, idx, record, orig) {
	 *                // Usually you would style the my-body-class in a CSS file
	 *                return {
	 *                    rowBody: '&lt;div style="padding: 1em"&gt;' + record.get("desc") + '&lt;/div&gt;',
	 *                    rowBodyCls: "my-body-class"
	 *                };
	 *            }
	 *        }],
	 *        listeners: {
	 *            rowbodyclick: function(view, rowEl, e, eOpts) {
	 *                var itemEl = Ext.get(rowEl).up(view.itemSelector),
	 *                    rec = view.getRecord(itemEl);
	 *    
	 *                Ext.Msg.alert(rec.get('name') + ' life span', rec.get('lifespan'));
	 *            }
	 *        }
	 *    });
	 * 
	 * # Cell Editing and Cell Selection Model
	 * 
	 * Note that if [cell editing](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.plugin.CellEditing.html) or the [cell selection model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.selection.CellModel.html) are going
	 * to be used, then the [RowBody](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html) feature, or [RowExpander](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.plugin.RowExpander.html) plugin MUST
	 * be used for intra-cell navigation to be correct.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Configure as `true` to put the row expander body _before_ the data row.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		bodyBefore?: boolean;
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the [DataView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html)'s **[`itemclick`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html#event-itemclick)** event passing the node clicked on. To access DOM events directly from a
		 * child element of a Component, we need to specify the `element` option to identify the Component property to add a
		 * DOM listener to:
		 * 
		 *    new Ext.panel.Panel({
		 *        width: 400,
		 *        height: 200,
		 *        dockedItems: [{
		 *            xtype: 'toolbar'
		 *        }],
		 *        listeners: {
		 *            click: {
		 *                element: 'el', //bind to the underlying el property on the panel
		 *                fn: function(){ console.log('click el'); }
		 *            },
		 *            dblclick: {
		 *                element: 'body', //bind to the underlying body property on the panel
		 *                fn: function(){ console.log('dblclick body'); }
		 *            }
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		listeners?: object;
		/** 
		 * Provides additional data to the prepareData call within the grid view.
		 * The rowbody feature adds 3 additional variables into the grid view's template.
		 * These are `rowBody`, `rowBodyCls`, and `rowBodyColspan`.
		 * 
		 * - **rowBody:** _{String}_ The HTML to display in the row body element.  Defaults
		 *   to _undefined_.
		 * - **rowBodyCls:** _{String}_ An optional CSS class (or multiple classes
		 *   separated by spaces) to apply to the row body element.  Defaults to
		 *   [rowBodyCls](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.RowBody.html#property-rowBodyCls).
		 * - **rowBodyColspan:** _{Number}_ The number of columns that the row body element
		 *   should span.  Defaults to the number of visible columns.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}         data   The data for this particular record.
		 * @param   {number}         idx    The row index for this record.
		 * @param   {Ext.data.Model} record The record instance
		 * @param   {object}         orig   The original result from the prepareData call to massage.
		 * @returns {object}         
		 * An object containing additional variables for use in the grid
		 * view's template
		 */
		getAdditionalData? (data: object, idx: number, record: Ext.data.Model, orig: object): object;
		/** 
		 * Abstract method to be overriden when a feature should add additional
		 * arguments to its event signature. By default the event will fire:
		 * 
		 * - view - The underlying [Ext.view.Table](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)
		 * - featureTarget - The matched element by the defined [eventSelector](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#property-eventSelector)
		 * 
		 * The method must also return the eventName as the first index of the array
		 * to be passed to fireEvent.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} eventName
		 * @param   {object} view
		 * @param   {object} featureTarget
		 * @param   {object} e
		 * @returns {void}                 
		 */
		getFireEventArgs? (eventName: object, view: object, featureTarget: object, e: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                           config
		 * @returns {Ext.grid.feature.RowBody.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.feature.RowBody.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                    name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                           [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.RowBody.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.RowBody.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.RowBody.Statics}  
		 */
		statics? (): Ext.grid.feature.RowBody.Statics;
	}
}
declare namespace Ext.grid.feature.Summary {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.feature.Summary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Summary.html)
	 * This feature is used to place a summary row at the bottom of the grid. If using a grouping,
	 * see [Ext.grid.feature.GroupingSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupingSummary.html). There are 2 aspects to calculating the summaries,
	 * calculation and rendering.
	 * 
	 * ## Calculation
	 * 
	 * The summary value needs to be calculated for each column in the grid. This is controlled
	 * by the summaryType option specified on the column. There are several built in summary types,
	 * which can be specified as a string on the column configuration. These call underlying methods
	 * on the store:
	 * 
	 * - [count](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-count)
	 * - [sum](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-sum)
	 * - [min](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-min)
	 * - [max](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-max)
	 * - [average](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-average)
	 * 
	 * Alternatively, the summaryType can be a function definition. If this is the case,
	 * the function is called with an array of records to calculate the summary value.
	 * 
	 * ## Rendering
	 * 
	 * Similar to a column, the summary also supports a summaryRenderer function. This
	 * summaryRenderer is called before displaying a value. The function is optional, if
	 * not specified the default calculated value is shown. The summaryRenderer is called with:
	 * 
	 * - value {Object} - The calculated value.
	 * - summaryData {Object} - Contains all raw summary values for the row.
	 * - field {String} - The name of the field we are calculating
	 * - metaData {Object} - A collection of metadata about the current cell; can be used or modified by the renderer.
	 * 
	 * ## Example Usage
	 * 
	 *    Ext.define('TestResult', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['student', {
	 *            name: 'mark',
	 *            type: 'int'
	 *        }]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 400,
	 *        height: 200,
	 *        title: 'Summary Test',
	 *        style: 'padding: 20px',
	 *        renderTo: document.body,
	 *        features: [{
	 *            ftype: 'summary'
	 *        }],
	 *        store: {
	 *            model: 'TestResult',
	 *            data: [{
	 *                student: 'Student 1',
	 *                mark: 84
	 *            },{
	 *                student: 'Student 2',
	 *                mark: 72
	 *            },{
	 *                student: 'Student 3',
	 *                mark: 96
	 *            },{
	 *                student: 'Student 4',
	 *                mark: 68
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'student',
	 *            text: 'Name',
	 *            summaryType: 'count',
	 *            summaryRenderer: function(value, summaryData, dataIndex) {
	 *                return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
	 *            }
	 *        }, {
	 *            dataIndex: 'mark',
	 *            text: 'Mark',
	 *            summaryType: 'average'
	 *        }]
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Configure `'top'` or `'bottom'` top create a fixed summary row either above or below the scrollable table.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dock?: string;
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the [DataView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html)'s **[`itemclick`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html#event-itemclick)** event passing the node clicked on. To access DOM events directly from a
		 * child element of a Component, we need to specify the `element` option to identify the Component property to add a
		 * DOM listener to:
		 * 
		 *    new Ext.panel.Panel({
		 *        width: 400,
		 *        height: 200,
		 *        dockedItems: [{
		 *            xtype: 'toolbar'
		 *        }],
		 *        listeners: {
		 *            click: {
		 *                element: 'el', //bind to the underlying el property on the panel
		 *                fn: function(){ console.log('click el'); }
		 *            },
		 *            dblclick: {
		 *                element: 'body', //bind to the underlying body property on the panel
		 *                fn: function(){ console.log('dblclick body'); }
		 *            }
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		listeners?: object;
		/** 
		 * True to show the summary row.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		showSummaryRow?: boolean;
		/** 
		 * Abstract method to be overriden when a feature should add additional
		 * arguments to its event signature. By default the event will fire:
		 * 
		 * - view - The underlying [Ext.view.Table](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.Table.html)
		 * - featureTarget - The matched element by the defined [eventSelector](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Feature.html#property-eventSelector)
		 * 
		 * The method must also return the eventName as the first index of the array
		 * to be passed to fireEvent.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} eventName
		 * @param   {object} view
		 * @param   {object} featureTarget
		 * @param   {object} e
		 * @returns {void}                 
		 */
		getFireEventArgs? (eventName: object, view: object, featureTarget: object, e: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}                           config
		 * @returns {Ext.grid.feature.Summary.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.feature.Summary.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                    name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                           [value] The value to set for the name parameter.
		 * @returns {Ext.grid.feature.Summary.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.feature.Summary.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.grid.feature.Summary.Statics}  
		 */
		statics? (): Ext.grid.feature.Summary.Statics;
	}
}
declare namespace Ext.grid.feature.Grouping {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html)
	 * This feature allows to display the grid rows aggregated into groups as specified by the [grouper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-grouper)
	 * 
	 * underneath. The groups can also be expanded and collapsed.
	 * 
	 * ## Extra Events
	 * 
	 * This feature adds several extra events that will be fired on the grid to interact with the groups:
	 * 
	 * - [groupclick](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupclick)
	 * - [groupdblclick](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupdblclick)
	 * - [groupcontextmenu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupcontextmenu)
	 * - [groupexpand](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupexpand)
	 * - [groupcollapse](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#event-groupcollapse)
	 * 
	 * ## Menu Augmentation
	 * 
	 * This feature adds extra options to the grid column menu to provide the user with functionality to modify the grouping.
	 * This can be disabled by setting the [enableGroupingMenu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-enableGroupingMenu) option. The option to disallow grouping from being turned off
	 * by the user is [enableNoGroups](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-enableNoGroups).
	 * 
	 * ## Controlling Group Text
	 * 
	 * The [groupHeaderTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html#cfg-groupHeaderTpl) is used to control the rendered title for each group. It can modified to customized
	 * the default display.
	 * 
	 * ## Groupers
	 * 
	 * By default, this feature expects that the data field that is mapped to by the
	 * [Ext.data.AbstractStore.groupField](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.AbstractStore.html#cfg-groupField) config is a simple data type such as a
	 * String or a Boolean. However, if you intend to group by a data field that is a
	 * complex data type such as an Object or Array, it is necessary to define one or more
	 * [groupers](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Grouper.html) on the feature that it can then use to lookup
	 * internal group information when grouping by different fields.
	 * 
	 *    var feature = Ext.create('Ext.grid.feature.Grouping', {
	 *        startCollapsed: true,
	 *        groupers: [{
	 *            property: 'asset',
	 *            groupFn: function (val) {
	 *                return val.data.name;
	 *            }
	 *        }]
	 *    });
	 * 
	 * ## Example Usage
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        fields: ['name', 'seniority', 'department'],
	 *        groupField: 'department',
	 *        data: [
	 *            { name: 'Michael Scott', seniority: 7, department: 'Management' },
	 *            { name: 'Dwight Schrute', seniority: 2, department: 'Sales' },
	 *            { name: 'Jim Halpert', seniority: 3, department: 'Sales' },
	 *            { name: 'Kevin Malone', seniority: 4, department: 'Accounting' },
	 *            { name: 'Angela Martin', seniority: 5, department: 'Accounting' }
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        title: 'Employees',
	 *        store: store,
	 *        columns: [
	 *            { text: 'Name', dataIndex: 'name' },
	 *            { text: 'Seniority', dataIndex: 'seniority' }
	 *        ],
	 *        features: [{ftype:'grouping'}],
	 *        width: 200,
	 *        height: 275,
	 *        renderTo: Ext.getBody()
	 *    });
	 * 
	 * **Note:** To use grouping with a grid that has [locked columns](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.column.Column.html#cfg-locked), you need to supply
	 * the grouping feature as a config object - so the grid can create two instances of the grouping feature.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * @event
		 * @param   {Ext.view.Table}  view
		 * @param   {HTMLElement}     node
		 * @param   {string}          group The name of the group
		 * @param   {Ext.event.Event} e
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		groupclick? (view: Ext.view.Table, node: HTMLElement, group: string, e: Ext.event.Event, eOpts: object): void;
		/** 
		 * @event
		 * @param   {Ext.view.Table} view
		 * @param   {HTMLElement}    node
		 * @param   {string}         group The name of the group
		 * @param   {object}         eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}           
		 */
		groupcollapse? (view: Ext.view.Table, node: HTMLElement, group: string, eOpts: object): void;
		/** 
		 * @event
		 * @param   {Ext.view.Table}  view
		 * @param   {HTMLElement}     node
		 * @param   {string}          group The name of the group
		 * @param   {Ext.event.Event} e
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		groupcontextmenu? (view: Ext.view.Table, node: HTMLElement, group: string, e: Ext.event.Event, eOpts: object): void;
		/** 
		 * @event
		 * @param   {Ext.view.Table}  view
		 * @param   {HTMLElement}     node
		 * @param   {string}          group The name of the group
		 * @param   {Ext.event.Event} e
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		groupdblclick? (view: Ext.view.Table, node: HTMLElement, group: string, e: Ext.event.Event, eOpts: object): void;
		/** 
		 * @event
		 * @param   {Ext.view.Table} view
		 * @param   {HTMLElement}    node
		 * @param   {string}         group The name of the group
		 * @param   {object}         eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}           
		 */
		groupexpand? (view: Ext.view.Table, node: HTMLElement, group: string, eOpts: object): void;
	}
}
declare namespace Ext.grid.feature.GroupingSummary {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.grid.feature.GroupingSummary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.GroupingSummary.html)
	 * This feature adds an aggregate summary row at the bottom of each group that is provided
	 * by the [Ext.grid.feature.Grouping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.feature.Grouping.html) feature. There are two aspects to the summary:
	 * 
	 * ## Calculation
	 * 
	 * The summary value needs to be calculated for each column in the grid. This is controlled
	 * by the summaryType option specified on the column. There are several built in summary types,
	 * which can be specified as a string on the column configuration. These call underlying methods
	 * on the store:
	 * 
	 * - [count](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-count)
	 * - [sum](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-sum)
	 * - [min](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-min)
	 * - [max](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-max)
	 * - [average](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#method-average)
	 * 
	 * Alternatively, the summaryType can be a function definition. If this is the case,
	 * the function is called with two parameters: an array of records, and an array of field values
	 * to calculate the summary value.
	 * 
	 * ## Rendering
	 * 
	 * Similar to a column, the summary also supports a summaryRenderer function. This
	 * summaryRenderer is called before displaying a value. The function is optional, if
	 * not specified the default calculated value is shown. The summaryRenderer is called with:
	 * 
	 * - value {Object} - The calculated value.
	 * - summaryData {Object} - Contains all raw summary values for the row.
	 * - field {String} - The name of the field we are calculating
	 * - metaData {Object} - A collection of metadata about the current cell; can be used or modified by the renderer.
	 * 
	 * ## Example Usage
	 * 
	 *    Ext.define('TestResult', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['student', 'subject', {
	 *            name: 'mark',
	 *            type: 'int'
	 *        }]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        width: 200,
	 *        height: 240,
	 *        renderTo: document.body,
	 *        features: [{
	 *            groupHeaderTpl: 'Subject: {name}',
	 *            ftype: 'groupingsummary'
	 *        }],
	 *        store: {
	 *            model: 'TestResult',
	 *            groupField: 'subject',
	 *            data: [{
	 *                student: 'Student 1',
	 *                subject: 'Math',
	 *                mark: 84
	 *            },{
	 *                student: 'Student 1',
	 *                subject: 'Science',
	 *                mark: 72
	 *            },{
	 *                student: 'Student 2',
	 *                subject: 'Math',
	 *                mark: 96
	 *            },{
	 *                student: 'Student 2',
	 *                subject: 'Science',
	 *                mark: 68
	 *            }]
	 *        },
	 *        columns: [{
	 *            dataIndex: 'student',
	 *            text: 'Name',
	 *            summaryType: 'count',
	 *            summaryRenderer: function(value){
	 *                return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
	 *            }
	 *        }, {
	 *            dataIndex: 'mark',
	 *            text: 'Mark',
	 *            summaryType: 'average'
	 *        }]
	 *    });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * @event
		 * @param   {Ext.view.Table}  view
		 * @param   {HTMLElement}     node
		 * @param   {string}          group The name of the group
		 * @param   {Ext.event.Event} e
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		groupclick? (view: Ext.view.Table, node: HTMLElement, group: string, e: Ext.event.Event, eOpts: object): void;
		/** 
		 * @event
		 * @param   {Ext.view.Table} view
		 * @param   {HTMLElement}    node
		 * @param   {string}         group The name of the group
		 * @param   {object}         eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}           
		 */
		groupcollapse? (view: Ext.view.Table, node: HTMLElement, group: string, eOpts: object): void;
		/** 
		 * @event
		 * @param   {Ext.view.Table}  view
		 * @param   {HTMLElement}     node
		 * @param   {string}          group The name of the group
		 * @param   {Ext.event.Event} e
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		groupcontextmenu? (view: Ext.view.Table, node: HTMLElement, group: string, e: Ext.event.Event, eOpts: object): void;
		/** 
		 * @event
		 * @param   {Ext.view.Table}  view
		 * @param   {HTMLElement}     node
		 * @param   {string}          group The name of the group
		 * @param   {Ext.event.Event} e
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		groupdblclick? (view: Ext.view.Table, node: HTMLElement, group: string, e: Ext.event.Event, eOpts: object): void;
		/** 
		 * @event
		 * @param   {Ext.view.Table} view
		 * @param   {HTMLElement}    node
		 * @param   {string}         group The name of the group
		 * @param   {object}         eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}           
		 */
		groupexpand? (view: Ext.view.Table, node: HTMLElement, group: string, eOpts: object): void;
	}
}