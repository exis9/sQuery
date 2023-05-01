/*eslint-disable*/
'use strict';

if ( typeof _PQ === 'undefined' )
{
	class _PQ {
		constructor(){this.ac=[];this.wa=[]}
		isW(v){
			const wStr = Object.prototype.toString.call(window)
			function isWindow(arg){
				let s,self,hasSelf
				s = Object.prototype.toString.call(arg)
				switch (wStr){case '[object DOMWindow]':case '[object Window]':case '[object global]': return s === wStr}
				if ('self' in arg)
				{
					hasSelf = arg.hasOwnProperty('self')
					try {
						if (hasSelf)
							self = arg.self
						
						delete arg.self
						if (hasSelf)
							arg.self = self
					}catch (e){return true}
				}
				return false
			}
			return isWindow(v)
		}
		remove(el){if (el) el.remove()}
		before( el, h ){if (el) el.insertAdjacentHTML('beforebegin', h)}
		after( el, h ){if (el) el.insertAdjacentHTML('afterend', h)}
		prepend( el, h ){if (el) el.insertAdjacentHTML('afterbegin', h)}
		append( el, h ){if (el) el.insertAdjacentHTML('beforeend', h)}
		prop(el, p, v){if (el) el.style.setProperty(p,v)}
		addClass(el, n){if (el) el.classList.add(n)}
		removeClass(el, n){if (el) el.classList.remove(n)}
		toggleClass(el, n){if (el) el.classList.toggle(n)}
		show( el, d='block' ){
			if (!el) return
			if (d === 'none') d = 'block'
			el.style.visibility = 'visible'
			el.style.display = d
			el.style.opacity = 1
		}
		hide( el ){
			if (!el) return
			el.style.visibility = 'hidden'
			el.style.display = 'none'
			el.style.opacity = 0
		}
		animate( el, kf, op, sp, cb, cb2 ){
			if (!el) return
			if ( typeof op === 'number' )
				cb2 = cb, cb = sp, sp = op, op = null
			if ( sp === undefined )
				sp = 500
			if (!op) op = {}
			if (!op.duration) op.duration = sp
			//if (!op.fill) op.fill = 'both'
			el.animate( kf, op ).onfinish = ()=>{
				if ( cb ) cb.bind( el )()
				if ( cb2 ) cb2.bind( el )()
			}
		}
		isVisible(el){
			let s = window.getComputedStyle(el)
			if (s.display !== 'none' && el?.offsetHeight)
				return true
			return false
		}
		fadeIn( el, ms, cb, d='inline-block' ){
			let o = parseFloat(el.style.opacity)
			if ( isNaN(o) )
				this.isVisible(el) ? o=1 : o=0

			this.animate( el, [{'opacity': o}, {'opacity': 1}], {
				easing: 'ease-in'
			}, ms, ()=>{
				el.style.opacity = 1
			}, cb)
			this.show(el, d)
		}
		fadeOut( el, ms, cb ){
			let o = parseFloat(el.style.opacity)
			if ( isNaN(o) )
				o = 1

			this.animate( el, [{'opacity': o}, {'opacity': 0}], {
				easing: 'ease-out'
			}, ms, ()=>{
				this.hide(el)
			}, cb)
		}
		each(el, f, i){return f.apply(el, [i])}
	}

	class _SF {
		constructor(){
			this.b = 0
			this.el = []
			this.disp = []
			this.fOb = {}
			this.v = undefined
		}
		_setEl(el){
			this.el = []
			if ( el ){
				this.v = el?.value
				let n = el.length
				if ( n || el instanceof NodeList )
					this.el = Array.from(el)
				else if ( n !== 0 )
					this.el = [el]
				else if (_p.isW(el))
					this.el = el
			}
			this.length = this.el.length
			if ( !this.b )
				this.b = 1
			
			this._svD()
		}
		_th(){return this}
		_svD(){
			this.disp = []
			let cnt = 0
			if ( _p.isW(this.el) )
				return
			this.el?.forEach(el => {
				this.disp[cnt] = 'none'
				if ( el ){
					let d = 'block'
					if ( !_p.isW(el) && el !== document )
						d = window.getComputedStyle(el).display

					if ( d && d !== 'none' )
						this.disp[cnt] = d
				}
				++cnt
			})
		}
		setEl(el){ this._setEl(el); return this}
		doc(){ return this.setEl( document ) }
		win(){ return this.setEl( window ) }
		ob(el){ return this.setEl( el ) } //this or other elements
		get(i=null){if ( i!==null ) return this.el[i]; return this.el}
		_wh(n,v){
			if (_p.isW(this.el))
			{
				if (n == 'width')return window.innerWidth
				return window.innerHeight
			}
			if ( v !== undefined )
			{
				this.el?.forEach(el => {
					if (typeof v === 'function') v = v()
					if (typeof v === 'string') el.style[n] = v
					else el.style[n] = v + 'px'
				})
				return this
			}
			return parseFloat(getComputedStyle(this.el[0], null)[n].replace('px', ''))
		}
		width(v){return this._wh('width',v)}
		height(v){return this._wh('height',v)}
		innerWidth(){return this.el[0].clientWidth}
		innerHeight(){return this.el[0].clientHeight}
		outerWidth(){return this.el[0].offsetWidth}
		outerHeight(){return this.el[0].offsetHeight}
		offset(){return this.el[0].getBoundingClientRect()}
		pos(){return {left: this.el[0].offsetLeft, top: this.el[0].offsetTop}}
		position(){return this.pos()}
		_fd( fn, ...args ){
			let i=0
			this.el?.forEach(el => {_p[fn]( el, ...args, this.disp[ i++ ] )})
			return this
		}
		show(){return this._fd('show')}
		fadeIn( ms=500, cb ){return this._fd('fadeIn', ms, cb)}
		isVisible(){return _p.isVisible(this.el)}
		_u(){if( !this.el || !this.el[0] ) return 1}
		_vs(n,v){
			if( this._u() ) return undefined;
			if (v !== undefined){this.el?.forEach(el=>el[n] = v);return this}
			return this.el[0][n]
		}
		prop(p, v){return this._vs(p,v)}
		scrollTop(v){return this._vs('scrollTop',v)}
		scrollLeft(v){return this._vs('scrollLeft',v)}
		scroll(y,b){
			if (b) b = 'instant'
			else b = 'smooth'
			if (_p.isW(this.el)) return window.scroll({top: y, behavior: b})
			else this.el?.forEach(el=>el.scroll({top: y, behavior: b}))
			return this
		}
		scrollToElement(o=50,b){
			if( this._u() ) return this;
			if (b) b = 'instant'
			else b = 'smooth'
			const br = document.body.getBoundingClientRect().top,
			er = this.el[0].getBoundingClientRect().top, ep = er - br
			window.scrollTo({top: ep - o,behavior: b})
			return this
		}
		animate( kf, op, sp, cb ){
			let f=()=>{this.css(kf[1])}
			if ( typeof op === 'number' )cb = f
			this.el?.forEach(el => {_p.animate( el, kf, op, sp, cb, f)})
			return this
		}

		each( f ){
			let i = 0
			this.el?.every(el => {
				if ( _p.each( el, f, i++ ) === false )
					return false
				return true
			})
			return this
		}
		attr(a, v){
			if(this._u()) return undefined
			if ( v === undefined )
				return this.el[0].getAttribute(a)

			this.el.forEach(el => el.setAttribute(a,v))
			return this
		}
		data(a, v){
			if(this._u()) return undefined
			if ( v === undefined )
				return this.el[0].dataset[a]

			this.el.forEach(el => el.dataset[a]=v)
			return this
		}
		removeData(a){this.el.forEach(el => delete el.dataset[a]);return this}
		prop(p, v){
			if(this._u()) return undefined
			if ( v === undefined )
				return this.el[0][p]

			this.el.forEach(el => el[p]=v)
			return this
		}
		removeAttr(a){this.el.forEach(el => el.removeAttribute(a));return this}
		removeProp(p){return this.removeAttr(p)}
		_fv( n, v ){
			let r = this.el && this.el[0]
			if ( v !== null )
			{
				if( !r ) return this
				this.el.forEach(el=>el[n] = v)
				return this
			}
			if( !r ) return undefined
			return this.el[0][n]
		}
		html(v=null){
			if ( v !== null && typeof v === 'object' && !Array.isArray(v) )
			{
				this._fv('innerHTML','').get(0).append(v)
				return this
			}
			return this._fv( 'innerHTML', v )
		}
		oHtml(v){
			if ( typeof v !== 'undefined' )
				return this.replaceWith(v)
			return this.el[0]?.outerHTML
		}
		text(v=null){return this._fv( 'innerText', v )}
		val(v=null){
			if ( v===null && typeof this.v !== 'undefined' )
				return this.v
			return this._fv( 'value', v )
		}
		css(c, v=null){
			if(this._u()) return undefined
			if ( c )
			{
				let set = (c, v)=>{
					c = c.replace(/-([a-z])/g, function(g){ return g[1].toUpperCase(); }) //dash to camel case
					if ( v !== null ){
						this.el.forEach(el=>el.style[c] = v)
						return this
					}
					return this.el[0].style[c]
				}
				if ( typeof c === 'object' )//object
				{
					Object.keys( c ).forEach(k =>set(k, c[k]))
					return this
				}
				return set(c, v)
			}
			return this.el[0].style
		}
		eq(i){
			if (i<0)i = this.el.length+i
			if ( this.el && this.el[i] )
				return sq(this.el[i])._th()
			return sq(0)._th()
		}
		not(s){
			if ( this.el )
			{
				let a=[]
				this.el.forEach(el=>{if ( !el.matches(s) )a.push(el)})
				return sq(a)._th()
			}
			return this
		}

		filter(f){
			if( this.el )
			{
				let a = []
				if ( typeof f === 'function')
					this.el.forEach(el => {if ( Array.prototype.filter.call( el, f ) )a.push(el)})
				else
					this.el.forEach(el => {if ( el.matches(f) )a.push(el)})
				return sq(a)._th()
			}
			return this
		}
		is(s){
			let r=false
			this.el?.forEach(el=>{if ( el.matches(s) )r=true})
			return r
		}
		find(s){
			if ( this.el )
			{
				let a = []
				this.el.forEach(el=>{
					let q = el.querySelectorAll(s)
					if ( q.length )
						a = a.concat( Array.from(q) )
				})
				return sq(a)._th()
			}
			return this
		}
		has(s){
			if ( this.el )
			{
				let a = []
				this.el.forEach(el=>{if (el.querySelector(s))a.push( el )})
				return sq(a)._th()
			}
			return this
		}
		contains(t,b){
			if ( this.el )
			{
				let a = []
				this.el.forEach(el=>{
					if ( (b && el?.innerHTML.includes(t)) || (!b && el?.innerText.includes(t)) )
						a.push( el )
				})
				return sq(a)._th()
			}
			return this
		}
		first(){if ( this.el )return sq(this.el[0])._th();return this}
		last(){if ( this.el )return sq(this.el[this.el.length-1])._th();return this}
		index(){
			if (!this.el) return -1
			let i = 0, t = this.el[0]
			while (this.el[0] = this.el[0].previousElementSibling)
				++i
			this.el[0] = t
			return i
		}
		slice(s,e){
			let a = []
			if ( this.el ){
				let n = this.el.length
				if (!e)e = n
				if (s < 0)s = n+s
				if (e < 0)e = n+e
				for ( let i=s; i < e; ++i )
					a.push(this.el[i])
			}
			return sq(a)._th()
		}
		parent(){
			if ( this.el )
			{
				let a = []
				this.el.forEach(el=>{
					if ( el?.parentNode)
						a.push( el.parentNode )
				})
				return sq(a)._th()
			}
			return this
		}
		parents(){
			if ( this.el )
			{
				let a = []
				this.el.forEach(el=>{
					let p = el.parentNode
					while (p !== document ){
						let o = p
						a.push(o)
						p = o?.parentNode
					}
				})
				a = [...new Set(a)]
				return sq(a)._th()
			}
			return this
		}
		closest(s){
			if ( this.el )
			{
				let a = []
				this.el.forEach(el=>{
					let c = el.closest(s)
					if ( c )
						a.push(c)
				})
				a = [...new Set(a)]
				return sq(a)._th()
			}
			return this
		}
		children(){
			if ( this.el )
			{
				let a = []
				this.el.forEach(el=>{if ( el.children?.length )a = a.concat( Array.from(el.children) )})
				return sq(a)._th()
			}
			return this
		}
		prev(){
			if ( this.el )
			{
				let a = []
				this.el.forEach(el=>{if ( el.previousElementSibling )a.push( el.previousElementSibling )})
				return sq(a)._th()
			}
			return this
		}
		next(){
			if ( this.el )
			{
				let a = []
				this.el.forEach(el=>{
					if ( el.nextElementSibling )
						a.push( el.nextElementSibling )
				})
				return sq(a)._th()
			}
			return this
		}
		siblings(){
			if ( this.el )
			{
				let a = []
				this.el.forEach(el=>{
					if ( el.parentNode )
					{
						let s = el.parentNode.firstChild
						while(s){
							if (s.nodeType === 1 && s !== el)
								a.push(s)
							s = s.nextSibling
						}
					}
				})
				return sq(a)._th()
			}
			return this
		}


		_sAC(ev,f){
			let i = _p.ac.length
			_p.ac[i] = {'ev':ev, 'f':f}
			return i
		}
		_sSA(el,ev,i){
			if (!el.getAttribute)return
			let v = el.getAttribute('sq-'+ev)
			if (!v)v = ''
			v += ',' + i
			el.setAttribute('sq-'+ev, v)
		}
		_sSW(ev,i){
			let v = _p.wa[ev]
			if (!v)v = ''
			v += ',' + i
			_p.wa[ev]=v
		}
		onf(ev, s, f){
			this.el?.forEach(el=>{
				let u = (e)=>{
					let tg = e.target
					while (tg) {
						if (tg.matches(s)){
							if ( f.bind( /*e.target*/el.querySelectorAll(s) )(e) === false )
							{
								e.preventDefault()
								e.stopImmediatePropagation()
								return
							}
						}
						tg = tg.parentElement
					}
				}
				let i = this._sAC( ev, u )
				el.querySelectorAll(s)?.forEach(q=>this._sSA(q,ev,i))
				el.addEventListener( ev, u )
			})
			return this
		}
		on(ev, f){
			const a = ev.split(' ')
			if ( a.length > 1 )
			{
				a.forEach(v=>this.on(v,f))
				return this
			}
			let u=(e)=>{
				//console.log('u: ', e.path, e.target)
				if ( f.bind( e.currentTarget/*this.e.target or this.el*/ )(e) === false )
				{
					e.preventDefault()
					e.stopImmediatePropagation()
				}
			}
			let i = this._sAC(ev,u)
			if (_p.isW(this.el))
				this._sSW(ev,i), window.addEventListener(ev,u)
			else
				this.el?.forEach(el=>{this._sSA(el,ev,i);el.addEventListener(ev,u)})
			return this
		}
		off(ev){
			const a = ev.split(' ')
			if ( a.length > 1 )
			{
				a.forEach(v=>this.off(v))
				return this
			}
			if (_p.isW(this.el)){
				let v = _p.wa[ev], a = v?.split(',')
				a?.forEach(t=>{
					if ( _p.ac[t]?.f )
						window.removeEventListener( ev, _p.ac[t].f )
				})
			} else
				this.el?.forEach(el=>{
					let v = el.getAttribute('sq-'+ev), a = v?.split(',')
					a?.forEach(t=>{
						if ( _p.ac[t]?.f )
						{
							el.removeEventListener( ev, _p.ac[t].f )
							document.removeEventListener( ev, _p.ac[t].f )
						}
					})
				})
			return this
		}
		trg(ev,b=1,c=0){this.el?.forEach(el=>{let v = new Event(ev, {bubbles:b,composed:c});el.dispatchEvent(v)});return this}
		trigger(ev,b=1,c=0){this.trg(ev,b,c)}
		_f( funcName, ...args ){this.el?.forEach(el => {_p[funcName]( el, ...args )});return this}
		remove(){return this._f('remove')}
		before( h ){return this._f('before', h)}
		after( h ){return this._f('after', h)}
		prepend( h ){return this._f('prepend', h)}
		append( h ){return this._f('append', h)}
		replaceWith( h ){this.el?.forEach(el=>el.outerHTML = h); return this}
		addClass( n ){return this._f('addClass', n)}
		hasClass( n ){return this.el[0]?.classList.contains(n)?true:false}
		removeClass( n ){return this._f('removeClass', n)}
		toggleClass( n ){return this._f('toggleClass', n)}
		_fsd( funcName, ...args ){
			if( !this.el ) return this
			this._svD()
			this.el.forEach(el => {_p[funcName]( el, ...args )})
			return this
		}
		fadeOut( ms=500, cb ){return this._fsd('fadeOut', ms, cb)}
		hide(){return this._fsd('hide')}
		isPageLoaded(){let s=document.readyState;if(s==='complete'||s==='loaded')return true;return false}
	}

	let _p = new _PQ()
	var sq = function(s){
		let _q = new _SF(), c = typeof s
		if ( c !== 'string' )
		{
			if ( c === 'function')
			{
				document.addEventListener('DOMContentLoaded',(e)=>s(e))
				return
			}
			switch ( s ){
			case document: return _q.doc(s)
			case window: return _q.win(s)
			}
			return _q.ob(s)
		}
		return _q.setEl( document.querySelectorAll(s) )
	}, sQuery = sq, _SQ = _SF.prototype;
}

export {sQuery, sq, _SQ}